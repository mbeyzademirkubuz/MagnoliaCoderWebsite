// Ambient motion: cursor glow + sparkles, card spotlights, photo tilt,
// scroll progress, git-log drawing, rotating "building" text and the
// status bar Ln/Col readout. Everything is skipped or reduced when the
// user prefers reduced motion; pointer effects only run on fine pointers.

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- Staggered reveal ---------- */

document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
  const siblings = Array.from(el.parentElement?.children ?? []).filter((c) => c.classList.contains('reveal'));
  el.style.setProperty('--i', String(Math.min(siblings.indexOf(el), 6)));
  // Drop the delay once revealed so hover transitions stay snappy.
  const reset = (e: TransitionEvent) => {
    if (e.target !== el) return;
    el.style.setProperty('--i', '0');
    el.removeEventListener('transitionend', reset);
  };
  el.addEventListener('transitionend', reset);
});

/* ---------- Scroll-driven: progress bar, git log line, Ln indicator ---------- */

const progressBar = document.querySelector<HTMLElement>('.scroll-progress');
const log = document.querySelector<HTMLElement>('[data-log]');
const lnEl = document.querySelector<HTMLElement>('[data-ln]');
const colEl = document.querySelector<HTMLElement>('[data-col]');

let scrollQueued = false;

function onScroll() {
  scrollQueued = false;
  const max = document.documentElement.scrollHeight - innerHeight;
  const progress = max > 0 ? Math.min(scrollY / max, 1) : 0;
  progressBar?.style.setProperty('--progress', progress.toFixed(4));

  if (log && !reduceMotion) {
    const rect = log.getBoundingClientRect();
    const drawn = (innerHeight * 0.75 - rect.top) / rect.height;
    log.style.setProperty('--draw', Math.max(0, Math.min(drawn, 1)).toFixed(4));
  }

  if (lnEl) lnEl.textContent = String(Math.max(1, Math.round(scrollY / 24) + 1));
}

addEventListener(
  'scroll',
  () => {
    if (!scrollQueued) {
      scrollQueued = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true },
);
onScroll();

/* ---------- Rotating "currently building" text ---------- */

const rotator = document.querySelector<HTMLElement>('[data-rotate]');

if (rotator && !reduceMotion) {
  const words: string[] = JSON.parse(rotator.dataset.rotate!);
  let index = 0;
  const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

  (async () => {
    for (;;) {
      await wait(2600);
      // erase
      for (let text = rotator.textContent ?? ''; text.length; ) {
        text = text.slice(0, -1);
        rotator.textContent = text;
        await wait(35);
      }
      index = (index + 1) % words.length;
      await wait(250);
      // type
      for (const ch of words[index]) {
        rotator.textContent += ch;
        await wait(65);
      }
    }
  })();
}

/* ---------- Pointer effects ---------- */

if (finePointer && !reduceMotion) {
  const glow = document.querySelector<HTMLElement>('.cursor-glow');
  let mx = innerWidth / 2;
  let my = innerHeight / 2;
  let gx = mx;
  let gy = my;
  let lastSparkle = 0;
  let lastX = mx;
  let lastY = my;
  let running = false;

  // Glow eases toward the pointer for a soft, trailing feel.
  const tick = () => {
    gx += (mx - gx) * 0.14;
    gy += (my - gy) * 0.14;
    if (glow) glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
    if (Math.abs(mx - gx) > 0.5 || Math.abs(my - gy) > 0.5) {
      requestAnimationFrame(tick);
    } else {
      running = false;
    }
  };

  const spawnSparkle = (x: number, y: number) => {
    const s = document.createElement('span');
    s.className = Math.random() < 0.3 ? 'sparkle is-pink' : 'sparkle';
    const size = 3 + Math.random() * 4;
    s.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;--dx:${(Math.random() - 0.5) * 30}px;--dy:${10 + Math.random() * 24}px`;
    document.body.appendChild(s);
    s.addEventListener('animationend', () => s.remove(), { once: true });
  };

  addEventListener(
    'pointermove',
    (e) => {
      mx = e.clientX;
      my = e.clientY;
      glow?.classList.add('is-on');
      if (!running) {
        running = true;
        requestAnimationFrame(tick);
      }

      // A few sparkles only when the cursor is actually travelling.
      const now = performance.now();
      const dist = Math.hypot(mx - lastX, my - lastY);
      if (now - lastSparkle > 45 && dist > 14) {
        spawnSparkle(mx, my);
        lastSparkle = now;
        lastX = mx;
        lastY = my;
      }

      if (colEl) colEl.textContent = String(Math.round(mx / 10) + 1);
    },
    { passive: true },
  );

  document.documentElement.addEventListener('pointerleave', () => glow?.classList.remove('is-on'));

  // Card spotlights: expose pointer position to CSS.
  document.querySelectorAll<HTMLElement>('.spotlight').forEach((card) => {
    card.addEventListener(
      'pointermove',
      (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - r.left}px`);
        card.style.setProperty('--y', `${e.clientY - r.top}px`);
      },
      { passive: true },
    );
  });

  // 3D tilt + glare on the profile photo.
  const tilt = document.querySelector<HTMLElement>('[data-tilt]');
  const photo = tilt?.querySelector<HTMLElement>('.photo-window');
  if (tilt && photo) {
    tilt.addEventListener('pointermove', (e) => {
      const r = tilt.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      tilt.classList.add('is-tilting');
      photo.style.setProperty('--ry', `${(px - 0.5) * 14}deg`);
      photo.style.setProperty('--rx', `${(0.5 - py) * 12}deg`);
      photo.style.setProperty('--gx', `${px * 100}%`);
      photo.style.setProperty('--gy', `${py * 100}%`);
    });
    tilt.addEventListener('pointerleave', () => {
      tilt.classList.remove('is-tilting');
      photo.style.setProperty('--rx', '0deg');
      photo.style.setProperty('--ry', '0deg');
    });
  }
}

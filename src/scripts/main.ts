const root = document.documentElement;
const $$ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) =>
  Array.from(scope.querySelectorAll<T>(sel));

/* ---------- Theme ---------- */

function setTheme(theme: 'light' | 'dark') {
  root.dataset.theme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch {}
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'light' ? '#f8f2e4' : '#0b1020');
}

function toggleTheme() {
  setTheme(root.dataset.theme === 'light' ? 'dark' : 'light');
}

$$('[data-theme-toggle]').forEach((btn) => btn.addEventListener('click', toggleTheme));

/* ---------- Language links keep the current section ---------- */

$$<HTMLAnchorElement>('[data-lang-link]').forEach((a) =>
  a.addEventListener('click', () => {
    if (location.hash) a.hash = location.hash;
  }),
);

/* ---------- Copy to clipboard ---------- */

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

$$<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  const label = btn.querySelector('.copy-label');
  let timer: number | undefined;
  btn.addEventListener('click', async () => {
    if (!(await copyText(btn.dataset.copy!))) return;
    btn.classList.add('is-copied');
    if (label) label.textContent = btn.dataset.labelCopied!;
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      btn.classList.remove('is-copied');
      if (label) label.textContent = btn.dataset.labelCopy!;
    }, 1800);
  });
});

/* ---------- Project filter ---------- */

const filterButtons = $$<HTMLButtonElement>('[data-filter]');
const projects = $$('[data-category]');

filterButtons.forEach((btn) =>
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    projects.forEach((p) => {
      p.hidden = filter !== 'all' && p.dataset.category !== filter;
    });
  }),
);

/* ---------- Active tab + reveal on scroll ---------- */

const tabs = new Map($$<HTMLAnchorElement>('[data-tab]').map((a) => [a.dataset.tab!, a]));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      tabs.forEach((tab, id) => {
        const active = id === entry.target.id;
        tab.classList.toggle('is-active', active);
        if (active) {
          tab.setAttribute('aria-current', 'location');
          // On narrow screens the tab strip scrolls horizontally; keep the active tab in view.
          const strip = tab.parentElement!;
          if (strip.scrollWidth > strip.clientWidth) {
            strip.scrollTo({ left: tab.offsetLeft - strip.clientWidth / 2 + tab.offsetWidth / 2, behavior: 'smooth' });
          }
        } else {
          tab.removeAttribute('aria-current');
        }
      });
    }
  },
  { rootMargin: '-45% 0px -50% 0px' },
);
$$('main section[id]').forEach((s) => sectionObserver.observe(s));

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    }
  },
  { rootMargin: '0px 0px -8% 0px' },
);
$$('.reveal').forEach((el) => revealObserver.observe(el));

/* ---------- Command palette ---------- */

const palette = document.querySelector<HTMLDialogElement>('#palette');

if (palette) {
  const input = palette.querySelector<HTMLInputElement>('.palette-input')!;
  const items = $$<HTMLButtonElement>('.palette-item', palette);
  const groups = $$('.palette-group', palette);
  const empty = palette.querySelector<HTMLElement>('.palette-empty')!;
  let visible = items;
  let active = 0;

  const normalize = (s: string) =>
    s.toLocaleLowerCase('tr').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i');

  const setActive = (i: number) => {
    if (!visible.length) return;
    active = (i + visible.length) % visible.length;
    visible.forEach((item, idx) => item.classList.toggle('is-active', idx === active));
    visible[active].scrollIntoView({ block: 'nearest' });
    input.setAttribute('aria-activedescendant', visible[active].id);
  };

  const filter = () => {
    const q = normalize(input.value.trim());
    items.forEach((item) => {
      item.hidden = q !== '' && !normalize(item.textContent ?? '').includes(q);
      item.classList.remove('is-active');
    });
    groups.forEach((g) => {
      g.hidden = !g.querySelector('.palette-item:not([hidden])');
    });
    visible = items.filter((i) => !i.hidden);
    empty.hidden = visible.length > 0;
    setActive(0);
  };

  const open = () => {
    if (palette.open) return;
    input.value = '';
    filter();
    palette.showModal();
    input.focus();
  };

  const close = () => palette.close();

  const run = async (action: string) => {
    const [cmd, ...rest] = action.split(':');
    const arg = rest.join(':');
    close();
    switch (cmd) {
      case 'goto':
        document.querySelector(arg)?.scrollIntoView();
        history.replaceState(null, '', arg);
        break;
      case 'theme':
        toggleTheme();
        break;
      case 'nav':
        location.href = arg + location.hash;
        break;
      case 'copy':
        await copyText(arg);
        break;
      case 'download': {
        const a = Object.assign(document.createElement('a'), { href: arg, download: '' });
        a.click();
        break;
      }
      case 'open':
        window.open(arg, '_blank', 'noopener');
        break;
    }
  };

  $$('[data-open-palette]').forEach((btn) => btn.addEventListener('click', open));

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      palette.open ? close() : open();
    }
  });

  input.addEventListener('input', filter);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(active + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(active - 1);
    } else if (e.key === 'Enter' && visible[active]) {
      e.preventDefault();
      run(visible[active].dataset.action!);
    }
  });

  items.forEach((item) => {
    item.addEventListener('click', () => run(item.dataset.action!));
    item.addEventListener('mousemove', () => {
      const idx = visible.indexOf(item);
      if (idx !== -1 && idx !== active) setActive(idx);
    });
  });

  // Close when clicking the backdrop.
  palette.addEventListener('click', (e) => {
    if (e.target === palette) close();
  });
}

import type { Lang } from '../data/content';

export const ui = {
  en: {
    'meta.title': 'Mürüvvet Beyza Demirkubuz · Senior AI Specialist',
    'meta.description':
      'Portfolio of Mürüvvet Beyza Demirkubuz, Senior AI Specialist leading an AI engineering team at Matriks: LLM chatbots, RAG, multi-agent systems and MCP servers for fintech. M.Sc. student at the University of Milan.',
    'nav.about': 'about',
    'nav.experience': 'experience',
    'nav.projects': 'projects',
    'nav.education': 'education',
    'nav.beyond': 'beyond',
    'nav.contact': 'contact',
    'nav.skip': 'Skip to content',
    'hero.hello': 'Hi, I’m',
    'hero.cv': 'Download CV',
    'hero.contact': 'Get in touch',
    'hero.status': 'Currently at',
    'hero.photoAlt': 'Portrait of Mürüvvet Beyza Demirkubuz',
    'about.title': 'About me',
    'about.stack': 'Tech stack',
    'experience.title': 'Experience',
    'experience.current': 'current',
    'projects.title': 'Projects',
    'projects.all': 'all',
    'projects.ai': 'ai & data',
    'projects.dotnet': '.net / c#',
    'projects.web': 'web',
    'projects.source': 'Source',
    'projects.more': 'More on GitHub',
    'education.title': 'Education & research',
    'education.research': 'Research & competitions',
    'education.current': 'in progress',
    'beyond.title': 'Beyond code',
    'beyond.lead': 'Things I make when I’m not writing software.',
    'contact.title': 'Let’s build something.',
    'contact.lead':
      'Open to new opportunities, collaborations and a good conversation about software. The fastest way to reach me is email.',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied!',
    'status.theme': 'Toggle theme',
    'status.lang': 'Language',
    'status.palette': 'Command palette',
    'palette.placeholder': 'Type a command or search…',
    'palette.empty': 'No results',
    'palette.goto': 'Go to',
    'palette.actions': 'Actions',
    'palette.links': 'Links',
    'palette.theme': 'Toggle dark / light theme',
    'palette.lang': 'Türkçe’ye geç',
    'palette.copyEmail': 'Copy email address',
    'palette.cv': 'Download CV',
    'palette.hint': 'navigate · enter select · esc close',
  },
  tr: {
    'meta.title': 'Mürüvvet Beyza Demirkubuz · Kıdemli Yapay Zekâ Uzmanı',
    'meta.description':
      'Matriks’te yapay zekâ mühendisliği ekibine liderlik eden Kıdemli Yapay Zekâ Uzmanı Mürüvvet Beyza Demirkubuz’un portföyü: fintech için LLM sohbet botları, RAG, çoklu ajan sistemleri ve MCP sunucuları. Milano Üniversitesi yüksek lisans öğrencisi.',
    'nav.about': 'hakkımda',
    'nav.experience': 'deneyim',
    'nav.projects': 'projeler',
    'nav.education': 'eğitim',
    'nav.beyond': 'kod-dışı',
    'nav.contact': 'iletişim',
    'nav.skip': 'İçeriğe geç',
    'hero.hello': 'Merhaba, ben',
    'hero.cv': 'CV’yi indir',
    'hero.contact': 'İletişime geç',
    'hero.status': 'Şu anda',
    'hero.photoAlt': 'Mürüvvet Beyza Demirkubuz portresi',
    'about.title': 'Hakkımda',
    'about.stack': 'Teknolojiler',
    'experience.title': 'Deneyim',
    'experience.current': 'güncel',
    'projects.title': 'Projeler',
    'projects.all': 'tümü',
    'projects.ai': 'yapay zekâ & veri',
    'projects.dotnet': '.net / c#',
    'projects.web': 'web',
    'projects.source': 'Kaynak kod',
    'projects.more': 'GitHub’da daha fazlası',
    'education.title': 'Eğitim & araştırma',
    'education.research': 'Araştırma & yarışmalar',
    'education.current': 'devam ediyor',
    'beyond.title': 'Kodun dışında',
    'beyond.lead': 'Yazılım geliştirmediğim zamanlarda ürettiklerim.',
    'contact.title': 'Birlikte bir şeyler üretelim.',
    'contact.lead':
      'Yeni fırsatlara, iş birliklerine ve yazılım üzerine güzel bir sohbete açığım. Bana ulaşmanın en hızlı yolu e-posta.',
    'contact.copy': 'Kopyala',
    'contact.copied': 'Kopyalandı!',
    'status.theme': 'Temayı değiştir',
    'status.lang': 'Dil',
    'status.palette': 'Komut paleti',
    'palette.placeholder': 'Bir komut yazın veya arayın…',
    'palette.empty': 'Sonuç yok',
    'palette.goto': 'Git',
    'palette.actions': 'Eylemler',
    'palette.links': 'Bağlantılar',
    'palette.theme': 'Koyu / açık temaya geç',
    'palette.lang': 'Switch to English',
    'palette.copyEmail': 'E-posta adresini kopyala',
    'palette.cv': 'CV’yi indir',
    'palette.hint': 'gezin · enter seç · esc kapat',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export const stackLabels: Record<Lang, Record<string, string>> = {
  en: { aiAndLLM: 'aiAndLLM', languages: 'languagesAndFrameworks', infra: 'infraAndTools', spoken: 'spokenLanguages' },
  tr: { aiAndLLM: 'yapayZekaVeLLM', languages: 'dillerVeFrameworkler', infra: 'altyapiVeAraclar', spoken: 'konusulanDiller' },
};

export function useT(lang: Lang) {
  return (key: UIKey) => ui[lang][key];
}

export const altLang = (lang: Lang): Lang => (lang === 'en' ? 'tr' : 'en');
export const langPath = (lang: Lang) => (lang === 'en' ? '/' : '/tr/');

export const sections = [
  { id: 'about', ext: '.md', color: 'var(--blue)' },
  { id: 'experience', ext: '.log', color: 'var(--accent)' },
  { id: 'projects', ext: '/', color: 'var(--green)' },
  { id: 'education', ext: '.yml', color: 'var(--pink)' },
  { id: 'beyond', ext: '.md', color: 'var(--blue)' },
  { id: 'contact', ext: '.sh', color: 'var(--green)' },
] as const;

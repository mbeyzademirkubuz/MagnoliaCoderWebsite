// All site content lives here. Each translatable field is { en, tr }.

export type Lang = 'en' | 'tr';
export type T = Record<Lang, string>;

export const profile = {
  name: 'Mürüvvet Beyza Demirkubuz',
  shortName: 'Beyza',
  handle: 'beyza',
  email: 'muruvvetdemirkubuz@gmail.com',
  cv: '/file/MuruvvetDemirkubuz_CV.pdf',
  location: { en: 'Istanbul · Milan', tr: 'İstanbul · Milano' } as T,
  role: { en: 'Senior AI Specialist', tr: 'Kıdemli Yapay Zekâ Uzmanı' } as T,
  company: 'Matriks',
  focus: ['LLMs', 'RAG', 'Multi-agent', 'MCP', '.NET'],
  building: {
    en: ['LLM chatbots', 'RAG pipelines', 'MCP servers', 'multi-agent systems', 'semantic search'],
    tr: ['LLM sohbet botları', 'RAG altyapıları', 'MCP sunucuları', 'çoklu ajan sistemleri', 'anlamsal arama'],
  } as Record<Lang, string[]>,
  tagline: {
    en: 'I lead an AI engineering team building LLM-powered products for financial technology: chatbots, MCP servers and semantic search.',
    tr: 'Finansal teknoloji için LLM tabanlı ürünler geliştiren bir yapay zekâ mühendisliği ekibine liderlik ediyorum: sohbet botları, MCP sunucuları ve anlamsal arama.',
  } as T,
};

export const socials = [
  { id: 'github', label: 'GitHub', handle: 'mbeyzademirkubuz', url: 'https://github.com/mbeyzademirkubuz' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'mbeyzademirkubuz', url: 'https://www.linkedin.com/in/mbeyzademirkubuz/' },
  { id: 'youtube', label: 'YouTube', handle: '@beyzademirkubuzzz', url: 'https://www.youtube.com/@beyzademirkubuzzz' },
  { id: 'instagram', label: 'Instagram', handle: '@fromdearmagnolia', url: 'https://www.instagram.com/fromdearmagnolia/' },
];

export const about: T[] = [
  {
    en: 'I’m a Senior AI Specialist at Matriks Financial Technologies, where I lead a five-person AI engineering team. We design and ship production AI tools for internal teams and clients: an LLM chatbot platform with RAG and multi-agent orchestration, a published MCP server, vector-database document search and Semantic Router query classification.',
    tr: 'Matriks Finansal Teknolojiler’de Kıdemli Yapay Zekâ Uzmanıyım ve beş kişilik bir yapay zekâ mühendisliği ekibine liderlik ediyorum. Şirket içi ekipler ve müşteriler için üretimde çalışan yapay zekâ araçları tasarlayıp hayata geçiriyoruz: RAG ve çoklu ajan orkestrasyonu kullanan bir LLM sohbet botu platformu, yayımlanmış bir MCP sunucusu, vektör veritabanı ile doküman arama ve Semantic Router ile sorgu sınıflandırma.',
  },
  {
    en: 'I started on the engineering side of fintech, building .NET/WPF desktop apps for real-time market data, React web apps and crypto backends with REST APIs, MSSQL and RabbitMQ. I hold a B.Sc. in Computer Engineering from Marmara University and I’m now pursuing an M.Sc. in Data Science for Economics and Health at the University of Milan.',
    tr: 'Fintech’in mühendislik tarafında başladım: gerçek zamanlı piyasa verisi için .NET/WPF masaüstü uygulamaları, React web uygulamaları ve REST API, MSSQL ve RabbitMQ ile kripto projelerinin backend’leri. Marmara Üniversitesi Bilgisayar Mühendisliği mezunuyum; şu anda Milano Üniversitesi’nde Data Science for Economics and Health yüksek lisansı yapıyorum.',
  },
  {
    en: 'Outside of code, I’m an award-winning author. Writing taught me to explain complex things simply, a skill I bring to every codebase and every team.',
    tr: 'Kodun dışında ödüllü bir yazarım. Yazmak bana karmaşık şeyleri sade anlatmayı öğretti; bu beceriyi her projeye ve her ekibe taşıyorum.',
  },
];

export const stack: { key: string; items: (string | T)[] }[] = [
  { key: 'aiAndLLM', items: ['LLM integration', 'RAG', 'Multi-agent systems', 'MCP', 'Vector DBs', 'Semantic Router', 'Prompt engineering'] },
  { key: 'languages', items: ['C#', 'Python', 'React', '.NET', 'WPF'] },
  { key: 'infra', items: ['Docker', 'Vercel', 'MSSQL', 'PL/SQL', 'RabbitMQ', 'REST APIs', 'Git'] },
  {
    key: 'spoken',
    items: [
      { en: 'Turkish', tr: 'Türkçe' },
      { en: 'English', tr: 'İngilizce' },
      { en: 'French', tr: 'Fransızca' },
      { en: 'Italian', tr: 'İtalyanca' },
    ],
  },
];

export type Job = {
  hash: string;
  company: string;
  title: T;
  date: T;
  current?: boolean;
  bullets: T[];
};

export const experience: Job[] = [
  {
    hash: 'a7f3c21',
    company: 'Matriks Financial Technologies',
    title: { en: 'Senior AI Specialist', tr: 'Kıdemli Yapay Zekâ Uzmanı' },
    date: { en: 'May 2024 — Present', tr: 'May 2024 — Günümüz' },
    current: true,
    bullets: [
      {
        en: 'Lead and manage a five-person AI engineering team, overseeing the design, development and delivery of internal and client-facing AI tools and automation systems.',
        tr: 'Beş kişilik bir yapay zekâ mühendisliği ekibini yönetiyorum; şirket içi ve müşteriye yönelik yapay zekâ araçlarının ve otomasyon sistemlerinin tasarımını, geliştirilmesini ve teslimatını üstleniyorum.',
      },
      {
        en: 'Built a production LLM chatbot platform with prompt engineering, RAG and multi-agent orchestration.',
        tr: 'Prompt mühendisliği, RAG ve çoklu ajan orkestrasyonu içeren, üretimde çalışan bir LLM sohbet botu platformu geliştirdim.',
      },
      {
        en: 'Built and published an MCP server that lets AI agents use real-world data sources as tools.',
        tr: 'Yapay zekâ ajanlarının gerçek veri kaynaklarını araç olarak kullanmasını sağlayan bir MCP sunucusu geliştirip yayımladım.',
      },
      {
        en: 'Implemented vector-database document search for semantic similarity across large knowledge bases, and used Semantic Router to classify queries for intent detection and model selection.',
        tr: 'Büyük bilgi tabanlarında anlamsal benzerlik araması için vektör veritabanı ile doküman arama geliştirdim; niyet tespiti ve model seçimi için sorguları Semantic Router ile sınıflandırdım.',
      },
      {
        en: 'Developed React web apps with design and product teams, and set up Docker-based deployment pipelines.',
        tr: 'Tasarım ve ürün ekipleriyle birlikte React web uygulamaları geliştirdim; Docker tabanlı dağıtım süreçleri kurdum.',
      },
      {
        en: 'Previously built .NET/WPF desktop apps for real-time market data, and crypto backends with REST APIs, MSSQL and RabbitMQ.',
        tr: 'Öncesinde gerçek zamanlı piyasa verisi için .NET/WPF masaüstü uygulamaları ve REST API, MSSQL ve RabbitMQ ile kripto projelerinin backend’lerini geliştirdim.',
      },
    ],
  },
  {
    hash: '4e91b0d',
    company: 'Doğuş Yayın Grubu',
    title: { en: 'IT Intern', tr: 'Bilgi Teknolojileri Stajyeri' },
    date: { en: 'Oct 2023 — Feb 2024', tr: 'Eki 2023 — Şub 2024' },
    bullets: [
      {
        en: 'Resolved software and hardware issues for end users; assisted with network operations, system backups and virtual machine testing.',
        tr: 'Son kullanıcıların yazılım ve donanım sorunlarını çözdüm; ağ operasyonlarına, sistem yedeklemelerine ve sanal makine testlerine destek verdim.',
      },
      {
        en: 'Managed users in Active Directory, including password resets, account unlocks and access control.',
        tr: 'Active Directory üzerinde şifre sıfırlama, hesap kilidi açma ve erişim kontrolü dahil kullanıcı yönetimi yaptım.',
      },
    ],
  },
  {
    hash: 'c2d58e7',
    company: 'Sigorta7',
    title: { en: 'Business Analyst Intern', tr: 'İş Analisti Stajyeri' },
    date: { en: 'Jul — Aug 2023', tr: 'Tem — Ağu 2023' },
    bullets: [
      {
        en: 'Coordinated cross-functional development of the Sigorta7 website, keeping technical work aligned with business requirements.',
        tr: 'Sigorta7 web sitesinin ekipler arası geliştirme sürecini koordine ettim; teknik çalışmaların iş gereksinimleriyle uyumlu ilerlemesini sağladım.',
      },
      {
        en: 'Tested and documented web service errors and followed them through to resolution.',
        tr: 'Web servislerindeki hataları test edip belgeledim ve çözüm sürecini takip ettim.',
      },
    ],
  },
  {
    hash: '19b7fa3',
    company: 'IFS Türkiye',
    title: { en: 'Data Science Intern', tr: 'Veri Bilimi Stajyeri' },
    date: { en: 'Jul — Aug 2022', tr: 'Tem — Ağu 2022' },
    bullets: [
      {
        en: 'Developed SQL-based solutions with IFS Developer Studio and PL/SQL, including table design and data associations.',
        tr: 'IFS Developer Studio ve PL/SQL ile tablo tasarımı ve veri ilişkilendirmeleri dahil SQL tabanlı çözümler geliştirdim.',
      },
    ],
  },
];

export type Category = 'ai' | 'dotnet' | 'web';

export type Project = {
  slug: string;
  name: string;
  description: T;
  tags: string[];
  category: Category;
  repo: string;
};

export const projects: Project[] = [
  {
    slug: 'nlp-chatbot',
    name: 'NLP Chatbot',
    description: {
      en: 'A chatbot that understands user questions with natural language processing and replies with meaningful answers.',
      tr: 'Doğal dil işleme ile kullanıcı sorularını anlayan ve anlamlı yanıtlar üreten bir sohbet botu.',
    },
    tags: ['Python', 'NLP', 'Deep Learning'],
    category: 'ai',
    repo: 'https://github.com/mbeyzademirkubuz/NLP_ChatBot',
  },
  {
    slug: 'moodlist',
    name: 'Moodlist',
    description: {
      en: 'Recommends music based on your mood, using AI to build a playlist that fits how you feel.',
      tr: 'Ruh halinize göre müzik öneren, yapay zekâ ile size uygun bir çalma listesi oluşturan uygulama.',
    },
    tags: ['Python', 'AI', 'YouTube API'],
    category: 'ai',
    repo: 'https://github.com/mbeyzademirkubuz/Moodlist',
  },
  {
    slug: 'order-data-analysis',
    name: 'Order Data Analysis',
    description: {
      en: 'Mines order data with the Apriori algorithm to discover association rules that power product recommendations.',
      tr: 'Apriori algoritması ile sipariş verilerinden birliktelik kuralları çıkararak ürün önerilerine veri sağlar.',
    },
    tags: ['Python', 'Data Analysis', 'Apriori'],
    category: 'ai',
    repo: 'https://github.com/mbeyzademirkubuz/Order-Data-Analysis-with-Apriori-Algorithm',
  },
  {
    slug: 'restaurant-management-system',
    name: 'Restaurant Management System',
    description: {
      en: 'A desktop app covering order tracking, inventory, customer records and financial reports for restaurants.',
      tr: 'Restoranlar için sipariş takibi, stok, müşteri kayıtları ve finansal raporları kapsayan masaüstü uygulaması.',
    },
    tags: ['C#', 'WinForms', 'SQL'],
    category: 'dotnet',
    repo: 'https://github.com/mbeyzademirkubuz/Restaurant_Management_System',
  },
  {
    slug: 'budget-tracking',
    name: 'Budget Tracking',
    description: {
      en: 'Personal budget tracker with income and expense tracking, category-based spending analysis and reports.',
      tr: 'Gelir-gider takibi, kategori bazlı harcama analizi ve raporlama sunan kişisel bütçe uygulaması.',
    },
    tags: ['C#', 'HTML/CSS', 'JavaScript'],
    category: 'dotnet',
    repo: 'https://github.com/mbeyzademirkubuz/Butce-Takibi',
  },
  {
    slug: 'restaurant-order-website',
    name: 'Restaurant Order Website',
    description: {
      en: 'Online ordering with a React frontend and a Flask API: browse the menu, place orders and pay.',
      tr: 'React arayüzü ve Flask API ile online sipariş: menüyü görüntüleyin, sipariş verin ve ödeme yapın.',
    },
    tags: ['React', 'Flask', 'MongoDB'],
    category: 'web',
    repo: 'https://github.com/mbeyzademirkubuz/Restaurant-Website-With-Flask',
  },
  {
    slug: 'boolmaca',
    name: 'Boolmaca',
    description: {
      en: 'Interactive logic puzzles that teach Boolean logic in a playful way.',
      tr: 'Boolean mantığını eğlenceli bir şekilde öğreten etkileşimli mantık bulmacaları.',
    },
    tags: ['React', 'JavaScript', 'CSS'],
    category: 'web',
    repo: 'https://github.com/mbeyzademirkubuz/boolmaca-website',
  },
  {
    slug: 'ne-yesem',
    name: 'What Should I Eat?',
    description: {
      en: 'Suggests meals and recipes based on the ingredients you have, or picks something at random.',
      tr: 'Elinizdeki malzemelere göre yemek ve tarif öneren ya da rastgele bir seçim yapan web sitesi.',
    },
    tags: ['PHP', 'SQL', 'API'],
    category: 'web',
    repo: 'https://github.com/mbeyzademirkubuz/Ne-Yesem--Website',
  },
];

export const education = [
  {
    school: { en: 'University of Milan', tr: 'Milano Üniversitesi' } as T,
    degree: { en: 'M.Sc. Data Science for Economics and Health', tr: 'Yüksek Lisans, Data Science for Economics and Health' } as T,
    date: { en: '2026 — Present', tr: '2026 — Günümüz' } as T,
    current: true,
    notes: [{ en: 'Università degli Studi di Milano · Milan', tr: 'Università degli Studi di Milano · Milano' }] as T[],
  },
  {
    school: { en: 'Marmara University', tr: 'Marmara Üniversitesi' } as T,
    degree: { en: 'B.Sc. Computer Engineering', tr: 'Bilgisayar Mühendisliği, Lisans' } as T,
    date: { en: '2019 — 2024', tr: '2019 — 2024' } as T,
    notes: [
      { en: 'GPA: 3.35 / 4.00', tr: 'Not ortalaması: 3.35 / 4.00' },
      {
        en: 'Graduation project: Improving Customer Experience with Intelligent Order Management and Data Mining Techniques in Restaurant Businesses',
        tr: 'Bitirme projesi: Restoran İşletmelerinde Akıllı Sipariş Yönetimi ve Veri Madenciliği Teknikleriyle Müşteri Deneyiminin İyileştirilmesi',
      },
    ] as T[],
  },
];

export const research = [
  {
    title: { en: 'TEKNOFEST', tr: 'TEKNOFEST' } as T,
    date: '2018 — 2019',
    description: {
      en: 'Finalist in the “Technology for Humanity” and “Unmanned Underwater Vehicle” categories, as the team’s software developer.',
      tr: '“İnsanlık Yararına Teknoloji” ve “İnsansız Su Altı Aracı” kategorilerinde, takımın yazılım geliştiricisi olarak finalist.',
    } as T,
  },
  {
    title: { en: 'TÜBİTAK 2209 Research Grant', tr: 'TÜBİTAK 2209 Araştırma Projesi' } as T,
    date: '2023',
    description: {
      en: 'Research project selected and funded under TÜBİTAK’s 2209 undergraduate research support program.',
      tr: 'TÜBİTAK 2209 Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı kapsamında seçilip desteklenen araştırma projesi.',
    } as T,
  },
];

export const beyond = [
  {
    id: 'writing',
    file: 'writing.md',
    title: { en: 'Author', tr: 'Yazar' } as T,
    badge: { en: 'Wattys 2022 winner', tr: 'Wattys 2022 kazananı' } as T,
    description: {
      en: 'Writing novels since 2020. My book Zer0 was one of the winners of Wattpad’s Wattys 2022. I now publish my stories on my own blog.',
      tr: '2020’den beri roman yazıyorum. Zer0 adlı kitabım Wattpad’in düzenlediği Wattys 2022’nin kazananları arasına girdi. Hikâyelerimi artık kendi blogumda yayımlıyorum.',
    } as T,
    cta: { en: 'Read on fromdearmagnolia.com', tr: 'fromdearmagnolia.com’da oku' } as T,
    url: 'https://fromdearmagnolia.com/',
  },
  {
    id: 'youtube',
    file: 'youtube.mp4',
    title: { en: 'YouTube', tr: 'YouTube' } as T,
    badge: { en: 'Travel vlogs', tr: 'Seyahat vlogları' } as T,
    description: {
      en: 'I document my travels in Türkiye and abroad, filming and editing vlogs for my channel.',
      tr: 'Yurt içi ve yurt dışı seyahatlerimi çekip kurguluyor, kanalımda vlog olarak paylaşıyorum.',
    } as T,
    cta: { en: 'Watch on YouTube', tr: 'YouTube’da izle' } as T,
    url: 'https://www.youtube.com/@beyzademirkubuzzz',
  },
];

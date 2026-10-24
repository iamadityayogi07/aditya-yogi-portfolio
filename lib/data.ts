export const profile = {
  name: "Aditya Yogi",
  role: "Senior Software Developer",
  email: "adityayogi07@gmail.com",
  phone: "+918839497272",
  headline: "Building scalable backend systems that solve real business problems.",
  summary:
    "Backend and full-stack developer with 5+ years of experience across PHP, Laravel, MySQL, REST APIs, Redis, SaaS platforms and third-party integrations, plus Android app development with Flutter. Experienced in turning business requirements into reliable technical solutions and leading small development teams.",
  about:
    "I specialize in PHP and Laravel development with experience across SaaS, private aviation, billing, messaging, e-commerce, e-learning and business management platforms. My work includes REST API development, database optimization, Redis queues, third-party integrations, e-signature workflows, automated document generation and multilingual applications.",
};

export const metrics = [
  { value: "5+", label: "Years of software development" },
  { value: "Laravel · PHP", label: "Core backend specialization" },
  { value: "REST · Redis", label: "Scalable integrations & background jobs" },
  { value: "4", label: "Performance awards" },
];

export const nav = ["About", "Skills", "Experience", "Projects", "Awards", "Contact"];

export const marquee = [
  "PHP", "Laravel", "MySQL", "Redis", "REST APIs", "CodeIgniter", "Yii2",
  "Flutter", "Firebase", "Avinode", "PandaDoc", "SignWell", "Git",
];

export const skills = [
  {
    title: "Backend Development",
    text: "PHP, Laravel, CodeIgniter, Yii2, REST APIs, Web Services, SaaS Development, Job Queues and Background Jobs.",
    tags: ["PHP", "Laravel", "REST APIs"],
  },
  {
    title: "Database & Messaging",
    text: "MySQL database design, migrations, query optimization, Redis queues and notification systems.",
    tags: ["MySQL", "Redis", "SQL"],
  },
  {
    title: "Frontend & Tools",
    text: "JavaScript, jQuery, AJAX, HTML, CSS, Git, GitHub and GitLab, with experience building multilingual applications.",
    tags: ["JavaScript", "GitHub", "GitLab"],
  },
  {
    title: "Third-Party Integrations",
    text: "Avinode API, PandaDoc, SignWell, Firebase, SDK integration and e-signature workflows.",
    tags: ["Avinode", "PandaDoc", "Firebase"],
  },
  {
    title: "Engineering",
    text: "Database optimization, scalable backend workflows, automated document generation and application performance improvement.",
    tags: [] as string[],
  },
  {
    title: "Leadership",
    text: "Client coordination, requirements analysis, project management, team leadership and technical problem solving.",
    tags: [] as string[],
  },
  {
    title: "Mobile Development",
    text: "Android app development with Flutter and Dart, from game mechanics and UI to release on Google Play.",
    tags: ["Flutter", "Dart", "Android"],
  },
];

export const experience = [
  {
    date: "Mar 2025 — Present",
    title: "Senior Laravel Developer",
    company: "Journai Global Pvt Ltd (formerly Desklay Technologies)",
    points: [
      "Lead backend development of The Private Aviation Company (TPAC), a booking and quotation platform for private aviation.",
      "Integrated Avinode API for real-time aircraft pricing and quotation workflows.",
      "Implemented passenger management, e-signature workflows, automated document generation and multilingual functionality.",
      "Designed and optimized database structures to support scalable booking and quotation workflows.",
      "Implemented JSON-based data submissions and multilingual application functionality.",
      "Developed backend features using Laravel, PHP, MySQL, REST APIs, JavaScript, jQuery and AJAX.",
      "Collaborated with stakeholders to analyze requirements and deliver scalable business solutions.",
    ],
  },
  {
    date: "Dec 2020 — Mar 2025",
    title: "Backend Developer",
    company: "Shrinkcom Software Pvt. Ltd.",
    points: [
      "Developed and maintained web applications using Laravel, CodeIgniter and Yii2.",
      "Designed and integrated REST APIs, third-party APIs and SDKs including PandaDoc, SignWell and Firebase.",
      "Developed Redis-based job queue services for high-volume email, SMS and Firebase notification delivery.",
      "Designed and optimized MySQL databases, migrations, queries and application data structures.",
      "Developed SaaS-based applications and backend business workflows.",
      "Implemented e-signature workflows and third-party service integrations.",
      "Collaborated directly with clients to gather requirements and deliver technical solutions.",
      "Led small development teams and coordinated project delivery to meet deadlines and quality requirements.",
    ],
  },
];

export type Project = {
  num: string;
  category: string;
  title: string;
  text: string;
  roles: string[];
  tags: string[];
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    num: "01",
    category: "Private Aviation",
    title: "The Private Aviation Company (TPAC)",
    text: "Private aviation booking and quotation platform with real-time Avinode pricing, passenger management, e-signatures, automated document generation and multilingual workflows.",
    roles: [
      "Client requirement analysis and business workflow design.",
      "Database architecture, relationships, migrations and query optimization.",
      "Laravel backend development, REST APIs and third-party integrations.",
      "Performance improvement, troubleshooting and ongoing feature delivery.",
    ],
    tags: ["Laravel", "PHP", "MySQL", "Avinode API"],
  },
  {
    num: "02",
    category: "SaaS",
    title: "Water Billing Management System",
    text: "Cloud-based SaaS billing application supporting customer accounts, consumption tracking, billing, invoicing and payment processing.",
    roles: [
      "Requirement analysis and database structure design.",
      "Backend development for customer, consumption, billing and payment workflows.",
      "Database optimization, debugging and ongoing system enhancements.",
    ],
    tags: ["Laravel", "PHP", "SaaS", "MySQL"],
  },
  {
    num: "03",
    category: "Messaging",
    title: "SMS & Email Wrapper Platform",
    text: "Bulk communication platform using Redis-backed background jobs for scalable email and SMS delivery.",
    roles: [
      "Designed communication workflows and supporting database structures.",
      "Developed bulk SMS/email processing with Redis queues and background jobs.",
      "Handled API integration, error handling and performance optimization.",
    ],
    tags: ["Laravel", "Redis", "Job Queues"],
  },
  {
    num: "04",
    category: "E-Commerce",
    title: "E-Commerce Platform",
    text: "Multi-vendor e-commerce platform for pharmacies, importers and users, including logistics, bulk purchasing, accounting and ledger modules.",
    roles: [
      "Analyzed business requirements and designed multi-vendor data structures.",
      "Developed backend workflows for products, logistics, accounting and ledgers.",
      "Handled integrations, debugging, database optimization and enhancements.",
    ],
    tags: ["CodeIgniter", "MySQL"],
  },
  {
    num: "05",
    category: "E-Learning",
    title: "i-Learning Platform",
    text: "Customized Yii2 learning platform supporting course enrollment, videos, documents, quizzes and course content.",
    roles: [
      "Translated learning requirements into application modules and database workflows.",
      "Developed course, enrollment, content, quiz and document/video functionality.",
      "Handled backend development, debugging and ongoing improvements.",
    ],
    tags: ["Yii2", "PHP", "MySQL"],
  },
  {
    num: "06",
    category: "Operations",
    title: "Additional Platforms",
    text: "Government driving-school workflows, restaurant and tiffin management systems, and property booking APIs with administrative panels.",
    roles: [
      "Managed requirements and database structures across multiple business applications.",
      "Developed backend workflows, APIs and administrative functionality.",
      "Handled maintenance, debugging, optimization and client-driven enhancements.",
    ],
    tags: ["Laravel", "CodeIgniter", "REST APIs"],
  },
  {
    num: "07",
    category: "Mobile Game",
    title: "ArrowMaze",
    text: "Puzzle game for Android, designed, built and published by me with Flutter and available on the Google Play Store.",
    roles: [
      "Game concept, puzzle mechanics and UI design.",
      "End-to-end development in Flutter and Dart.",
      "Testing, release management and publishing on Google Play.",
    ],
    tags: ["Flutter", "Dart", "Android"],
    link: {
      href: "https://play.google.com/store/apps/details?id=com.arrowmaze.game",
      label: "Get it on Google Play",
    },
  },
];

export const awards = [
  { year: "2025", title: "Pinnacle Performer Award", org: "Journai Global Pvt Ltd" },
  { year: "2023", title: "Brainiac Award", org: "Innovative Concept Implementation · Shrinkcom Software Pvt Ltd" },
  { year: "2022", title: "Expert Accuracy Award", org: "Backend Development · Shrinkcom Software Pvt Ltd" },
  { year: "2021", title: "Outstanding Performance Award", org: "Backend Development · Shrinkcom Software Pvt Ltd" },
];

export const education = {
  degree: "Bachelor of Engineering (B.E.) — Computer Science Engineering",
  detail: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Ratlam · CGPA 8.1/10 · Year of Passing: 2019",
};

export const profile = {
  name: 'Kyaw Su Hein',
  initials: 'KH',
  email: 'kyawsuhein4379@gmail.com',
  github: 'Beeishoney',
  telegram: '@UzuiTengen0',
  avatars: [
    '/profile/Minatonamikaze.jpg',
    '/profile/Minatonamikaze.jpg',
  ],
};

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'Core Java'],
  },
  {
    title: 'Frameworks',
    skills: ['Spring', 'Spring Boot'],
  },
  {
    title: 'CSS Frameworks',
    skills: ['Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Libraries',
    skills: ['React'],
  },
  {
    title: 'Database',
    skills: ['MySQL'],
  },
  {
    title: 'Tools',
    skills: ['VS Code', 'Intellij IDEA', 'Git Hub', 'Post Man'],
  },
];

export const projects = [
  {
    title: 'JiaFu Game Store',
    slug: 'jiafu-game-store',
    description:
      'A full-stack game top-up store with product browsing, ordering, wallet top-ups, and backend integrations.',
    tags: ['React', 'Java', 'Spring Boot', 'MySQL', 'REST API'],
    image: '/jiafufront.jpg',
    liveUrl: 'https://jiafu-game.store',
    details: {
      overview:
        'JiaFu Game Store is a full-stack digital game top-up platform built around a fast purchase flow, wallet and recharge handling, automated provider integrations, and an admin system for managing day-to-day store operations.',
      technologies: ['React', 'Java', 'Spring Boot', 'MySQL', 'REST API'],
      features: [
        'Multi-game top-up and digital product catalog with a responsive purchase flow.',
        'Wallet and recharge system for customer balance, top-ups, and transaction history.',
        'Automated order processing through multiple external provider API integrations.',
        'Player ID validation and game-specific input handling before purchase.',
        'Order status tracking with failed/refunded handling and user notifications.',
        'Admin controls for products, pricing, payments, stock, recharge orders, and service availability.',
      ],
    },
  },
  {
    title: 'The Silent Legacy',
    slug: 'the-silent-legacy',
    description:
      'An interactive 2.5D pixel-art space journey exploring NASA equipment left on the Moon and Mars.',
    tags: ['React', 'JavaScript', 'Vite', '2.5D Pixel Art', 'Interactive UI'],
    image: '/projects/the-silent-legacy/cover.svg',
    liveUrl: 'https://silent-legacy-orbit-live.vercel.app/',
    sourceUrl: 'https://github.com/sithuaunglife/the-silent-legacy',
    details: {
      overview:
        'Created for the 2026 NASA Space Apps Challenge, The Silent Legacy invites visitors on a story-driven journey from Earth into space and onto the Moon and Mars. Players explore 2.5D pixel-art environments, inspect historic spacecraft hardware, and discover the stories of equipment left behind after exploration missions.',
      technologies: ['React', 'JavaScript', 'Vite', 'CSS', '2.5D Pixel Art'],
      features: [
        'Earth-to-orbit launch sequence and interactive space navigation.',
        'Explore detailed 2.5D pixel-art lunar and Martian environments.',
        'Walk as an astronaut and inspect mission artifacts up close.',
        'Discover historical information about NASA exploration equipment.',
        'Interactive landing, mission briefing, and return-to-orbit sequences.',
      ],
    },
  },
];
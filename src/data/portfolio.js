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
];

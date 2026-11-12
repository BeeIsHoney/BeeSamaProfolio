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
      category: 'Full-stack application · Case study',
      overview:
        'A working digital top-up storefront combining product discovery, order processing, wallet/recharge flows, external provider APIs, and administrative tools.',
      caseStudy: {
        challenge: 'A top-up storefront needs to connect customer actions, wallet activity, application data, and external providers. The hard part is keeping the purchase journey understandable when multiple systems contribute to an order.',
        approach: [
          'Build a responsive React purchase experience around browsing, selecting, and tracking orders.',
          'Use Java and Spring Boot to provide APIs and organize application behavior behind the interface.',
          'Use MySQL for application records and integrate external provider APIs for fulfillment.',
          'Support administrators with dedicated controls for products, pricing, payments, and order operations.',
        ],
        learning: 'This project demonstrates how frontend UX, backend business rules, database design, and third-party integrations have to work together — especially when an external service is delayed or unavailable.',
        architectureImage: '/projects/jiafu-game-store/architecture.svg',
        flowImage: '/projects/jiafu-game-store/flow.svg',
      },
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

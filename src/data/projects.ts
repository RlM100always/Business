export interface ProjectDetails {
  id: string;
  title: string;
  type: string;
  category: string;
  imageUrl: string;
  clientName: string;
  deliveryTime: string;
  review?: string;
  rating?: number;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  images: string[];
  links?: {
    demo?: string;
    github?: string;
    documentation?: string;
  };
}

export const projectsData: ProjectDetails[] = [
  {
    id: '1',
    title: 'E-commerce Website',
    type: 'Web Development',
    category: 'Web',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    clientName: 'TechStyle Store',
    deliveryTime: '4 weeks',
    review: 'Exceptional work! The website exceeded our expectations and has significantly increased our online sales.',
    rating: 5,
    description: 'A modern e-commerce platform built with React and Node.js, featuring a responsive design, secure payment processing, and an intuitive admin dashboard.',
    challenge: 'The client needed a scalable e-commerce solution that could handle high traffic volumes while maintaining fast loading times and providing a seamless shopping experience across all devices.',
    solution: 'We implemented a headless architecture using React for the frontend and Node.js for the backend, with Redis caching for improved performance. The solution includes real-time inventory management and advanced search capabilities.',
    features: [
      'Responsive design for all devices',
      'Advanced search and filtering',
      'Secure payment processing',
      'Real-time inventory management',
      'Customer reviews and ratings',
      'Admin dashboard with analytics',
      'Order tracking system'
    ],
    technologies: [
      'React',
      'Node.js',
      'Redis',
      'PostgreSQL',
      'Stripe',
      'AWS S3',
      'Docker'
    ],
    images: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    links: {
      demo: 'https://techstyle-store.com',
      documentation: 'https://docs.techstyle-store.com'
    }
  }
];
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
  },
  {
    id: '2',
    title: 'Healthcare Management System',
    type: 'Web Application',
    category: 'Web',
    imageUrl: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    clientName: 'Dhaka Medical Center',
    deliveryTime: '8 weeks',
    review: 'The system has revolutionized our patient management process. Highly professional team!',
    rating: 5,
    description: 'A comprehensive healthcare management system for hospitals and clinics, featuring patient records, appointment scheduling, and billing integration.',
    challenge: 'The medical center needed a digital solution to manage patient records, appointments, and billing while ensuring HIPAA compliance and data security.',
    solution: 'We developed a secure, cloud-based system with role-based access control, encrypted data storage, and seamless integration with existing medical equipment.',
    features: [
      'Patient record management',
      'Appointment scheduling',
      'Billing and insurance integration',
      'Medical history tracking',
      'Prescription management',
      'Report generation',
      'Multi-user access control'
    ],
    technologies: [
      'Vue.js',
      'Laravel',
      'MySQL',
      'AWS',
      'Docker',
      'Redis'
    ],
    images: [
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    links: {
      demo: 'https://dhaka-medical.com',
      documentation: 'https://docs.dhaka-medical.com'
    }
  },
  {
    id: '3',
    title: 'Food Delivery Mobile App',
    type: 'Mobile Development',
    category: 'Mobile',
    imageUrl: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    clientName: 'QuickBite BD',
    deliveryTime: '10 weeks',
    review: 'Amazing app! Our delivery orders increased by 400% after launch.',
    rating: 5,
    description: 'A feature-rich food delivery mobile application with real-time tracking, multiple payment options, and restaurant management dashboard.',
    challenge: 'The client needed a competitive food delivery app that could handle high order volumes during peak hours while providing real-time tracking and seamless payment processing.',
    solution: 'We built a scalable React Native app with real-time GPS tracking, push notifications, and integrated payment gateways optimized for the Bangladeshi market.',
    features: [
      'Real-time order tracking',
      'Multiple payment gateways',
      'Restaurant dashboard',
      'Push notifications',
      'Rating and review system',
      'Loyalty program',
      'Multi-language support'
    ],
    technologies: [
      'React Native',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'Firebase',
      'Stripe'
    ],
    images: [
      'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4393022/pexels-photo-4393022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4393023/pexels-photo-4393023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    links: {
      demo: 'https://quickbite-bd.com'
    }
  },
  {
    id: '4',
    title: 'University Management Portal',
    type: 'Academic Project',
    category: 'Academic',
    imageUrl: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    clientName: 'International University',
    deliveryTime: '12 weeks',
    review: 'Perfect solution for managing our international student programs.',
    rating: 5,
    description: 'A comprehensive university management system for international students, featuring course enrollment, grade management, and communication tools.',
    challenge: 'The university needed a digital platform to manage international student applications, course enrollments, and academic records while supporting multiple languages and currencies.',
    solution: 'We created a multi-tenant system with automated workflows, document management, and integration with international payment systems.',
    features: [
      'Student enrollment system',
      'Grade management',
      'Course scheduling',
      'Document management',
      'Payment processing',
      'Communication portal',
      'Multi-language support'
    ],
    technologies: [
      'Angular',
      'Spring Boot',
      'PostgreSQL',
      'AWS',
      'Docker',
      'Kubernetes'
    ],
    images: [
      'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1438082/pexels-photo-1438082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1438083/pexels-photo-1438083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    links: {
      demo: 'https://iu-portal.edu',
      documentation: 'https://docs.iu-portal.edu'
    }
  }
];
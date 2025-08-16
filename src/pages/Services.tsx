import React, { useState } from 'react';
import { Code, Smartphone, Cloud, Brain, Shield, Database, Globe, Zap, CheckCircle, ArrowRight, Play, GraduationCap, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 'web',
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies and modern frameworks.',
      features: [
        'Responsive Design & Mobile-First Approach',
        'Modern Frameworks (React, Vue, Angular)',
        'SEO Optimization & Performance',
        'E-commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps (PWA)'
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'PHP', 'Python'],
      pricing: 'Starting from $2,500',
      deliveryTime: '4-8 weeks',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience.',
      features: [
        'Native iOS & Android Development',
        'Cross-platform Solutions (React Native, Flutter)',
        'UI/UX Design Excellence',
        'App Store Optimization',
        'Push Notifications & Analytics',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
      pricing: 'Starting from $5,000',
      deliveryTime: '6-12 weeks',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-600 dark:text-purple-400',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure, migration services, and DevOps solutions for modern businesses.',
      features: [
        'AWS & Azure Cloud Services',
        'DevOps & CI/CD Pipelines',
        'Microservices Architecture',
        'Auto-scaling & Load Balancing',
        'Cloud Migration Services',
        'Monitoring & Analytics'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      pricing: 'Starting from $3,000',
      deliveryTime: '3-6 weeks',
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 'ai',
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning technologies.',
      features: [
        'Custom AI Model Development',
        'Data Analytics & Insights',
        'Process Automation',
        'Predictive Analysis',
        'Natural Language Processing',
        'Computer Vision Solutions'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI'],
      pricing: 'Starting from $7,500',
      deliveryTime: '8-16 weeks',
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-600 dark:text-orange-400',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions and vulnerability assessments to protect your digital assets.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Compliance Management',
        'Risk Assessment & Mitigation',
        'Security Training',
        '24/7 Monitoring Services'
      ],
      technologies: ['Nessus', 'Metasploit', 'Wireshark', 'OWASP', 'Burp Suite'],
      pricing: 'Starting from $2,000',
      deliveryTime: '2-4 weeks',
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      textColor: 'text-red-600 dark:text-red-400',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 'database',
      icon: Database,
      title: 'Database Solutions',
      description: 'Robust database design, optimization, and management for scalable applications.',
      features: [
        'Database Design & Architecture',
        'Performance Tuning & Optimization',
        'Data Migration Services',
        'Backup & Recovery Solutions',
        'Data Warehousing',
        'Real-time Analytics'
      ],
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
      pricing: 'Starting from $1,500',
      deliveryTime: '2-6 weeks',
      color: 'from-indigo-500 to-indigo-700',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      textColor: 'text-indigo-600 dark:text-indigo-400',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 'academic',
      icon: GraduationCap,
      title: 'Academic Projects & Thesis',
      description: 'Professional assistance for university students with projects, thesis, and assignments.',
      features: [
        'Research Projects & Methodology',
        'Thesis Writing & Documentation',
        'Assignment Help & Consultation',
        'Data Analysis & Visualization',
        'Literature Review & Citations',
        'Academic Presentation Design'
      ],
      technologies: ['SPSS', 'R', 'Python', 'LaTeX', 'Mendeley', 'EndNote'],
      pricing: 'Starting from $500',
      deliveryTime: '1-4 weeks',
      color: 'from-teal-500 to-teal-700',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      textColor: 'text-teal-600 dark:text-teal-400',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 'design',
      icon: Palette,
      title: 'UI & UX Design',
      description: 'Beautiful and intuitive user interfaces that deliver exceptional user experiences.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Interactive Design Systems',
        'Usability Testing',
        'Brand Identity Design',
        'Mobile-First Design'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
      pricing: 'Starting from $1,200',
      deliveryTime: '2-5 weeks',
      color: 'from-pink-500 to-pink-700',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      textColor: 'text-pink-600 dark:text-pink-400',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
            <Zap size={16} className="mr-2" />
            Our Services
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">IT Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From web development to AI solutions, we deliver cutting-edge technology services that drive business growth and innovation across Bangladesh and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12 sm:space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className={`inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 ${service.bgColor} rounded-full text-sm font-medium ${service.textColor} mb-4`}>
                  <service.icon size={16} className="mr-2" />
                  {service.title}
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {service.title}
                </h2>
                
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <CheckCircle size={18} className={`mr-3 mt-0.5 ${service.textColor} flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies We Use:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Timeline */}
                <div className="grid grid-cols-2 gap-4 mb-6 sm:mb-8">
                  <div className={`p-3 sm:p-4 ${service.bgColor} rounded-lg`}>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Starting Price</h4>
                    <p className={`text-base sm:text-lg font-bold ${service.textColor}`}>{service.pricing}</p>
                  </div>
                  <div className={`p-3 sm:p-4 ${service.bgColor} rounded-lg`}>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Delivery Time</h4>
                    <p className={`text-base sm:text-lg font-bold ${service.textColor}`}>{service.deliveryTime}</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/order"
                    className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Get Started
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center justify-center px-6 py-3 ${service.bgColor} ${service.textColor} font-semibold rounded-lg hover:shadow-md transition-all duration-300`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="relative z-10 w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      <Play size={20} className="text-white ml-1 sm:w-6 sm:h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center">
          <Globe size={32} className="mx-auto mb-4 sm:mb-6 opacity-80 sm:w-12 sm:h-12" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have chosen Trivance Tech for their digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Project
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
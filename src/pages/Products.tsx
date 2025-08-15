import React, { useState } from 'react';
import { Building, Zap, Smartphone, ShoppingCart, Play, Star, CheckCircle, ArrowRight, Users, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  image: string;
  demoVideo?: string;
  testimonials: {
    name: string;
    company: string;
    rating: number;
    comment: string;
  }[];
  techStack: string[];
  clients: number;
  icon: React.ComponentType<any>;
}

const Products: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [selectedPricing, setSelectedPricing] = useState<'starter' | 'professional' | 'enterprise'>('professional');

  const products: Product[] = [
    {
      id: 'enterprise-erp',
      title: 'TrivanceERP',
      description: 'Comprehensive Enterprise Resource Planning solution designed for growing businesses in Bangladesh and beyond.',
      category: 'Enterprise Solutions',
      features: [
        'Financial Management & Accounting',
        'Human Resource Management',
        'Inventory & Supply Chain',
        'Customer Relationship Management',
        'Project Management Tools',
        'Real-time Analytics & Reporting',
        'Multi-language Support',
        'Cloud & On-premise Deployment'
      ],
      pricing: {
        starter: '$299/month',
        professional: '$599/month',
        enterprise: 'Custom Pricing'
      },
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      testimonials: [
        {
          name: 'Ahmed Hassan',
          company: 'Dhaka Textiles Ltd.',
          rating: 5,
          comment: 'TrivanceERP transformed our business operations completely. Highly recommended!'
        }
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      clients: 150,
      icon: Building
    },
    {
      id: 'saas-platform',
      title: 'TrivanceCloud',
      description: 'Multi-tenant SaaS platform that enables businesses to quickly deploy and scale their applications.',
      category: 'SaaS Platforms',
      features: [
        'Multi-tenant Architecture',
        'Auto-scaling Infrastructure',
        'Built-in Analytics',
        'API Management',
        'Security & Compliance',
        'Custom Branding',
        'Integration Hub',
        '99.9% Uptime SLA'
      ],
      pricing: {
        starter: '$99/month',
        professional: '$299/month',
        enterprise: 'Custom Pricing'
      },
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      testimonials: [
        {
          name: 'Sarah Khan',
          company: 'TechStart BD',
          rating: 5,
          comment: 'TrivanceCloud helped us launch our SaaS product in record time.'
        }
      ],
      techStack: ['Kubernetes', 'Docker', 'React', 'Node.js', 'MongoDB'],
      clients: 75,
      icon: Zap
    },
    {
      id: 'mobile-app-builder',
      title: 'TrivanceApp Builder',
      description: 'No-code mobile app builder that allows businesses to create professional mobile apps without programming.',
      category: 'Mobile Apps',
      features: [
        'Drag & Drop Interface',
        'Pre-built Templates',
        'Real-time Preview',
        'Push Notifications',
        'Analytics Dashboard',
        'App Store Publishing',
        'Offline Functionality',
        'Custom Integrations'
      ],
      pricing: {
        starter: '$49/month',
        professional: '$149/month',
        enterprise: '$399/month'
      },
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      testimonials: [
        {
          name: 'Karim Ahmed',
          company: 'Local Business Owner',
          rating: 4,
          comment: 'Created our business app in just 2 days. Amazing tool!'
        }
      ],
      techStack: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
      clients: 200,
      icon: Smartphone
    },
    {
      id: 'ecommerce-platform',
      title: 'TrivanceCommerce',
      description: 'Complete e-commerce solution tailored for Bangladeshi businesses with local payment gateway integration.',
      category: 'E-commerce Solutions',
      features: [
        'Multi-vendor Marketplace',
        'Local Payment Gateways',
        'Inventory Management',
        'Order Tracking',
        'Mobile-responsive Design',
        'SEO Optimization',
        'Multi-language Support',
        'Analytics & Reporting'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$399/month',
        enterprise: '$799/month'
      },
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      testimonials: [
        {
          name: 'Fatima Rahman',
          company: 'Fashion House BD',
          rating: 5,
          comment: 'Our online sales increased by 300% after switching to TrivanceCommerce.'
        }
      ],
      techStack: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
      clients: 120,
      icon: ShoppingCart
    }
  ];

  const categories = ['All Products', 'Enterprise Solutions', 'SaaS Platforms', 'Mobile Apps', 'E-commerce Solutions'];
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts = selectedCategory === 'All Products' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
            <Building size={16} className="mr-2" />
            Our Products
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready-to-Deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Software Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Accelerate your business growth with our proven software products, trusted by hundreds of companies across Bangladesh and internationally.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="space-y-20">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Product Info */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mr-4">
                    <product.icon size={24} className="text-white" />
                  </div>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {product.title}
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Features:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.slice(0, 6).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle size={16} className="text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <Users className="w-6 h-6 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{product.clients}+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Active Clients</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">4.8</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Rating</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <Globe className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Uptime</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Pricing Plans:</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Starter</div>
                      <div className="text-lg font-bold text-primary-600 dark:text-primary-400">{product.pricing.starter}</div>
                    </div>
                    <div className="text-center p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg border-2 border-primary-200 dark:border-primary-700">
                      <div className="text-sm font-medium text-primary-600 dark:text-primary-400">Professional</div>
                      <div className="text-lg font-bold text-primary-600 dark:text-primary-400">{product.pricing.professional}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Enterprise</div>
                      <div className="text-lg font-bold text-primary-600 dark:text-primary-400">{product.pricing.enterprise}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Request Demo
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                  <button className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <Play size={20} className="mr-2" />
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Product Image/Demo */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative group">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2">
                      {product.techStack.slice(0, 4).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      <Play size={24} className="text-white ml-1" />
                    </button>
                  </div>
                </div>

                {/* Testimonial */}
                {product.testimonials[0] && (
                  <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex mb-3">
                      {[...Array(product.testimonials[0].rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                      "{product.testimonials[0].comment}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{product.testimonials[0].name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{product.testimonials[0].company}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <Shield size={48} className="mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Ready to Scale Your Business?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of successful businesses using our products to streamline operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
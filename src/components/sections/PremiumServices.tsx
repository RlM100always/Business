import React, { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, Cloud, Brain, Shield, Database, Globe, Zap, ChevronRight, CheckCircle, GraduationCap, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumServices: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies',
      features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimization', 'Performance Focused'],
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['Native iOS & Android', 'Cross-platform Solutions', 'UI/UX Excellence', 'App Store Optimization'],
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['AWS & Azure', 'DevOps & CI/CD', 'Microservices', 'Auto-scaling'],
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence',
      features: ['Custom AI Models', 'Data Analytics', 'Automation', 'Predictive Analysis'],
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions and vulnerability assessments',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Risk Assessment'],
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      textColor: 'text-red-600 dark:text-red-400'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Robust database design, optimization, and management',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup Solutions'],
      color: 'from-indigo-500 to-indigo-700',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      textColor: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      icon: GraduationCap,
      title: 'Academic Projects & Thesis',
      description: 'Professional assistance for university students with projects, thesis, and assignments',
      features: ['Research Projects', 'Thesis Writing', 'Assignment Help', 'Academic Consultation'],
      color: 'from-teal-500 to-teal-700',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      textColor: 'text-teal-600 dark:text-teal-400'
    },
    {
      icon: Palette,
      title: 'UI & UX Design',
      description: 'Beautiful and intuitive user interfaces that deliver exceptional user experiences',
      features: ['User Research', 'Wireframing', 'Interactive Prototypes', 'Design Systems'],
      color: 'from-pink-500 to-pink-700',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      textColor: 'text-pink-600 dark:text-pink-400'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
            <Zap size={16} className="mr-2" />
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-4">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">IT Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            From web development to AI solutions, we deliver cutting-edge technology services that drive business growth and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative p-6 sm:p-8">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon size={24} className="text-white sm:w-7 sm:h-7" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <div className={`space-y-2 mb-4 sm:mb-6 transition-all duration-300 ${
                  expandedService === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle size={14} className={`mr-2 ${service.textColor} flex-shrink-0`} />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className={`text-xs sm:text-sm font-medium ${service.textColor} hover:underline transition-colors duration-200`}
                  >
                    {expandedService === index ? 'Show Less' : 'Learn More'}
                  </button>
                  
                  <Link
                    to="/order"
                    className={`w-full sm:w-auto inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 ${service.bgColor} ${service.textColor} rounded-lg hover:shadow-md transition-all duration-300 text-xs sm:text-sm font-medium group/btn`}
                  >
                    Get Started
                    <ChevronRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 sm:mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <Globe size={32} className="mx-auto mb-4 sm:mb-6 opacity-80 sm:w-12 sm:h-12" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
                Join hundreds of satisfied clients who have chosen Trivance Tech for their digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
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
      </div>
    </section>
  );
};

export default PremiumServices;
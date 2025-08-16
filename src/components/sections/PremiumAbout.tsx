import React, { useState, useEffect, useRef } from 'react';
import { Play, Users, Award, Globe, Target, Eye, Heart, TrendingUp, Building, MapPin } from 'lucide-react';

const PremiumAbout: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, experts: 0, satisfaction: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 500, label: 'Projects Completed', icon: Award, suffix: '+' },
    { number: 150, label: 'Happy Clients', icon: Users, suffix: '+' },
    { number: 50, label: 'Expert Developers', icon: Building, suffix: '+' },
    { number: 98, label: 'Client Satisfaction', icon: TrendingUp, suffix: '%' }
  ];

  const milestones = [
    { year: '2021', title: 'Company Founded', description: 'Started with a vision to transform Bangladesh\'s IT landscape' },
    { year: '2022', title: 'First Major Client', description: 'Secured partnership with leading financial institution' },
    { year: '2023', title: 'Team Expansion', description: 'Grew to 25+ talented professionals' },
    { year: '2024', title: 'International Recognition', description: 'Won Best IT Company Award in Bangladesh' },
    { year: '2025', title: 'Global Expansion', description: 'Serving clients across 25+ countries' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentValue = 0;
      const increment = stat.number / steps;
      
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= stat.number) {
          currentValue = stat.number;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [index === 0 ? 'projects' : index === 1 ? 'clients' : index === 2 ? 'experts' : 'satisfaction']: Math.floor(currentValue)
        }));
      }, stepDuration);
    });
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
            <MapPin size={16} className="mr-2" />
            Based in Dhaka, Bangladesh
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Trivance Tech</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            We are Bangladesh's premier IT solutions company, dedicated to transforming businesses through innovative technology and exceptional service delivery.
          </p>
        </div>

        {/* Video & Story Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group order-2 lg:order-1">
            <div className="aspect-video bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <Play size={24} className="text-white ml-1 sm:ml-2" />
                </button>
              </div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="Trivance Tech Team" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-accent-500 rounded-2xl flex items-center justify-center shadow-xl">
              <Award size={24} className="text-white sm:w-8 sm:h-8" />
            </div>
          </div>
          
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 px-4 lg:px-0">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower businesses across Bangladesh with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To become Bangladesh's most trusted and innovative IT solutions provider, setting new standards for excellence and contributing to the nation's digital transformation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">Our Values</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Innovation, integrity, excellence, and client satisfaction are at the core of everything we do. We believe in building lasting partnerships through trust and quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <stat.icon size={24} className="text-white sm:w-8 sm:h-8" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {index === 0 ? counters.projects : index === 1 ? counters.clients : index === 2 ? counters.experts : counters.satisfaction}
                {stat.suffix}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Key milestones in our path to becoming Bangladesh's leading IT company
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-700 rounded-full"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'pr-4 sm:pr-8 text-right' : 'pl-4 sm:pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:scale-105">
                      <div className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">{milestone.year}</div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{milestone.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg">
                      <TrendingUp size={16} className="text-white sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  
                  <div className="w-full sm:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumAbout;
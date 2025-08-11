import { Users, Award, Globe, Target, Eye, Heart, Zap, Code, Smartphone, Database, Cloud, Shield, Cpu, ArrowRight, Play, CheckCircle, Star, TrendingUp, Building, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Expert Developers', icon: Code },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Scalable database design and optimization'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration and infrastructure management'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions and audits'
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by AI technology'
    }
  ];

  const team = [
    {
      name: 'Md. Rahman Ahmed',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      description: 'Visionary leader with 15+ years in IT industry'
    },
    {
      name: 'Sarah Khan',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      description: 'Technology expert specializing in scalable solutions'
    },
    {
      name: 'Arif Hassan',
      position: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      description: 'Full-stack developer with expertise in modern frameworks'
    },
    {
      name: 'Fatima Begum',
      position: 'UI/UX Director',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      description: 'Creative designer focused on user-centered design'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to transform Bangladesh\'s IT landscape' },
    { year: '2019', title: 'First Major Client', description: 'Secured partnership with leading financial institution' },
    { year: '2021', title: 'Team Expansion', description: 'Grew to 25+ talented professionals' },
    { year: '2023', title: 'International Recognition', description: 'Won Best IT Company Award in Bangladesh' },
    { year: '2024', title: 'Global Expansion', description: 'Serving clients across 15+ countries' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <MapPin size={16} className="mr-2" />
                Based in Dhaka, Bangladesh
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Trivance Tech</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                We are Bangladesh's premier IT solutions company, dedicated to transforming businesses through innovative technology and exceptional service delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex items-center px-6 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  <Play size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  Watch Our Story
                </button>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Get In Touch <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
                    <Play size={32} className="text-white ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                  alt="Trivance Tech Team" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={28} className="text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving digital transformation across Bangladesh and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses across Bangladesh with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become Bangladesh's most trusted and innovative IT solutions provider, setting new standards for excellence and contributing to the nation's digital transformation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Innovation, integrity, excellence, and client satisfaction are at the core of everything we do. We believe in building lasting partnerships through trust and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals leading Bangladesh's digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                    <Zap size={16} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our path to becoming Bangladesh's leading IT company
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-700 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg">
                      <TrendingUp size={20} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Trivance Tech?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with global standards to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                Deep understanding of Bangladesh's business landscape and regulatory environment.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-accent-50 to-accent-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Standards</h3>
              <p className="text-gray-700 leading-relaxed">
                International best practices and cutting-edge technologies in every project.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-secondary-50 to-secondary-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-700 leading-relaxed">
                500+ successful projects and 99% client satisfaction rate speaks for our quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have chosen Trivance Tech for their digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              to="/projects" 
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
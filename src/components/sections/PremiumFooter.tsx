import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook, Send, ArrowRight } from 'lucide-react';
import Logo from '../ui/Logo';

const PremiumFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800 dark:border-gray-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-gray-400">
                  Get the latest news, insights, and job opportunities delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center">
                  Subscribe
                  <Send size={18} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Logo variant="light" size="md" className="mb-6" />
              <p className="text-gray-400 mb-6 leading-relaxed">
                Bangladesh's leading IT solutions company, delivering cutting-edge technology solutions from Dhaka to the world.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300 group"
                >
                  <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300 group"
                >
                  <Twitter size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300 group"
                >
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300 group"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <nav className="flex flex-col space-y-3">
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Portfolio
                </Link>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Careers
                </Link>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </Link>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <nav className="flex flex-col space-y-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Web Development
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Mobile Apps
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Cloud Solutions
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  AI & Machine Learning
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Cybersecurity
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <MapPin className="h-5 w-5 text-primary-500 mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-400 leading-relaxed">
                      Gulshan-2, Dhaka-1212<br />
                      Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <Phone className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a 
                    href="tel:+8801700000000" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    +880 1700-000000
                  </a>
                </div>
                <div className="flex items-center group">
                  <Mail className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a 
                    href="mailto:info@trivancetech.com" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    info@trivancetech.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 p-4 bg-gray-800 dark:bg-gray-900 rounded-lg">
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <div className="text-sm text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {currentYear} Trivance Tech. All rights reserved. | Leading IT Company in Bangladesh
              </div>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
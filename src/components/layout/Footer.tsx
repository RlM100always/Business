import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Laptop, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Laptop className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold">ProjectHub</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Delivering high-quality academic and client projects on time, every time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
              <Link to="/order" className="text-gray-400 hover:text-white transition-colors">Order</Link>
              <Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Academic Projects</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Design Services</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Consultation</a>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Project Street, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <a href="mailto:info@projecthub.com" className="text-gray-400 hover:text-white transition-colors">
                  info@projecthub.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} ProjectHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
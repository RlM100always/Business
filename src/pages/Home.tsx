import { ArrowRight, CheckCircle, Code, BookOpen, Cpu, Clock, Award, Star, MessageSquare, Mail, Layout, Monitor, Users, Briefcase, Palette, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Home = () => {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Business with <span className="text-accent-400">Trivance Tech</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Bangladesh's premier IT solutions company delivering cutting-edge web development, mobile apps, and digital transformation services from Dhaka to the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/order" 
                className="px-6 py-3 bg-accent-500 text-white font-medium rounded-md hover:bg-accent-600 transition-colors flex items-center justify-center"
              >
                Order Now <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link 
                to="/projects" 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,202.7C672,213,768,203,864,170.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are a team of passionate tech experts dedicated to delivering exceptional solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team meeting" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">Our team consists of senior developers, UI/UX designers, and project managers with 10+ years of industry experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Experience</h3>
                  <p className="text-gray-600">We've successfully delivered 500+ projects across various industries including e-commerce, healthcare, and education.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Recognition</h3>
                  <p className="text-gray-600">Our work has been recognized by leading tech publications and we've won multiple industry awards for innovation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Tech Experts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive solutions across web, mobile, and software development, along with professional design services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Code size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Custom websites and web applications built with modern technologies and best practices.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Responsive design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Modern frameworks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">SEO optimization</span>
                </li>
              </ul>
              <Link to="/order" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                Order Now <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Software Development */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Monitor size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Software Development</h3>
              <p className="text-gray-600 mb-4">
                Custom software solutions tailored to your business needs and requirements.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Desktop applications</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Enterprise solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Cloud integration</span>
                </li>
              </ul>
              <Link to="/order" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                Order Now <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* UI/UX Design */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Palette size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">
                Beautiful and intuitive user interfaces that deliver exceptional user experiences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">User research</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Wireframing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Interactive prototypes</span>
                </li>
              </ul>
              <Link to="/order" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                Order Now <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Mobile Development */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Cpu size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Development</h3>
              <p className="text-gray-600 mb-4">
                Native and cross-platform mobile applications that deliver exceptional user experiences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">iOS & Android</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">User-friendly UI/UX</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Ongoing support</span>
                </li>
              </ul>
              <Link to="/order" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                Order Now <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Academic Projects */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Projects</h3>
              <p className="text-gray-600 mb-4">
                Well-researched academic projects and papers across various disciplines.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Original research</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Proper citations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Plagiarism-free</span>
                </li>
              </ul>
              <Link to="/order" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                Order Now <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Database Solutions */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Database size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Database Solutions</h3>
              <p className="text-gray-600 mb-4">
                Robust database design and implementation for scalable applications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Data modeling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Performance optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Security implementation</span>
                </li>
              </ul>
              <Link to="/order" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                Order Now <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent successful projects that showcase our expertise and quality of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Link to={`/projects/${project.id}`}>
                  <div className="relative h-48">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description.slice(0, 100)}...</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-600">{project.clientName}</span>
                      <div className="flex">
                        {[...Array(project.rating || 0)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/projects" 
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
            >
              View All Projects <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We stand out from the competition with our commitment to quality, timeliness, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={30} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Work</h3>
              <p className="text-gray-600">
                We deliver high-quality projects that exceed expectations and meet all requirements.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={30} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">
                We respect deadlines and ensure your project is delivered on or before the agreed date.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu size={30} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of experienced professionals with expertise across various domains.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={30} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                We work until you're completely satisfied with the final product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-primary-100 rounded-lg mb-4">
              <MessageSquare size={30} className="text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Outstanding service! The team delivered our e-commerce platform ahead of schedule and exceeded all expectations. Highly recommended!"
              </p>
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-gray-500">CEO, Fashion Boutique</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Professional team with excellent communication. They helped us create a mobile app that our customers love. Great attention to detail!"
              </p>
              <div>
                <p className="font-semibold text-gray-900">Michael Chen</p>
                <p className="text-gray-500">Founder, Tech Startup</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "The academic research project was thoroughly done and well-documented. The team's expertise in the subject matter was impressive."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Dr. Emily Brown</p>
                <p className="text-gray-500">Research Director</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/testimonials" 
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
            >
              View All Testimonials <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2 p-12">
                <div className="inline-block p-3 bg-white/10 rounded-lg mb-4">
                  <Mail size={30} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Let's Discuss Your Project</h2>
                <p className="text-primary-100 mb-8">
                  Ready to start your project? Get in touch with us today for a free consultation and quote.
                </p>
                <div className="space-y-4">
                  <Link 
                    to="/order" 
                    className="block w-full sm:w-auto text-center px-6 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-primary-50 transition-colors"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block w-full sm:w-auto text-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-500 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We stand out from the competition with our commitment to quality, timeliness, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={30} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Work</h3>
              <p className="text-gray-600">
                We deliver high-quality projects that exceed expectations and meet all requirements.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={30} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">
                We respect deadlines and ensure your project is delivered on or before the agreed date.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu size={30} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of experienced professionals with expertise across various domains.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={30} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                We work until you're completely satisfied with the final product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Order your project today and experience our professional service firsthand. We're committed to delivering excellence.
          </p>
          <Link 
            to="/order" 
            className="inline-block px-8 py-4 bg-accent-500 text-white font-medium rounded-md hover:bg-accent-600 transition-colors"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
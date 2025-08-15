import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, Globe, Github, FileText, Star, Calendar, User, Clock, Award, CheckCircle, ExternalLink, Code, Smartphone, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Project Not Found</h1>
            <Link to="/projects" className="mt-4 inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
              <ArrowLeft className="mr-2" size={20} />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/projects" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors duration-200">
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-96 overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="text-center text-white px-4">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    <Award size={16} className="mr-2" />
                    {project.category}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                  <p className="text-xl opacity-90">{project.type}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Project Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 -mt-16 relative z-10">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <User className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Client</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.clientName}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <Clock className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Timeline</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.deliveryTime}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <Code className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Category</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.category}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Rating</h3>
                <div className="flex justify-center">
                  {[...Array(project.rating || 5)].map((_, index) => (
                    <Star key={index} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            {/* Project Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mr-4">
                    <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Challenge</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.challenge}</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Solution</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <CheckCircle size={20} className="text-primary-600 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Images */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((image, index) => (
                  <div 
                    key={index}
                    className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Review */}
            {project.review && (
              <div className="mb-12 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Client Testimonial</h2>
                <div className="flex mb-4">
                  {[...Array(project.rating || 0)].map((_, index) => (
                    <Star 
                      key={index}
                      size={24}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed">
                  "{project.review}"
                </blockquote>
                <cite className="text-lg font-semibold text-gray-900 dark:text-white">— {project.clientName}</cite>
              </div>
            )}

            {/* Project Links */}
            {project.links && (
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Links</h2>
                <div className="flex flex-wrap gap-6">
                  {project.links.demo && (
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Globe size={20} className="mr-3" />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Github size={20} className="mr-3" />
                      Source Code
                    </a>
                  )}
                  {project.links.documentation && (
                    <a 
                      href={project.links.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <FileText size={20} className="mr-3" />
                      Documentation
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.filter(p => p.id !== project.id && p.category === project.category).slice(0, 3).map(relatedProject => (
              <Link key={relatedProject.id} to={`/projects/${relatedProject.id}`} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedProject.imageUrl} 
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white rounded-full text-sm font-medium">
                        {relatedProject.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {relatedProject.description.slice(0, 100)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-600 dark:text-primary-400 font-medium">{relatedProject.clientName}</span>
                      <div className="flex">
                        {[...Array(relatedProject.rating || 5)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
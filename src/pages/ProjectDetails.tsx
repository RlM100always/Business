import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, Globe, Github, FileText, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Project Not Found</h1>
            <Link to="/projects" className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700">
              <ArrowLeft className="mr-2" size={20} />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/projects" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Link>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-96">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl">{project.type}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold mb-2">Client</h3>
                <p>{project.clientName}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Timeline</h3>
                <p>{project.deliveryTime}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Category</h3>
                <p>{project.category}</p>
              </div>
            </div>

            {/* Project Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-gray-600">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-gray-600">{project.solution}</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Star size={20} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Images */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                ))}
              </div>
            </div>

            {/* Client Review */}
            {project.review && (
              <div className="mb-12 bg-primary-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Client Review</h2>
                <div className="flex mb-2">
                  {[...Array(project.rating || 0)].map((_, index) => (
                    <Star 
                      key={index}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{project.review}"</p>
                <p className="mt-2 font-semibold">- {project.clientName}</p>
              </div>
            )}

            {/* Project Links */}
            {project.links && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Links</h2>
                <div className="flex flex-wrap gap-4">
                  {project.links.demo && (
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                    >
                      <Globe size={20} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
                    >
                      <Github size={20} className="mr-2" />
                      Source Code
                    </a>
                  )}
                  {project.links.documentation && (
                    <a 
                      href={project.links.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                    >
                      <FileText size={20} className="mr-2" />
                      Documentation
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
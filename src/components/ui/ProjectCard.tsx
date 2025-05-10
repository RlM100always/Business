import { useState } from 'react';
import { Clock, Tag, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectDetails } from '../../data/projects';

interface ProjectCardProps {
  project: ProjectDetails;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showReview, setShowReview] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link to={`/projects/${project.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded">
            {project.category}
          </div>
        </div>
      </Link>
      
      <div className="p-5">
        <Link to={`/projects/${project.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600">
            {project.title}
          </h3>
        </Link>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Tag size={16} className="mr-1 text-primary-500" />
          <span>{project.type}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <User size={16} className="mr-1 text-primary-500" />
          <span>{project.clientName}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Clock size={16} className="mr-1 text-primary-500" />
          <span>{project.deliveryTime}</span>
        </div>
        
        {project.review && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <button 
              onClick={() => setShowReview(!showReview)}
              className="text-sm text-primary-600 hover:text-primary-700 mb-2 focus:outline-none"
            >
              {showReview ? 'Hide Client Review' : 'Show Client Review'}
            </button>
            
            {showReview && (
              <div className="mt-2">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill={i < (project.rating || 0) ? "currentColor" : "none"}
                      stroke={i < (project.rating || 0) ? "none" : "currentColor"}
                      className={`w-4 h-4 ${i < (project.rating || 0) ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic">{project.review}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
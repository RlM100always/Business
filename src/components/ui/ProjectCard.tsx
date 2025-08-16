import { useState } from 'react';
import { Clock, Tag, User, Star, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectDetails } from '../../data/projects';

interface ProjectCardProps {
  project: ProjectDetails;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showReview, setShowReview] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
      <Link to={`/projects/${project.id}`}>
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
              {project.category}
            </span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ExternalLink size={20} className="text-white" />
            </div>
          </div>
        </div>
      </Link>
      
      <div className="p-5 sm:p-6">
        <Link to={`/projects/${project.id}`}>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 line-clamp-2">
            {project.title}
          </h3>
        </Link>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Tag size={16} className="mr-2 text-primary-500 flex-shrink-0" />
            <span className="truncate">{project.type}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <User size={16} className="mr-2 text-primary-500 flex-shrink-0" />
            <span className="truncate">{project.clientName}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Clock size={16} className="mr-2 text-primary-500 flex-shrink-0" />
            <span>{project.deliveryTime}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={`${i < (project.rating || 0) ? "text-yellow-400 fill-current" : "text-gray-300 dark:text-gray-600"}`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
              ({project.rating || 0}/5)
            </span>
          </div>
          <Link
            to={`/projects/${project.id}`}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
        
        {project.review && (
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <button 
              onClick={() => setShowReview(!showReview)}
              className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-2 focus:outline-none transition-colors duration-200"
            >
              {showReview ? 'Hide Client Review' : 'Show Client Review'}
            </button>
            
            {showReview && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  "{project.review}"
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
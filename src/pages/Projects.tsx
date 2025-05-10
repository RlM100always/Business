import { useState, useEffect } from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { Search, Filter } from 'lucide-react';
import { projectsData } from '../data/projects';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'Web', name: 'Web Development' },
  { id: 'Mobile', name: 'Mobile Development' },
  { id: 'Academic', name: 'Academic Projects' }
];

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    filterProjects();
  }, [activeCategory, searchTerm]);

  const filterProjects = () => {
    let filtered = projectsData;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(project => project.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        project => 
          project.title.toLowerCase().includes(term) ||
          project.type.toLowerCase().includes(term) ||
          project.clientName.toLowerCase().includes(term)
      );
    }
    
    setFilteredProjects(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through our portfolio of successfully delivered projects across various domains.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div className="relative max-w-md w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div className="text-sm text-gray-600 flex items-center mr-2">
                <Filter size={16} className="mr-1" />
                <span>Filter by:</span>
              </div>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-1.5 text-sm rounded-md transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}
              className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
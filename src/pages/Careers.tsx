import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Clock, DollarSign, Users, Award, Heart, Globe, ChevronRight, Star, Play, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: string;
  salary?: string;
  description: string;
  postedDate: string;
  isHot?: boolean;
  isNew?: boolean;
  isUrgent?: boolean;
}

const Careers: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    department: 'all',
    location: 'all',
    type: 'all',
    experience: 'all'
  });

  // Sample job data
  const sampleJobs: Job[] = [
    {
      id: '1',
      title: 'Senior Frontend Developer (React)',
      department: 'Engineering',
      location: 'Dhaka/Remote',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '$40,000 - $60,000',
      description: 'Build modern UI for our SaaS and client projects. Work with international teams, students welcome for junior roles.',
      postedDate: '2024-01-15',
      isHot: true
    },
    {
      id: '2',
      title: 'Mobile App Developer (Flutter)',
      department: 'Engineering',
      location: 'Dhaka',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '$35,000 - $50,000',
      description: 'Develop cross-platform mobile applications using Flutter. Experience with Firebase and REST APIs required.',
      postedDate: '2024-01-10',
      isNew: true
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-3 years',
      salary: '$30,000 - $45,000',
      description: 'Create beautiful and intuitive user interfaces. Work closely with development teams to bring designs to life.',
      postedDate: '2024-01-08'
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Dhaka',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '$45,000 - $70,000',
      description: 'Manage cloud infrastructure and CI/CD pipelines. Experience with AWS, Docker, and Kubernetes required.',
      postedDate: '2024-01-05',
      isUrgent: true
    },
    {
      id: '5',
      title: 'Software Engineering Intern',
      department: 'Engineering',
      location: 'Dhaka',
      type: 'Internship',
      experience: 'Entry Level',
      description: 'Perfect opportunity for students to gain hands-on experience in software development. Mentorship provided.',
      postedDate: '2024-01-12',
      isNew: true
    },
    {
      id: '6',
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '$25,000 - $40,000',
      description: 'Drive digital marketing campaigns and grow our online presence. Experience with SEO, SEM, and social media required.',
      postedDate: '2024-01-03'
    }
  ];

  useEffect(() => {
    setJobs(sampleJobs);
    setFilteredJobs(sampleJobs);
  }, []);

  useEffect(() => {
    filterJobs();
  }, [searchTerm, filters, jobs]);

  const filterJobs = () => {
    let filtered = jobs;

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(term) ||
        job.department.toLowerCase().includes(term) ||
        job.description.toLowerCase().includes(term)
      );
    }

    // Department filter
    if (filters.department !== 'all') {
      filtered = filtered.filter(job => job.department === filters.department);
    }

    // Location filter
    if (filters.location !== 'all') {
      filtered = filtered.filter(job => job.location.includes(filters.location));
    }

    // Type filter
    if (filters.type !== 'all') {
      filtered = filtered.filter(job => job.type === filters.type);
    }

    // Experience filter
    if (filters.experience !== 'all') {
      filtered = filtered.filter(job => job.experience.includes(filters.experience));
    }

    setFilteredJobs(filtered);
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'hot': return 'bg-red-100 text-red-800 border-red-200';
      case 'new': return 'bg-green-100 text-green-800 border-green-200';
      case 'urgent': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Briefcase size={16} className="mr-2" />
                Join Our Team
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Build the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Trivance Tech</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Join Bangladesh's premier IT company and work on cutting-edge projects with international clients. We offer competitive salaries, flexible work arrangements, and excellent growth opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#jobs"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                  <ChevronRight size={20} className="ml-2" />
                </a>
                <button className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Play size={20} className="mr-2" />
                  Watch Culture Video
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                  alt="Team at work" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                    <Play size={24} className="text-white ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We believe in creating an environment where talented individuals can thrive and make a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Diverse Team</h3>
              <p className="text-gray-600 dark:text-gray-300">Work with talented professionals from diverse backgrounds and cultures.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Remote Friendly</h3>
              <p className="text-gray-600 dark:text-gray-300">Flexible work arrangements with remote and hybrid options available.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Growth Opportunities</h3>
              <p className="text-gray-600 dark:text-gray-300">Continuous learning and career advancement with mentorship programs.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Great Benefits</h3>
              <p className="text-gray-600 dark:text-gray-300">Competitive salary, health benefits, and flexible time off policies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student-Friendly Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
                <GraduationCap size={16} className="mr-2" />
                For Students & New Graduates
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Internships & Campus Hiring
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We welcome talented students and fresh graduates to join our team. Our internship program provides hands-on experience with real projects and dedicated mentorship.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Paid internships with competitive stipends</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Mentorship from senior developers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Opportunity for full-time conversion</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Work on international client projects</span>
                </div>
              </div>
              <Link
                to="#jobs"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300"
              >
                View Internship Opportunities
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="Students working" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">4.9/5 Intern Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="jobs" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find your next career opportunity with us
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <select
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                value={filters.department}
                onChange={(e) => setFilters({...filters, department: e.target.value})}
              >
                <option value="all">All Departments</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
              </select>
              
              <select
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
              >
                <option value="all">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
              
              <select
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
              >
                <option value="all">All Locations</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group">
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center mb-2">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mr-3">
                                {job.title}
                              </h3>
                              <div className="flex space-x-2">
                                {job.isHot && (
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getBadgeColor('hot')}`}>
                                    🔥 Hot
                                  </span>
                                )}
                                {job.isNew && (
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getBadgeColor('new')}`}>
                                    ✨ New
                                  </span>
                                )}
                                {job.isUrgent && (
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getBadgeColor('urgent')}`}>
                                    ⚡ Urgent
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-300 space-x-4 mb-3">
                              <div className="flex items-center">
                                <Briefcase size={16} className="mr-1" />
                                {job.department}
                              </div>
                              <div className="flex items-center">
                                <MapPin size={16} className="mr-1" />
                                {job.location}
                              </div>
                              <div className="flex items-center">
                                <Clock size={16} className="mr-1" />
                                {job.type}
                              </div>
                              {job.salary && (
                                <div className="flex items-center">
                                  <DollarSign size={16} className="mr-1" />
                                  {job.salary}
                                </div>
                              )}
                            </div>
                            
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                              {job.description}
                            </p>
                            
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              Posted: {new Date(job.postedDate).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                        <Link
                          to={`/careers/job/${job.id}`}
                          className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-center"
                        >
                          View Details
                        </Link>
                        <Link
                          to={`/careers/apply/${job.id}`}
                          className="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300 text-center group-hover:shadow-lg"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No jobs found</h3>
                <p className="text-gray-600 dark:text-gray-300">Try adjusting your search criteria or check back later for new opportunities.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Our Team Says</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hear from our employees about their experience working at Trivance Tech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "Working at Trivance Tech has been an incredible journey. The team is supportive, and I've learned so much working on international projects."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" 
                  alt="Employee" 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Arif Hassan</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Senior Developer</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "The internship program here is fantastic. I got hands-on experience with real projects and amazing mentorship from day one."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" 
                  alt="Employee" 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Fatima Rahman</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">UI/UX Designer</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "Great work-life balance and the flexibility to work remotely. The company truly cares about employee wellbeing and growth."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" 
                  alt="Employee" 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Karim Ahmed</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">DevOps Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Contact HR Team
            </Link>
            <a
              href="mailto:careers@trivancetech.com"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300 border border-white/20"
            >
              Send Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
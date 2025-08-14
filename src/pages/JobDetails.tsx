import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, DollarSign, Briefcase, Users, Calendar, Share2 } from 'lucide-react';

const JobDetails: React.FC = () => {
  const { id } = useParams();

  // Sample job data (in a real app, this would come from an API)
  const job = {
    id: '1',
    title: 'Senior Frontend Developer (React)',
    department: 'Engineering',
    location: 'Dhaka/Remote',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$40,000 - $60,000',
    postedDate: '2024-01-15',
    expiryDate: '2024-02-15',
    hiringManager: 'Sarah Khan, CTO',
    description: `We are looking for a talented Senior Frontend Developer to join our growing engineering team. You will be responsible for building modern, responsive web applications using React and other cutting-edge technologies.`,
    responsibilities: [
      'Develop and maintain high-quality React applications',
      'Collaborate with designers to implement pixel-perfect UI components',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and mentor junior developers',
      'Work closely with backend developers to integrate APIs',
      'Optimize applications for maximum speed and scalability',
      'Stay up-to-date with the latest frontend technologies and best practices'
    ],
    qualifications: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience with React and modern JavaScript',
      'Strong knowledge of HTML5, CSS3, and responsive design',
      'Experience with state management libraries (Redux, Zustand)',
      'Familiarity with build tools (Webpack, Vite) and version control (Git)',
      'Understanding of RESTful APIs and GraphQL',
      'Experience with testing frameworks (Jest, React Testing Library)',
      'Excellent problem-solving and communication skills'
    ],
    perks: [
      'Competitive salary with performance bonuses',
      'Health insurance coverage',
      'Flexible working hours and remote work options',
      'Professional development budget',
      'Modern office in Gulshan, Dhaka',
      'Team outings and company events',
      'Career mentorship program',
      'Latest MacBook Pro and equipment'
    ]
  };

  const shareJob = () => {
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: `Check out this job opportunity at Trivance Tech: ${job.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Job link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/careers" 
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Careers
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <Briefcase size={16} className="mr-2 opacity-80" />
                    {job.department}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 opacity-80" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 opacity-80" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={16} className="mr-2 opacity-80" />
                    {job.salary}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 lg:mt-0 lg:ml-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={shareJob}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-colors duration-300 flex items-center justify-center"
                >
                  <Share2 size={18} className="mr-2" />
                  Share Job
                </button>
                <Link
                  to={`/careers/apply/${job.id}`}
                  className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center shadow-lg"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Job Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <div className="text-sm text-gray-600 dark:text-gray-300">Posted</div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {new Date(job.postedDate).toLocaleDateString()}
                </div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <div className="text-sm text-gray-600 dark:text-gray-300">Application Deadline</div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {new Date(job.expiryDate).toLocaleDateString()}
                </div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <div className="text-sm text-gray-600 dark:text-gray-300">Hiring Manager</div>
                <div className="font-semibold text-gray-900 dark:text-white">{job.hiringManager}</div>
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Job Description</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualifications */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Qualifications</h2>
              <ul className="space-y-3">
                {job.qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perks & Benefits */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Perks & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {job.perks.map((perk, index) => (
                  <div key={index} className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply Section */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to Apply?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Join our team and help us build amazing products that impact millions of users worldwide.
              </p>
              <Link
                to={`/careers/apply/${job.id}`}
                className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Apply for This Position
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
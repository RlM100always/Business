import { useState } from 'react';
import TestimonialCard, { Testimonial } from '../components/ui/TestimonialCard';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

// Sample testimonial data
const testimonialsData: Testimonial[] = [
  {
    id: '1',
    clientName: 'John Smith',
    projectTitle: 'E-commerce Website',
    feedback: 'Exceptional work! The website exceeded our expectations and has significantly increased our online sales. The team was professional and responsive throughout the project.',
    rating: 5
  },
  {
    id: '2',
    clientName: 'Emily Johnson',
    projectTitle: 'Fitness Tracking App',
    feedback: 'Great app with intuitive interface. Our customers love the tracking features and clean design. The development process was smooth and the team was always open to feedback.',
    rating: 4
  },
  {
    id: '3',
    clientName: 'Dr. Michael Chen',
    projectTitle: 'Machine Learning Research',
    feedback: 'Well-researched and thoroughly documented. The implementation worked exactly as expected with great results. Will definitely work with this team again for future projects.',
    rating: 5
  },
  {
    id: '4',
    clientName: 'Sarah Williams',
    projectTitle: 'Inventory Management System',
    feedback: 'The system has streamlined our inventory processes completely. Very responsive and helpful team. They delivered exactly what we needed and on time.',
    rating: 5
  },
  {
    id: '5',
    clientName: 'Robert Garcia',
    projectTitle: 'Environmental Impact Study',
    feedback: 'Comprehensive study with valuable insights. The data analysis was particularly helpful for our cause. The quality of work exceeded our expectations.',
    rating: 4
  },
  {
    id: '6',
    clientName: 'Jennifer Lee',
    projectTitle: 'Food Delivery App',
    feedback: 'Outstanding app development. It has transformed our business model completely. The team was professional, responsive, and delivered ahead of schedule.',
    rating: 5
  }
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  
  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage);
  const displayedTestimonials = testimonialsData.slice(
    currentPage * testimonialsPerPage, 
    (currentPage + 1) * testimonialsPerPage
  );
  
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-primary-100 rounded-lg mb-4">
            <MessageSquare size={30} className="text-primary-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:grid md:grid-cols-2">
            <div className="bg-primary-700 py-12 px-6 flex items-center">
              <div className="text-white space-y-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="w-6 h-6 text-yellow-400"
                    >
                      <path 
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-2xl font-semibold italic">"The quality of work was exceptional and delivered ahead of schedule. We've been working together for three years now!"</p>
                <div>
                  <h3 className="text-xl font-bold">Thomas Anderson</h3>
                  <p className="text-primary-200">CEO, Meta Systems</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Happy clients in a meeting" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedTestimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={goToPrevPage}
              className="mx-1 p-2 rounded-md text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft size={24} />
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`mx-1 w-10 h-10 rounded-md ${
                  currentPage === index
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:bg-gray-200'
                } transition-colors`}
              >
                {index + 1}
              </button>
            ))}
            
            <button 
              onClick={goToNextPage}
              className="mx-1 p-2 rounded-md text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
import { User } from 'lucide-react';

export interface Testimonial {
  id: string;
  clientName: string;
  projectTitle: string;
  feedback: string;
  rating: number;
  avatar?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
        {testimonial.avatar ? (
          <img 
            src={testimonial.avatar} 
            alt={testimonial.clientName} 
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <User className="w-6 h-6 text-primary-600" />
        )}
      </div>
      
      <div className="pt-6 text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{testimonial.clientName}</h3>
        <p className="text-sm text-gray-600">{testimonial.projectTitle}</p>
      </div>
      
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={i < testimonial.rating ? "currentColor" : "none"}
            stroke={i < testimonial.rating ? "none" : "currentColor"}
            className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
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
      
      <p className="text-gray-700 text-center italic">{testimonial.feedback}</p>
    </div>
  );
};

export default TestimonialCard;
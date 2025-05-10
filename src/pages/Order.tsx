import OrderForm from '../components/forms/OrderForm';
import { ClipboardCheck, Clock, HelpCircle, DollarSign } from 'lucide-react';

const Order = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Order Your Project</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fill out the form below to get started with your project. We'll review your requirements and get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-primary-700 text-white p-8">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Submit Your Request</h3>
                    <p className="text-primary-100">
                      Fill out the form with project details.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Receive a Quote</h3>
                    <p className="text-primary-100">
                      We'll review and provide a quote within 24 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Development Begins</h3>
                    <p className="text-primary-100">
                      Once approved, we start working on your project.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Delivery & Feedback</h3>
                    <p className="text-primary-100">
                      Receive your project and provide feedback for revisions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-6 border-t border-white/20">
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <p className="mb-4">
                  If you have any questions or need assistance, please contact us:
                </p>
                <a href="mailto:support@projecthub.com" className="text-white hover:text-primary-200">
                  support@projecthub.com
                </a>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <ClipboardCheck size={24} className="text-primary-600" />
                  </div>
                  <h3 className="font-medium">Quality Work</h3>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock size={24} className="text-primary-600" />
                  </div>
                  <h3 className="font-medium">On-Time Delivery</h3>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <HelpCircle size={24} className="text-primary-600" />
                  </div>
                  <h3 className="font-medium">24/7 Support</h3>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <DollarSign size={24} className="text-primary-600" />
                  </div>
                  <h3 className="font-medium">Affordable Rates</h3>
                </div>
              </div>
              
              <OrderForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
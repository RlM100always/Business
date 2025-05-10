import { useForm, SubmitHandler } from 'react-hook-form';
import { AlertCircle } from 'lucide-react';

interface OrderFormInputs {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  projectType: string;
  deadline: string;
  description: string;
  fileUrl: string;
  budget: string;
}

const OrderForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<OrderFormInputs>();

  const onSubmit: SubmitHandler<OrderFormInputs> = async (data) => {
    // In a real application, this would submit to Google Sheets via an API
    console.log('Form submitted:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Display success message and reset form
    alert('Your order has been submitted successfully!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            className={`w-full px-4 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder="Your full name"
            {...register('fullName', { required: 'Full name is required' })}
          />
          {errors.fullName && (
            <p className="mt-1 text-red-500 text-sm flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder="your.email@example.com"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-sm flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder="(123) 456-7890"
            {...register('phone')}
          />
          {errors.phone && (
            <p className="mt-1 text-red-500 text-sm flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Institution/Company */}
        <div>
          <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
            Institution/Company
          </label>
          <input
            id="institution"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="University or Company name"
            {...register('institution')}
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
            Project Type *
          </label>
          <select
            id="projectType"
            className={`w-full px-4 py-2 border ${errors.projectType ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white`}
            {...register('projectType', { required: 'Project type is required' })}
          >
            <option value="">Select project type</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile Development</option>
            <option value="academic">Academic Project</option>
            <option value="research">Research Paper</option>
            <option value="design">UI/UX Design</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType && (
            <p className="mt-1 text-red-500 text-sm flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.projectType.message}
            </p>
          )}
        </div>

        {/* Deadline */}
        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
            Deadline *
          </label>
          <input
            id="deadline"
            type="date"
            className={`w-full px-4 py-2 border ${errors.deadline ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
            {...register('deadline', { required: 'Deadline is required' })}
          />
          {errors.deadline && (
            <p className="mt-1 text-red-500 text-sm flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.deadline.message}
            </p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Budget (USD)
          </label>
          <input
            id="budget"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Your budget for this project"
            {...register('budget')}
          />
        </div>

        {/* File Upload */}
        <div className="md:col-span-2">
          <label htmlFor="fileUrl" className="block text-sm font-medium text-gray-700 mb-1">
            File URL (Google Drive, Dropbox, etc.)
          </label>
          <input
            id="fileUrl"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Paste file sharing link here"
            {...register('fileUrl')}
          />
          <p className="mt-1 text-sm text-gray-500">
            Please upload any relevant files to a cloud service and share the link here.
          </p>
        </div>

        {/* Project Description */}
        <div className="md:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Project Description *
          </label>
          <textarea
            id="description"
            rows={6}
            className={`w-full px-4 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder="Describe your project requirements, goals, and any specific details..."
            {...register('description', { 
              required: 'Project description is required',
              minLength: {
                value: 20,
                message: 'Description must be at least 20 characters'
              }
            })}
          ></textarea>
          {errors.description && (
            <p className="mt-1 text-red-500 text-sm flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.description.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center mt-2">
        <input
          id="terms"
          type="checkbox"
          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          required
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
          I agree to the <a href="#" className="text-primary-600 hover:text-primary-800">terms and conditions</a>
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Order'}
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
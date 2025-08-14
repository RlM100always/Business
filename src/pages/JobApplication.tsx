import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Upload, CheckCircle, AlertCircle, User, FileText, MessageSquare, Send } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ApplicationFormData {
  // Personal Details
  fullName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  
  // Professional Details
  currentPosition: string;
  experience: string;
  expectedSalary: string;
  startDate: string;
  relocate: string;
  
  // Files
  resume: FileList;
  portfolioLink: string;
  githubLink: string;
  linkedinLink: string;
  
  // Screening Questions
  whyJoin: string;
  biggestChallenge: string;
  remoteWork: string;
  
  // Consent
  dataConsent: boolean;
  termsConsent: boolean;
}

const JobApplication: React.FC = () => {
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    watch,
    trigger
  } = useForm<ApplicationFormData>();

  const totalSteps = 4;

  // Sample job data
  const job = {
    id: '1',
    title: 'Senior Frontend Developer (React)',
    department: 'Engineering',
    location: 'Dhaka/Remote'
  };

  const onSubmit: SubmitHandler<ApplicationFormData> = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate application ID
    const appId = `APP-${Date.now().toString().slice(-6)}`;
    setApplicationId(appId);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await trigger(fieldsToValidate);
    
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getFieldsForStep = (step: number): (keyof ApplicationFormData)[] => {
    switch (step) {
      case 1:
        return ['fullName', 'email', 'phone', 'city', 'country'];
      case 2:
        return ['resume', 'currentPosition', 'experience'];
      case 3:
        return ['whyJoin', 'expectedSalary', 'startDate'];
      case 4:
        return ['dataConsent', 'termsConsent'];
      default:
        return [];
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Application Submitted!</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Thank you for applying to the <strong>{job.title}</strong> position. We've received your application and will review it shortly.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Your application ID: <span className="font-mono font-bold text-primary-600 dark:text-primary-400">{applicationId}</span>
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We'll send you an email confirmation shortly and will be in touch within 3-5 business days regarding next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300"
              >
                View More Jobs
              </Link>
              <Link
                to="/"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to={`/careers/job/${id}`}
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Job Details
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-6">
            <h1 className="text-2xl font-bold mb-2">Apply for {job.title}</h1>
            <p className="opacity-90">{job.department} • {job.location}</p>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6">
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <User className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Personal Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                        errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="+880 1700-000000"
                      {...register('phone', { required: 'Phone number is required' })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Current Position
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                      placeholder="e.g., Frontend Developer"
                      {...register('currentPosition')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                        errors.city ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="Dhaka"
                      {...register('city', { required: 'City is required' })}
                    />
                    {errors.city && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Country *
                    </label>
                    <select
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                        errors.country ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      {...register('country', { required: 'Country is required' })}
                    >
                      <option value="">Select Country</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.country && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.country.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Resume & Portfolio */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Resume & Portfolio</h2>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Resume/CV * (PDF or DOCX, max 5MB)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg hover:border-primary-400 transition-colors duration-200">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 dark:text-gray-300">
                        <label className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            className="sr-only"
                            accept=".pdf,.doc,.docx"
                            {...register('resume', { required: 'Resume is required' })}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOC, DOCX up to 5MB</p>
                    </div>
                  </div>
                  {errors.resume && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.resume.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Years of Experience *
                    </label>
                    <select
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                        errors.experience ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      {...register('experience', { required: 'Experience is required' })}
                    >
                      <option value="">Select Experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-8">5-8 years</option>
                      <option value="8+">8+ years</option>
                    </select>
                    {errors.experience && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.experience.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Portfolio Website
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                      placeholder="https://yourportfolio.com"
                      {...register('portfolioLink')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      GitHub Profile
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                      placeholder="https://github.com/yourusername"
                      {...register('githubLink')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                      placeholder="https://linkedin.com/in/yourprofile"
                      {...register('linkedinLink')}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Screening Questions */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Screening Questions</h2>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Why do you want to join Trivance Tech? *
                  </label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.whyJoin ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Tell us what excites you about this opportunity..."
                    {...register('whyJoin', { 
                      required: 'This field is required',
                      minLength: { value: 50, message: 'Please provide at least 50 characters' }
                    })}
                  />
                  {errors.whyJoin && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.whyJoin.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    What's the biggest technical challenge you've overcome?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Describe a challenging project or problem you solved..."
                    {...register('biggestChallenge')}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Expected Salary (USD) *
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                        errors.expectedSalary ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="e.g., $45,000"
                      {...register('expectedSalary', { required: 'Expected salary is required' })}
                    />
                    {errors.expectedSalary && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.expectedSalary.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Earliest Start Date *
                    </label>
                    <input
                      type="date"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                        errors.startDate ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      {...register('startDate', { required: 'Start date is required' })}
                    />
                    {errors.startDate && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.startDate.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Willing to Relocate?
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                      {...register('relocate')}
                    >
                      <option value="">Select Option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="maybe">Maybe</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    How do you feel about remote work?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="prefer-remote"
                        className="mr-2 text-primary-600 focus:ring-primary-500"
                        {...register('remoteWork')}
                      />
                      <span className="text-gray-700 dark:text-gray-300">I prefer working remotely</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="prefer-office"
                        className="mr-2 text-primary-600 focus:ring-primary-500"
                        {...register('remoteWork')}
                      />
                      <span className="text-gray-700 dark:text-gray-300">I prefer working in the office</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="hybrid"
                        className="mr-2 text-primary-600 focus:ring-primary-500"
                        {...register('remoteWork')}
                      />
                      <span className="text-gray-700 dark:text-gray-300">I'm flexible with hybrid arrangements</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <Send className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Review & Submit</h2>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Application Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Name:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-400">{watch('fullName')}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Email:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-400">{watch('email')}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Experience:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-400">{watch('experience')}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Expected Salary:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-400">{watch('expectedSalary')}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      className={`mt-1 mr-3 text-primary-600 focus:ring-primary-500 ${
                        errors.dataConsent ? 'border-red-500' : ''
                      }`}
                      {...register('dataConsent', { required: 'You must consent to data processing' })}
                    />
                    <div>
                      <label className="text-sm text-gray-700 dark:text-gray-300">
                        I consent to the processing of my personal data for recruitment purposes in accordance with the 
                        <a href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline ml-1">Privacy Policy</a>.
                      </label>
                      {errors.dataConsent && (
                        <p className="mt-1 text-red-500 text-sm flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.dataConsent.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      className={`mt-1 mr-3 text-primary-600 focus:ring-primary-500 ${
                        errors.termsConsent ? 'border-red-500' : ''
                      }`}
                      {...register('termsConsent', { required: 'You must agree to the terms' })}
                    />
                    <div>
                      <label className="text-sm text-gray-700 dark:text-gray-300">
                        I agree to the 
                        <a href="/terms" className="text-primary-600 dark:text-primary-400 hover:underline ml-1">Terms and Conditions</a>
                        and confirm that all information provided is accurate.
                      </label>
                      {errors.termsConsent && (
                        <p className="mt-1 text-red-500 text-sm flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.termsConsent.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-medium transition-colors duration-300 ${
                  currentStep === 1
                    ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                Previous
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
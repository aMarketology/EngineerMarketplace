'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { 
  User, 
  Mail, 
  Lock, 
  Briefcase, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Upload,
  Star,
  MapPin
} from 'lucide-react';

// Form validation schemas
const accountSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  userType: z.enum(['buyer', 'seller', 'both']),
  terms: z.boolean().refine(val => val === true, 'You must agree to the terms')
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const professionalSchema = z.object({
  company: z.string().optional(),
  title: z.string().min(2, 'Professional title is required'),
  experience: z.string().min(1, 'Experience level is required'),
  location: z.string().min(2, 'Location is required'),
  specialties: z.array(z.string()).min(1, 'Select at least one specialty'),
  hourlyRate: z.string().min(1, 'Hourly rate is required'),
  bio: z.string().min(50, 'Bio must be at least 50 characters'),
});

type AccountFormData = z.infer<typeof accountSchema>;
type ProfessionalFormData = z.infer<typeof professionalSchema>;

const engineeringSpecialties = [
  'Structural Engineering', 'Mechanical Engineering', 'Electrical Engineering',
  'Civil Engineering', 'Chemical Engineering', 'Aerospace Engineering',
  'Software Engineering', 'Environmental Engineering', 'Biomedical Engineering',
  'Industrial Engineering', 'Materials Engineering', 'Petroleum Engineering'
];

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState<string>('');
  const totalSteps = userType === 'seller' ? 3 : 2;

  const accountForm = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      userType: 'buyer',
      terms: false
    }
  });

  const professionalForm = useForm<ProfessionalFormData>({
    resolver: zodResolver(professionalSchema),
    defaultValues: {
      specialties: [],
      experience: '',
      hourlyRate: ''
    }
  });

  const onAccountSubmit: SubmitHandler<AccountFormData> = (data) => {
    setUserType(data.userType);
    setCurrentStep(2);
    toast.success('Account details saved!');
  };

  const onProfessionalSubmit: SubmitHandler<ProfessionalFormData> = (data) => {
    setCurrentStep(3);
    toast.success('Professional profile created!');
  };

  const handleFinalSubmit = () => {
    toast.success('Welcome to EngineerMarketplace! 🎉');
    // Here you would typically redirect to dashboard
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-slate-950 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="relative max-w-2xl mx-auto">
        {/* Progress Bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Join EngineerMarketplace
            </h1>
            <span className="text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-slate-700">
            <motion.div 
              className="bg-gradient-to-r from-primary to-blue-600 h-full rounded-full shadow-lg shadow-primary/20"
              initial={{ width: "33%" }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Step 1: Account Setup */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <User className="h-8 w-8 text-white" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
                <p className="text-slate-400">Let's start with the basics to get you connected</p>
              </div>

              <form onSubmit={accountForm.handleSubmit(onAccountSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-slate-300 mb-3">
                      Full Name
                    </label>
                    <input
                      {...accountForm.register('fullName')}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                    {accountForm.formState.errors.fullName && (
                      <p className="mt-2 text-sm text-red-400">{accountForm.formState.errors.fullName.message}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-slate-300 mb-3">
                      Email Address
                    </label>
                    <input
                      {...accountForm.register('email')}
                      type="email"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all backdrop-blur-sm"
                      placeholder="Enter your email address"
                    />
                    {accountForm.formState.errors.email && (
                      <p className="mt-2 text-sm text-red-400">{accountForm.formState.errors.email.message}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-slate-300 mb-3">
                      Password
                    </label>
                    <input
                      {...accountForm.register('password')}
                      type="password"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all backdrop-blur-sm"
                      placeholder="Create a strong password"
                    />
                    {accountForm.formState.errors.password && (
                      <p className="mt-2 text-sm text-red-400">{accountForm.formState.errors.password.message}</p>
                    )}
                  </motion.div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      {...accountForm.register('confirmPassword')}
                      type="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Confirm your password"
                    />
                    {accountForm.formState.errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600">{accountForm.formState.errors.confirmPassword.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      I want to
                    </label>
                    <select
                      {...accountForm.register('userType')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="buyer">Find Engineering Services</option>
                      <option value="seller">Offer Engineering Services</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    {...accountForm.register('terms')}
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label className="ml-3 block text-sm text-gray-900">
                    I agree to the{' '}
                    <a href="/terms" className="text-primary hover:text-blue-700 underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="text-primary hover:text-blue-700 underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {accountForm.formState.errors.terms && (
                  <p className="text-sm text-red-600">{accountForm.formState.errors.terms.message}</p>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                >
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
          )}

          {/* Step 2: Professional Profile (for sellers) */}
          {currentStep === 2 && userType === 'seller' && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Professional Profile</h2>
                <p className="text-gray-600 mt-2">Tell us about your engineering expertise</p>
              </div>

              <form onSubmit={professionalForm.handleSubmit(onProfessionalSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      {...professionalForm.register('company')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Professional Title
                    </label>
                    <input
                      {...professionalForm.register('title')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., Senior Structural Engineer"
                    />
                    {professionalForm.formState.errors.title && (
                      <p className="mt-1 text-sm text-red-600">{professionalForm.formState.errors.title.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level
                    </label>
                    <select
                      {...professionalForm.register('experience')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select experience level</option>
                      <option value="entry">Entry Level (0-2 years)</option>
                      <option value="mid">Mid Level (3-7 years)</option>
                      <option value="senior">Senior Level (8-15 years)</option>
                      <option value="expert">Expert (15+ years)</option>
                    </select>
                    {professionalForm.formState.errors.experience && (
                      <p className="mt-1 text-sm text-red-600">{professionalForm.formState.errors.experience.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      {...professionalForm.register('location')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="City, State/Country"
                    />
                    {professionalForm.formState.errors.location && (
                      <p className="mt-1 text-sm text-red-600">{professionalForm.formState.errors.location.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Engineering Specialties
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {engineeringSpecialties.map((specialty) => (
                      <label key={specialty} className="flex items-center">
                        <input
                          type="checkbox"
                          value={specialty}
                          {...professionalForm.register('specialties')}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{specialty}</span>
                      </label>
                    ))}
                  </div>
                  {professionalForm.formState.errors.specialties && (
                    <p className="mt-1 text-sm text-red-600">{professionalForm.formState.errors.specialties.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hourly Rate (USD)
                  </label>
                  <input
                    {...professionalForm.register('hourlyRate')}
                    type="number"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="150"
                  />
                  {professionalForm.formState.errors.hourlyRate && (
                    <p className="mt-1 text-sm text-red-600">{professionalForm.formState.errors.hourlyRate.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Professional Bio
                  </label>
                  <textarea
                    {...professionalForm.register('bio')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell potential clients about your experience, expertise, and what makes you unique..."
                  />
                  {professionalForm.formState.errors.bio && (
                    <p className="mt-1 text-sm text-red-600">{professionalForm.formState.errors.bio.message}</p>
                  )}
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-blue-700 transition-colors"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 3: Welcome/Success */}
          {currentStep === totalSteps && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to EngineerMarketplace!</h2>
              <p className="text-gray-600 mb-8">
                Your account has been created successfully. You're now ready to {userType === 'seller' ? 'start offering your engineering services' : 'find amazing engineering services'}.
              </p>
              <button
                onClick={handleFinalSubmit}
                className="w-full px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Login Link */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-primary hover:text-blue-700">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
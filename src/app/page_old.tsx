'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building, 
  Cog, 
  Zap, 
  Star, 
  Users, 
  CheckCircle,
  ArrowRight,
  Shield,
  Sparkles,
  Globe,
  Clock,
  Award,
  Calendar,
  MessageSquare,
  FileText,
  BarChart3,
  Workflow,
  Target,
  Briefcase,
  Layers,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

// Animated counter hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration]);

  return count;
}

export default function Home() {
  // Stats counters
  const servicesCount = useCounter(500);
  const ordersCount = useCounter(25000);

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      
      {/* Hero Section - ClickUp Style with Right Image */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Left Content */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 mr-2" />
                  The Engineering Marketplace
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Engineering work,
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  simplified
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                className="text-xl text-gray-600 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Find verified engineering professionals, manage projects, secure payments, and deliver excellence—all in one trusted marketplace.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link 
                  href="/marketplace" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center shadow-xl"
                >
                  Get started free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                
                <Link 
                  href="/marketplace"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  Browse services
                </Link>
              </motion.div>

              {/* Social Proof */}
              <motion.div 
                className="flex flex-col gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-semibold">4.8/5 from 2,000+ users</span>
                </div>

                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Money-back guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Secure & verified</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                {/* Main Hero Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-gray-200 overflow-hidden shadow-2xl">
                  {/* Animated Circles Background */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>

                  {/* Content Inside Hero Card */}
                  <div className="relative z-10 p-12 h-full flex flex-col justify-center">
                    <div className="space-y-8">
                      {/* Service Cards */}
                      {[
                        { icon: Building, label: 'Structural Design', color: 'bg-blue-100', iconColor: 'text-blue-600' },
                        { icon: Cog, label: 'Mechanical Systems', color: 'bg-purple-100', iconColor: 'text-purple-600' },
                        { icon: Zap, label: 'Electrical Work', color: 'bg-yellow-100', iconColor: 'text-yellow-600' },
                      ].map((service, index) => (
                        <motion.div
                          key={index}
                          className={`${service.color} rounded-2xl p-4 flex items-center space-x-4`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 + (index * 0.15) }}
                        >
                          <div className={`p-3 rounded-xl ${service.color}`}>
                            <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{service.label}</p>
                            <p className="text-sm text-gray-600">Verified experts</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-blue-600">{servicesCount}+</div>
                        <p className="text-xs text-gray-600 mt-1">Services</p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-purple-600">2K+</div>
                        <p className="text-xs text-gray-600 mt-1">Experts</p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-indigo-600">24/7</div>
                        <p className="text-xs text-gray-600 mt-1">Support</p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating Element 1 */}
                <motion.div
                  className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500 rounded-2xl opacity-20"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>

                {/* Floating Element 2 */}
                <motion.div
                  className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-500 rounded-full opacity-20"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* How It Works - Simple Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">How It Works</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Three simple steps to success
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Browse Services',
                description: 'Explore thousands of verified engineering services and professionals.',
                icon: Globe,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: '02',
                title: 'Secure Payment',
                description: 'Pay securely with escrow protection and money-back guarantee.',
                icon: Shield,
                color: 'from-green-500 to-emerald-500'
              },
              {
                step: '03',
                title: 'Deliver & Track',
                description: 'Manage deliverables, track progress, and communicate seamlessly.',
                icon: TrendingUp,
                color: 'from-purple-500 to-pink-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connecting line for desktop */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-1 bg-gradient-to-r from-blue-400 to-transparent"></div>
                )}

                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-gray-100 mb-4">{item.step}</div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Features</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Everything you need
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: 'Browse Services',
                description: 'Discover verified engineering professionals offering services from CAD design to structural analysis.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Shield,
                title: 'Secure Payments',
                description: 'Built-in escrow protection, secure transactions, and instant dispute resolution.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Users,
                title: 'Team Collaboration',
                description: 'Unified workspace for communication, milestone tracking, and document sharing.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Globe,
                title: 'Global Access',
                description: 'Connect with engineering experts from around the world, 24/7.',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Award,
                title: 'Quality Assured',
                description: 'All professionals are verified, vetted, and rated by our community.',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Our dedicated support team is always ready to help with any questions.',
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:bg-white">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to transform your engineering workflow?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of engineering professionals who trust our platform for secure, efficient project delivery.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/marketplace" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center shadow-xl"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="/marketplace"
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            className="mt-12 pt-12 border-t border-white/20 flex flex-wrap justify-center items-center gap-8 text-sm text-blue-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>No credit card required</span>
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Fully secure & encrypted</span>
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
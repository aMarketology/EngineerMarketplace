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
      
      {/* Hero Section - Inspired by ClickUp: Bold, centered, with gradients and subtle animations */}
      <section className="relative pt-32 pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                <Sparkles className="h-4 w-4 mr-2" />
                The engineering marketplace platform
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                Engineering Services
              </span>
              <br />
              <span className="text-white">Simplified & Secured</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect with verified engineering professionals. From structural design to electrical systems, 
              manage all your projects in one secure, unified marketplace.
            </motion.p>

            {/* CTA Buttons - ClickUp style: Prominent, with hover effects */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                href="/marketplace" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center shadow-2xl border border-blue-400/50"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                href="/marketplace"
                className="border-2 border-blue-400/50 text-blue-300 hover:bg-blue-500/10 px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Trust Info - Column layout for better spacing on mobile */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400 text-sm mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Secure & Verified</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Money-Back Guarantee</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-5 w-5 text-green-400" />
                <span>2,000+ Professionals</span>
              </div>
            </motion.div>

            {/* Engineering Service Icons - Enhanced grid with more spacing */}
            <motion.div 
              className="relative max-w-6xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
            >
              {/* Service Grid - 2 Rows with increased gap */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 mb-12">
                {[
                  { icon: Building, label: 'Structural', color: 'from-blue-500 to-blue-600' },
                  { icon: Cog, label: 'Mechanical', color: 'from-purple-500 to-purple-600' },
                  { icon: Zap, label: 'Electrical', color: 'from-yellow-500 to-orange-500' },
                  { icon: MessageSquare, label: 'Consultation', color: 'from-green-500 to-emerald-600' },
                  { icon: FileText, label: 'Documentation', color: 'from-indigo-500 to-indigo-600' },
                  { icon: Calendar, label: 'Scheduling', color: 'from-red-500 to-rose-600' }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center group"
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.0 + (index * 0.08),
                      type: "spring",
                      stiffness: 100 
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -15,
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-xl mb-3 cursor-pointer group-hover:shadow-2xl transition-all`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-blue-300 transition-colors">{service.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Second Row with consistent spacing */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 mb-12">
                {[
                  { icon: BarChart3, label: 'Analytics', color: 'from-pink-500 to-rose-500' },
                  { icon: Workflow, label: 'Processes', color: 'from-teal-500 to-cyan-600' },
                  { icon: Shield, label: 'Quality', color: 'from-violet-500 to-purple-600' },
                  { icon: Globe, label: 'Global', color: 'from-orange-500 to-amber-600' },
                  { icon: Award, label: 'Certified', color: 'from-lime-500 to-green-600' },
                  { icon: Target, label: 'Planning', color: 'from-sky-500 to-blue-600' }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center group"
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.5 + (index * 0.08),
                      type: "spring",
                      stiffness: 100 
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -15,
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-xl mb-3 cursor-pointer group-hover:shadow-2xl transition-all`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-blue-300 transition-colors">{service.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Row - Column layout with dividers for ClickUp-like clean separation */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm mb-8 items-center justify-items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{servicesCount}</div>
                <div className="text-gray-400">Services Available</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-gray-400">4.8/5 Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">2K+</div>
                <div className="text-gray-400">Professional Experts</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Problem Section - ClickUp style: Centered, with color accents and generous spacing */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">The Challenge</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Engineering projects are <span className="text-red-500">fragmented</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Multiple platforms, scattered communications, and complex workflows waste time and increase risk. 
            Your team deserves a unified solution.
          </motion.p>
        </div>
      </section>

      {/* Solution Section - Enhanced spacing */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">The Solution</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            One platform. <span className="text-blue-600">Complete control.</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Browse services, manage payments, track progress, and collaborate—all in a single, secure marketplace 
            built for engineering excellence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/marketplace" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-xl border border-blue-400/50">
              Explore the Marketplace
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The All-in-one Section - Feature grid with columns and increased padding */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Core Features</span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Everything engineers need
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Browse, hire, manage, and pay—all in one unified platform designed for your workflow.
            </motion.p>
          </div>

          {/* Feature Grid - 3 columns with more gap for spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {[
              {
                icon: Building,
                title: "Browse Services",
                description: "Discover verified engineering professionals offering services from CAD design to structural analysis with transparent pricing and instant booking.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Secure Payments", 
                description: "Built-in escrow protection, secure transactions, money-back guarantee, and instant dispute resolution for complete peace of mind.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Users,
                title: "Project Management",
                description: "Unified workspace for communication, milestone tracking, document sharing, and real-time project progress visibility.",
                color: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur`}></div>
                <div className="relative bg-white border border-gray-200 group-hover:border-gray-300 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section - 3-column grid with web3 vibes (e.g., global, decentralized feel) */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Use Cases</span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Built for every engineering need
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Whether you're managing complex projects or seeking specialized expertise, our marketplace scales with your needs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Project Launch",
                description: "From planning to execution, organize engineering projects with team collaboration, milestone tracking, and deliverable management.",
                icon: Target,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Expert Consultation", 
                description: "Get second opinions and specialized expertise from verified professionals for your most complex engineering challenges.",
                icon: Users,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Team Scaling",
                description: "Access a global network of certified engineers to scale your team on-demand without permanent overhead or long-term commitments.",
                icon: Globe,
                color: "from-purple-500 to-pink-500" 
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <useCase.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{useCase.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn more
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Full-width with columns for trust elements */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to transform your workflow?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of engineering professionals who trust our platform for secure, efficient project delivery.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/marketplace" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center shadow-2xl border border-blue-400/50"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="/marketplace"
              className="border-2 border-blue-400/50 text-blue-300 hover:bg-blue-500/10 px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 backdrop-blur-sm"
            >
              View Services
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-blue-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span>Fully secure & encrypted</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-5 w-5 text-green-400" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
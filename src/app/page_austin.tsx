'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { mockServices, mockCategories } from '@/lib/mockData';
import StructuredData from '@/components/StructuredData';
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
  Award
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
  const engineersCount = useCounter(500);
  const projectsCount = useCounter(1200);
  const satisfactionRate = useCounter(98);

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* SEO Structured Data */}
      <StructuredData type="website" />
      <StructuredData type="organization" />
      <StructuredData type="marketplace" />
      
      {/* Hero Section - Two Column Layout */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start min-h-[600px]">
            
            {/* Left Column - Main Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-start pr-4 md:pr-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
                  ENGINEERING MARKETPLACE
                </h1>
                <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              </motion.div>

              <motion.h2 
                className="text-lg md:text-xl text-gray-700 font-light mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                For Engineers and Tech Companies by our Global Team.
              </motion.h2>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link 
                  href="/marketplace" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium text-lg transition-all inline-flex items-center justify-center"
                >
                  Let's Build
                </Link>
                
                <Link 
                  href="/sign-up" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-md font-medium text-lg transition-all inline-flex items-center justify-center"
                >
                  Start Selling
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Services & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 flex flex-col justify-start pl-4 md:pl-8"
            >
              {/* Service 1 */}
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Building className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      GROW WITH QUALITY SERVICES
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      We provide customers with engineering solutions that utilize professional expertise 
                      and verified quality. To help you find the right services and complete projects successfully.
                    </p>
                    <p className="text-sm text-gray-500">
                      CAD Design, Structural Analysis, Electrical Systems, & More
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Service 2 */}
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Secure & Professional Development
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      We provide businesses with secure engineering solutions. Protected payments, 
                      verified professionals, and quality guarantees for every project.
                    </p>
                    <p className="text-sm text-gray-500">
                      Escrow Protection, Quality Assurance, & 24/7 Support
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Service 3 */}
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Global Engineering Network
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Our marketplace connects you with engineering talent worldwide while building 
                      systems that let you access the best professionals for every project.
                    </p>
                    <p className="text-sm text-gray-500">
                      Global Talent Pool, Time Zone Coverage, & Expert Verification
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <motion.div 
                className="grid grid-cols-2 gap-6 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{engineersCount}+</div>
                  <div className="text-sm text-gray-600">Verified Engineers</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">{projectsCount}+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">{satisfactionRate}%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Global Support</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories - Austin Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Browse Professional Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our marketplace works on creating <strong>all this</strong> for your engineering needs 
                while building systems that will let you outwork every competitor.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/marketplace"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all inline-flex items-center justify-center"
                >
                  Browse Services
                </Link>
                <Link 
                  href="/sign-up"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-md font-medium transition-all inline-flex items-center justify-center"
                >
                  Start Selling
                </Link>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-16 w-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Engineering Services</h3>
                <p className="text-gray-600">Professional • Verified • Global</p>
              </div>
            </motion.div>
          </div>

          {/* Service Categories Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "CAD Design", icon: Cog, desc: "3D modeling and technical drawings" },
              { title: "Structural Analysis", icon: Building, desc: "Load analysis and structural calculations" },  
              { title: "Electrical Systems", icon: Zap, desc: "Circuit design and power systems" },
              { title: "Project Management", icon: Users, desc: "End-to-end project coordination" }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest from Our Engineering Community
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest engineering trends, project showcases, and professional insights 
              from our global community of verified engineers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Top 7 CAD Software Tools for Mechanical Engineers",
                excerpt: "From historic industry standards to cutting-edge cloud solutions, mechanical engineering CAD software continues to evolve. These tools offer advanced modeling capabilities and seamless collaboration features.",
                category: "Software Review"
              },
              {
                title: "Structural Analysis vs FEA: Which Method is Right for Your Project?",
                excerpt: "Engineering analysis methods are transforming project delivery from basic calculations to complex simulations. Choosing the right approach is critical for accuracy and efficiency in structural projects.",
                category: "Technical Guide"
              },
              {
                title: "Electrical Design Standards: A Complete Compliance Guide",
                excerpt: "Professional electrical engineers need comprehensive standards for safety and performance. Our marketplace connects you with certified professionals who follow industry best practices and compliance requirements.",
                category: "Best Practices"
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section - ClickUp Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Do your most important work, <span className="text-blue-600">faster</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From mechanical designs to electrical systems and more, this is just the tip of the iceberg.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/marketplace"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                See all services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Use Cases Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Launch any project",
                description: "From idea to execution, effortlessly plan, organize, and track engineering projects that deliver results.",
                image: "bg-blue-500",
                icon: Building
              },
              {
                title: "Solve complex problems", 
                description: "Get expert analysis and solutions for your toughest engineering challenges with verified professionals.",
                image: "bg-green-500",
                icon: Cog
              },
              {
                title: "Scale your business",
                description: "Access global engineering talent on-demand to grow your business without the overhead of hiring.",
                image: "bg-purple-500", 
                icon: Globe
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className={`w-16 h-16 ${useCase.image} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{useCase.description}</p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Watch demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Productivity Tools Section - ClickUp Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                10x your work with smarter tools
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Smart tools for smarter workflows
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Work smarter in every way with our comprehensive engineering marketplace platform.
            </motion.p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Secure Payments", description: "Protected transactions with escrow" },
              { icon: Clock, title: "Fast Delivery", description: "Quick turnaround on all projects" },
              { icon: Award, title: "Quality Guarantee", description: "100% satisfaction or money back" },
              { icon: Users, title: "Expert Network", description: "Access to verified professionals" },
              { icon: Globe, title: "Global Reach", description: "Connect with engineers worldwide" },
              { icon: CheckCircle, title: "Project Tracking", description: "Real-time progress monitoring" },
              { icon: Cog, title: "Custom Solutions", description: "Tailored engineering services" },
              { icon: Building, title: "All Disciplines", description: "Every engineering specialty" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-blue-50 transition-colors">
                  <feature.icon className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Austin Style */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Start Your Dream Project?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today for a free consultation and start your journey to professional 
            engineering services with verified experts worldwide!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/marketplace" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-semibold text-lg transition-all inline-flex items-center"
            >
              Book an appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview - Professional */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Engineering Marketplace</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { title: "CAD Design", desc: "3D modeling and technical drawings" },
              { title: "Structural Analysis", desc: "Load calculations and safety assessments" },
              { title: "Electrical Systems", desc: "Circuit design and power distribution" },
              { title: "Project Management", desc: "End-to-end engineering coordination" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="hover:transform hover:scale-105 transition-all cursor-pointer"
              >
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
              We offer full Engineering Marketplace Services so that you can focus on everything 
              else in your business. Our global engineering services have proven sustainable 
              and profitable. EngineerMarketplace develops dedicated connections that serve clients and 
              increase project success.
            </p>
            
            <p className="text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Our Team works with customers to manage their entire engineering strategy including 
              service discovery, secure payments, project management, and quality assurance.
            </p>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-4">
                The Scientific process behind engineering services for Startups, Tech Companies & 
                Individual Projects.
              </p>
              <p className="text-sm text-gray-500">
                Global Engineering Marketplace, Austin, TX
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
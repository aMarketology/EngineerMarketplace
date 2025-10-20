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
  MessageSquare,
  TrendingUp,
  Lightbulb,
  Cpu,
  Hammer
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
  const servicesCount = useCounter(500);

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      
      {/* HERO SECTION - Premium Design with Strong Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top right - CYAN gradient orb */}
          <motion.div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-50 blur-3xl"
            style={{background: 'radial-gradient(circle, rgba(34, 211, 238, 0.8), rgba(59, 130, 246, 0.2))'}}
            animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
          
          {/* Bottom left - PINK gradient orb */}
          <motion.div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-40 blur-3xl"
            style={{background: 'radial-gradient(circle, rgba(236, 72, 153, 0.6), rgba(192, 132, 250, 0.2))'}}
            animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          ></motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT COLUMN - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              {/* Badge with enhanced styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mb-10"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 border border-white/30 rounded-full text-white text-sm font-bold shadow-lg backdrop-blur-sm">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="h-4 w-4" />
                  </motion.div>
                  Trusted by 2,000+ Engineering Professionals
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Connect with 
                <br />
                <span className="text-yellow-300">
                  Engineering Experts
                </span>
                <br />
                <span className="text-white">Instantly</span>
              </motion.h1>

              {/* Enhanced Subheading */}
              <motion.p 
                className="text-lg sm:text-xl text-gray-100 mb-12 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Access verified professionals for structural design, mechanical systems, electrical work, and more. Manage projects securely with built-in payments, escrow protection, and 24/7 support.
              </motion.p>

              {/* Value Props - 3 Column */}
              <motion.div 
                className="grid grid-cols-3 gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {[
                  { icon: Shield, label: 'Secure', value: '100%' },
                  { icon: Users, label: 'Verified', value: '2K+' },
                  { icon: Clock, label: 'Support', value: '24/7' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    <item.icon className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <p className="text-xs font-semibold text-gray-600">{item.label}</p>
                    <p className="text-xl font-bold text-gray-900">{item.value}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons - Enhanced */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-5 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Link 
                  href="/marketplace" 
                  className="group bg-white hover:bg-gray-100 text-blue-700 px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center shadow-xl hover:shadow-2xl"
                >
                  Get Started Free
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </motion.div>
                </Link>
                
                <Link 
                  href="/marketplace"
                  className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
                >
                  Browse Services
                </Link>
              </motion.div>

              {/* Social Proof */}
              <motion.div 
                className="flex flex-col gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <span className="text-white font-semibold">
                    <span className="text-yellow-300 font-bold">4.8/5</span> rating • <span className="text-yellow-300 font-bold">2,000+</span> projects completed
                  </span>
                </div>

                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: CheckCircle, text: 'Money-back guarantee' },
                    { icon: Zap, text: 'Fast & reliable' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-gray-100">
                      <item.icon className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                      <span className="font-semibold">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN - Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
              className="relative hidden lg:block h-[700px]"
            >
              {/* Main Card Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-200/80 shadow-2xl overflow-hidden backdrop-blur-sm">
                {/* Gradient Background Inside Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-purple-50/80"></div>
                
                {/* Animated Background Blobs */}
                <motion.div
                  className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full opacity-15 blur-3xl"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-purple-300 to-blue-300 rounded-full opacity-10 blur-3xl"
                  animate={{ scale: [1.1, 1, 1.1], rotate: [90, 0, 90] }}
                  transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                ></motion.div>

                {/* Content */}
                <div className="relative z-10 p-8 sm:p-12 h-full flex flex-col justify-between">
                  
                  {/* Top Section - Header */}
                  <div>
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-xs font-bold mb-8"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Lightbulb className="h-4 w-4" />
                      Available Services
                    </motion.div>

                    {/* Service Cards Grid */}
                    <div className="space-y-4 mb-8">
                      {[
                        { icon: Building, title: 'Structural Design', desc: '500+ experts', color: 'from-blue-100 to-blue-50', iconColor: 'text-blue-600' },
                        { icon: Cog, title: 'Mechanical Systems', desc: '300+ experts', color: 'from-purple-100 to-purple-50', iconColor: 'text-purple-600' },
                        { icon: Zap, title: 'Electrical Work', desc: '400+ experts', color: 'from-yellow-100 to-orange-50', iconColor: 'text-yellow-600' },
                        { icon: Cpu, title: 'CAD & Drafting', desc: '350+ experts', color: 'from-green-100 to-emerald-50', iconColor: 'text-green-600' }
                      ].map((service, idx) => (
                        <motion.div
                          key={idx}
                          className={`bg-gradient-to-r ${service.color} border border-gray-200/50 rounded-2xl p-4 flex items-start gap-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105`}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (idx * 0.1) }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className={`p-3 rounded-xl bg-white shadow-md flex-shrink-0`}
                            whileHover={{ rotate: 10 }}
                          >
                            <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                          </motion.div>
                          <div className="min-w-0">
                            <p className="font-bold text-gray-900 text-sm">{service.title}</p>
                            <p className="text-xs text-gray-600 mt-1">{service.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section - Stats */}
                  <div className="border-t border-gray-200/50 pt-6">
                    <p className="text-xs font-semibold text-gray-600 mb-4 uppercase tracking-wide">Platform Stats</p>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: '500+', label: 'Services', icon: TrendingUp },
                        { value: '2K+', label: 'Experts', icon: Users },
                        { value: '24/7', label: 'Support', icon: Clock }
                      ].map((stat, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-white/80 rounded-xl p-4 text-center border border-gray-200/50 shadow-sm hover:shadow-md transition-all"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 + (idx * 0.1) }}
                        >
                          <stat.icon className="h-4 w-4 text-blue-600 mx-auto mb-2" />
                          <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                          <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl px-6 py-3 text-white font-bold shadow-xl z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ✓ Verified
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                className="absolute bottom-20 -right-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl px-6 py-3 text-white font-bold shadow-xl z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                ⚡ Fast
              </motion.div>

              {/* Floating Badge 3 */}
              <motion.div
                className="absolute -bottom-4 left-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl px-6 py-3 text-white font-bold shadow-xl z-20"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
              >
                💰 Affordable
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* FEATURES SECTION - Advanced Tech Style */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Why Choose Us?</span>
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mt-4 mb-6">Everything you need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find experts, manage projects, and deliver excellence all in one platform</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Shield, 
                title: 'Secure & Safe', 
                desc: 'Escrow payments, verified professionals, money-back guarantee',
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: Globe, 
                title: 'Global Network', 
                desc: '2,000+ verified engineers from around the world',
                color: 'from-purple-500 to-pink-500'
              },
              { 
                icon: Award, 
                title: 'Quality Assured', 
                desc: 'All professionals vetted and rated by the community',
                color: 'from-green-500 to-emerald-500'
              },
              { 
                icon: Zap, 
                title: 'Lightning Fast', 
                desc: 'Instant booking, real-time communication, quick turnaround',
                color: 'from-yellow-500 to-orange-500'
              },
              { 
                icon: Clock, 
                title: '24/7 Support', 
                desc: 'Dedicated team ready to help anytime',
                color: 'from-indigo-500 to-blue-500'
              },
              { 
                icon: TrendingUp, 
                title: 'Scalable', 
                desc: 'Grow your team on demand without long-term contracts',
                color: 'from-rose-500 to-red-500'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 group-hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                  {/* Icon Container */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.desc}</p>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`mt-6 h-1 w-0 bg-gradient-to-r ${feature.color} rounded-full group-hover:w-12 transition-all duration-300`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of professionals and start your next project today
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-600 px-12 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
            >
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300">
        {/* Top Section */}
        <div className="border-b border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                EngineerMarketplace
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Connecting visionary engineers with cutting-edge projects. Where innovation meets expertise in the digital frontier.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Made with</span>
                <span className="text-red-500">❤️</span>
                <span className="text-sm text-gray-500">for engineers</span>
              </div>
            </motion.div>

            {/* Platform Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Platform</h4>
              <ul className="space-y-3">
                {['Home', 'Marketplace', 'Find Engineers', 'Post Project', 'About Us', 'Resources'].map((item, idx) => (
                  <li key={idx}>
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {['Help Center', 'Documentation', 'API Reference', 'Terms of Service', 'Privacy Policy'].map((item, idx) => (
                  <li key={idx}>
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Stats</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg p-4 border border-gray-800">
                  <p className="text-3xl font-black text-blue-400">500+</p>
                  <p className="text-gray-400 text-sm">Services Available</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-gray-800">
                  <p className="text-3xl font-black text-purple-400">2K+</p>
                  <p className="text-gray-400 text-sm">Verified Experts</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2024 EngineerMarketplace. All rights reserved. Built with precision and passion.</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Version</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 font-mono">1.0.0</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { mockServices, mockCategories } from '@/lib/mockData';
import { 
  Building, 
  Cog, 
  Zap, 
  Map, 
  Star, 
  Users, 
  Award, 
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Quote,
  Code2,
  Layers,
  Shield,
  Sparkles,
  TrendingUp,
  Globe,
  Rocket,
  Cpu
} from 'lucide-react';

const iconMap = { Building, Cog, Zap, Map };

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

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Tech Innovations Inc.",
    content: "EngineerMarketplace connected us with an amazing structural engineer who delivered exactly what we needed. The quality was outstanding and the process was seamless.",
    rating: 5,
    avatar: "/avatars/sarah-j.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "GreenTech Solutions",
    content: "Found the perfect electrical engineer for our solar project. The expertise and professionalism exceeded our expectations. Highly recommend this platform!",
    rating: 5,
    avatar: "/avatars/michael-c.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Construction Manager",
    company: "BuildRight Corp",
    content: "The mechanical engineer we hired through this platform saved us both time and money. The platform makes it easy to find qualified professionals.",
    rating: 5,
    avatar: "/avatars/emily-r.jpg"
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Stats counters
  const engineersCount = useCounter(500);
  const projectsCount = useCounter(1200);
  const satisfactionRate = useCounter(98);
  
  const featuredServices = mockServices.slice(0, 6);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(24, 119, 242, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(24, 119, 242, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-primary/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`,
              }}
            />
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
              <Sparkles className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-blue-100">Next-Generation Engineering Platform</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Engineering
            <br />
            <span className="relative">
              Marketplace
              <motion.div
                className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-primary to-blue-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Connect with world-class engineers. From structural design to cutting-edge automation, 
            find the expertise you need to bring your vision to life.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              href="/marketplace" 
              className="group relative bg-primary hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center overflow-hidden"
            >
              <span className="relative z-10">Explore Marketplace</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <Link 
              href="/sign-up" 
              className="group border-2 border-slate-600 hover:border-primary text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-primary/10"
            >
              Join as Expert
              <Rocket className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-y-[-2px]" />
            </Link>
          </motion.div>

          {/* Tech Stack Indicators */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="flex items-center space-x-2">
              <Code2 className="h-5 w-5" />
              <span className="text-sm">AI-Powered Matching</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Verified Experts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span className="text-sm">Global Network</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Live Stats Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Join thousands of professionals who choose our platform for their engineering needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center group-hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-primary/25 transition-shadow">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{engineersCount}+</div>
                  <p className="text-slate-400 font-medium">Verified Engineers</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center group-hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-shadow">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{projectsCount}+</div>
                  <p className="text-slate-400 font-medium">Projects Completed</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center group-hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-yellow-500/25 transition-shadow">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{satisfactionRate}%</div>
                  <p className="text-slate-400 font-medium">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center group-hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-shadow">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <p className="text-slate-400 font-medium">Customer Support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Categories */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Layers className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-blue-200">Engineering Disciplines</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              World-Class Engineering
              <br />
              <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From cutting-edge structural design to advanced automation systems, 
              connect with specialists who push the boundaries of engineering excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockCategories.map((category, index) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500', 
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500'
              ];
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onHoverStart={() => setHoveredCategory(category.id)}
                  onHoverEnd={() => setHoveredCategory(null)}
                  className="group"
                >
                  <Link
                    href={`/marketplace?category=${category.id}`}
                    className="block relative"
                  >
                    <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 group-hover:border-primary/50 transition-all duration-500 overflow-hidden">
                      {/* Gradient Background Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Floating Icon */}
                      <div className="relative z-10">
                        <div className={`w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                          {IconComponent && <IconComponent className="h-8 w-8 text-white" />}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                          {category.description}
                        </p>
                        
                        <motion.div 
                          className="flex items-center justify-between"
                          animate={{ x: hoveredCategory === category.id ? 5 : 0 }}
                        >
                          <span className="text-sm text-slate-500 font-medium">
                            {category.subcategories.length} Specializations
                          </span>
                          <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg transition-all">
                            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-white" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Tech Grid Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <div className="w-full h-full" style={{
                          backgroundImage: `
                            linear-gradient(45deg, currentColor 25%, transparent 25%),
                            linear-gradient(-45deg, currentColor 25%, transparent 25%),
                            linear-gradient(45deg, transparent 75%, currentColor 75%),
                            linear-gradient(-45deg, transparent 75%, currentColor 75%)
                          `,
                          backgroundSize: '8px 8px',
                          backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
                        }} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/marketplace"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <TrendingUp className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-blue-200">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Premium Engineering
              <br />
              <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Discover exceptional work from our top-rated engineering professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Link
                  href={`/service/${service.id}`}
                  className="block relative"
                >
                  <div className="relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10">
                    {/* Service Image with Tech Overlay */}
                    <div className="relative h-48 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-100" />
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200" />
                      </div>
                      {/* Tech Pattern Overlay */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full" style={{
                          backgroundImage: `
                            radial-gradient(circle at 25% 25%, ${service.category === 'structural' ? '#1877F2' : service.category === 'mechanical' ? '#10B981' : service.category === 'electrical' ? '#F59E0B' : '#8B5CF6'} 2px, transparent 2px)
                          `,
                          backgroundSize: '20px 20px'
                        }} />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          service.category === 'structural' ? 'bg-blue-500/20 text-blue-300' :
                          service.category === 'mechanical' ? 'bg-green-500/20 text-green-300' :
                          service.category === 'electrical' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-purple-500/20 text-purple-300'
                        }`}>
                          {service.category.replace('-', ' ').toUpperCase()}
                        </span>
                        <div className="flex items-center bg-slate-700/50 rounded-full px-2 py-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-slate-300 ml-1">
                            {service.rating}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {service.shortDescription}
                      </p>
                      
                      {/* Provider Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              {service.provider.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-white">{service.provider.name}</p>
                            <p className="text-xs text-slate-400">{service.duration}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">${service.price}</div>
                          <div className="text-xs text-slate-500">Fixed Price</div>
                        </div>
                      </div>
                      
                      {/* Hover Effect Button */}
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium">
                          View Project Details
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/marketplace"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Quote className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-blue-200">Client Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Trusted by Industry
              <br />
              <span className="text-primary">Leaders</span>
            </h2>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-slate-800 border border-slate-700 rounded-3xl p-12 text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <Quote className="h-10 w-10 text-white" />
                  </div>
                  
                  <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current mx-0.5" />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mr-4">
                      <span className="text-lg font-bold text-white">
                        {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-white text-lg">{testimonials[currentTestimonial].name}</p>
                      <p className="text-slate-400">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary scale-125 shadow-lg shadow-primary/50' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-blue-700 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 border border-white/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${-20 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
              <Rocket className="h-4 w-4 text-white mr-2" />
              <span className="text-sm font-medium text-blue-100">Ready to Launch?</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Start Building the
              <br />
              <span className="bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
                Future Today
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of innovators who trust EngineerMarketplace to bring 
              their engineering visions to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/marketplace"
                className="group bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center shadow-2xl hover:shadow-white/25"
              >
                Start Your Project
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/sign-up"
                className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Join as Expert
                <Cpu className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-blue-200">Expert Engineers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">1200+</div>
                <div className="text-sm text-blue-200">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

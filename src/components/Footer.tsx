'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, Mail, Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center">
                <Cpu className="h-6 w-6 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                EngineerMarketplace
              </span>
            </motion.div>
            
            <motion.p 
              className="text-slate-400 text-lg leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Connecting visionary engineers with cutting-edge projects. 
              Where innovation meets expertise in the digital frontier.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' }
              ].map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-700 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Platform
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Marketplace', href: '/marketplace' },
                { name: 'Find Engineers', href: '/engineers' },
                { name: 'Post Project', href: '/post-project' },
                { name: 'About Us', href: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Help Center', href: '/help' },
                { name: 'Documentation', href: '/docs' },
                { name: 'API Reference', href: '/api' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Privacy Policy', href: '/privacy' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © 2024 EngineerMarketplace. All rights reserved. Built with precision and passion.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-slate-500">
            <span>Made with ❤️ for engineers</span>
            <div className="w-px h-4 bg-slate-700" />
            <span>Version 1.0.0</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </motion.button>
      )}
    </footer>
  );
}
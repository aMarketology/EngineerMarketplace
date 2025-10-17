'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, User, Menu, ShoppingCart, Cpu, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="relative w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Cpu className="h-5 w-5 text-white" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                EngineerMarketplace
              </span>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search engineering services..."
                className="block w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-300 hover:text-white font-medium transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/marketplace" className="text-slate-300 hover:text-white font-medium transition-colors relative group">
              Marketplace
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white font-medium transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-slate-400 hover:text-white transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
            
            <Link
              href="/login"
              className="hidden md:block text-slate-300 hover:text-white font-medium transition-colors"
            >
              Login
            </Link>
            
            <Link
              href="/sign-up"
              className="group bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2.5 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all font-medium inline-flex items-center hover:scale-105"
            >
              <Sparkles className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
              Sign Up
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/marketplace" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
                Marketplace
              </Link>
              <Link href="/about" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/login" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors">
                Login
              </Link>
              
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="block w-full pl-10 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
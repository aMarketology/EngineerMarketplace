'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative w-12 h-12 overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/logo.png"
                alt="EngineerMarketplace Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors hidden sm:block">
              Precision Project Flow
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/marketplace', label: 'Marketplace' },
              { href: '#', label: 'How it Works' },
              { href: '#', label: 'Pricing' },
              { href: '#', label: 'About' }
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 rounded-lg transition-all duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              href="/sign-up"
              className="hidden md:flex group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium items-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Sparkles className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-4 space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/marketplace', label: 'Marketplace' },
                { href: '#', label: 'How it Works' },
                { href: '#', label: 'Pricing' },
                { href: '#', label: 'About' }
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/sign-up"
                className="block w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
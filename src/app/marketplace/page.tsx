'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockServices, mockCategories } from '@/lib/mockData';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  Star, 
  Heart, 
  MapPin, 
  Clock, 
  DollarSign,
  ChevronDown,
  SlidersHorizontal
} from 'lucide-react';

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('rating');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedDelivery, setSelectedDelivery] = useState('all');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Dummy image URLs for services
  const dummyImages = [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = mockServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.provider.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
      const matchesLocation = selectedLocation === 'all' || service.provider.location.toLowerCase().includes(selectedLocation.toLowerCase());
      
      return matchesSearch && matchesCategory && matchesPrice && matchesLocation;
    });

    // Sort services
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy, selectedLocation]);

  const toggleFavorite = (serviceId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(serviceId)) {
      newFavorites.delete(serviceId);
    } else {
      newFavorites.add(serviceId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="bg-slate-950 min-h-screen pt-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Facebook Marketplace Style Header */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-white mb-2">Engineering Services Marketplace</h1>
          <p className="text-slate-400">Browse {mockServices.length}+ professional engineering services</p>
        </motion.div>

        {/* Comprehensive Search & Filter Bar */}
        <motion.div 
          className="sticky top-16 z-40 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Main Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search engineering services, skills, or professionals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>
            
            <motion.button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 transition-all inline-flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </motion.button>
          </div>

          {/* Quick Filter Chips */}
          <div className="flex flex-wrap gap-3 mb-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-primary/50 transition-all"
            >
              <option value="all">All Categories</option>
              {mockCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-primary/50 transition-all"
            >
              <option value="all">All Locations</option>
              <option value="remote">Remote</option>
              <option value="usa">United States</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-primary/50 transition-all"
            >
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
            </select>

            <div className="flex items-center space-x-2 text-slate-300">
              <span className="text-sm">Price:</span>
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0] || ''}
                onChange={(e) => setPriceRange([Number(e.target.value) || 0, priceRange[1]])}
                className="w-20 px-2 py-1 bg-slate-800 border border-slate-700 rounded text-sm text-white"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1] || ''}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value) || 10000])}
                className="w-20 px-2 py-1 bg-slate-800 border border-slate-700 rounded text-sm text-white"
              />
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showAdvancedFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-slate-700 pt-6 mt-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">
                      Price Range ($)
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      />
                      <span className="text-slate-400">to</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">
                      Experience Level
                    </label>
                    <select className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all">
                      <option value="">All Levels</option>
                      <option value="entry">Entry Level</option>
                      <option value="mid">Mid Level</option>
                      <option value="senior">Senior Level</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">
                      Delivery Time
                    </label>
                    <select className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all">
                      <option value="">Any Time</option>
                      <option value="1-3">1-3 days</option>
                      <option value="4-7">4-7 days</option>
                      <option value="1-2weeks">1-2 weeks</option>
                      <option value="2weeks+">2+ weeks</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Counter */}
        <motion.div 
          className="flex items-center justify-between mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-slate-400">
            Showing {filteredServices.length} of {mockServices.length} services
          </p>
        </motion.div>

        {/* Facebook Marketplace Style 9x9 Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-9 gap-3">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="group bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
              whileHover={{ y: -3, scale: 1.02 }}
              style={{ aspectRatio: '5/4' }}
            >
              <div className="h-full flex flex-col">
                {/* Image Section - Takes 60% of card height */}
                <div className="relative h-3/5 overflow-hidden">
                  <img
                    src={dummyImages[index % dummyImages.length]}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Favorite Button */}
                  <motion.button
                    onClick={() => toggleFavorite(service.id)}
                    className="absolute top-2 right-2 p-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/70 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart 
                      className={`h-3 w-3 transition-colors ${
                        favorites.has(service.id) 
                          ? 'text-red-400 fill-current' 
                          : 'text-white hover:text-red-400'
                      }`}
                    />
                  </motion.button>

                  {/* Price Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
                      ${service.price}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-2 right-2 flex items-center bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                    <span className="text-xs font-medium text-white">{service.rating}</span>
                  </div>
                </div>
                {/* Content Section - Takes 40% of card height */}
                <div className="flex-1 p-3 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mr-2">
                        <span className="text-white text-xs font-bold">
                          {service.provider.name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-xs text-slate-300 truncate">{service.provider.name}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span className="truncate">{service.provider.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded-full font-medium">
                        {service.category.replace('-', ' ').toUpperCase()}
                      </span>
                      <span className="text-xs text-slate-400">
                        {service.reviewCount} reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-24 h-24 bg-slate-800/50 border border-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">No services found</h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Try adjusting your search criteria or browse different categories to discover amazing engineering services
            </p>
            <motion.button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange([0, 10000]);
              }}
              className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all font-medium inline-flex items-center hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear all filters
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
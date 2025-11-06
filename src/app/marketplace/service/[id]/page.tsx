'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Star, 
  Heart, 
  Share2, 
  MapPin, 
  Clock, 
  DollarSign,
  Check,
  AlertCircle,
  MessageSquare,
  Calendar,
  Users,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedOption, setSelectedOption] = useState('standard');
  const [showReviews, setShowReviews] = useState(false);

  // Mock product data
  const product = {
    id: params.id || '1',
    title: 'Professional Structural Engineering Design & Analysis',
    price: 2500,
    originalPrice: 3500,
    rating: 4.8,
    reviewCount: 248,
    category: 'Structural Engineering',
    provider: {
      name: 'EngineeringPro Solutions',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 4.9,
      reviewCount: 1250,
      location: 'San Francisco, CA',
      responseTime: '2 hours',
      joinedDate: 'January 2020'
    },
    description: 'Expert structural engineering design and analysis services for residential, commercial, and industrial projects. Includes comprehensive design calculations, 3D modeling, and compliance with all local building codes.',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'
    ],
    deliveryTime: '7-14 days',
    deliveryType: 'Digital Delivery',
    revisions: 'Unlimited revisions',
    features: [
      'Comprehensive structural analysis',
      '3D CAD models included',
      'Building code compliance',
      'Detailed calculations report',
      'Unlimited revisions',
      'Fast turnaround time'
    ],
    faqs: [
      { q: 'What file formats do you provide?', a: 'We provide designs in PDF, DWG, and RVT formats.' },
      { q: 'How long does the design process take?', a: 'Typical projects take 7-14 business days depending on complexity.' },
      { q: 'Do you offer revisions?', a: 'Yes, unlimited revisions are included until you\'re satisfied.' },
      { q: 'What is your turnaround time for urgent projects?', a: 'We offer expedited service for an additional 20% fee with 48-hour turnaround.' }
    ]
  };

  const relatedServices = [
    { id: 1, title: 'MEP Engineering Design', price: 1800, rating: 4.7, image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop' },
    { id: 2, title: 'HVAC System Design', price: 1500, rating: 4.6, image: 'https://images.unsplash.com/photo-1581092163562-40aa08e78837?w=400&h=300&fit=crop' },
    { id: 3, title: 'Civil Site Analysis', price: 2200, rating: 4.8, image: 'https://images.unsplash.com/photo-1581092916550-e323abad1675?w=400&h=300&fit=crop' },
    { id: 4, title: 'Foundation Design', price: 1900, rating: 4.5, image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop' }
  ];

  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/marketplace" className="hover:text-blue-600">Marketplace</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{product.category}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* LEFT - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="mb-4 bg-gray-100 rounded-xl overflow-hidden h-[500px] flex items-center justify-center relative group">
              <motion.img
                key={selectedImage}
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev + 1) % product.images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="mb-4">
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full inline-block">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xl font-bold text-gray-900">
                {product.rating}
                <span className="text-gray-600 text-sm font-normal"> ({product.reviewCount} reviews)</span>
              </span>
            </div>

            {/* Price */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-gray-900">${product.price}</span>
                <div className="flex flex-col">
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  <span className="text-sm font-bold text-green-600">Save 29%</span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">What's included:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Delivery</span>
                </div>
                <p className="text-sm text-gray-600">{product.deliveryTime}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Revisions</span>
                </div>
                <p className="text-sm text-gray-600">{product.revisions}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Format</span>
                </div>
                <p className="text-sm text-gray-600">{product.deliveryType}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-colors"
              >
                Contact Engineer
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFavorite(!isFavorite)}
                className={`px-6 py-4 rounded-xl border-2 transition-all ${
                  isFavorite
                    ? 'bg-red-50 border-red-300 text-red-600'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 rounded-xl border-2 border-gray-200 text-gray-600 hover:border-gray-300"
              >
                <Share2 className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Provider Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <img
                    src={product.provider.avatar}
                    alt={product.provider.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{product.provider.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{product.provider.rating} ({product.provider.reviewCount} reviews)</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">📍 {product.provider.location}</p>
                    <p className="text-sm text-gray-600">⏱️ Avg response: {product.provider.responseTime}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-white border-2 border-gray-200 rounded-lg font-semibold text-gray-900 hover:bg-gray-100"
                >
                  View Profile
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description Section */}
        <motion.div
          className="mb-16 pb-16 border-b border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black text-gray-900 mb-6">About This Service</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-blue-900 mb-2">Questions?</h4>
              <p className="text-blue-800">Contact the engineer directly to discuss your project requirements in detail.</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mb-16 pb-16 border-b border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {product.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.01 }}
              >
                <h4 className="font-bold text-gray-900 text-lg mb-3">{faq.q}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Related Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black text-gray-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-110 transition-transform" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{service.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">${service.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-900">{service.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

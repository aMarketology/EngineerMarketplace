import { mockServices, mockCategories } from '@/lib/mockData';
import Link from 'next/link';

export default function MarketplacePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Engineering Marketplace</h1>
          <p className="text-gray-600">Discover professional engineering services from verified experts</p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockCategories.map((category) => (
              <Link
                key={category.id}
                href={`/marketplace?category=${category.id}`}
                className="bg-gray-50 hover:bg-primary hover:text-white p-4 rounded-lg text-center transition-colors"
              >
                <h3 className="font-medium">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">All Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockServices.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 rounded-t-lg"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-primary font-medium bg-blue-50 px-2 py-1 rounded">
                      {service.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600 ml-1">
                        {service.rating} ({service.reviewCount})
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                      <span className="text-sm text-gray-700 ml-2">{service.provider.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">${service.price}</div>
                      <div className="text-xs text-gray-500">{service.duration}</div>
                    </div>
                  </div>
                  <Link
                    href={`/service/${service.id}`}
                    className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
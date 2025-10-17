import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EM</span>
              </div>
              <span className="text-xl font-bold">EngineerMarketplace</span>
            </div>
            <p className="text-gray-300 text-sm">
              Connect with professional engineers for all your technical needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-primary">Home</Link></li>
              <li><Link href="/marketplace" className="text-gray-300 hover:text-primary">Marketplace</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="text-gray-300 hover:text-primary">Help Center</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 EngineerMarketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
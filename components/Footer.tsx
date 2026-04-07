'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-wellness-dark text-gray-300 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              HisJourney
            </h3>
            <p className="text-gray-400 mb-6">
              AI-powered wellness for modern men. Transform your life one journal entry at a time.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-wellness-sage/20 hover:bg-wellness-sage transition flex items-center justify-center text-sm"
                  title={social}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Features</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Pricing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Security</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Roadmap</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Press</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Documentation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Help Center</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Community</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">API</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Cookie Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-wellness-sage transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} HisJourney. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-wellness-sage transition">
              Status
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-wellness-sage transition">
              Credits
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-wellness-sage transition">
              Feedback
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

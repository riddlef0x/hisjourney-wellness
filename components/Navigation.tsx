'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 text-2xl font-serif font-bold text-wellness-moss hover:text-wellness-sage transition">
          <span className="text-3xl">✨</span>
          HisJourney
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-wellness-sage transition text-sm font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-wellness-sage transition text-sm font-medium">
            How it Works
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-wellness-sage transition text-sm font-medium">
            Pricing
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-wellness-sage transition text-sm font-medium">
            Testimonials
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-gray-700 hover:text-wellness-sage transition font-medium"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="btn btn-primary px-6 py-2 text-sm"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-4">
          <a href="#features" className="block text-gray-700 hover:text-wellness-sage transition font-medium">
            Features
          </a>
          <a href="#how-it-works" className="block text-gray-700 hover:text-wellness-sage transition font-medium">
            How it Works
          </a>
          <a href="#pricing" className="block text-gray-700 hover:text-wellness-sage transition font-medium">
            Pricing
          </a>
          <a href="#testimonials" className="block text-gray-700 hover:text-wellness-sage transition font-medium">
            Testimonials
          </a>
          <div className="pt-4 border-t border-gray-200 space-y-2">
            <Link
              href="/login"
              className="block text-gray-700 hover:text-wellness-sage transition font-medium"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="btn btn-primary w-full py-2 text-center text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

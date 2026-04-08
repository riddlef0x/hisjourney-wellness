'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationId: number
    let time = 0

    const drawGradientOrbs = () => {
      ctx.fillStyle = '#F5F5F0'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated orbs
      const orbs = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, color: 'rgba(90, 126, 110, 0.15)' },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, color: 'rgba(201, 115, 92, 0.1)' },
        { x: canvas.width * 0.5, y: canvas.height * 0.2, color: 'rgba(44, 76, 59, 0.08)' }
      ]

      orbs.forEach((orb, idx) => {
        const radius = 150 + Math.sin(time * 0.001 + idx) * 50
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, radius)
        gradient.addColorStop(0, orb.color)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(orb.x - radius, orb.y - radius, radius * 2, radius * 2)
      })

      time++
      animationId = requestAnimationFrame(drawGradientOrbs)
    }

    drawGradientOrbs()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="relative h-[90vh] pt-32 pb-20 px-4 flex items-center justify-center overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wellness-moss/10 border border-wellness-moss/30 text-wellness-moss text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wellness-moss opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-wellness-moss"></span>
            </span>
            AI-Powered Wellness Platform
          </span>
        </div>

        <h1 className="text-8xl md:text-9xl font-serif font-bold text-wellness-dark mb-6 leading-tight" style={{ fontSize: 'clamp(3.5rem, 10vw, 6.5rem)' }}>
          Your Wellness<br />
          <span className="bg-gradient-to-r from-wellness-moss to-wellness-moss/70 bg-clip-text text-transparent">
            Journey Awaits
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
          Transform your mental and physical wellbeing with AI-powered journaling, mood tracking, and personalized wellness insights designed for modern men.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link
            href="/signup"
            className="btn btn-primary px-10 py-4 text-lg shadow-xl hover:shadow-2xl"
          >
            Start Your Journey
          </Link>
          <button className="btn btn-secondary px-10 py-4 text-lg">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
          <div className="group cursor-pointer">
            <div className="text-4xl md:text-5xl font-serif font-bold text-wellness-moss mb-2 group-hover:text-wellness-secondary transition">
              10K+
            </div>
            <p className="text-gray-600 text-sm md:text-base">Active Users</p>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl md:text-5xl font-serif font-bold text-wellness-moss mb-2 group-hover:text-wellness-secondary transition">
              500K+
            </div>
            <p className="text-gray-600 text-sm md:text-base">Journal Entries</p>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl md:text-5xl font-serif font-bold text-wellness-moss mb-2 group-hover:text-wellness-secondary transition">
              98%
            </div>
            <p className="text-gray-600 text-sm md:text-base">Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-600">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-wellness-moss rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-wellness-moss rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

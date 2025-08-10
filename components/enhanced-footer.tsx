"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Facebook, ArrowUp, Heart, Leaf, Award } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function EnhancedFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [currentYear, setCurrentYear] = useState<number | null>(null)
  const [sakuraPetals, setSakuraPetals] = useState<{ left: number, top: number, delay: number, duration: number, x: number }[]>([])

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
    // Generate sakura petals random positions and animation values only on client
    setSakuraPetals(
      Array.from({ length: 8 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 2,
        x: Math.random() * 20 - 10
      }))
    )
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Our Story', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Order Online', href: '/order' }
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' }
  ]

  return (
    <footer className="bg-gradient-to-br from-[#333333] via-[#2a2a2a] to-[#465775] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#465775] rounded-full opacity-10 -translate-x-32 -translate-y-32 animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-48 h-48 bg-[#FFE0E0] rounded-full opacity-10 translate-x-24 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-[#465775] rounded-full opacity-10 translate-y-16 animate-pulse delay-2000"></div>

        {/* Floating sakura petals */}
        {sakuraPetals.map((petal, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#FFE0E0] rounded-full opacity-30"
            style={{
              left: `${petal.left}%`,
              top: `${petal.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, petal.x, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: petal.duration,
              repeat: Infinity,
              delay: petal.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-4xl font-light mb-2 tracking-wide bg-gradient-to-r from-white to-[#FFE0E0] bg-clip-text text-transparent">
                禅茶房
              </h3>
              <p className="text-[#FFE0E0] text-sm font-light tracking-wider">ZEN CAFÉ</p>
            </div>

            <p className="text-white/80 leading-relaxed mb-6 text-sm">
              A sanctuary where time slows down and the art of tea becomes a meditation.
              Experience tranquility in every cup, crafted with mindfulness and tradition.
            </p>

            {/* Awards/Certifications */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1">
                <Award size={14} className="text-[#FFE0E0]" />
                <span className="text-xs text-white/80">Est. 2018</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1">
                <Leaf size={14} className="text-green-400" />
                <span className="text-xs text-white/80">Organic</span>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:shadow-lg hover:shadow-white/20 group`}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-medium mb-6 text-[#FFE0E0]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-all duration-300 text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-[#FFE0E0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-medium mb-6 text-[#FFE0E0]">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="text-[#FFE0E0] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={18} />
                <div>
                  <p className="text-white/90 text-sm font-medium mb-1">Visit Us</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    2-15-8 Shibuya, Shibuya City<br />
                    Tokyo 150-0002, Japan
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="text-[#FFE0E0] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={18} />
                <div>
                  <p className="text-white/90 text-sm font-medium">Call Us</p>
                  <p className="text-white/70 text-xs">+81 3-1234-5678</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="text-[#FFE0E0] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={18} />
                <div>
                  <p className="text-white/90 text-sm font-medium">Email Us</p>
                  <p className="text-white/70 text-xs">hello@zencafe.jp</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-medium mb-6 text-[#FFE0E0]">Opening Hours</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex justify-between items-center text-sm">
                <span className="text-white/80">Mon - Fri</span>
                <span className="text-white/90 font-medium">8AM - 9PM</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="text-white/80">Saturday</span>
                <span className="text-white/90 font-medium">9AM - 10PM</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="text-white/80">Sunday</span>
                <span className="text-white/90 font-medium">9AM - 8PM</span>
              </li>
            </ul>

            {/* Special notice */}
            <div className="p-4 bg-gradient-to-r from-[#FFE0E0]/10 to-[#465775]/10 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="text-[#FFE0E0]" size={16} />
                <span className="text-white/90 text-sm font-medium">Special Sessions</span>
              </div>
              <p className="text-white/70 text-xs leading-relaxed">
                Tea Ceremony Sessions available by appointment on weekends.
                Book your mindful experience today.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-12 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-light mb-4 text-[#FFE0E0]">Stay Connected</h4>
            <p className="text-white/80 mb-6 text-sm">
              Subscribe to our newsletter for tea ceremony updates, seasonal menu changes, and mindfulness tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FFE0E0] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#FFE0E0] to-[#FFE0E0]/80 text-[#333333] rounded-xl hover:from-[#FFE0E0]/90 hover:to-[#FFE0E0]/70 transition-all duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-white/60 text-sm flex items-center space-x-2">
                <span>© {currentYear ?? ''} 禅茶房 Zen Café. All rights reserved.</span>
              </p>
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <span>Made by</span>
                <Heart size={14} className="text-[#FFE0E0] fill-current" />
                <span>Shouta Dev</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors duration-300 hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="text-white/40 text-xs italic">
              "一期一会" - One time, one meeting - treasure every moment
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#465775] to-[#465775]/80 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}

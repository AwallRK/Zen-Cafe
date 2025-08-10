"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, NavigationIcon, ExternalLink } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import SakuraCursor from '@/components/sakura-cursor'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      <Navigation cartItems={[]} />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-light text-[#333333] mb-4 tracking-wide">
              Visit Us
            </h1>
            <p className="text-lg text-[#333333] opacity-80">
              Find your moment of tranquility in the heart of the city
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full"
            >
              <div className="h-full flex flex-col space-y-6">
                {/* Contact Information Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-light text-[#333333] mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-[#465775] mt-1" size={20} />
                      <div>
                        <h3 className="font-medium text-[#333333] mb-1">Address</h3>
                        <p className="text-[#333333] opacity-80 text-sm">
                          2-15-8 Shibuya, Shibuya City<br />
                          Tokyo 150-0002, Japan
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="text-[#465775] mt-1" size={20} />
                      <div>
                        <h3 className="font-medium text-[#333333] mb-1">Phone</h3>
                        <p className="text-[#333333] opacity-80 text-sm">+81 3-1234-5678</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="text-[#465775] mt-1" size={20} />
                      <div>
                        <h3 className="font-medium text-[#333333] mb-1">Email</h3>
                        <p className="text-[#333333] opacity-80 text-sm">hello@zencafe.jp</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opening Hours Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-light text-[#333333] mb-6">Opening Hours</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#333333]">Monday - Friday</span>
                      <span className="text-[#333333] opacity-80">8:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#333333]">Saturday</span>
                      <span className="text-[#333333] opacity-80">9:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#333333]">Sunday</span>
                      <span className="text-[#333333] opacity-80">9:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-[#FFE0E0] rounded-lg">
                    <p className="text-[#333333] text-sm">
                      <strong>Tea Ceremony Sessions:</strong><br />
                      Available by appointment on weekends
                    </p>
                  </div>
                </div>

                {/* Getting Here Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg flex-1">
                  <h2 className="text-2xl font-light text-[#333333] mb-6">Getting Here</h2>
                  
                  <div className="space-y-4 text-sm text-[#333333] opacity-80">
                    <div>
                      <strong className="text-[#333333]">By Train:</strong><br />
                      5 minutes walk from Shibuya Station (JR Yamanote Line)
                    </div>
                    <div>
                      <strong className="text-[#333333]">By Subway:</strong><br />
                      3 minutes walk from Shibuya Station (Tokyo Metro)
                    </div>
                    <div>
                      <strong className="text-[#333333]">Parking:</strong><br />
                      Limited street parking available. We recommend using public transportation.
                    </div>
                  </div>
                  
                  {/* Additional info to balance height */}
                  <div className="mt-6 p-4 bg-[#EAE7E3] rounded-lg">
                    <h4 className="font-medium text-[#333333] mb-2">Nearby Landmarks</h4>
                    <ul className="text-sm text-[#333333] opacity-80 space-y-1">
                      <li>• Shibuya Crossing - 3 min walk</li>
                      <li>• Hachiko Statue - 4 min walk</li>
                      <li>• Shibuya Sky - 8 min walk</li>
                      <li>• Meiji Shrine - 15 min walk</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Map and Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-full"
            >
              <div className="h-full flex flex-col space-y-6">
                {/* Interactive Google Map */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#EAE7E3] overflow-hidden h-80">
                  <div className="w-full h-full relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747707654567!2d139.70168!3d35.658034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca40296d2d1%3A0x5b1b1b1b1b1b1b1b!2sShibuya%2C%20Tokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-2xl"
                    />
                    
                    {/* Map overlay with cafe info */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 bg-[#465775] rounded-full animate-pulse"></div>
                        <h4 className="font-semibold text-[#333333]">禅茶房 Zen Café</h4>
                      </div>
                      <p className="text-sm text-[#333333] opacity-80 mb-3">
                        2-15-8 Shibuya, Shibuya City<br />
                        Tokyo 150-0002, Japan
                      </p>
                      <div className="flex items-center space-x-2">
                        <button className="flex items-center space-x-1 text-xs bg-[#465775] text-white px-3 py-1 rounded-full hover:bg-[#465775]/90 transition-colors duration-300">
                          <NavigationIcon size={12} />
                          <span>Get Directions</span>
                        </button>
                        <button className="flex items-center space-x-1 text-xs bg-white border border-[#D3D3D3] text-[#333333] px-3 py-1 rounded-full hover:bg-[#EAE7E3] transition-colors duration-300">
                          <ExternalLink size={12} />
                          <span>View Larger</span>
                        </button>
                      </div>
                    </div>

                    {/* Distance indicators */}
                    <div className="absolute bottom-4 right-4 space-y-2">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                        <p className="text-xs text-[#333333] opacity-80">
                          <span className="font-medium">5 min</span> from Shibuya Station
                        </p>
                      </div>
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                        <p className="text-xs text-[#333333] opacity-80">
                          <span className="font-medium">3 min</span> from Shibuya Crossing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form - Made to fill remaining space */}
                <div className="bg-white rounded-2xl p-8 shadow-lg flex-1 flex flex-col">
                  <h2 className="text-2xl font-light text-[#333333] mb-6">Send us a Message</h2>
                  
                  <form className="flex-1 flex flex-col space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#333333] mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#333333] mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#333333] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#333333] mb-2">
                        Subject
                      </label>
                      <select className="w-full px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent">
                        <option>General Inquiry</option>
                        <option>Tea Ceremony Booking</option>
                        <option>Private Event</option>
                        <option>Catering Request</option>
                        <option>Other</option>
                      </select>
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <label className="block text-sm font-medium text-[#333333] mb-2">
                        Message
                      </label>
                      <textarea
                        className="w-full flex-1 min-h-[120px] px-4 py-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465775] focus:border-transparent resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-[#465775] text-white py-4 rounded-full hover:bg-[#465775]/90 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Sakura Cursor */}
      <SakuraCursor />
    </div>
  )
}

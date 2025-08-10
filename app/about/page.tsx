"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Link from 'next/link'
import Footer from '@/components/footer'
import SakuraCursor from '@/components/sakura-cursor'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      <Navigation cartItems={[]} />
      
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-light text-[#333333] mb-4 tracking-wide">
              Our Story
            </h1>
            <p className="text-lg text-[#333333] opacity-80">
              A journey that began with a simple love for tea
            </p>
          </motion.div>

          <div className="space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-light text-[#333333] mb-6">The Beginning</h2>
                <p className="text-[#333333] opacity-80 leading-relaxed mb-4">
                  Founded in 2018 by tea master Hiroshi Tanaka, 禅茶房 (Zen Café) was born from a 
                  desire to share the profound peace found in traditional Japanese tea ceremony 
                  with the modern world.
                </p>
                <p className="text-[#333333] opacity-80 leading-relaxed">
                  After studying tea ceremony for over two decades in Kyoto, Hiroshi envisioned 
                  a space where the ancient art of tea could flourish alongside contemporary life, 
                  creating moments of mindfulness in our busy urban existence.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Tea master preparing ceremony"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Traditional tea garden"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-light text-[#333333] mb-6">Our Philosophy</h2>
                <p className="text-[#333333] opacity-80 leading-relaxed mb-4">
                  We believe that tea is more than a beverage—it is a bridge between the past 
                  and present, a moment of connection with ourselves and others. Every cup we 
                  serve is prepared with the same attention and respect given in traditional 
                  tea ceremonies.
                </p>
                <p className="text-[#333333] opacity-80 leading-relaxed">
                  Our space is designed to slow down time, to create a sanctuary where guests 
                  can experience the meditative quality of tea and the gentle art of being present.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#EAE7E3] via-[#F8F5F2] to-[#D3D3D3] rounded-3xl p-12 overflow-hidden"
            >
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE0E0] rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#465775] rounded-full opacity-10 translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl font-light text-[#333333] mb-4 text-center"
                >
                  Our Sacred Commitment
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center text-[#333333] opacity-80 mb-12 max-w-2xl mx-auto"
                >
                  Three pillars that guide our journey in creating moments of tranquility
                </motion.p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#465775] to-[#465775]/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">🍃</span>
                      </div>
                      <h3 className="text-2xl font-medium text-[#333333] mb-4 group-hover:text-[#465775] transition-colors duration-300">
                        Sustainability
                      </h3>
                      <p className="text-[#333333] opacity-80 leading-relaxed mb-4">
                        We source our tea directly from organic farms in Japan, supporting 
                        sustainable farming practices and fair trade partnerships.
                      </p>
                      <div className="w-full h-1 bg-gradient-to-r from-[#465775] to-transparent rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#465775] to-[#465775]/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">🎋</span>
                      </div>
                      <h3 className="text-2xl font-medium text-[#333333] mb-4 group-hover:text-[#465775] transition-colors duration-300">
                        Tradition
                      </h3>
                      <p className="text-[#333333] opacity-80 leading-relaxed mb-4">
                        Every aspect of our service honors traditional Japanese tea culture 
                        while embracing modern accessibility and contemporary needs.
                      </p>
                      <div className="w-full h-1 bg-gradient-to-r from-[#465775] to-transparent rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#465775] to-[#465775]/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">🤝</span>
                      </div>
                      <h3 className="text-2xl font-medium text-[#333333] mb-4 group-hover:text-[#465775] transition-colors duration-300">
                        Community
                      </h3>
                      <p className="text-[#333333] opacity-80 leading-relaxed mb-4">
                        We host tea ceremonies, workshops, and cultural events to share 
                        the beauty of Japanese tea culture with our growing community.
                      </p>
                      <div className="w-full h-1 bg-gradient-to-r from-[#465775] to-transparent rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-light text-[#333333] mb-6">Visit Us</h2>
              <p className="text-[#333333] opacity-80 leading-relaxed mb-8 max-w-2xl mx-auto">
                We invite you to experience the tranquility of our space, to taste teas 
                that have been carefully selected and prepared with mindfulness, and to 
                discover moments of peace in your day.
              </p>
              <Link href="/contact">
                <button className="bg-[#465775] text-white px-8 py-4 rounded-full hover:bg-[#465775]/90 transition-colors duration-300 text-lg">
                  Plan Your Visit
                </button>
              </Link>
            </motion.section>
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

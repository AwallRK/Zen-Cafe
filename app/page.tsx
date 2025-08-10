"use client"

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Text3D, Center } from '@react-three/drei'
import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Hero3DModel from '@/components/hero-3d-model'
import FeaturedSection from '@/components/featured-section'
import PhilosophySection from '@/components/philosophy-section'
import InteriorSection from '@/components/interior-section'
import Footer from '@/components/footer'
import SakuraCursor from '@/components/sakura-cursor'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      <Navigation cartItems={[]} />
      
      {/* Hero Section with 3D Model */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center z-20 pointer-events-none"
          >
            <h1 className="text-6xl md:text-8xl font-light text-[#333333] mb-4 tracking-wide">
              禅茶房
            </h1>
            <p className="text-xl md:text-2xl text-[#333333] font-light tracking-wider">
              ZEN CAFÉ
            </p>
            <p className="text-sm md:text-base text-[#333333] mt-4 opacity-80">
              A Digital Taste of Tranquility
            </p>
          </motion.div>
        </div>
        
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <Environment preset="studio" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Hero3DModel />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-[#333333] rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-[#333333] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <FeaturedSection />
      
      {/* Philosophy Section */}
      <PhilosophySection />
      
      {/* Interior Section */}
      <InteriorSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Sakura Cursor */}
      <SakuraCursor />
    </div>
  )
}

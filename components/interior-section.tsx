"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function InteriorSection() {
  const interiorImages = [
    {
      src: '/japanese-cafe-minimalist.png',
      alt: 'Main seating area with natural lighting'
    },
    {
      src: '/japanese-tea-ceremony.png',
      alt: 'Traditional tea ceremony setup'
    },
    {
      src: '/zen-garden-cafe-view.png',
      alt: 'View of zen garden from window'
    }
  ]

  return (
    <section className="py-20 px-6 bg-[#D3D3D3]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#333333] mb-4 tracking-wide">
            A Space for Reflection
          </h2>
          <p className="text-lg text-[#333333] opacity-80 max-w-2xl mx-auto">
            Step into our carefully designed space where every element serves to create harmony and peace
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interiorImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/contact">
            <button className="bg-[#465775] text-white px-8 py-4 rounded-full hover:bg-[#465775]/90 transition-colors duration-300 text-lg">
              Visit Our Cafe
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

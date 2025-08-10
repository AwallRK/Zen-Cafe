"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FeaturedSection() {
  const featuredItems = [
    {
      id: 1,
      name: 'Ceremonial Matcha',
      description: 'Premium grade matcha whisked to perfection with traditional bamboo whisk',
      price: '¥800',
      image: '/ceremonial-matcha-bowl.png',
      size: 'large',
      type: 'product'
    },
    {
      id: 2,
      name: 'Traditional Tea Ceremony',
      description: 'Experience the ancient art of Japanese tea ceremony in our serene space',
      image: '/japanese-tea-ceremony.png',
      size: 'medium',
      type: 'experience'
    },
    {
      id: 3,
      name: 'Sakura Mochi',
      description: 'Delicate rice cake wrapped in cherry blossom leaf',
      price: '¥420',
      image: '/sakura-mochi.png',
      size: 'small',
      type: 'product'
    },
    {
      id: 4,
      name: 'Zen Garden View',
      description: 'Find tranquility in our carefully designed interior space',
      image: '/zen-garden-cafe-view.png',
      size: 'medium',
      type: 'ambiance'
    },
    {
      id: 5,
      name: 'Hojicha Cheesecake',
      description: 'Roasted green tea flavored cheesecake with graham crust',
      price: '¥580',
      image: '/hojicha-cheesecake-slice.png',
      size: 'small',
      type: 'product'
    },
    {
      id: 6,
      name: 'OPEN EVERYDAY 8AM - 9PM',
      description: 'Visit our café to experience authentic Japanese tea culture in the heart of Tokyo. Every cup tells a story.',
      size: 'info',
      type: 'info'
    }
  ]

  const getCardClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2'
      case 'medium':
        return 'md:col-span-2 md:row-span-1'
      case 'small':
        return 'md:col-span-1 md:row-span-1'
      case 'info':
        return 'md:col-span-1 md:row-span-2'
      default:
        return 'md:col-span-1 md:row-span-1'
    }
  }

  return (
    <section className="py-20 px-6 bg-[#EAE7E3]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-[#333333] mb-4 tracking-wide">
                FEATURED & SIGNATURE
              </h2>
              <p className="text-lg text-[#333333] opacity-80 max-w-2xl">
                Discover our carefully curated selection that embodies the essence of Japanese tea culture,
                from traditional ceremonies to modern interpretations of classic flavors.
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#333333] opacity-60 mb-2">ESTABLISHED 2018</p>
              <p className="text-sm text-[#333333] opacity-60">TOKYO, JAPAN</p>
            </div>
          </div>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`${getCardClasses(item.size)} relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group`}
            >
              {item.type === 'info' ? (
                // Info Card
                <div className="w-full h-full bg-gradient-to-br from-[#333333] to-[#465775] p-8 flex flex-col justify-center text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE0E0] rounded-full opacity-10 translate-x-16 -translate-y-16"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-medium mb-4 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <p className="text-xs opacity-70">VISIT US TODAY</p>
                    </div>
                  </div>
                </div>
              ) : (
                // Image Card
                <>
                  <div className="absolute inset-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {item.price && (
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-3">
                          {item.price}
                        </div>
                      )}
                      <h3 className="text-xl font-medium mb-2 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-sm opacity-90 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#465775]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-sm text-[#333333] opacity-60 max-w-3xl mx-auto leading-relaxed">
            Each item in our collection represents a commitment to quality, tradition, and the mindful appreciation
            of Japanese tea culture. From the careful selection of premium ingredients to the artful presentation,
            every detail is crafted to create moments of tranquility in your day.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

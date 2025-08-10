"use client"

import { motion } from 'framer-motion'

export default function PhilosophySection() {
  return (
    <section className="py-20 px-6 bg-[#F8F5F2]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#333333] mb-8 tracking-wide">
            Our Philosophy
          </h2>
          <div className="space-y-8 text-lg text-[#333333] leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              In the heart of the city, we have created a sanctuary where time slows down 
              and the art of tea becomes a meditation. Every cup is prepared with mindfulness, 
              every moment is an invitation to pause and breathe.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our commitment extends beyond serving exceptional tea and sweets. We honor 
              the centuries-old traditions of Japanese tea culture while embracing the 
              contemporary need for connection and tranquility.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-light text-[#465775] mt-12"
            >
              "一期一会"
              <p className="text-base text-[#333333] mt-2 opacity-80">
                One time, one meeting - treasure every moment
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SakuraPetal {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  opacity: number
}

export default function SakuraCursor() {
  const [petals, setPetals] = useState<SakuraPetal[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let petalId = 0

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Create new petal occasionally
      if (Math.random() < 0.3) {
        const newPetal: SakuraPetal = {
          id: petalId++,
          x: e.clientX,
          y: e.clientY,
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 0.5,
          opacity: 0.6 + Math.random() * 0.4
        }
        
        setPetals(prev => [...prev.slice(-8), newPetal]) // Keep only last 8 petals
      }
    }

    const handleClick = (e: MouseEvent) => {
      // Create burst of petals on click
      const burstPetals: SakuraPetal[] = []
      for (let i = 0; i < 6; i++) {
        burstPetals.push({
          id: petalId++,
          x: e.clientX + (Math.random() - 0.5) * 40,
          y: e.clientY + (Math.random() - 0.5) * 40,
          rotation: Math.random() * 360,
          scale: 0.3 + Math.random() * 0.7,
          opacity: 0.7 + Math.random() * 0.3
        })
      }
      setPetals(prev => [...prev.slice(-4), ...burstPetals])
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  // Remove petals after animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setPetals(prev => prev.slice(1))
    }, 2000)

    return () => clearTimeout(timer)
  }, [petals])

  return (
    <>
      {/* Custom cursor */}
      <div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-80"></div>
      </div>

      {/* Sakura petals */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]">
        <AnimatePresence>
          {petals.map((petal) => (
            <motion.div
              key={petal.id}
              initial={{
                x: petal.x,
                y: petal.y,
                scale: 0,
                rotate: petal.rotation,
                opacity: petal.opacity
              }}
              animate={{
                x: petal.x + (Math.random() - 0.5) * 100,
                y: petal.y + 50 + Math.random() * 100,
                scale: petal.scale,
                rotate: petal.rotation + 180,
                opacity: 0
              }}
              exit={{
                opacity: 0,
                scale: 0
              }}
              transition={{
                duration: 2,
                ease: "easeOut"
              }}
              className="absolute"
              style={{
                transform: `translate(-50%, -50%)`
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C12 2 8 6 8 10C8 12 10 14 12 14C14 14 16 12 16 10C16 6 12 2 12 2Z"
                  fill="#FFE0E0"
                  opacity="0.8"
                />
                <path
                  d="M12 14C12 14 16 10 20 10C22 10 24 12 22 14C20 16 16 14 12 14Z"
                  fill="#FFB6C1"
                  opacity="0.7"
                />
                <path
                  d="M12 14C12 14 16 18 16 22C16 24 14 26 12 24C10 22 12 18 12 14Z"
                  fill="#FFC0CB"
                  opacity="0.6"
                />
                <path
                  d="M12 14C12 14 8 18 4 18C2 18 0 16 2 14C4 12 8 14 12 14Z"
                  fill="#FFCCCB"
                  opacity="0.7"
                />
                <path
                  d="M12 14C12 14 8 10 4 10C2 10 0 12 2 14C4 16 8 14 12 14Z"
                  fill="#FFE4E1"
                  opacity="0.8"
                />
                <circle cx="12" cy="14" r="2" fill="#FF69B4" opacity="0.9" />
              </svg>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

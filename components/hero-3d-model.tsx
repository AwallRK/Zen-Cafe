"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function Hero3DModel() {
  const meshRef = useRef<THREE.Mesh>(null)
  // Removed unused hovered state

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group>
      {/* Main Tea Cup */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group position={[0, -0.5, 0]}>
          {/* Cup Base */}
          <mesh position={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[1.2, 0.8, 1.5, 32]} />
            <meshStandardMaterial color="#EAE7E3" roughness={0.1} metalness={0.1} />
          </mesh>

          {/* Tea Liquid */}
          <mesh position={[0, 0.3, 0]}>
            <cylinderGeometry args={[1.1, 1.1, 0.1, 32]} />
            <meshStandardMaterial color="#4a5d23" roughness={0.0} metalness={0.3} />
          </mesh>

          {/* Handle */}
          <mesh position={[1.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.4, 0.08, 8, 16]} />
            <meshStandardMaterial color="#EAE7E3" roughness={0.1} metalness={0.1} />
          </mesh>
        </group>
      </Float>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={2 + Math.random() * 2} rotationIntensity={0.1} floatIntensity={0.3}>
          <mesh
            position={[
              (Math.random() - 0.5) * 10,
              Math.random() * 5 + 2,
              (Math.random() - 0.5) * 10
            ]}
          >
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial color="#FFE0E0" transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}

      {/* Ambient Sphere */}
      <Sphere
        ref={meshRef}
        args={[3, 64, 64]}
        position={[0, 0, -2]}
      // Removed unused pointer events
      >
        <MeshDistortMaterial
          color="#465775"
          transparent
          opacity={0.1}
          distort={0.3}
          speed={2}
          roughness={0.4}
        />
      </Sphere>
    </group>
  )
}

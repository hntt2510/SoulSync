import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField() {
  const pointsRef = useRef<THREE.Points>(null)
  const geometry = useMemo(() => {
    const count = 1400
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 18
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5
      positions[i * 3 + 2] = r * Math.cos(phi) * 0.75 - 8
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.012
      const mat = pointsRef.current.material as THREE.PointsMaterial
      mat.opacity = 0.42 + Math.sin(t * 0.7) * 0.12
    }
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.045}
        color="#e9d5ff"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function DistortBackdrop() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.06
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.08
    }
  })

  return (
    <mesh ref={meshRef} position={[1.2, -0.4, -10]} scale={[5.2, 5.2, 5.2]}>
      <sphereGeometry args={[1, 56, 56]} />
      <MeshDistortMaterial
        color="#5b21b6"
        emissive="#3b0764"
        emissiveIntensity={0.35}
        distort={0.35}
        speed={1.85}
        roughness={0.45}
        metalness={0.12}
        transparent
        opacity={0.38}
      />
    </mesh>
  )
}

function BackdropScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 6, 8]} intensity={0.6} color="#a78bfa" />
      <StarField />
      <DistortBackdrop />
    </>
  )
}

export default function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 min-h-[100svh] w-full"
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0, 14], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        className="h-full w-full"
      >
        <BackdropScene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0514]/75 via-transparent to-[#0a1520]/80" />
    </div>
  )
}

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type Props = {
  /** Số lượng particles */
  count?: number
  /** Màu cho particle */
  color?: string
  /** Độ mờ tổng */
  opacity?: number
  /** Bán kính phân bố theo trục X/Y */
  spread?: number
  /** Tốc độ trôi */
  speed?: number
  /** className cho wrapper */
  className?: string
}

function Particles({
  count = 240,
  color = '#c4b5fd',
  opacity = 0.45,
  spread = 8,
  speed = 0.06,
}: Required<Omit<Props, 'className'>>) {
  const ref = useRef<THREE.Points>(null)

  const { geometry, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const seedArr = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread * 2
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 1.4
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2
      seedArr[i] = Math.random() * Math.PI * 2
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return { geometry: geo, seeds: seedArr }
  }, [count, spread])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (!ref.current) return
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute
    const arr = pos.array as Float32Array
    for (let i = 0; i < count; i++) {
      const seed = seeds[i]
      arr[i * 3 + 1] += Math.sin(t * 0.6 + seed) * 0.0025 + speed * 0.01
      arr[i * 3] += Math.cos(t * 0.4 + seed) * 0.0018
      // wrap
      if (arr[i * 3 + 1] > spread) arr[i * 3 + 1] = -spread
      if (arr[i * 3] > spread) arr[i * 3] = -spread
      if (arr[i * 3] < -spread) arr[i * 3] = spread
    }
    pos.needsUpdate = true
    ref.current.rotation.z = Math.sin(t * 0.05) * 0.05
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function AmbientParticles({
  count = 240,
  color = '#c4b5fd',
  opacity = 0.45,
  spread = 8,
  speed = 0.06,
  className = '',
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        className="h-full w-full"
      >
        <Particles
          count={count}
          color={color}
          opacity={opacity}
          spread={spread}
          speed={speed}
        />
      </Canvas>
    </div>
  )
}

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, ContactShadows } from '@react-three/drei'
import PhoneModel from './PhoneModel'

function Scene() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 6, 4]} intensity={2.5} castShadow shadow-mapSize={[2048, 2048]} />
      <directionalLight position={[-6, 2, -2]} intensity={1.2} color="#a855f7" />
      <pointLight position={[0, -2, 3]} intensity={1.8} color="#6366f1" />

      <Float speed={2.8} rotationIntensity={0.45} floatIntensity={0.75}>
        <PhoneModel animateRotation={false} rotation={[0.15, -0.42, 0]} scale={1.08} />
      </Float>

      <ContactShadows
        opacity={0.55}
        scale={12}
        blur={3}
        far={10}
        position={[0, -1.42, 0]}
      />
    </>
  )
}

export default function HeroPhoneCanvas({ className = '' }: { className?: string }) {
  return (
    <div className={`relative h-[min(560px,70vh)] w-full min-h-[340px] ${className}`}>
      <Canvas
        shadows
        camera={{ position: [0, 0.35, 4.55], fov: 40 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        className="!bg-transparent"
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}

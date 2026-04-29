import { useLayoutEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { Group } from 'three'
import * as THREE from 'three'

interface PhoneModelProps {
  rotation?: [number, number, number]
  position?: [number, number, number]
  scale?: number
  animateRotation?: boolean
  screenMapUrl?: string
}

function PhoneScreenPlane({ screenMapUrl }: { screenMapUrl: string }) {
  const texture = useTexture(screenMapUrl) as THREE.Texture

  useLayoutEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace
    texture.needsUpdate = true
  }, [texture])

  return (
    <mesh position={[0, 0, 0.081]} castShadow>
      <planeGeometry args={[1.1, 2.3]} />
      <meshStandardMaterial
        map={texture}
        emissive="#12081f"
        emissiveIntensity={0.08}
        roughness={0.35}
        metalness={0.08}
      />
    </mesh>
  )
}

export default function PhoneModel({
  rotation = [0, 0.3, 0],
  position = [0, 0, 0],
  scale = 1,
  animateRotation = true,
  screenMapUrl = '/phones-main.png',
}: PhoneModelProps) {
  const groupRef = useRef<Group>(null)

  useFrame((_s, dt) => {
    if (!groupRef.current || !animateRotation) return
    groupRef.current.rotation.y += 0.45 * dt
  })

  return (
    <group ref={groupRef} rotation={rotation} position={position} scale={scale}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.2, 2.4, 0.15]} />
        <meshStandardMaterial color="#14141f" metalness={0.45} roughness={0.28} />
      </mesh>

      <PhoneScreenPlane screenMapUrl={screenMapUrl} />

      <mesh position={[0, 1.05, 0.095]}>
        <boxGeometry args={[0.5, 0.12, 0.06]} />
        <meshStandardMaterial color="#020203" roughness={0.5} />
      </mesh>

      <mesh position={[-0.32, 0.82, 0.2]} castShadow rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.06, 32]} />
        <meshStandardMaterial color="#12121c" metalness={0.85} roughness={0.25} />
      </mesh>

      <mesh position={[-0.32, 0.82, 0.26]}>
        <cylinderGeometry args={[0.055, 0.055, 0.02, 32]} />
        <meshStandardMaterial color="#020203" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  )
}

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  // Smooth noise
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(in vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i+vec2(0,0)), hash(i+vec2(1,0)), u.x),
               mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0; float a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.08;
    vec2 q = uv * vec2(1.6, 1.0);
    float n1 = fbm(q + vec2(t, -t * 0.6));
    float n2 = fbm(q * 1.4 + vec2(-t * 0.7, t));
    float aurora = smoothstep(0.35, 0.85, n1 * 0.65 + n2 * 0.45);

    // gradient mix
    vec3 col = mix(uColorA, uColorB, smoothstep(0.0, 1.0, uv.y + n1 * 0.3));
    col = mix(col, uColorC, aurora * 0.85);

    // soft vignette
    float vign = smoothstep(1.1, 0.4, length(uv - 0.5) * 1.6);
    col *= vign;

    // alpha falloff
    float alpha = aurora * 0.55 + 0.05;
    alpha *= vign;

    gl_FragColor = vec4(col, alpha);
  }
`

function AuroraPlane() {
  const matRef = useRef<THREE.ShaderMaterial>(null)
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color('#1a0a3a') },
      uColorB: { value: new THREE.Color('#7c3aed') },
      uColorC: { value: new THREE.Color('#ec4899') },
    }),
    [],
  )

  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh>
      <planeGeometry args={[10, 6, 1, 1]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

export default function AuroraBackdrop({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 5], zoom: 70 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        className="h-full w-full"
      >
        <AuroraPlane />
      </Canvas>
    </div>
  )
}

import { useRef, type HTMLAttributes, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  /** Góc nghiêng tối đa (deg). Mặc định 8 */
  max?: number
  /** Hiển thị highlight gradient theo cursor */
  glare?: boolean
  className?: string
}

export default function TiltCard({
  children,
  max = 8,
  glare = true,
  className = '',
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const gx = useMotionValue(50)
  const gy = useMotionValue(50)

  const srx = useSpring(rx, { stiffness: 200, damping: 18, mass: 0.4 })
  const sry = useSpring(ry, { stiffness: 200, damping: 18, mass: 0.4 })

  const transform = useTransform(
    [srx, sry],
    ([latestRx, latestRy]) =>
      `perspective(900px) rotateX(${latestRx}deg) rotateY(${latestRy}deg)`,
  )
  const glareBg = useTransform(
    [gx, gy],
    ([latestX, latestY]) =>
      `radial-gradient(420px circle at ${latestX}% ${latestY}%, rgba(196,181,253,0.18), transparent 55%)`,
  )

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    ry.set((px - 0.5) * (max * 2))
    rx.set(-(py - 0.5) * (max * 2))
    gx.set(px * 100)
    gy.set(py * 100)
  }

  const onLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform, transformStyle: 'preserve-3d' }}
      className={`relative will-change-transform ${className}`}
      {...rest}
    >
      {children}
      {glare ? (
        <motion.div
          aria-hidden
          style={{ background: glareBg }}
          className="pointer-events-none absolute inset-0 z-[5] rounded-[inherit] mix-blend-screen"
        />
      ) : null}
    </motion.div>
  )
}

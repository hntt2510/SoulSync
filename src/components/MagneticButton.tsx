import { useRef, type AnchorHTMLAttributes, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  /** Cường độ hút (px tối đa). Mặc định 14 */
  strength?: number
  /** className truyền xuống thẻ <a> */
  className?: string
}

export default function MagneticButton({
  children,
  strength = 14,
  className = '',
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 })

  // Inner content lệch nhẹ hơn vỏ ngoài, tạo cảm giác chiều sâu
  const innerX = useTransform(sx, (v) => v * 0.45)
  const innerY = useTransform(sy, (v) => v * 0.45)

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    x.set(relX * strength)
    y.set(relY * strength)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
      {...rest}
    >
      <motion.span
        style={{ x: innerX, y: innerY }}
        className="relative inline-flex h-full w-full items-center justify-center"
      >
        {children}
      </motion.span>
    </motion.a>
  )
}

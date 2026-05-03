import { lazy, Suspense, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import FloatingMessages from './FloatingMessages'
import SplitTextReveal from './SplitTextReveal'
import MagneticButton from './MagneticButton'

const HeroBackdrop = lazy(() => import('./HeroBackdrop'))

const MOCKUP_SRC = encodeURI('/Asset14@2x 1.png')

const PRIMARY_BTN =
  'inline-flex min-h-[48px] w-full min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:opacity-95 sm:w-auto xl:min-h-[56px] xl:px-10 xl:text-base'

const SECONDARY_BTN =
  'inline-flex min-h-[48px] w-full min-w-[200px] items-center justify-center rounded-full border border-white/22 bg-white/[0.05] px-8 py-3.5 text-sm font-semibold text-white/92 backdrop-blur-sm transition hover:bg-white/[0.1] sm:w-auto xl:min-h-[56px] xl:px-10 xl:text-base'

export default function HeroSection() {
  const tiltRef = useRef<HTMLDivElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 110, damping: 16, mass: 0.6 })
  const sry = useSpring(ry, { stiffness: 110, damping: 16, mass: 0.6 })
  const transform = useTransform(
    [srx, sry],
    ([latestRx, latestRy]) =>
      `perspective(1100px) rotateX(${latestRx}deg) rotateY(${latestRy}deg)`,
  )

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    ry.set((px - 0.5) * 12)
    rx.set(-(py - 0.5) * 8)
  }
  const handleLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 md:pb-28 md:pt-32 lg:pb-24 lg:pt-28"
    >
      <Suspense fallback={null}>
        <HeroBackdrop />
      </Suspense>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:max-w-[88rem] lg:grid-cols-2 lg:gap-14 lg:px-10 xl:max-w-[96rem] xl:gap-16 xl:px-14 2xl:max-w-[110rem] 2xl:gap-20 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-7xl 2xl:text-8xl">
            <SplitTextReveal
              text="Thoải mái nói đi, SoulSync đang nghe đây."
              stagger={0.07}
              delay={0.1}
              highlight={(word) =>
                word === 'SoulSync' ? (
                  <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-200 bg-clip-text text-transparent">
                    SoulSync
                  </span>
                ) : null
              }
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.65 }}
            className="mx-auto mb-10 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg lg:mx-0 lg:max-w-2xl xl:text-xl 2xl:max-w-3xl 2xl:text-2xl"
          >
            Không có những lời khuyên sáo rỗng. Không bắt bạn phải gõ từng dòng tin nhắn lúc mệt mỏi.
            SoulSync chỉ là một khoảng không tĩnh lặng, an toàn để bạn trút bỏ mọi muộn phiền.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.85 }}
            className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <MagneticButton href="#download" className={PRIMARY_BTN} strength={16}>
              Bắt đầu ngay
            </MagneticButton>
            <MagneticButton href="#features" className={SECONDARY_BTN} strength={12}>
              Tìm hiểu thêm
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[min(100%,560px)] lg:max-w-none"
        >
          <motion.div
            ref={tiltRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ transform, transformStyle: 'preserve-3d' }}
            className="relative mx-auto aspect-[4/3] w-full max-w-lg will-change-transform lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"
          >
            <FloatingMessages />
            <motion.img
              src={MOCKUP_SRC}
              alt="SoulSync trên hai điện thoại — trải nghiệm giao diện ứng dụng"
              className="relative z-[1] h-auto w-full object-contain drop-shadow-[0_28px_90px_rgba(99,102,241,0.35)]"
              width={1200}
              height={900}
              loading="eager"
              animate={{ y: [0, -10, 0, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transform: 'translateZ(40px)' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

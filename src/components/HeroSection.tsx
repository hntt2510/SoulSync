import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import FloatingMessages from './FloatingMessages'

const HeroBackdrop = lazy(() => import('./HeroBackdrop'))

const MOCKUP_SRC = encodeURI('/Asset14@2x 1.png')

export default function HeroSection() {
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
            Thoải mái nói đi,{' '}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-200 bg-clip-text text-transparent">
              SoulSync
            </span>{' '}
            đang nghe đây.
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg lg:mx-0 lg:max-w-2xl xl:text-xl 2xl:max-w-3xl 2xl:text-2xl">
            Không có những lời khuyên sáo rỗng. Không bắt bạn phải gõ từng dòng tin nhắn lúc mệt mỏi.
            SoulSync chỉ là một khoảng không tĩnh lặng, an toàn để bạn trút bỏ mọi muộn phiền.
          </p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#download"
              className="inline-flex min-h-[48px] w-full min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:opacity-95 sm:w-auto xl:min-h-[56px] xl:px-10 xl:text-base"
            >
              Bắt đầu ngay
            </a>
            <a
              href="#features"
              className="inline-flex min-h-[48px] w-full min-w-[200px] items-center justify-center rounded-full border border-white/22 bg-white/[0.05] px-8 py-3.5 text-sm font-semibold text-white/92 backdrop-blur-sm transition hover:bg-white/[0.1] sm:w-auto xl:min-h-[56px] xl:px-10 xl:text-base"
            >
              Tìm hiểu thêm
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[min(100%,560px)] lg:max-w-none"
        >
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
            <FloatingMessages />
            <img
              src={MOCKUP_SRC}
              alt="SoulSync trên hai điện thoại — trải nghiệm giao diện ứng dụng"
              className="relative z-[1] h-auto w-full object-contain drop-shadow-[0_28px_90px_rgba(99,102,241,0.35)]"
              width={1200}
              height={900}
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

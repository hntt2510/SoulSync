import { lazy, Suspense } from 'react'
import { motion, type Variants } from 'framer-motion'
import MagneticButton from './MagneticButton'

const AuroraBackdrop = lazy(() => import('./AuroraBackdrop'))

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

const RIM_MASK = {
  WebkitMaskImage:
    'linear-gradient(to bottom, #000 0%, #000 68%, rgba(0,0,0,0.22) 100%)',
  maskImage:
    'linear-gradient(to bottom, #000 0%, #000 68%, rgba(0,0,0,0.22) 100%)',
} as const

function CardHighlightRim() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden>
      <div
        className="absolute inset-0 rounded-[32px] border border-white/45 shadow-[0_0_20px_rgba(196,181,253,0.18)]"
        style={RIM_MASK}
      />
      <div className="absolute left-[6%] right-[6%] top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_22px_rgba(226,214,255,0.65)]" />
    </div>
  )
}

export default function CTASection() {
  return (
    <section
      id="download"
      className="relative isolate overflow-hidden bg-[#0B0121] px-4 py-20 md:py-24 lg:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <Suspense fallback={null}>
          <AuroraBackdrop className="opacity-80" />
        </Suspense>
        <div className="absolute left-1/2 top-[-15%] h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-violet-700/12 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-1/2 h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-700/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl xl:max-w-[80rem]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.025] px-6 py-14 backdrop-blur-md transition duration-500 hover:border-violet-300/30 hover:bg-white/[0.04] sm:px-10 md:px-16 md:py-20 lg:px-20 lg:py-24"
        >
          <CardHighlightRim />
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-[1] h-full bg-[radial-gradient(ellipse_60%_55%_at_50%_30%,rgba(167,139,250,0.18)_0%,transparent_70%)] opacity-70" />

          <motion.div
            className="relative z-[3] mx-auto max-w-3xl text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.h2
              id="cta-heading"
              variants={fadeUp}
              className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl xl:text-[3.25rem]"
            >
              Bắt đầu hành trình tìm lại sự tĩnh lặng.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/65 md:mt-7 md:text-lg md:leading-[1.8]"
            >
              Không cần đăng ký phức tạp, không rườm rà. SoulSync luôn ở đây, sẵn sàng lắng nghe mọi tâm sự
              của bạn mà không hề phán xét. Hãy mở app, nhắm mắt lại và để nhịp thở dẫn lối cho bạn qua những
              chông chênh.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex justify-center md:mt-12">
              <MagneticButton
                href="#"
                strength={18}
                className="group/btn relative inline-flex min-h-[52px] items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/[0.04] px-9 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:border-white/55 hover:bg-white/[0.08] hover:shadow-[0_0_28px_rgba(196,181,253,0.35)] md:min-h-[56px] md:px-11 md:text-base"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition duration-700 group-hover/btn:translate-x-full" />
                <span className="relative">Khám phá SoulSync ngay</span>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

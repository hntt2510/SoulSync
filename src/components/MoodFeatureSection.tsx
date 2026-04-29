import { useRef, useState, type ReactNode } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion'

const ASSET_LEFT = encodeURI('/Asset29@2x 2.png')
const ASSET_RIGHT = encodeURI('/Asset25@2x 2.png')

const MOOD_ICONS = [
  encodeURI('/Group1.png'),
  encodeURI('/Group3 (1).png'),
  encodeURI('/Group4.png'),
  encodeURI('/Group5.png'),
  encodeURI('/Group6.png'),
] as const

const rowVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
}

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

function GlassCardRim({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-[40px] p-px shadow-[0_24px_70px_rgba(0,0,0,0.35),0_-8px_32px_-8px_rgba(139,92,246,0.08)] ${className}`}
      style={{
        background: `linear-gradient(180deg,
          rgba(252, 250, 255, 0.28) 0%,
          rgba(210, 196, 255, 0.12) 12%,
          rgba(167, 139, 250, 0.07) 30%,
          rgba(55, 45, 75, 0.22) 58%,
          rgba(25, 20, 38, 0.55) 85%,
          rgba(15, 12, 24, 0.72) 100%)`,
      }}
    >
      {children}
      <div className="pointer-events-none absolute inset-0 z-[2] rounded-[40px]" aria-hidden>
        <div className="absolute left-[8%] right-[8%] top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/55 to-transparent shadow-[0_0_22px_rgba(226,214,255,0.6)]" />
        <div className="absolute bottom-0 left-[10%] right-[10%] h-[0.5px] rounded-full bg-white/[0.045] shadow-none" />
        <div className="absolute bottom-[6%] left-0 top-[10%] w-px bg-gradient-to-b from-violet-200/42 via-violet-300/12 to-transparent shadow-[-2px_0_14px_rgba(167,139,250,0.35)]" />
        <div className="absolute bottom-[6%] right-0 top-[10%] w-px bg-gradient-to-b from-violet-200/42 via-violet-300/12 to-transparent shadow-[2px_0_14px_rgba(167,139,250,0.35)]" />
      </div>
    </div>
  )
}

function MoodIconBubble({ src, index }: { src: string; index: number }) {
  const [hovered, setHovered] = useState(false)
  const floatDuration = 3.8 + index * 0.35
  const floatDelay = index * 0.22

  return (
    <motion.div
      className="relative flex justify-center"
      animate={{ y: [0, -7, 0, -4, 0] }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: floatDelay,
      }}
    >
      <motion.div
        className="relative"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      >
        <motion.div
          className="pointer-events-none absolute -inset-4 rounded-full bg-violet-400/35 blur-xl md:-inset-5"
          animate={
            hovered
              ? { opacity: [0.55, 0.95, 0.55], scale: [1, 1.2, 1] }
              : { opacity: 0.45, scale: 1 }
          }
          transition={{
            duration: hovered ? 1.15 : 0.35,
            repeat: hovered ? Infinity : 0,
            ease: 'easeInOut',
          }}
        />
        <div className="relative rounded-full border border-white/[0.09] bg-white/[0.035] p-4 shadow-[0_0_24px_rgba(139,92,246,0.16)] backdrop-blur-md sm:p-5 md:p-6">
          <img src={src} alt="" className="h-16 w-16 object-contain sm:h-[4.5rem] sm:w-[4.5rem] md:h-20 md:w-20 lg:h-24 lg:w-24" loading="lazy" draggable={false} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function MoodFeatureSection() {
  const phonesRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: phonesRef,
    offset: ['start end', 'end start'],
  })
  const yLeft = useTransform(scrollYProgress, [0, 1], [48, -64])
  const yRight = useTransform(scrollYProgress, [0, 1], [72, -112])

  return (
    <section
      id="showcase"
      className="relative isolate overflow-hidden px-4 py-20 md:py-28 lg:py-32"
      aria-labelledby="mood-features-heading"
    >
      {/* z-0: nền luôn nằm trong section (tránh z-âm bị lọt ra sau <main>) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#0B0121]">
        <img
          src="/dark1.png"
          alt=""
          className="absolute inset-0 h-full w-full scale-[1.06] object-cover object-center opacity-[0.82] blur-[18px] saturate-[1.05] md:blur-[26px]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0121]/25 via-[#0B0121]/06 to-[#0B0121]/42" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_38%,rgba(139,92,246,0.09)_0%,transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_100%_88%_at_50%_50%,transparent_52%,rgba(11,1,33,0.55)_100%)]"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
        <div className="absolute left-1/4 top-32 h-72 w-72 rounded-full bg-violet-600/8 blur-[100px] md:top-40" />
        <div className="absolute bottom-1/3 right-0 h-80 w-80 rounded-full bg-fuchsia-600/7 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mb-16 grid gap-10 lg:mb-24 lg:grid-cols-2 lg:gap-16 lg:items-start"
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
        >
          <motion.div variants={slideFromLeft}>
            <GlassCardRim>
              <div className="relative z-[1] rounded-[39px] bg-white/[0.035] px-6 py-9 backdrop-blur-[14px] md:px-10 md:py-11">
                <h3 id="mood-features-heading" className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Nhật ký cảm xúc tự động
                </h3>
                <p className="mb-6 text-pretty text-sm leading-relaxed text-gray-400 md:text-base md:leading-[1.75]">
                  SoulSync từ chối việc bắt bạn phải tự chấm điểm nỗi buồn. Trí tuệ nhân tạo sẽ tự động biến những đoạn thu âm của
                  bạn thành biểu đồ tâm trạng theo tuần. Chỉ cần nhìn lại, thấu hiểu bản thân và nhận ra những khoảng lặng mà
                  bạn đã vô tình bỏ lỡ.
                </p>
                <a
                  href="#features"
                  className="text-sm font-medium text-violet-200/90 underline decoration-violet-400/50 underline-offset-4 transition hover:text-white hover:decoration-violet-300"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </GlassCardRim>
          </motion.div>

          <motion.div variants={slideFromRight} className="flex flex-col items-end text-right">
            <h3 className="mb-6 max-w-xl text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-[2.6rem]">
              Nhắm mắt lại.
              <br />
              Và tâm sự.
            </h3>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-gray-400 md:text-base md:leading-[1.8]">
              Bạn không cần dán mắt vào màn hình rực sáng. Hãy cứ bật micro, vứt điện thoại sang một bên và để nước mắt rơi.
              Chúng mình lắng nghe bạn qua từng nhịp thở và quãng lặng.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-20 flex flex-wrap items-center justify-center gap-8 md:mb-24 md:gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.05 }}
        >
          {MOOD_ICONS.map((src, i) => (
            <MoodIconBubble key={src} src={src} index={i} />
          ))}
        </motion.div>

        <GlassCardRim>
          <div className="relative z-[1] grid gap-10 rounded-[39px] bg-white/[0.035] px-6 py-10 backdrop-blur-[14px] md:gap-12 md:px-10 md:py-12 lg:grid-cols-2 lg:items-center lg:px-14 lg:py-14">
            <div className="max-w-xl lg:justify-self-start">
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">Sơ cứu cảm xúc tức thời</h3>
              <p className="mb-6 text-pretty text-sm leading-relaxed text-gray-400 md:text-base md:leading-[1.75]">
                Khi bạn hoảng loạn hay mất ngủ, những lời khuyên sáo rỗng vô tác dụng. Thay vào đó, AI sẽ tự động kích hoạt bài
                tập Thở Hộp (4-4-4-4) hoặc mở Không gian tiếng mưa rào để ép nhịp tim bạn chậm lại ngay lập tức. Không cần thao
                tác, chỉ cần thả lỏng.
              </p>
              <a
                href="#features"
                className="text-sm font-medium text-violet-200/90 underline decoration-violet-400/50 underline-offset-4 transition hover:text-white hover:decoration-violet-300"
              >
                Tìm hiểu thêm
              </a>
            </div>

            <div
              ref={phonesRef}
              className="relative flex min-h-[280px] items-end justify-center gap-3 sm:min-h-[320px] sm:gap-5 md:justify-end lg:justify-self-end"
            >
              <motion.div style={{ y: yLeft }} className="relative z-[1] w-[46%] max-w-[240px] sm:max-w-[280px]">
                <img
                  src={ASSET_LEFT}
                  alt="Danh sách bài tập thở trên SoulSync"
                  width={560}
                  height={900}
                  className="h-auto w-full object-contain drop-shadow-[0_28px_70px_rgba(0,0,0,0.55)]"
                  loading="lazy"
                  draggable={false}
                />
              </motion.div>
              <motion.div style={{ y: yRight }} className="relative z-[2] w-[48%] max-w-[250px] sm:max-w-[290px]">
                <img
                  src={ASSET_RIGHT}
                  alt="Bài thở hộp 4-4-4-4 — Hít vào"
                  width={560}
                  height={900}
                  className="relative z-[1] h-auto w-full object-contain drop-shadow-[0_32px_80px_rgba(99,102,241,0.25)]"
                  loading="lazy"
                  draggable={false}
                />
                <motion.div
                  className="pointer-events-none absolute left-1/2 top-[36%] z-[2] aspect-square w-[min(26%,76px)] -translate-x-1/2 rounded-full border-2 border-emerald-300/55 sm:w-[min(24%,84px)]"
                  aria-hidden
                  animate={{
                    scale: [1, 1.14, 1],
                    opacity: [0.62, 0.95, 0.62],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="pointer-events-none absolute left-1/2 top-[36%] z-[2] aspect-square w-[min(32%,92px)] -translate-x-1/2 rounded-full border border-emerald-400/25 sm:w-[min(30%,100px)]"
                  aria-hidden
                  animate={{
                    scale: [1, 1.22, 1],
                    opacity: [0.2, 0.45, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.15,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </GlassCardRim>
      </div>
    </section>
  )
}

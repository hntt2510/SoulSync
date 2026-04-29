import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

const MOCKUP_SRC = encodeURI('/Asset18@2x 1.png')

const subtitleLines = [
  "Chúng ta thường được dạy phải 'mạnh mẽ lên'. Nhưng đôi khi, thứ bạn cần chỉ là một người chịu ngồi yên lắng nghe bạn khóc mà không hề đánh giá. SoulSync ở đây vì những đêm bạn trằn trọc với những suy nghĩ ngổn ngang nhưng chẳng biết tỏ cùng ai.",

]

const cardBodyVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.18 },
  },
}

const cardLineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function MessageSection() {
  const mockupWrapRef = useRef<HTMLDivElement>(null)
  const mockupInView = useInView(mockupWrapRef, { once: true, amount: 0.2 })

  return (
    <section
      id="message"
      className="relative overflow-hidden px-4 py-20 md:py-28 lg:py-32"
      aria-labelledby="message-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-[#0B0121]">
        <img
          src="/dark1.png"
          alt=""
          className="h-full w-full scale-[1.08] object-cover opacity-[0.62] blur-[40px] md:blur-[52px]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0121]/45 via-[#0B0121]/20 to-[#0B0121]/70" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_38%,rgba(139,92,246,0.14)_0%,transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_95%_80%_at_50%_50%,transparent_35%,#0B0121_92%)]"
          aria-hidden
        />
      </div>

      <div className="relative z-[1] mx-auto max-w-7xl">
        <motion.div
          className="pointer-events-none absolute left-1/2 top-24 z-0 h-[min(45vw,320px)] w-[min(92vw,540px)] -translate-x-1/2 rounded-full bg-violet-500/22 blur-[90px] md:top-28"
          animate={{
            scale: [1, 1.1, 1.04, 1],
            opacity: [0.45, 0.62, 0.52, 0.45],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden
        />

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-[1]"
        >
          <div
            className="relative z-[1] rounded-[40px] p-[1px] shadow-[0_40px_100px_rgba(0,0,0,0.45),0_-18px_48px_-14px_rgba(139,92,246,0.2)]"
            style={{
              background: `linear-gradient(180deg,
                rgba(252, 250, 255, 0.52) 0%,
                rgba(210, 196, 255, 0.28) 9%,
                rgba(167, 139, 250, 0.16) 26%,
                rgba(88, 70, 118, 0.32) 52%,
                rgba(40, 34, 54, 0.55) 80%,
                rgba(22, 18, 30, 0.75) 100%)`,
            }}
          >
            <div className="relative z-[1] rounded-[39px] bg-[#0B0121]/18 px-6 py-12 backdrop-blur-[12px] md:px-14 md:py-16 lg:px-16 lg:py-[4.25rem]">
              <motion.div
                variants={cardBodyVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
              >
                <motion.h2
                  id="message-heading"
                  variants={cardLineVariants}
                  className="mb-8 text-balance text-center text-3xl font-bold leading-tight tracking-tight text-white md:mb-10 md:text-4xl lg:text-5xl"
                >
                  Hôm nay bạn vất vả rồi.
                </motion.h2>

                <div className="mx-auto max-w-[680px] space-y-5 text-center">
                  {subtitleLines.map((line) => (
                    <motion.p
                      key={line}
                      variants={cardLineVariants}
                      className="text-pretty text-base leading-relaxed text-slate-300 md:text-lg md:leading-[1.75]"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-0 z-[2] rounded-[40px]" aria-hidden>
              <div className="absolute left-[8%] right-[8%] top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/65 to-transparent shadow-[0_0_28px_rgba(226,214,255,0.82)]" />
              <div className="absolute bottom-0 left-[10%] right-[10%] h-[0.5px] rounded-full bg-white/[0.065]" />
              <div className="absolute bottom-[6%] left-0 top-[10%] w-px bg-gradient-to-b from-violet-200/6 via-violet-300/20 to-transparent shadow-[-4px_0_22px_rgba(167,139,250,0.5)]" />
              <div className="absolute bottom-[6%] right-0 top-[10%] w-px bg-gradient-to-b from-violet-200/6 via-violet-300/20 to-transparent shadow-[4px_0_22px_rgba(167,139,250,0.5)]" />
            </div>
          </div>
        </motion.div>

        <div
          ref={mockupWrapRef}
          className="relative z-[1] mx-auto mt-16 w-full max-w-[min(100%,1280px)] md:mt-24 lg:mt-[5.5rem]"
        >
          <motion.div
            initial={{ opacity: 0, y: 72, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15, margin: '0px 0px -60px 0px' }}
            transition={{
              duration: 1.15,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.08,
            }}
            className="relative mx-auto w-full"
          >
            <motion.div
              className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-[min(62vw,520px)] w-[min(94%,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/18 via-violet-500/15 to-indigo-500/12 blur-[72px] md:h-[min(52vw,580px)] md:w-[min(96%,960px)]"
              aria-hidden
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.4, ease: 'easeOut', delay: 0.15 }}
            />

            <motion.div
              animate={mockupInView ? { y: [0, -6, 0, -5, 0] } : { y: 0 }}
              transition={{
                duration: 7,
                repeat: mockupInView ? Infinity : 0,
                ease: 'easeInOut',
                delay: mockupInView ? 1.25 : 0,
              }}
              className="relative"
            >
              <img
                src={MOCKUP_SRC}
                alt="SoulSync — cụm ba điện thoại: cảm xúc, giọng nói và bài thở"
                width={1600}
                height={1020}
                className="mx-auto h-auto w-full max-w-[min(100%,1220px)] object-contain drop-shadow-[0_40px_110px_rgba(0,0,0,0.62)] md:max-w-[min(100%,1240px)] lg:max-w-[min(100%,1280px)]"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

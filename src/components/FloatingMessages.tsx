import { motion } from 'framer-motion'

const MESSAGE_STYLE =
  'pointer-events-none max-w-[200px] rounded-2xl border border-white/35 bg-[#1a0b38]/85 px-3.5 py-2.5 text-left text-xs font-medium text-white shadow-[0_10px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl ring-1 ring-violet-400/20 sm:max-w-[220px] sm:px-4 sm:text-sm xl:max-w-[260px] xl:px-5 xl:py-3 xl:text-base 2xl:max-w-[300px] 2xl:text-lg'

const items: { text: string; className: string; delay: number; duration: number }[] = [
  {
    text: 'Tôi cảm thấy hơi áp lực khi deadline đến gần…',
    className: 'left-0 top-[4%] sm:-left-1 md:-left-2',
    delay: 0,
    duration: 4.8,
  },
  {
    text: 'SoulSync đang lắng nghe, không phán xét.',
    className: 'right-0 top-[18%] sm:-right-1 md:-right-2',
    delay: 0.35,
    duration: 5.2,
  },
  {
    text: 'Chạm để trải lòng — dù chỉ vài phút thôi.',
    className: 'left-1 bottom-[22%] sm:left-0',
    delay: 0.7,
    duration: 5.6,
  },
  {
    text: 'Hít thở cùng nhịp, tâm trí sẽ nhẹ hơn.',
    className: 'right-2 bottom-[6%] sm:right-0',
    delay: 1.05,
    duration: 4.9,
  },
]

export default function FloatingMessages() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      {items.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.12, duration: 0.55, ease: 'easeOut' }}
          className={`absolute ${m.className}`}
        >
          <motion.div
            className={MESSAGE_STYLE}
            animate={{
              y: [0, -12, 0, -6, 0],
              x: [0, i % 2 === 0 ? 6 : -6, 0, i % 2 === 0 ? -4 : 4, 0],
            }}
            transition={{
              duration: m.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: m.delay,
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          >
            {m.text}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

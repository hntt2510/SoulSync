import { motion } from 'framer-motion'

const moods = [
  { label: 'Nặng nề', emoji: '😢', hue: 'from-sky-500/30 via-sky-400/15' },
  { label: 'Bình thường', emoji: '😐', hue: 'from-amber-400/35 via-yellow-400/15' },
  { label: 'Hứng khởi', emoji: '🙂', hue: 'from-rose-400/35 via-orange-400/15' },
  { label: 'Lo lắng', emoji: '😰', hue: 'from-indigo-500/35 via-blue-400/15' },
  { label: 'Bình an', emoji: '🌿', hue: 'from-emerald-500/35 via-teal-400/15' },
]

export default function EmotionOrbitSection() {
  return (
    <section className="relative px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-xl font-semibold text-white md:text-2xl"
        >
          Cảm xúc hiện tại của bạn — được gọi đúng tên
        </motion.h3>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {moods.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.06 }}
              className={`flex min-w-[132px] flex-col items-center gap-2 rounded-2xl border border-white/15 bg-gradient-to-br ${m.hue} to-transparent px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]`}
            >
              <span className="text-3xl">{m.emoji}</span>
              <span className="text-sm font-medium text-white/90">{m.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

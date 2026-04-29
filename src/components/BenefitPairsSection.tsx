import { motion } from 'framer-motion'
import { Wind, Moon } from 'lucide-react'

export default function BenefitPairsSection() {
  return (
    <section id="benefits" className="relative px-4 py-24">
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-3xl border border-white/15 bg-white/[0.04] p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
        >
          <div className="mb-6 inline-flex rounded-2xl bg-violet-500/20 p-3 text-violet-200">
            <Wind className="h-7 w-7" aria-hidden />
          </div>
          <h3 className="mb-4 text-2xl font-semibold text-white">Lấy lại nhịp thở</h3>
          <p className="leading-relaxed text-white/68">
            Các bài tập hộp, 4-7-8 và thở cộng hưởng được thiết kế để bạn chỉnh lại nhịp thần kinh — chỉ trong vài phút.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-3xl border border-white/15 bg-white/[0.04] p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
        >
          <div className="mb-6 inline-flex rounded-2xl bg-indigo-500/20 p-3 text-indigo-200">
            <Moon className="h-7 w-7" aria-hidden />
          </div>
          <h3 className="mb-4 text-2xl font-semibold text-white">Giấc ngủ dịu hơn</h3>
          <p className="leading-relaxed text-white/68">
            Chế độ Calm và âm nền tự chọn giúp tâm trí có ranh giới — dễ chuyển từ lo ây sang buông.
          </p>
        </motion.article>
      </div>
    </section>
  )
}

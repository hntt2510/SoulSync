import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section id="download" className="scroll-mt-28 px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-6 text-balance text-4xl font-bold md:text-[2.6rem]">
          <span className="bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
            Bắt đầu hành trình tìm lại sự tĩnh lặng
          </span>
        </h2>
        <p className="mb-10 text-lg text-white/65">
          Tải SoulSync và thử chia sẻ bằng giọng nói — miễn phí khởi đầu, không cần thẻ ngay.
        </p>

        <motion.div
          className="flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
        >
          <a
            href="#"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-10 text-base font-semibold text-zinc-900 transition hover:bg-white/90"
          >
            App Store
          </a>
          <a
            href="#"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/25 bg-white/[0.04] px-10 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/[0.08]"
          >
            Google Play
          </a>
        </motion.div>

        <p className="mt-8 text-xs text-white/40">SoulSync không thay cho chuyên gia y khoa. Trong khủng hoảng nguy cấp, vui lòng liên hệ dịch vụ cấp cứu địa phương.</p>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function BreathingGallerySection() {
  return (
    <section id="features" className="relative px-4 py-20">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-balance text-3xl font-bold md:text-4xl"
        >
          Bài thở & thiền động được chọn cho từng khoảnh khắc
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/65"
        >
          Âm thanh và hình ảnh được đồng bộ để nhắc cơ thể buông căng một cách tự nhiên.
        </motion.p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-white">Từ sóng đến rừng</h3>
          <p className="leading-relaxed text-white/62">
            Lựa âm thanh thiên nhiên hoặc tiếng không gian thân quen khiến căng thẳng dễ hạ nhiệt hơn bạn nghĩ.
          </p>
          <img
            src="/breathing-exercises.png"
            alt="Lưới bài tập thở trong SoulSync"
            className="w-full rounded-[20px] border border-white/10 shadow-xl"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-white">Hành trình & phản chiếu</h3>
          <p className="leading-relaxed text-white/62">
            Ghi nhận cảm xúc, gắn thẻ “bạn bận lòng điều gì” — Sync trả về một góc nhìn dịu, không ép.
          </p>
          <img
            src="/meditation-phones.png"
            alt="Hành trình cảm xúc và thiền trên hai thiết bị"
            className="w-full rounded-[20px] border border-white/10 shadow-xl"
            loading="lazy"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto mt-16 max-w-md text-center"
      >
        <p className="mb-4 text-sm text-white/55">Chế độ yên tĩnh & Calm</p>
        <img
          src="/calm-mode.png"
          alt="Calm mode"
          className="mx-auto h-auto w-full max-w-[280px] rounded-2xl border border-white/10"
          loading="lazy"
        />
      </motion.div>
    </section>
  )
}

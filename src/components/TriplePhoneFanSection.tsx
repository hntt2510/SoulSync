import { motion } from 'framer-motion'

export default function TriplePhoneFanSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20">
      <div className="pointer-events-none absolute right-0 top-24 h-[360px] w-[360px] rounded-full bg-fuchsia-600/15 blur-[100px]" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <h2 className="mb-6 text-balance text-3xl font-bold md:text-4xl">
          <span className="bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
            Một không gian cho lời thoát ra — và phản chiếu thấu hiểu
          </span>
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-white/62">
          Voice và “Bầu trời” của bạn nằm trong cùng một hành trình: chia sẻ, được ghi nhận, rồi trở lại với chính nhịp của mình.
        </p>

        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/phones-features.png"
            alt="Ba màn SoulSync — Voice, nhật ký và bài thở"
            className="h-auto w-full max-w-[1024px]"
            animate={{ rotate: [-0.3, 0.3, -0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function TrustedBySection() {
  return (
    <section className="relative z-10 px-4 pb-8 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px 0px', amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-5xl"
      >
        <p className="mb-5 text-center text-xs font-medium text-white/45 md:text-sm">
          Dựa trên nghiên cứu từ các tổ chức hàng đầu
        </p>
        <img
          src="/Frame2609047.png"
          alt="Logo các tổ chức và nghiên cứu"
          className="mx-auto h-auto w-full max-w-4xl object-contain opacity-50"
          loading="lazy"
        />
      </motion.div>
    </section>
  )
}

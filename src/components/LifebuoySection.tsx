import { motion, type Variants } from 'framer-motion'
import { Wind, Moon } from 'lucide-react'

const PHONES_SRC = encodeURI('/meditation-phones.png')

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

type FeatureCard = {
  icon: typeof Wind
  iconWrap: string
  title: string
  description: string
}

const cards: FeatureCard[] = [
  {
    icon: Wind,
    iconWrap: 'bg-violet-500/15 text-violet-200',
    title: 'Lấy lại nhịp thở',
    description:
      'SOS Breathwork giúp bạn bình tĩnh lại tức thì qua nhịp rung và dẫn dắt thị giác.',
  },
  {
    icon: Moon,
    iconWrap: 'bg-indigo-500/15 text-indigo-200',
    title: 'Vỗ về giấc ngủ',
    description:
      'Tiếng mưa rơi hay nhạc Lofi nhẹ nhàng sẽ đưa bạn vào giấc ngủ êm ái nhất.',
  },
]

const CARD_CLASS =
  'group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-8 backdrop-blur-md transition duration-500 hover:border-violet-300/30 hover:bg-white/[0.04] md:p-10 lg:p-12'

const LEARN_MORE_CLASS =
  'inline-flex text-sm font-medium text-white/85 underline decoration-white/35 underline-offset-[6px] transition hover:text-white hover:decoration-violet-300 md:text-base'

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
        className="absolute inset-0 rounded-[28px] border border-white/45 shadow-[0_0_18px_rgba(196,181,253,0.18)]"
        style={RIM_MASK}
      />
      <div className="absolute left-[6%] right-[6%] top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_22px_rgba(226,214,255,0.6)]" />
    </div>
  )
}

export default function LifebuoySection() {
  return (
    <section
      id="lifebuoy"
      className="relative isolate overflow-hidden bg-[#0B0121] px-4 py-24 md:py-32 lg:py-36"
      aria-labelledby="lifebuoy-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-violet-700/15 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[480px] w-[480px] rounded-full bg-fuchsia-700/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-12%] h-[420px] w-[420px] rounded-full bg-indigo-700/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl xl:max-w-[88rem] 2xl:max-w-[100rem]">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center md:mb-20 lg:max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
        >
          <motion.h2
            id="lifebuoy-heading"
            variants={fadeUp}
            className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-[4rem]"
          >
            Phao cứu sinh cho
            <br className="hidden sm:block" /> những lúc nghẹt thở.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/65 md:text-lg lg:text-[1.0625rem] xl:max-w-3xl xl:text-xl"
          >
            Khi ngôn từ cạn kiệt, hãy để nhịp thở và âm thanh lên tiếng. SoulSync cung cấp các liệu pháp sinh lý
            tức thời, giúp bạn đi qua những khoảnh khắc chông chênh nhất.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 md:gap-7 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {cards.map(({ icon: Icon, iconWrap, title, description }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className={CARD_CLASS}
            >
              <CardHighlightRim />
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-500/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
              <div className={`relative z-[3] mb-6 inline-flex rounded-2xl p-3 ${iconWrap}`}>
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="relative z-[3] mb-3 text-2xl font-semibold tracking-tight text-white md:text-[1.75rem]">
                {title}
              </h3>
              <p className="relative z-[3] mb-8 text-pretty text-sm leading-relaxed text-white/60 md:text-base md:leading-[1.75]">
                {description}
              </p>
              <a href="#download" className={`relative z-[3] ${LEARN_MORE_CLASS}`}>
                Tìm hiểu thêm
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className={`${CARD_CLASS} mt-6 md:mt-7 lg:mt-8`}
        >
          <CardHighlightRim />
          <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-600/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
          <div className="relative z-[3] grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
              <div
                className="pointer-events-none absolute inset-0 -z-[1] mx-auto h-full w-[85%] rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.18)_0%,transparent_70%)] blur-2xl"
                aria-hidden
              />
              <img
                src={PHONES_SRC}
                alt="Ba màn hình SoulSync — chọn âm thanh nền, bài tập thở và thở hộp 4-4-4-4"
                width={1140}
                height={920}
                loading="lazy"
                draggable={false}
                className="relative h-auto w-full select-none object-contain drop-shadow-[0_36px_90px_rgba(15,5,40,0.55)]"
              />
            </div>

            <div className="text-center lg:text-left">
              <h3 className="mb-5 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
                Tôn trọng tuyệt đối. Không phán xét.
              </h3>
              <p className="mx-auto mb-8 max-w-xl text-pretty text-sm leading-relaxed text-white/65 md:text-base md:leading-[1.85] lg:mx-0 lg:max-w-none xl:text-[1.0625rem]">
                SoulSync không phải là một vị giáo sư cố gắng đưa ra những lời khuyên “tích cực độc hại”. AI của chúng tôi
                là một thực thể tĩnh lặng, chỉ phân tích cảm xúc qua cao độ giọng nói để hỗ trợ bạn. Sau khi tâm sự, bạn có
                toàn quyền “Lưu giữ” hoặc “Đốt bỏ” (xóa vĩnh viễn) đoạn ghi âm đó. Không ai, kể cả chúng tôi, có thể nghe
                được nỗi đau của bạn.
              </p>
              <a href="#download" className={LEARN_MORE_CLASS}>
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

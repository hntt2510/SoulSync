import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  text: string
  /** Mỗi từ xuất hiện cách nhau bao lâu (s). Mặc định 0.06 */
  stagger?: number
  /** Delay khởi đầu (s) */
  delay?: number
  className?: string
  /** Bọc một số từ vào span riêng (vd. có gradient). Truyền vào predicate hoặc index list */
  highlight?: (word: string, index: number) => ReactNode | null
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function SplitTextReveal({
  text,
  stagger = 0.06,
  delay = 0,
  className = '',
  highlight,
}: Props) {
  const words = text.split(' ')

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => {
        const overridden = highlight?.(word, i)
        return (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants}
            className="inline-block whitespace-pre"
            style={{ marginRight: '0.25em' }}
          >
            {overridden ?? word}
          </motion.span>
        )
      })}
    </motion.span>
  )
}

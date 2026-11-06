import { useRef, type ReactNode } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

export type Drift = 'up' | 'left' | 'right' | 'scale'
export const ease = [0.22, 1, 0.36, 1] as const

export function SectionReveal({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.section
      id={id}
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: false, amount: 0.12, margin: '0px 0px -8% 0px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
      }}
    >
      {children}
    </motion.section>
  )
}

export function Reveal({
  children,
  className,
  drift = 'up',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  drift?: Drift
  delay?: number
}) {
  const reduce = useReducedMotion()
  const hidden =
    drift === 'left'
      ? { opacity: 0, x: -56, y: 18 }
      : drift === 'right'
        ? { opacity: 0, x: 56, y: 18 }
        : drift === 'scale'
          ? { opacity: 0, y: 36, scale: 0.92 }
          : { opacity: 0, y: 48 }

  return (
    <motion.div
      className={className}
      variants={
        reduce
          ? undefined
          : {
              hidden,
              show: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: { duration: 0.65, ease, delay },
              },
            }
      }
    >
      {children}
    </motion.div>
  )
}

export function ScrollBox({
  children,
  className,
  from = 72,
  to = -48,
  axis = 'y',
}: {
  children: ReactNode
  className?: string
  from?: number
  to?: number
  axis?: 'x' | 'y'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const raw = useTransform(scrollYProgress, [0, 1], [from, to])
  const smooth = useSpring(raw, { stiffness: 90, damping: 22, mass: 0.35 })
  const style = reduce ? undefined : axis === 'x' ? { x: smooth } : { y: smooth }

  return (
    <motion.div ref={ref} className={className} style={style}>
      {children}
    </motion.div>
  )
}

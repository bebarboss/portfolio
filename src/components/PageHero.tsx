import { Link, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ease } from './motion'

export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow: string
  title: string
  lead: string
  image?: string
}) {
  const reduce = useReducedMotion()
  const section = useLocation().pathname.split('/').filter(Boolean)[0]
  const backTo = section ? `/#${section}` : '/'

  return (
    <header className="page-hero page-hero--valo">
      {image ? (
        <div className="page-hero__bg" aria-hidden>
          <img src={image} alt="" />
        </div>
      ) : null}
      <div className="page-hero__grid" aria-hidden />
      <div className="page-hero__inner">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          <Link className="page-hero__back" to={backTo}>
            ← กลับหน้าแรก
          </Link>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__lead">{lead}</p>
        </motion.div>
      </div>
    </header>
  )
}

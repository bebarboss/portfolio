import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ease, Reveal, SectionReveal } from '../components/motion'
import { profile, topics } from '../data/content'

function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section className="valo-hero" id="top" ref={ref}>
      <div className="valo-hero__bg" aria-hidden>
        <motion.div
          className="valo-hero__it"
          style={reduce ? undefined : { y: bgY }}
        />
        <div className="valo-hero__circuit" />
        <motion.div
          className="valo-hero__agent-wrap"
          style={reduce ? undefined : { y: bgY }}
        >
          <img src={topics[0].image} alt="" className="valo-hero__agent" />
        </motion.div>
      </div>

      <motion.div
        className="valo-hero__content"
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease }}
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <p className="valo-hero__kicker">
          {profile.role} · {profile.company}
        </p>
        <h1 className="valo-hero__brand">{profile.brand}</h1>
        <p className="valo-hero__tag">{profile.tagline}</p>
        <Link className="valo-cta" to="/about">
          <span>เพิ่มเติม</span>
        </Link>
      </motion.div>

      <a className="valo-hero__scroll" href="#about" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}

/** Valorant agents-style banner — cartoon left, copy + CTA right */
function TopicBanners() {
  return (
    <>
      {topics.map((topic, i) => (
        <SectionReveal
          key={topic.href}
          id={topic.href.slice(1)}
          className={`topic-banner topic-banner--${topic.tone}${i % 2 ? ' topic-banner--flip' : ''}`}
        >
          <div className="topic-banner__art" aria-hidden>
            <img src={topic.image} alt="" loading="lazy" />
          </div>
          <div className="topic-banner__copy">
            <Reveal drift={i % 2 ? 'left' : 'right'} className="topic-banner__stack">
              <p className="topic-banner__code">{topic.code}</p>
              <h2 className="topic-banner__title">{topic.title}</h2>
              <p className="topic-banner__blurb">{topic.blurb}</p>
              <Link
                className={topic.tone === 'cream' ? 'btn btn--dark' : 'btn btn--ghost-dark'}
                to={topic.href}
              >
                {topic.cta}
              </Link>
            </Reveal>
          </div>
        </SectionReveal>
      ))}
    </>
  )
}

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <TopicBanners />
    </main>
  )
}

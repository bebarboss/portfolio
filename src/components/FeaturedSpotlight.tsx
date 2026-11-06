import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { topics } from '../data/content'

const ease = [0.22, 1, 0.36, 1] as const

export default function FeaturedSpotlight() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const active = topics[index]

  useEffect(() => {
    if (paused || reduce) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % topics.length)
    }, 5500)
    return () => window.clearInterval(id)
  }, [paused, reduce])

  const go = (next: number) => {
    setIndex((next + topics.length) % topics.length)
  }

  return (
    <section
      className="spotlight"
      id="featured"
      aria-roledescription="carousel"
      aria-label="Featured topics"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="spotlight__shell">
        <div className="spotlight__frame">
          <span className="spotlight__rail spotlight__rail--left" aria-hidden />
          <span className="spotlight__rail spotlight__rail--right" aria-hidden />

          <AnimatePresence mode="wait">
            <motion.article
              key={active.code}
              className="spotlight__card"
              initial={reduce ? false : { opacity: 0, y: 28, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: -16, scale: 0.99 }}
              transition={{ duration: 0.45, ease }}
            >
              <div className="spotlight__copy">
                <p className="spotlight__eyebrow">
                  <span>{active.code}</span>
                  {active.eyebrow}
                </p>
                <h2 className="spotlight__title">{active.title}</h2>
                <p className="spotlight__blurb">{active.blurb}</p>
                <Link className="btn btn--primary spotlight__cta" to={active.href}>
                  {active.cta}
                </Link>
              </div>

              <div className="spotlight__media" aria-hidden>
                <img src={active.image} alt="" />
                <div className="spotlight__glow" />
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="spotlight__controls">
            <button
              type="button"
              className="spotlight__arrow"
              aria-label="Previous topic"
              onClick={() => go(index - 1)}
            >
              ‹
            </button>
            <div className="spotlight__dots" role="tablist" aria-label="Topics">
              {topics.map((topic, i) => (
                <button
                  key={topic.code}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={topic.title}
                  className={`spotlight__dot ${i === index ? 'is-active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="spotlight__arrow"
              aria-label="Next topic"
              onClick={() => go(index + 1)}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

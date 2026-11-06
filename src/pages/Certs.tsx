import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { certifications, topics } from '../data/content'

const topic = topics.find((t) => t.href === '/certs')!

export default function Certs() {
  const [active, setActive] = useState(
    Math.max(
      0,
      certifications.findIndex((cert) => 'image' in cert && cert.image),
    ),
  )
  const cert = certifications[active]

  return (
    <main>
      <PageHero
        eyebrow="// Unlocks"
        title="Certifications"
        lead="Bootcamps and credentials across AI/ML, data engineering, and Python."
        image={topic.image}
      />
      <section className="section certs">
        <div className="section__inner cert-stage">
          <div className="cert-preview" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={cert.name}
                className="cert-preview__frame"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
              >
                {'image' in cert && cert.image ? (
                  <img src={cert.image} alt={`${cert.name} certificate`} />
                ) : (
                  <article className="cert-sheet">
                    <p className="cert-sheet__kicker">Certificate</p>
                    <h2>{cert.name}</h2>
                    <p className="cert-sheet__issuer">{cert.issuer}</p>
                    <p className="cert-sheet__year">{cert.year}</p>
                  </article>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="cert-list" role="listbox" aria-label="Certifications">
            {certifications.map((item, i) => (
              <button
                key={item.name}
                type="button"
                role="option"
                aria-selected={i === active}
                className={`cert-pick ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="cert-pick__year">{item.year}</span>
                <span className="cert-pick__copy">
                  <strong>{item.name}</strong>
                  <em>{item.issuer}</em>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

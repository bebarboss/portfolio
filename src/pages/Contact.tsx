import PageHero from '../components/PageHero'
import { Reveal, ScrollBox, SectionReveal } from '../components/motion'
import { profile, topics } from '../data/content'

const topic = topics.find((t) => t.href === '/contact')!

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="// Comms"
        title="Contact"
        lead="Open to IT, data, and application support opportunities."
        image={topic.image}
      />
      <SectionReveal className="section contact">
        <div className="section__inner">
          <Reveal drift="scale" delay={0.08}>
            <ScrollBox from={56} to={-36}>
              <div className="contact__panel">
                <ul className="contact__list">
                  <li className="contact__item">
                    <span>Email</span>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </li>
                  <li className="contact__item">
                    <span>Phone</span>
                    <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
                  </li>
                  <li className="contact__item">
                    <span>Location</span>
                    <strong>{profile.location}</strong>
                  </li>
                </ul>
                <div className="contact__actions">
                  <a
                    className="btn btn--primary"
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="btn btn--ghost"
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="btn btn--ghost"
                    href={profile.links.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    className="btn btn--ghost"
                    href={profile.links.resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </ScrollBox>
          </Reveal>
        </div>
      </SectionReveal>
    </main>
  )
}

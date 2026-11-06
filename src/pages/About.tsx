import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { Reveal, ScrollBox, SectionReveal } from '../components/motion'
import { profile, topics } from '../data/content'

const topic = topics.find((t) => t.href === '/about')!

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="// Profile"
        title="About"
        lead={profile.summary}
        image={topic.image}
      />
      <SectionReveal className="section about">
        <div className="section__inner">
          <div className="about__grid">
            <Reveal drift="left">
              <ScrollBox from={40} to={-24}>
                <div className="about__copy">
                  {profile.story.map((paragraph) => (
                    <p className="section__lead" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                  <ul className="about__facts">
                    {profile.facts.map((fact) => (
                      <li key={fact.label}>
                        <span>{fact.label}</span>
                        <strong>{fact.value}</strong>
                      </li>
                    ))}
                  </ul>
                  <div className="about__links">
                    <a className="btn btn--primary" href={profile.links.resume} target="_blank" rel="noreferrer">
                      Resume
                    </a>
                    <a className="btn btn--ghost" href={profile.links.photos} target="_blank" rel="noreferrer">
                      Facebook photos
                    </a>
                    <Link className="btn btn--ghost" to="/experience">
                      Experience
                    </Link>
                  </div>
                </div>
              </ScrollBox>
            </Reveal>
            <Reveal drift="right" delay={0.08}>
              <ScrollBox from={64} to={-40}>
                <div className="about__side">
                  <div className="about__photo">
                    <img src={profile.avatar} alt={profile.name} />
                  </div>
                  <div className="about__stats">
                    <div className="stat">
                      <div className="stat__value">4+</div>
                      <div className="stat__label">Years engineering ops</div>
                    </div>
                    <div className="stat">
                      <div className="stat__value">07</div>
                      <div className="stat__label">Shipped projects</div>
                    </div>
                    <div className="stat">
                      <div className="stat__value">IT</div>
                      <div className="stat__label">Career transition focus</div>
                    </div>
                  </div>
                </div>
              </ScrollBox>
            </Reveal>
          </div>

          <div className="about__gallery">
            <h2>From the album</h2>
            <div className="about__shots">
              {profile.photos.map((photo) => (
                <figure key={photo.alt}>
                  <img src={photo.src} alt={photo.alt} />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </main>
  )
}

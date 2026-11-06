import PageHero from '../components/PageHero'
import { Reveal, ScrollBox, SectionReveal } from '../components/motion'
import { education, experience, topics } from '../data/content'

const topic = topics.find((t) => t.href === '/experience')!

export default function Experience() {
  return (
    <main>
      <PageHero
        eyebrow="// Career path"
        title="Experience"
        lead="Hands-on roles across manufacturing, field service, and now retail-tech support."
        image={topic.image}
      />
      <SectionReveal className="section experience">
        <div className="section__inner">
          <div className="timeline">
            {experience.map((job, i) => (
              <Reveal key={`${job.company}-${job.role}`} drift="left" delay={i * 0.04}>
                <ScrollBox from={56} to={-32}>
                  <article className="job">
                    <p className="job__period">{job.period}</p>
                    <h2 className="job__role">{job.role}</h2>
                    <p className="job__company">{job.company}</p>
                    <ul className="job__points">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                </ScrollBox>
              </Reveal>
            ))}
          </div>

          <Reveal drift="scale">
            <ScrollBox from={48} to={-28}>
              <div className="edu">
                <p className="edu__label">Education</p>
                <h2 className="edu__school">{education.school}</h2>
                <p className="edu__degree">
                  {education.degree} · {education.period}
                </p>
              </div>
            </ScrollBox>
          </Reveal>
        </div>
      </SectionReveal>
    </main>
  )
}

import PageHero from '../components/PageHero'
import { Reveal, ScrollBox, SectionReveal } from '../components/motion'
import { skillGroups, topics } from '../data/content'

const topic = topics.find((t) => t.href === '/skills')!

export default function Skills() {
  return (
    <main>
      <PageHero
        eyebrow="// Arsenal"
        title="Skills"
        lead="Data engineering stack, support tooling, and the languages that keep systems moving."
        image={topic.image}
      />
      <SectionReveal className="section skills">
        <div className="section__inner">
          <div className="skill-grid">
            {skillGroups.map((group, i) => (
              <Reveal
                key={group.title}
                className="skill-grid__cell"
                drift={i % 2 === 0 ? 'left' : 'right'}
                delay={i * 0.05}
              >
                <ScrollBox className="skill-grid__cell" from={36} to={-18}>
                  <div className="skill-panel">
                    <h2>{group.title}</h2>
                    <ul>
                      {group.items.map((item) => (
                        <li className="chip" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollBox>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionReveal>
    </main>
  )
}

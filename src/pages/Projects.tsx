import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { Reveal, ScrollBox, SectionReveal } from '../components/motion'
import { projects, topics } from '../data/content'

const topic = topics.find((t) => t.href === '/projects')!

export default function Projects() {
  return (
    <main>
      <PageHero
        eyebrow="// Missions"
        title="Projects"
        lead="Automation, OCR, ETL, computer vision, and RAG — builds that cut friction and surface signal."
        image={topic.image}
      />
      <SectionReveal className="section projects">
        <div className="section__inner">
          <div className="project-list">
            {projects.map((project, i) => (
              <Reveal
                key={project.slug}
                drift={i % 2 === 0 ? 'left' : 'right'}
                delay={(i % 2) * 0.06}
              >
                <ScrollBox from={70} to={-50}>
                  <Link className="project" to={`/projects/${project.slug}`}>
                    <div className="project__media">
                      <img
                        src={project.image}
                        alt={`${project.name} preview`}
                        loading="lazy"
                      />
                      <span className="project__code">{project.code}</span>
                    </div>
                    <div className="project__main">
                      <h2 className="project__name">{project.name}</h2>
                      <p className="project__blurb">{project.blurb}</p>
                      <ul className="project__stack">
                        {project.stack.map((tech) => (
                          <li className="chip" key={tech}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <span className="project__link">Details</span>
                    </div>
                  </Link>
                </ScrollBox>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionReveal>
    </main>
  )
}

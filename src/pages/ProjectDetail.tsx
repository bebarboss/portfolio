import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { Reveal, ScrollBox, SectionReveal } from '../components/motion'
import { getProject } from '../data/content'

export default function ProjectDetail() {
  const { slug = '' } = useParams()
  const project = getProject(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <main>
      <PageHero
        eyebrow={`// Mission ${project.code}`}
        title={project.name}
        lead={project.blurb}
        image={project.image}
      />
      <SectionReveal className="section projects">
        <div className="section__inner detail">
          <Reveal drift="scale">
            <ScrollBox from={48} to={-24}>
              <div className="detail__media">
                <img src={project.image} alt={`${project.name} preview`} />
              </div>
            </ScrollBox>
          </Reveal>
          <Reveal drift="left" delay={0.06}>
            <div className="detail__body">
              <div className="detail__copy">
                {project.detail.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <h2 className="detail__heading">Stack</h2>
              <ul className="project__stack">
                {project.stack.map((tech) => (
                  <li className="chip" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="detail__actions">
                <a
                  className="btn btn--primary"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <Link className="btn btn--ghost" to="/projects">
                  All Projects
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionReveal>
    </main>
  )
}

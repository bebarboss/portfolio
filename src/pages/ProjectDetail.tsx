import { Link, Navigate, useParams } from 'react-router-dom'
import { Reveal, SectionReveal } from '../components/motion'
import { getProject } from '../data/content'

export default function ProjectDetail() {
  const { slug = '' } = useParams()
  const project = getProject(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <main className="article-page">
      <SectionReveal className="article">
        <Reveal>
          <header className="article__header">
            <Link className="article__back" to="/#projects">
              ← กลับหน้าแรก
            </Link>
            <p className="article__eyebrow">Mission {project.code}</p>
            <h1 className="article__title">{project.name}</h1>
            <p className="article__dek">{project.blurb}</p>
            <ul className="article__tags" aria-label="Stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </header>
        </Reveal>

        <Reveal delay={0.05}>
          <figure className="article__hero">
            <img src={project.image} alt={`${project.name} preview`} />
          </figure>
        </Reveal>

        <Reveal delay={0.07}>
          <section className="article__workflow" aria-labelledby="workflow-heading">
            <h2 className="article__heading" id="workflow-heading">
              Workflow
            </h2>
            <figure className="article__workflow-frame">
              <img
                src={project.workflow}
                alt={`${project.name} workflow chart`}
              />
            </figure>
          </section>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="article__body">
            {project.sections.map((section) => (
              <section className="article__block" key={section.title}>
                <h2 className="article__heading">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <footer className="article__footer">
            <div className="article__footer-row">
              <a
                className="btn btn--primary"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <Link className="btn btn--ghost article__ghost" to="/projects">
                All Projects
              </Link>
            </div>
          </footer>
        </Reveal>
      </SectionReveal>
    </main>
  )
}

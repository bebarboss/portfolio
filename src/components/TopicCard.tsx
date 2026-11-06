import { Link } from 'react-router-dom'
import { topics } from '../data/content'

/** Homepage cards — one topic per page, click to open that page */
export default function TopicCard() {
  return (
    <div className="topic-grid">
      {topics.map((topic) => (
        <Link key={topic.href} className="topic-card" to={topic.href}>
          <div className="topic-card__media">
            <img src={topic.image} alt="" loading="lazy" />
          </div>
          <div className="topic-card__body">
            <p className="topic-card__meta">
              <span>{topic.eyebrow}</span>
              <span>{topic.code}</span>
            </p>
            <h3 className="topic-card__title">{topic.title}</h3>
            <p className="topic-card__blurb">{topic.blurb}</p>
            <span className="topic-card__cta">{topic.cta}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

import { brandMarks, type BrandSlug } from '../data/brandMarks'

function BrandLogo({ slug }: { slug: BrandSlug }) {
  const mark = brandMarks[slug]
  return (
    <svg className="chip__logo" viewBox="0 0 24 24" aria-hidden>
      <path d={mark.path} fill={`#${mark.hex}`} />
    </svg>
  )
}

function ConceptLogo({ id }: { id: string }) {
  if (id === 'sql') {
    return (
      <svg className="chip__logo" viewBox="0 0 24 24" aria-hidden>
        <path d="M4 7.2c0-2 3.6-3.4 8-3.4s8 1.4 8 3.4v10.2c0 2-3.6 3.4-8 3.4s-8-1.4-8-3.4V7.2z" fill="#336791" />
        <ellipse cx="12" cy="7.2" rx="8" ry="3.1" fill="#5b93c4" />
        <ellipse cx="12" cy="7.2" rx="5.2" ry="1.7" fill="#336791" />
      </svg>
    )
  }
  if (id === 'etl') {
    return (
      <svg className="chip__logo" viewBox="0 0 24 24" aria-hidden>
        <path d="M2 7h11.2L10.4 4.2 12 2.6 17.4 8 12 13.4l-1.6-1.6 2.8-2.8H2V7zm20 10H10.8l2.8 2.8L12 22.4 6.6 17 12 11.6l1.6 1.6-2.8 2.8H22V17z" fill="#017CEE" />
      </svg>
    )
  }
  if (id === 'incremental') {
    return (
      <svg className="chip__logo" viewBox="0 0 24 24" aria-hidden>
        <path d="M3 14h5v7H3zm6.5-5h5v12h-5zM16 4h5v17h-5z" fill="#E25A1C" />
      </svg>
    )
  }
  if (id === 'query') {
    return (
      <svg className="chip__logo" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="#7C3AED"
          d="M10 2a8 8 0 105.29 14.01l4.35 4.35 1.42-1.42-4.35-4.35A8 8 0 0010 2zm0 2.4a5.6 5.6 0 110 11.2 5.6 5.6 0 010-11.2z"
        />
      </svg>
    )
  }
  if (id === 'thai' || id === 'english') {
    return (
      <span className={`chip__lang chip__lang--${id}`} aria-hidden>
        {id === 'thai' ? 'ก' : 'En'}
      </span>
    )
  }
  return null
}

export default function SkillLogo({ id }: { id: string }) {
  if (id in brandMarks) return <BrandLogo slug={id as BrandSlug} />
  return <ConceptLogo id={id} />
}

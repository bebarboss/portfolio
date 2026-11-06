import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { nav, profile } from '../data/content'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    const id = location.hash.replace('#', '')
    if (!id) {
      window.scrollTo(0, 0)
      return
    }
    const frame = requestAnimationFrame(() => {
      const section = document.getElementById(id)
      if (section) section.scrollIntoView({ block: 'start' })
      else window.scrollTo(0, 0)
    })
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="shell">
      <header className="nav">
        <Link className="nav__brand" to="/">
          <span className="nav__mark">N</span>
          {profile.monogram}
        </Link>
        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link className="nav__cta" to="/contact">
          ติดต่อเลย
        </Link>
        <button
          className="nav__burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`nav__drawer ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />

      <footer className="footer">
        <strong>{profile.monogram}</strong>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </footer>
    </div>
  )
}

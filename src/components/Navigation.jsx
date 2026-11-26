import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import './Navigation.css'

const links = [
  { to: '/products', label: 'products' },
  { to: '/projects', label: 'client work' },
  { to: '/#services', label: 'services' },
  { to: '/#about', label: 'about' },
  { to: '/contact', label: 'contact' },
]

function Navigation() {
  const { pathname, hash } = useLocation()
  // The menu is open only for the location it was opened on, so navigating closes it.
  const here = pathname + hash
  const [openAt, setOpenAt] = useState(null)
  const open = openAt === here

  const isOn = (to) => (to.startsWith('/#') ? pathname === '/' && hash === to.slice(1) : pathname.startsWith(to))

  return (
    <header className="hl-nav">
      <div className="hl-w hl-nav-in">
        <Link to="/" className="hl-brand" aria-label="hiro labs home">
          <Logo />
          <span>hiro labs</span>
        </Link>
        <nav className={`hl-nav-links ${open ? 'open' : ''}`} aria-label="Main" id="hl-menu">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={`hl-navl ${isOn(l.to) ? 'on' : ''}`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="hl-btn hl-pri hl-nav-cta-m">start a project</Link>
        </nav>
        <Link to="/contact" className="hl-btn hl-pri hl-nav-cta">start a project</Link>
        <button
          type="button"
          className="hl-nav-toggle"
          aria-expanded={open}
          aria-controls="hl-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpenAt(open ? null : here)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

export default Navigation

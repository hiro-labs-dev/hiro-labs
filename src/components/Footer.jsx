import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="hl-foot">
      <div className="hl-w hl-foot-in">
        <span className="hl-foot-name">hiro labs</span>
        <span className="hl-tag">tampa bay, fl</span>
        <nav className="hl-foot-links" aria-label="Footer">
          <Link className="hl-navl" to="/products">products</Link>
          <Link className="hl-navl" to="/projects">client work</Link>
          <Link className="hl-navl" to="/#services">services</Link>
          <Link className="hl-navl" to="/pay">pay an invoice</Link>
          <a className="hl-navl" href="https://roddy.hiro-labs.dev">roddy</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

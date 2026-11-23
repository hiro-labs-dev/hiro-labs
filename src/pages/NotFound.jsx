import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../site.css'

function NotFound() {
  useEffect(() => {
    document.title = 'not found · hiro labs'
  }, [])

  return (
    <section style={{ padding: '120px 0 140px' }}>
      <div className="hl-w" style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
        <span className="hl-eye">404</span>
        <h1 className="hl-disp" style={{ margin: 0, fontSize: 'clamp(48px, 9vw, 96px)' }}>nothing here.</h1>
        <p className="hl-lede" style={{ margin: 0 }}>the page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link to="/" className="hl-btn hl-pri" style={{ color: 'var(--bg-primary)' }}>back to home</Link>
      </div>
    </section>
  )
}

export default NotFound

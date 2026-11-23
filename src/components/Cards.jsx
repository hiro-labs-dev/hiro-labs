import { Link } from 'react-router-dom'

export function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12l5 5L19 7" />
    </svg>
  )
}

export function Frame({ src, alt, eager }) {
  return (
    <>
      <div className="hl-bar" aria-hidden="true"><i /><i /><i /></div>
      <div className="hl-frame">
        <img className="hl-shot" src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" width="1440" height="900" />
      </div>
    </>
  )
}

export function Status({ tone, children }) {
  return <span className={`hl-chip ${tone === 'soon' ? 'soon' : ''}`}><b />{children}</span>
}

export function ProductCard({ p }) {
  return (
    <Link className="hl-panel hl-card" to={`/products#${p.id}`}>
      <Frame src={p.image} alt={`${p.name} screenshot`} />
      <div className="hl-card-body">
        <div className="hl-card-top"><span className="hl-pn">{p.name}</span><Status tone={p.tone}>{p.status}</Status></div>
        <p className="hl-pd">{p.line}</p>
      </div>
    </Link>
  )
}

export function ClientCard({ c }) {
  return (
    <Link className="hl-panel hl-card" to={`/projects/${c.id}`}>
      <Frame src={c.image} alt={`${c.name} screenshot`} />
      <div className="hl-card-body hl-client-body">
        <div className="hl-card-top"><span className="hl-pn" style={{ fontSize: 30 }}>{c.name}</span><Status>{c.status}</Status></div>
        <p className="hl-pd" style={{ fontSize: 15 }}>{c.line}</p>
        <div className="hl-chips">{c.tags.map((t) => <span key={t} className="hl-chip">{t}</span>)}</div>
      </div>
    </Link>
  )
}

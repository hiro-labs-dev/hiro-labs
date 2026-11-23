import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { products } from '../data/site'
import { Check, Frame, Status } from '../components/Cards'
import '../site.css'
import './Products.css'

function Products() {
  const { hash } = useLocation()

  useEffect(() => {
    document.title = 'products · hiro labs'
  }, [])

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }))
  }, [hash])

  return (
    <div className="hl-page">
      <section className="hl-page-head">
        <div className="hl-w">
          <span className="hl-eye">in the lab</span>
          <h1 className="hl-disp hl-page-h">our products</h1>
          <p className="hl-lede">software we build, use every day, and put in front of real customers. each one started as a problem we had ourselves.</p>
        </div>
      </section>

      <section>
        <div className="hl-w">
          {products.map((p, i) => (
            <article key={p.id} id={p.id} className={`hl-prow ${i % 2 ? 'flip' : ''}`}>
              <div className="hl-prow-m"><div className="hl-panel"><Frame src={p.image} alt={`${p.name} screenshot`} eager={i === 0} /></div></div>
              <div className="hl-prow-t">
                <Status tone={p.tone}>{p.status}</Status>
                <h2 className="hl-prow-n">{p.name}</h2>
                <p className="hl-prow-l">{p.line}</p>
                <ul className="hl-prow-pts">{p.points.map((pt) => <li key={pt} className="hl-li"><Check />{pt}</li>)}</ul>
                <div className="hl-chips">{p.stack.map((s) => <span key={s} className="hl-chip">{s}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hl-sec">
        <div className="hl-w hl-cta">
          <h2 className="hl-disp">want something like this<br /><span className="hl-accent">for your business?</span></h2>
          <Link className="hl-btn hl-pri" to="/contact">start a project</Link>
        </div>
      </section>
    </div>
  )
}

export default Products

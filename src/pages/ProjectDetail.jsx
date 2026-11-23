import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { clients } from '../data/site'
import { Frame, Status } from '../components/Cards'
import NotFound from './NotFound'
import '../site.css'
import './Products.css'
import './ProjectDetail.css'

function ProjectDetail() {
  const { id } = useParams()
  const i = clients.findIndex((c) => c.id === id)
  const c = clients[i]
  const next = clients[(i + 1) % clients.length]

  useEffect(() => {
    if (c) document.title = `${c.name} · hiro labs`
  }, [c])

  if (!c) return <NotFound />

  return (
    <div className="hl-page hl-case">
      <section className="hl-case-head">
        <div className="hl-w">
          <Link className="hl-tag hl-back" to="/projects">← client work</Link>
          <div className="hl-case-top">
            <div className="hl-case-title">
              <span className="hl-eye">case study · {c.kind}</span>
              <h1 className="hl-disp hl-page-h">{c.name}</h1>
              <p className="hl-lede">{c.summary}</p>
            </div>
            <div className="hl-hero-btns">
              <Status>{c.status}</Status>
              {c.url && <a className="hl-btn hl-ghost" href={c.url} target="_blank" rel="noreferrer">visit the site →</a>}
            </div>
          </div>
          <dl className="hl-facts">
            {c.facts.map(([k, v]) => (
              <div key={k} className="hl-fact"><dt className="hl-tag">{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="hl-case-shot">
        <div className="hl-w">
          <div className="hl-panel"><Frame src={c.image} alt={`${c.name} home page`} eager /></div>
          {c.note && <p className="hl-tag hl-note">{c.note}</p>}
        </div>
      </section>

      <section className="hl-sec">
        <div className="hl-w hl-two">
          <div><span className="hl-eye">the problem</span><h2 className="hl-h2 hl-h2s">{c.problem[0]}</h2><p className="hl-lede">{c.problem[1]}</p></div>
          <div><span className="hl-eye">what we built</span><h2 className="hl-h2 hl-h2s">{c.built[0]}</h2><p className="hl-lede">{c.built[1]}</p></div>
        </div>
      </section>

      <section className="hl-sec hl-alt">
        <div className="hl-w">
          <span className="hl-eye">inside the platform</span><h2 className="hl-h2 hl-h2s">what it does</h2>
          <div className="hl-feats">
            {c.features.map((f) => (
              <div key={f.title} className="hl-panel hl-feat-card">
                {f.phone ? (
                  <div className="hl-feat-phone"><img src={f.image} alt={`${f.title} on a phone`} loading="lazy" /></div>
                ) : (
                  <Frame src={f.image} alt={f.title} />
                )}
                <div className="hl-feat"><h3>{f.title}</h3><p>{f.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hl-sec">
        <div className="hl-w">
          <span className="hl-eye">under the hood</span><h2 className="hl-h2 hl-h2s">how it&apos;s built</h2>
          <dl className="hl-how">
            {c.how.map(([t, d]) => (
              <div key={t} className="hl-how-row"><dt>{t}</dt><dd>{d}</dd></div>
            ))}
          </dl>
          <div className="hl-panel hl-arch">
            <span className="hl-tag">architecture</span>
            {c.flow.map((row, ri) => (
              <div key={ri} className="hl-flow">
                {row.map(([label, hi, arrow], ni) => (
                  <span key={label} className="hl-flow-step">
                    {ni > 0 && <span className="hl-arr">{arrow || '→'}</span>}
                    <span className={`hl-node ${hi ? 'hi' : ''}`}>{label}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="hl-chips" style={{ marginTop: 28 }}>{c.stack.map((s) => <span key={s} className="hl-chip">{s}</span>)}</div>
        </div>
      </section>

      <section className="hl-sec hl-alt">
        <div className="hl-w hl-cta">
          {next && next.id !== c.id ? (
            <div><span className="hl-eye">next case study</span><Link className="hl-next" to={`/projects/${next.id}`}><span className="hl-disp">{next.name} →</span></Link></div>
          ) : <span />}
          <Link className="hl-btn hl-pri" to="/contact">start a project</Link>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail

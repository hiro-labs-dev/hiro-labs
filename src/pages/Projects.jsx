import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { clients } from '../data/site'
import { ClientCard } from '../components/Cards'
import '../site.css'
import './Products.css'
import './Home.css'

function Projects() {
  useEffect(() => {
    document.title = 'client work · hiro labs'
  }, [])

  return (
    <div className="hl-page">
      <section className="hl-page-head">
        <div className="hl-w">
          <span className="hl-eye">client work</span>
          <h1 className="hl-disp hl-page-h">built for clients</h1>
          <p className="hl-lede">platforms we designed, built and shipped for the people who run them.</p>
          <div className="hl-grid2">
            {clients.map((c) => <ClientCard key={c.id} c={c} />)}
          </div>
        </div>
      </section>
      <section className="hl-sec" style={{ marginTop: 56 }}>
        <div className="hl-w hl-cta">
          <h2 className="hl-disp">have something<br /><span className="hl-accent">to build?</span></h2>
          <Link className="hl-btn hl-pri" to="/contact">start a project</Link>
        </div>
      </section>
    </div>
  )
}

export default Projects

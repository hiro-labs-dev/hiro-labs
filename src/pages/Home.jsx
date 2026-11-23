import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { products, clients } from '../data/site'
import { Check, ClientCard, ProductCard } from '../components/Cards'
import '../site.css'
import './Home.css'

const services = [
  { title: 'websites', text: 'fast, accessible sites with a cms your team can run.', points: ['marketing sites, content, seo', 'wagtail / headless cms'], icon: <><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M3 9h18M8 4v5" /></> },
  { title: 'web apps & platforms', text: 'custom software that fits how your business works.', points: ['dashboards, portals, marketplaces', 'payments, maps, integrations'], icon: <path d="M4 6h16M4 12h16M4 18h10" /> },
  { title: 'ai tools', text: 'assistants and automations that do real work, with guardrails.', points: ['agents, search over your docs', 'openai / claude, model-agnostic'], icon: <path d="M12 3l2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5z" /> },
  { title: 'mvp to launch', text: "from idea to a product in customers' hands, fast.", points: ['native mac + iphone apps', 'aws hosting, ci/cd, monitoring'], icon: <path d="M4 20L20 4M14 4h6v6" /> },
]

const steps = [
  ['01 · scope', 'start with the outcome', "what has to be true when we're done, and what we can leave out."],
  ['02 · design', 'shape it together', 'flows and screens you can click before we build them.'],
  ['03 · build', 'ship in small pieces', 'working software every week, reviewed with you.'],
  ['04 · run', 'keep it running', 'hosting, monitoring and updates after launch.'],
]

const stats = [
  ['10+', 'products built since 2024'],
  ['3', 'client platforms delivered'],
  ['9+', 'years shipping production software'],
  ['1', 'team that designs, builds and runs it'],
]

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    document.title = 'hiro labs · software studio'
  }, [])

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }, [hash])

  const featured = products.filter((p) => p.featured)

  return (
    <div className="hl-home">
      <section className="hl-hero">
        <div className="hl-hero-grid" aria-hidden="true" />
        <div className="hl-hero-glow" aria-hidden="true" />
        <div className="hl-w hl-hero-in">
          <div className="hl-hero-copy">
            <span className="hl-eye">a small software studio · tampa bay, fl</span>
            <h1 className="hl-disp hl-hero-h">we build<br />software people<br /><span className="hl-accent">actually use.</span></h1>
            <p className="hl-hero-p">hiro labs designs, builds and runs products end to end. our own, and yours: websites, web apps, ai tools and the systems behind them.</p>
            <div className="hl-hero-btns">
              <Link className="hl-btn hl-pri" to="/contact">start a project</Link>
              <Link className="hl-btn hl-ghost" to="/products">see our products →</Link>
            </div>
          </div>
          <div className="hl-hero-art" aria-hidden="true">
            <div className="hl-panel hl-hero-a"><div className="hl-bar"><i /><i /><i /></div><img className="hl-shot" src="/lab/signal.webp" alt="" width="1440" height="900" /></div>
            <div className="hl-panel hl-hero-b"><div className="hl-bar"><i /><i /><i /></div><img className="hl-shot" src="/lab/mia.webp" alt="" width="1440" height="900" /></div>
            <span className="hl-chip hl-hero-chip"><b />10+ products shipped</span>
          </div>
        </div>
      </section>

      <section className="hl-stats">
        <div className="hl-w hl-stats-in">
          {stats.map(([n, l]) => (
            <div key={l} className="hl-stat"><div className="hl-disp">{n}</div><div className="hl-tag">{l}</div></div>
          ))}
        </div>
      </section>

      <section id="products" className="hl-sec">
        <div className="hl-w">
          <div className="hl-head">
            <div><span className="hl-eye">01 · in the lab</span><h2 className="hl-h2">our products</h2><p className="hl-lede">software we build, use every day, and put in front of real customers.</p></div>
            <Link className="hl-btn hl-ghost" to="/products">all products →</Link>
          </div>
          <div className="hl-grid3">
            {featured.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      <section id="work" className="hl-sec hl-alt">
        <div className="hl-w">
          <span className="hl-eye">02 · client work</span><h2 className="hl-h2">built for clients</h2><p className="hl-lede">platforms we designed, built and shipped for the people who run them.</p>
          <div className="hl-grid2">
            {clients.map((c) => <ClientCard key={c.id} c={c} />)}
          </div>
        </div>
      </section>

      <section id="services" className="hl-sec">
        <div className="hl-w">
          <span className="hl-eye">03 · services</span><h2 className="hl-h2">what we build for you</h2><p className="hl-lede">scoped to what the project actually needs. we stay through launch, and after.</p>
          <div className="hl-grid4">
            {services.map((s) => (
              <div key={s.title} className="hl-panel hl-svc">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="1.6" aria-hidden="true">{s.icon}</svg>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>{s.points.map((pt) => <li key={pt} className="hl-li"><Check />{pt}</li>)}</ul>
              </div>
            ))}
          </div>
          <ol className="hl-steps">
            {steps.map(([n, b, t]) => (
              <li key={n} className="hl-step"><span className="n">{n}</span><b>{b}</b><span>{t}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="about" className="hl-sec hl-alt">
        <div className="hl-w hl-about">
          <div className="hl-panel hl-about-img"><img src="/roddy-about.jpg" alt="Roddy Brown, founder of Hiro Labs" loading="lazy" /></div>
          <div className="hl-about-copy">
            <span className="hl-eye">04 · about</span>
            <h2 className="hl-h2" style={{ margin: 0 }}>founded by<br />roddy brown</h2>
            <p className="hl-lede" style={{ margin: 0 }}>a senior software engineer in tampa bay with 9+ years shipping production software, from insurance claims and real-estate search to state traffic systems. hiro labs is where he builds products end to end, and builds them for clients.</p>
            <div className="hl-hero-btns"><a className="hl-btn hl-ghost" href="https://roddy.hiro-labs.dev">meet roddy →</a><a className="hl-btn hl-ghost" href="https://github.com/roddy-devs">github</a></div>
          </div>
        </div>
      </section>

      <section id="contact" className="hl-sec">
        <div className="hl-w hl-contact">
          <div><span className="hl-eye">05 · contact</span><h2 className="hl-disp hl-contact-h">have something<br /><span className="hl-accent">to build?</span></h2></div>
          <div className="hl-panel hl-contact-box">
            <p>tell us about the project. a few details help us come back with a real plan, not a guess.</p>
            <Link className="hl-btn hl-pri" to="/contact" style={{ alignSelf: 'flex-start' }}>start a project</Link>
            <div className="hl-tag" style={{ fontSize: 12.5 }}>or email <a href="mailto:roddy@hiro-labs.dev">roddy@hiro-labs.dev</a></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

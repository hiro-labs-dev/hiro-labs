import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { products, clients } from '../data/site'
import { Check, ClientCard, ProductCard } from '../components/Cards'
import '../site.css'
import './Home.css'

const services = [
  {
    title: 'websites',
    text: 'a site that looks like your business and that you can update yourself.',
    value: 'change text, photos and events without calling a developer. fast on a phone, and easy for customers to find in search.',
    points: ['company and marketing sites', 'event calendars, directories, more than one language'],
    example: { name: 'common ground tampa', to: '/projects/common-ground-tampa', image: '/work/common-ground/hero.webp' },
    icon: <><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M3 9h18M8 4v5" /></>,
  },
  {
    title: 'web apps & platforms',
    text: 'custom software built around how your business already works.',
    value: 'swap the spreadsheets and the pile of separate subscriptions for one tool your team and your customers sign in to.',
    points: ['customer portals, dashboards, marketplaces', 'online payments, maps, booking'],
    example: { name: 'nomadic influence', to: '/projects/nomadic-influence', image: '/work/nomadic-influence/hero.webp' },
    icon: <path d="M4 6h16M4 12h16M4 18h10" />,
  },
  {
    title: 'ai tools',
    text: 'assistants that answer from your own documents and take on the busywork.',
    value: 'staff find answers in seconds, with the source shown. a person approves anything that matters before it goes out.',
    points: ['ask questions of your own files', 'automate repetitive tasks and drafts'],
    example: { name: 'sakura', to: '/products#sakura', image: '/lab/sakura.webp' },
    icon: <path d="M12 3l2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5z" />,
  },
  {
    title: 'idea to launch',
    text: 'turn an idea into a working product that real customers can use.',
    value: 'get something real in front of customers to sell, test and learn from, with hosting and upkeep handled.',
    points: ['web, mac and iphone apps', 'hosting, monitoring and updates after launch'],
    example: { name: 'kite', to: '/products#kite', image: '/lab/kite.webp' },
    icon: <path d="M4 20L20 4M14 4h6v6" />,
  },
]

const steps = [
  {
    n: '01', title: 'scope', head: 'start with the outcome',
    text: "we talk through your business, who this is for, what has to work on day one and what can wait. if a simpler fix or an existing tool would do the job, we'll tell you.",
    you: 'a written plan: what we build, what we leave out, and what it costs.',
    need: 'a conversation or two, and examples of how you work today.',
  },
  {
    n: '02', title: 'design', head: 'see it before we build it',
    text: 'we turn the plan into screens you can click through on your laptop or phone, so you can change your mind while changes are cheap.',
    you: 'a clickable prototype you can share with your team.',
    need: 'honest feedback, and a decision-maker for sign-off.',
  },
  {
    n: '03', title: 'build', head: 'ship in small pieces',
    text: 'we build in short cycles. every week there is new, working software to try, not a status report.',
    you: 'a private link to the latest version each week.',
    need: 'a short weekly check-in to review and steer.',
  },
  {
    n: '04', title: 'run', head: 'launch and keep it running',
    text: 'we launch, then host, monitor and update it. when something needs fixing, you know who to call.',
    you: 'a live product, monitoring, and code that belongs to you.',
    need: 'access to accounts like your domain, and a heads-up when your business changes.',
  },
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
            <span className="hl-chip hl-hero-chip"><b />10+ products built</span>
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
            <div><span className="hl-eye">01 · in the lab</span><h2 className="hl-h2">our products</h2><p className="hl-lede">products we design, build and run ourselves. each one shows what we can build for you.</p></div>
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
          <span className="hl-eye">03 · services</span><h2 className="hl-h2">what we build for you</h2><p className="hl-lede">four kinds of work, each with a real project behind it. we build what the project needs, and we stay on after launch.</p>
          <div className="hl-grid4">
            {services.map((s) => (
              <div key={s.title} className="hl-panel hl-svc">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="1.6" aria-hidden="true">{s.icon}</svg>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <p className="hl-svc-val">{s.value}</p>
                <ul>{s.points.map((pt) => <li key={pt} className="hl-li"><Check />{pt}</li>)}</ul>
                <Link className="hl-svc-ex" to={s.example.to}>
                  <img src={s.example.image} alt="" loading="lazy" width="1440" height="900" />
                  <span><span className="hl-tag">example</span>{s.example.name} →</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="hl-sec hl-process">
        <div className="hl-w">
          <span className="hl-eye">how it works</span><h2 className="hl-h2">from first call to launch</h2>
          <p className="hl-lede">you don&apos;t need to know the technical side. at every step you&apos;ll know what we&apos;re doing, why, and what you get.</p>
          <ol className="hl-steps">
            {steps.map((st) => (
              <li key={st.n} className="hl-step">
                <span className="n">{st.n} · {st.title}</span>
                <b>{st.head}</b>
                <p>{st.text}</p>
                <dl>
                  <dt>you get</dt><dd>{st.you}</dd>
                  <dt>we need from you</dt><dd>{st.need}</dd>
                </dl>
              </li>
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
            <p className="hl-lede" style={{ margin: 0 }}>roddy grew up in okinawa, japan, and has spent 9+ years shipping production software. he led engineering teams at acceptance insurance and lucent group, where he built a statewide help-desk platform for the florida department of transportation, then built real-estate search over more than 100 million records at real geeks.</p>
            <p className="hl-lede" style={{ margin: 0 }}>hiro labs is where he builds products end to end. mia, juno, signal and kite each started as a problem he wanted solved, and client work gets the same care. you work directly with the person designing and building your project, from the first call through launch and after.</p>
            <div className="hl-hero-btns"><a className="hl-btn hl-ghost" href="https://roddy.hiro-labs.dev">portfolio & live demos →</a><a className="hl-btn hl-ghost" href="https://github.com/roddy-devs">github</a></div>
          </div>
        </div>
      </section>

      <section id="contact" className="hl-sec">
        <div className="hl-w hl-contact">
          <div><span className="hl-eye">05 · contact</span><h2 className="hl-disp hl-contact-h">have something<br /><span className="hl-accent">to build?</span></h2></div>
          <div className="hl-panel hl-contact-box">
            <p>tell us about the project. a few details help us come back with a real plan.</p>
            <Link className="hl-btn hl-pri" to="/contact" style={{ alignSelf: 'flex-start' }}>start a project</Link>
            <div className="hl-tag" style={{ fontSize: 12.5 }}>or email <a href="mailto:roddy@hiro-labs.dev">roddy@hiro-labs.dev</a></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

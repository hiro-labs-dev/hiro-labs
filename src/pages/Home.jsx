import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { useEffect } from 'react'
import './Home.css'

const selectedWork = [
  {
    title: 'Common Ground Tampa',
    category: 'Community platform',
    description: 'Bilingual community platform with resource maps, events, and local organization directories.',
    href: '/projects/common-ground-tampa',
  },
  {
    title: 'Nomadic Influence',
    category: 'Creator-business platform',
    description: 'SaaS platform for creator profiles, opportunity management, subscriptions, and business workflows.',
    href: '/projects/nomadic-influence',
  },
  {
    title: 'Nexus RV',
    category: 'Corporate website with CMS',
    description: 'Motorhome catalog, interactive floor plans, dealer locator, and content management for an RV manufacturer.',
    href: '/projects/nexus-rv',
  },
]

const capabilities = [
  {
    number: '01',
    title: 'Websites that pull their weight',
    description: 'Clear, polished sites that help the right people understand what you do and take the next step.',
  },
  {
    number: '02',
    title: 'Custom web applications',
    description: 'Useful tools, portals, and platforms shaped around the way your team and customers actually work.',
  },
  {
    number: '03',
    title: 'Connected systems',
    description: 'Data pipelines and integrations that reduce manual work and keep important information moving.',
  },
  {
    number: '04',
    title: 'Reliable delivery',
    description: 'Cloud infrastructure and automation that make your product easier to ship, run, and improve.',
  },
]

const process = [
  {
    number: '01',
    title: 'Get clear',
    description: 'We start with the problem, the people involved, and what a useful outcome actually looks like.',
  },
  {
    number: '02',
    title: 'Make the right plan',
    description: 'We focus the scope and design a solution that fits the job—without adding ceremony for its own sake.',
  },
  {
    number: '03',
    title: 'Build in the open',
    description: 'You see real progress early and often, so feedback shapes the work while it can still matter.',
  },
  {
    number: '04',
    title: 'Set it up to last',
    description: 'We ship with the practical details handled, so your team can use, manage, and build on it confidently.',
  },
]

function Home() {
  useEffect(() => {
    document.title = 'Hiro Labs - Full-Stack Software Studio'
  }, [])

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-label">Hiro Labs</div>
          <h1 className="hero-title">
            Practical digital products, websites, and software built for how your business actually works.
          </h1>
          <p className="hero-subtitle">
            We help you plan, design, and ship the right thing next—whether that&apos;s a clearer website,
            a custom web app, or the systems behind it.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">view work</Link>
            <Link to="/contact" className="btn btn-secondary">start a project</Link>
          </div>
        </div>
      </section>

      <section className="selected-work">
        <div className="container">
          <div className="section-header">
            <h2>Selected Work</h2>
            <Link to="/projects" className="view-all">View All <ArrowRight size={18} /></Link>
          </div>
          <div className="work-grid">
            {selectedWork.map((item) => (
              <Link key={item.title} to={item.href} className="work-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="work-info">
                  <div className="work-category">{item.category}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="what-we-build">
        <div className="container">
          <div className="section-intro">
            <div>
              <span className="section-eyebrow">What we can help with</span>
              <h2>Capabilities</h2>
            </div>
            <p>From the public-facing site to the systems behind it, we build the pieces that make a business easier to understand and run.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article key={capability.number} className="capability-card">
                <span className="card-number">{capability.number}</span>
                <Check className="card-mark" size={18} strokeWidth={2.5} aria-hidden="true" />
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="container">
          <div className="section-intro process-intro">
            <div>
              <span className="section-eyebrow">A practical partnership</span>
              <h2>How we work</h2>
            </div>
            <p>A clear, collaborative process that keeps decisions grounded and momentum high.</p>
          </div>
          <ol className="process-grid">
            {process.map((step) => (
              <li key={step.number} className="process-card">
                <span className="card-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="founder">
        <div className="container">
          <h2>Need a partner for the next build?</h2>
          <p>Whether you need a website, a web app, or a better way to run part of your business, we will help you find a practical place to start.</p>
          <Link to="/contact" className="founder-link">contact Hiro Labs</Link>
        </div>
      </section>
    </div>
  )
}

export default Home

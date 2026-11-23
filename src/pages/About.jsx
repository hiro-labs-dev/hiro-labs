import { useEffect } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import './About.css'

const principles = [
  'Start with the problem, not a preselected solution.',
  'Keep decisions visible and communication direct.',
  'Build for the people who will use and maintain it.',
]

function About() {
  useEffect(() => {
    document.title = 'About - Hiro Labs'
  }, [])

  return (
    <div className="about">
      <div className="about-header">
        <div className="container">
          <p className="about-eyebrow">About Hiro Labs</p>
          <h1>A technical partner for work that needs to hold up.</h1>
          <p className="about-lede">
            Hiro Labs is a founder-led web and software studio for businesses that need a clearer, more useful digital presence.
          </p>
        </div>
      </div>

      <main className="about-content">
        <div className="container">
          <section className="about-intro" aria-labelledby="about-intro-title">
            <h2 id="about-intro-title">Built for the work after launch</h2>
            <p>
              We partner with founders and business leaders on everything from polished business websites to
              customer-facing systems, internal tools, and automation. The aim is practical progress: a clear
              path forward, steady delivery, and digital work that remains useful as the business changes.
            </p>
          </section>

          <section className="founder-section" aria-labelledby="founder-title">
            <div className="founder-image">
              <img src="/roddy.webp" alt="Roddy Brown" />
            </div>
            <div className="founder-text">
              <p className="section-label">The person behind the studio</p>
              <h2 id="founder-title">Led by Roddy Brown</h2>
              <p>
                Roddy is a software engineer with more than nine years of experience building production
                systems across insurance, government, healthcare, and media. He brings hands-on perspective
                from the details that make a product work day to day: reliable data, clear interfaces,
                thoughtful integrations, and dependable delivery.
              </p>
              <p>
                That experience includes high-volume data pipelines, real-time APIs, internal tools, and
                legacy-system migrations. More importantly, it means knowing when to keep a solution simple,
                where to invest in foundations, and how to keep momentum without creating a mess for later.
              </p>
            </div>
          </section>

          <section className="about-principles" aria-labelledby="principles-title">
            <div>
              <p className="section-label">The approach</p>
              <h2 id="principles-title">Clear thinking. Careful execution.</h2>
            </div>
            <div className="principles-list">
              {principles.map((principle) => (
                <p key={principle}><Check size={18} aria-hidden="true" />{principle}</p>
              ))}
            </div>
          </section>

          <section className="about-cta" aria-labelledby="about-cta-title">
            <div>
              <h2 id="about-cta-title">Have a project taking shape?</h2>
              <p>Let&apos;s turn the next good idea into a plan your team can move on.</p>
            </div>
            <Link to="/contact" className="about-cta-link">
              Start a conversation <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}

export default About

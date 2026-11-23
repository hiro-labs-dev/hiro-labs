import { useState, useEffect } from 'react'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Check } from '../components/Cards'
import '../site.css'
import './Products.css'
import './Contact.css'

const firstSteps = [
  'share what you want to build, improve or refresh, websites included.',
  'we reply with a few focused questions and an honest point of view.',
  "if it's a fit, we set up a short call to talk through the next step.",
]

const validate = (name, value) => {
  switch (name) {
    case 'name': return value.trim().length < 2 ? 'please enter your name' : ''
    case 'email': return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'please enter a valid email' : ''
    case 'project': return !value ? 'please pick the closest fit' : ''
    case 'message': return value.trim().length < 10 ? 'a sentence or two is plenty' : ''
    default: return ''
  }
}

function Contact() {
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(() => {
    document.title = 'start a project · hiro labs'
  }, [])

  const onBlur = (e) => {
    const { name, value } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((x) => ({ ...x, [name]: validate(name, value) }))
  }
  const onChange = (e) => {
    const { name, value } = e.target
    if (touched[name]) setErrors((x) => ({ ...x, [name]: validate(name, value) }))
  }
  const err = (n) => touched[n] && errors[n] ? <span className="hl-err" id={`${n}-err`}>{errors[n]}</span> : null

  return (
    <div className="hl-page">
      <section className="hl-page-head">
        <div className="hl-w">
          <span className="hl-eye">start a project</span>
          <h1 className="hl-disp hl-page-h">have something <span className="hl-accent">to build?</span></h1>
          <p className="hl-lede">a new product, a website that better represents your business, or a fix to a system you already have. tell us where you are and we&apos;ll find a practical path forward.</p>
        </div>
      </section>

      <section className="hl-contact-sec">
        <div className="hl-w hl-contact-grid">
          <div className="hl-contact-info">
            <span className="hl-eye">a straightforward first step</span>
            <h2 className="hl-h2" style={{ fontSize: 40 }}>start with the context</h2>
            <p className="hl-lede" style={{ marginTop: 0 }}>a useful note doesn&apos;t need to be a polished brief. tell us where you are now, what&apos;s in the way, and what a better outcome looks like.</p>
            <ul className="hl-contact-steps">{firstSteps.map((s) => <li key={s} className="hl-li"><Check />{s}</li>)}</ul>
            <div className="hl-contact-methods">
              <a href="mailto:roddy@hiro-labs.dev"><Mail size={18} aria-hidden="true" />roddy@hiro-labs.dev</a>
              <a href="https://github.com/hiro-labs-dev" target="_blank" rel="noopener noreferrer"><Github size={18} aria-hidden="true" />github</a>
              <a href="https://www.linkedin.com/in/roddy-hiro" target="_blank" rel="noopener noreferrer"><Linkedin size={18} aria-hidden="true" />linkedin</a>
            </div>
          </div>

          <form className="hl-panel hl-form" action="https://formspree.io/f/xlgwoaez" method="POST">
            <h2>what are you working on?</h2>
            <div className="hl-field">
              <label htmlFor="name">name</label>
              <input type="text" id="name" name="name" required autoComplete="name" onBlur={onBlur} onChange={onChange} aria-describedby={errors.name ? 'name-err' : undefined} />
              {err('name')}
            </div>
            <div className="hl-field">
              <label htmlFor="email">email</label>
              <input type="email" id="email" name="email" required autoComplete="email" placeholder="you@company.com" onBlur={onBlur} onChange={onChange} aria-describedby={errors.email ? 'email-err' : undefined} />
              {err('email')}
            </div>
            <div className="hl-field">
              <label htmlFor="project">what kind of work is this?</label>
              <select id="project" name="project" required onBlur={onBlur} onChange={onChange} defaultValue="">
                <option value="">pick the closest fit</option>
                <option value="website">website</option>
                <option value="webapp">web app or platform</option>
                <option value="mvp">new product or mvp</option>
                <option value="ai">ai tool or automation</option>
                <option value="internal-tool">internal tool or workflow</option>
                <option value="modernization">improve or migrate an existing system</option>
                <option value="other">something else</option>
              </select>
              {err('project')}
            </div>
            <div className="hl-field">
              <label htmlFor="message">a little about the situation</label>
              <textarea id="message" name="message" rows="6" required placeholder="what are you trying to achieve, and what's standing in the way?" onBlur={onBlur} onChange={onChange} />
              {err('message')}
            </div>
            <button type="submit" className="hl-btn hl-pri" style={{ alignSelf: 'flex-start' }}>send your note <ArrowRight size={18} aria-hidden="true" /></button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact

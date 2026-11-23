import { useState, useEffect } from 'react'
import { ArrowRight, Check, Github, Linkedin, Mail } from 'lucide-react'
import './Contact.css'

const firstSteps = [
  'Share what you are trying to build, improve, or refresh — including a website.',
  'We will reply with a few focused questions and an honest point of view.',
  'If there is a fit, we can set up a short call to talk through the next step.',
]

function Contact() {
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(() => {
    document.title = 'Contact - Hiro Labs'
  }, [])

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : ''
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : ''
      case 'project':
        return !value ? 'Please select a project type' : ''
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : ''
      default:
        return ''
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched({ ...touched, [name]: true })
    setErrors({ ...errors, [name]: validateField(name, value) })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) })
    }
  }

  return (
    <div className="contact">
      <header className="contact-header">
        <div className="container">
          <p className="contact-eyebrow">Start a conversation</p>
          <h1>Let&apos;s make your next website or digital tool work harder.</h1>
          <p className="contact-lede">
            Whether you need a website that better represents your business, a new product, or an improvement
            to an existing system, Hiro Labs can help you find a practical path forward.
          </p>
        </div>
      </header>

      <main className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <section className="contact-info" aria-labelledby="contact-intro-title">
              <p className="section-label">A straightforward first step</p>
              <h2 id="contact-intro-title">Start with the context.</h2>
              <p>
                A useful note does not need to be a polished brief. Tell us where you are now, what is getting
                in the way, and what a better outcome would look like. We will take it from there.
              </p>

              <div className="contact-steps" aria-label="What happens next">
                {firstSteps.map((step) => (
                  <p key={step}><Check size={18} aria-hidden="true" />{step}</p>
                ))}
              </div>

              <div className="contact-methods">
                <a href="mailto:admin@hiro-labs.dev" className="contact-method">
                  <Mail size={22} aria-hidden="true" />
                  <span>admin@hiro-labs.dev</span>
                </a>
                <a href="https://github.com/hiro-labs-dev" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <Github size={22} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/roddy-hiro" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <Linkedin size={22} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </section>

            <form className="contact-form" action="https://formspree.io/f/xlgwoaez" method="POST">
              <div className="form-intro">
                <h2>What are you working on?</h2>
                <p>A few details are enough to get the conversation started.</p>
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name" onBlur={handleBlur} onChange={handleChange} />
                {touched.name && errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="you@company.com" onBlur={handleBlur} onChange={handleChange} />
                {touched.email && errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="project">What kind of work is this?</label>
                <select id="project" name="project" required onBlur={handleBlur} onChange={handleChange}>
                  <option value="">Select the closest fit</option>
                  <option value="mvp">New product or MVP</option>
                  <option value="webapp">Customer-facing web application</option>
                  <option value="internal-tool">Internal tool or workflow</option>
                  <option value="integration">Integration, API, or automation</option>
                  <option value="modernization">Existing system improvement or migration</option>
                  <option value="website">Marketing or corporate website</option>
                  <option value="other">Something else</option>
                </select>
                {touched.project && errors.project && <span className="error">{errors.project}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">A little about the situation</label>
                <textarea id="message" name="message" rows="6" required placeholder="What are you trying to achieve, and what is standing in the way?" onBlur={handleBlur} onChange={handleChange} />
                {touched.message && errors.message && <span className="error">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-btn">
                Send your note <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact

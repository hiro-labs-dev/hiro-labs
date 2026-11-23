import { useEffect } from 'react'
import { Code, Zap, Boxes, Cloud, Bot, Globe, Database } from 'lucide-react'
import './Services.css'

const servicesData = [
  {
    icon: Zap,
    title: 'MVP Development',
    description: 'Ship your startup idea fast with a production-ready minimum viable product. Full-stack development from database to deployment.',
    features: ['React + Django', 'PostgreSQL database', 'AWS deployment', 'CI/CD pipeline'],
  },
  {
    icon: Globe,
    title: 'Custom Web Applications',
    description: 'Full-stack web applications for established businesses. Scalable, maintainable, and built to integrate with your existing systems.',
    features: ['Custom features', 'Third-party integrations', 'Admin dashboards', 'Performance optimization'],
  },
  {
    icon: Code,
    title: 'API Development & Integrations',
    description: 'Connect your systems with robust APIs and integrations. Stripe, Firebase, HubSpot, Google Calendar, and more.',
    features: ['RESTful APIs', 'Webhook handling', 'OAuth flows', 'Payment processing'],
  },
  {
    icon: Bot,
    title: 'Automation & Slack Bots',
    description: 'Automate workflows with custom Slack bots. Deployment automation, monitoring, task sync, and custom integrations.',
    features: ['AWS Lambda', 'Slack commands', 'Event-driven', 'Real-time notifications'],
  },
  {
    icon: Boxes,
    title: 'Developer Tools & MCP Servers',
    description: 'AI-powered development tools and Model Context Protocol servers that give AI assistants deep project knowledge.',
    features: ['MCP servers', 'CLI tools', 'Code analysis', 'Project context'],
  },
  {
    icon: Globe,
    title: 'Corporate Websites',
    description: 'Professional websites with CMS capabilities. Your team can manage content while maintaining a polished, modern design.',
    features: ['Django CMS', 'SEO optimized', 'Responsive design', 'Content management'],
  },
  {
    icon: Cloud,
    title: 'AWS Infrastructure',
    description: 'Set up and manage AWS infrastructure. EC2, Lambda, S3, RDS, CloudFront, and more. Scalable and cost-effective.',
    features: ['Infrastructure setup', 'Cost optimization', 'Monitoring', 'Security best practices'],
  },
]

function Services() {
  useEffect(() => {
    document.title = 'Services - Hiro Labs'
  }, [])

  return (
    <div className="services" style={{ '--service-accent': '#14b8a6' }}>
      <div className="services-header">
        <div className="container">
          <h1>Services</h1>
          <p>Technical depth, scoped to what the project actually needs</p>
        </div>
      </div>

      <div className="services-content">
        <div className="container">
          <section className="services-intro">
            <h2>How we work</h2>
            <p>
              We start with the outcome you need, then shape the scope, technical approach, and delivery plan
              around it. The goal is to build something useful, maintainable, and clear enough that your team
              can keep moving after launch.
            </p>
            <p>
              That usually means the right mix of product thinking, clean implementation, and practical
              integrations — from MVPs and custom web apps to APIs, automation, CMS sites, and infrastructure.
            </p>
          </section>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ service }) {
  const Icon = service.icon
  
  return (
    <div className="service-card">
      <div className="service-icon">
        <Icon size={32} />
      </div>
      <h3>{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <ul className="service-features">
        {service.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}

export default Services

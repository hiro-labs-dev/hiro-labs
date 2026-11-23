import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from './projectsData'
import './Projects.css'

const projectsCategories = Object.entries(projectsData)

function Projects() {
  useEffect(() => {
    document.title = 'Work - Hiro Labs'
  }, [])

  return (
    <div className="projects">
      <div className="projects-header">
        <div className="container">
          <h1>Work</h1>
          <p>Systems built for durability and scale</p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">
          {projectsCategories.map(([category, projects]) => (
            <section key={category} className="project-category">
              <h2 className="category-title">{category}</h2>
              <div className="projects-grid">
                {projects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const getInitials = (name) => name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)

  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <div className="project-image">
        {project.image ? <img src={project.image} alt={project.name} /> : <div className="project-placeholder">{getInitials(project.name)}</div>}
      </div>
      <div className="project-info">
        <div className="project-tagline">{project.tagline}</div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">{project.tech}</div>
      </div>
    </Link>
  )
}

export default Projects

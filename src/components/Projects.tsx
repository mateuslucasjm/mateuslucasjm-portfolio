import { portfolioData } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projetos" className="section">
      <h2 className="section-title">Projetos</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-small btn-outline"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-small btn-primary"
                  >
                    Site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

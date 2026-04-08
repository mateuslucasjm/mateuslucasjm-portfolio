import { portfolioData } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experiência" className="section">
      <h2 className="section-title">Experiência</h2>

      <div className="exp-grid">
        {experience.map((exp, index) => (
          <div key={index} className="exp-card">
            <div className="exp-card-header">
              <div>
                <h3>{exp.company}</h3>
                <p className="exp-meta">
                  {exp.role} &middot; {exp.type}
                </p>
              </div>
              <div className="exp-badge">
                {exp.period}
              </div>
            </div>
            <p className="exp-desc">{exp.description}</p>
            <ul className="exp-highlights">
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="exp-tech">
              {exp.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

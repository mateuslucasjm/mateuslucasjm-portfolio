import './Skills.css';

interface SkillIcon {
  name: string;
  slug: string;
  color: string;
}

const skillIcons: SkillIcon[] = [
  { name: 'React', slug: 'react', color: '#61dafb' },
  { name: 'JavaScript', slug: 'javascript', color: '#f7df1e' },
  { name: 'Tailwind', slug: 'tailwindcss', color: '#06b6d4' },
  { name: 'Postman', slug: 'postman', color: '#ff6c37' },
  { name: 'Node.js', slug: 'nodedotjs', color: '#5fa04e' },
  { name: 'Express', slug: 'express', color: '#000000' },
  { name: 'MySQL', slug: 'mysql', color: '#4479a1' },
  { name: 'MongoDB', slug: 'mongodb', color: '#47a248' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '#4169e1' },
  { name: 'Docker', slug: 'docker', color: '#2496ed' },
  { name: 'Git', slug: 'git', color: '#f05032' },
  { name: 'GitHub', slug: 'github', color: '#ffffff' },
];

const iconUrl = (slug: string) =>
  `https://cdn.simpleicons.org/${slug}`;

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <h2 className="section-title">Habilidades</h2>
      <div className="skills-icon-grid">
        {skillIcons.map((skill) => (
          <div key={skill.name} className="skill-icon-card">
            <div
              className="skill-icon-circle"
              style={
                {
                  '--skill-color': skill.color,
                } as React.CSSProperties
              }
            >
              <img
                className="skill-icon-img"
                src={iconUrl(skill.slug)}
                alt={skill.name}
                loading="lazy"
              />
            </div>
            <span className="skill-icon-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

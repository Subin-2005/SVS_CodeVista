import React from 'react';
import { 
  SiPython, 
  SiDjango, 
  SiReact, 
  SiMysql, 
  SiPostman, 
  SiAxios 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const techIconMap = {
  Python: <SiPython style={{ color: '#38BDF8' }} />,
  Django: <SiDjango style={{ color: '#34D399' }} />,
  React: <SiReact style={{ color: '#60A5FA' }} />,
  MySQL: <SiMysql style={{ color: '#FBBF24' }} />,
  'REST API': <TbApi style={{ color: '#F87171' }} />,
  Axios: <SiAxios style={{ color: '#A78BFA' }} />,
};

export default function TechCard({ tech }) {
  const icon = techIconMap[tech.name] || <SiPython />;

  return (
    <div className="tech-card">
      <div className="tech-icon-wrapper">
        {icon}
      </div>
      <span className="badge-pill badge-amber" style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem', marginBottom: '0.75rem' }}>
        {tech.category}
      </span>
      <h3 className="tech-name">{tech.name}</h3>
      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
        "{tech.role}"
      </div>
      <p className="tech-role">{tech.desc}</p>
    </div>
  );
}

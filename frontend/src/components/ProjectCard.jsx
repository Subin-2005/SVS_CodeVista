import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import Button from './Button';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
        <span className="project-category-badge">
          {project.category}
        </span>
      </div>

      <div className="project-content">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.shortDesc}</p>

          <div className="project-tech-tags">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
          <Button
            to={`/projects/${project.slug}`}
            variant="secondary"
            size="sm"
            style={{ width: '100%' }}
            iconRight={<BsArrowRight />}
          >
            View Project Case Study
          </Button>
        </div>
      </div>
    </div>
  );
}

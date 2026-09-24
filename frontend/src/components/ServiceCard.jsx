import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsCheck2 } from 'react-icons/bs';
import { 
  FaGlobe, 
  FaShoppingCart, 
  FaLaptopCode, 
  FaCalendarCheck, 
  FaCogs, 
  FaUserTie, 
  FaRocket, 
  FaMicrochip 
} from 'react-icons/fa';

const iconMap = {
  FaGlobe: <FaGlobe />,
  FaShoppingCart: <FaShoppingCart />,
  FaLaptopCode: <FaLaptopCode />,
  FaCalendarCheck: <FaCalendarCheck />,
  FaCogs: <FaCogs />,
  FaUserTie: <FaUserTie />,
  FaRocket: <FaRocket />,
  FaMicrochip: <FaMicrochip />,
};

export default function ServiceCard({ service }) {
  const icon = iconMap[service.icon] || <FaLaptopCode />;

  return (
    <div className="glass-card service-card">
      <div>
        <div className="service-icon-box">
          {icon}
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.shortDesc}</p>
        
        {service.deliverables && service.deliverables.length > 0 && (
          <ul className="service-features-list">
            {service.deliverables.slice(0, 3).map((item, idx) => (
              <li key={idx} className="service-feature-item">
                <BsCheck2 />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
        <Link to={`/services#${service.slug}`} className="service-link">
          <span>Explore Service</span>
          <BsArrowRight />
        </Link>
      </div>
    </div>
  );
}

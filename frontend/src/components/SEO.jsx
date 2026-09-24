import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    const defaultTitle = 'SVS CodeVista | We Build Digital Solutions That Grow Your Business';
    const defaultDesc = 'SVS CodeVista is a modern software development company specializing in scalable web applications, business websites, management systems, and e-commerce with React, Django, and MySQL.';

    document.title = title ? `${title} | SVS CodeVista` : defaultTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || defaultDesc);
    }
  }, [title, description]);

  return null;
}

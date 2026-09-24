import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // primary | secondary | emerald | outline
  size = 'md',        // sm | md | lg
  type = 'button',
  onClick,
  disabled = false,
  loading = false,
  className = '',
  iconRight,
  iconLeft,
  ...props
}) {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const variantClass = `btn-${variant}`;
  const classes = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  const content = (
    <>
      {loading && (
        <span
          style={{
            display: 'inline-block',
            width: '16px',
            height: '16px',
            border: '2px solid currentColor',
            borderRightColor: 'transparent',
            borderRadius: '50%',
            animation: 'spinSlow 0.8s linear infinite',
          }}
        />
      )}
      {!loading && iconLeft}
      <span>{children}</span>
      {!loading && iconRight}
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}

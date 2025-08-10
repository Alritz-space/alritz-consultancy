import React from 'react';
import { Link } from 'react-router-dom';

export default function UnstyledLink({ href = '', className = '', children, ...rest }) {
  const isInternalLink = href.startsWith('/') || href.startsWith('#');

  if (!href) {
    // Fallback: render just the children if no href is given
    return <span className={className.trim()} {...rest}>{children}</span>;
  }

  if (isInternalLink) {
    return (
      <Link to={href} className={className.trim()} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className.trim()}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}

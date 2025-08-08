import React from 'react';
import { Link } from 'react-router-dom';

export default function UnstyledLink({ href, className, children, ...rest }) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link to={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target='_blank'
      rel='noopener noreferrer'
      {...rest}
    >
      {children}
    </a>
  );
}

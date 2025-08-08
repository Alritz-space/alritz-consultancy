import React from 'react';
import UnstyledLink from './UnstyledLink';

export default function CustomLink({ className, children, ...rest }) {
  return (
    <UnstyledLink
      className={`${className} inline-flex items-center font-bold hover:text-primary-400`}
      {...rest}
    >
      {children}
    </UnstyledLink>
  );
}

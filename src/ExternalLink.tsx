import React, { FunctionComponent, ReactNode } from 'react';

export interface ExternalLinkProps {
  href: string;
  children?: ReactNode;
  [rest: string]: any;
}

const ExternalLink: FunctionComponent<ExternalLinkProps> = ({ href, children, ...rest }: ExternalLinkProps) => (
  <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
    {children || href}
  </a>
);

export default ExternalLink;

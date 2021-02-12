import React from 'react';

export interface ExternalLinkProps {
  href: string;
  children?: React.ReactNode;
  [rest: string]: any;
}

const externalLink: React.FunctionComponent<ExternalLinkProps> = ({ href, children, ...rest }: ExternalLinkProps) => (
  <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
    { children ?? href }
  </a>
);

export default externalLink;

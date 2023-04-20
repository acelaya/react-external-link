import type { AnchorHTMLAttributes, FC } from 'react';

export interface ExternalLinkProps extends Omit<AnchorHTMLAttributes<Element>, 'href'> {
  href: string;
}

export const ExternalLink: FC<ExternalLinkProps> = ({ href, children, rel, ...rest }: ExternalLinkProps) => (
  <a target="_blank" rel={`noopener noreferrer${rel ? ` ${rel}` : ''}`} href={href} {...rest}>
    {children ?? href}
  </a>
);

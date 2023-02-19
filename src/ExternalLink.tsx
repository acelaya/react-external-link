import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';

export interface ExternalLinkProps extends AnchorHTMLAttributes<Element> {
  href: string;
  children?: ReactNode;
}

export const ExternalLink: FC<ExternalLinkProps> = ({ href, children, rel, ...rest }: ExternalLinkProps) => (
  <a target="_blank" rel={`noopener noreferrer${rel ? ` ${rel}` : ''}`} href={href} {...rest}>
    {children ?? href}
  </a>
);

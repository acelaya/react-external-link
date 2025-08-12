import type { FC, HTMLAttributes, RefObject } from 'react';

export type ExternalLinkProps = Omit<HTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  ref?: RefObject<HTMLAnchorElement | null>;
};

export const ExternalLink: FC<ExternalLinkProps> = ({ href, children, rel, ...rest }: ExternalLinkProps) => (
  <a target="_blank" rel={`noopener noreferrer${rel ? ` ${rel}` : ''}`} href={href} {...rest}>
    {children ?? href}
  </a>
);

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { ExternalLink } from '../src';

describe('<ExternalLink />', () => {
  const setUp = (href = 'href', children?: ReactNode, rel?: string): ChildNode => {
    const { container } = render(<ExternalLink href={href} children={children} rel={rel} />);
    const { firstChild } = container;

    if (!firstChild) {
      throw new Error('No child was rendered');
    }

    return firstChild;
  };

  it('properly renders "target" and "rel" attributes', () => {
    const externalLink = setUp();

    expect(externalLink).toHaveAttribute('target', '_blank');
    expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('makes use of href attribute as children when no other children is provided', () => {
    const href = 'https://google.com';
    const externalLink = setUp(href);

    expect(externalLink).toHaveAttribute('href', href);
    expect(externalLink).toHaveTextContent(href);
  });

  it('renders specific children when provided', () => {
    const href = 'https://google.com';
    const children = 'Go to Google';
    const externalLink = setUp(href, children);

    expect(externalLink).toHaveAttribute('href', href);
    expect(externalLink).toHaveTextContent(children);
  });

  it('appends provided rel to protected one', () => {
    const externalLink = setUp('href', undefined, 'me');

    expect(externalLink).toHaveAttribute('target', '_blank');
    expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer me');
  });
});

import React, { ReactNode } from 'React';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExternalLink from '../src/ExternalLink';

describe('<ExternalLink />', () => {
  const createExternalLink = (href = 'href', children?: ReactNode): ChildNode => {
    const { container } = render(<ExternalLink href={href} children={children} />);
    const { firstChild } = container;

    if (!firstChild) {
      throw new Error('No child was rendered');
    }

    return firstChild;
  };

  afterEach(cleanup);

  it('properly renders "target" and "rel" attributes', () => {
    const externalLink = createExternalLink();

    expect(externalLink).toHaveAttribute('target', '_blank');
    expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('makes use of href attribute as children when no other children is provided', () => {
    const href = 'https://google.com';
    const externalLink = createExternalLink(href);

    expect(externalLink).toHaveAttribute('href', href);
    expect(externalLink.textContent).toEqual(href);
  });

  it('renders specific children when provided', () => {
    const href = 'https://google.com';
    const children = 'Go to Google';
    const externalLink = createExternalLink(href, children);

    expect(externalLink).toHaveAttribute('href', href);
    expect(externalLink.textContent).toEqual(children);
  });
});

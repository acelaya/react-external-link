import axe from 'axe-core';
import type { ReactNode } from 'react';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';
import { ExternalLink } from '../src';

describe('<ExternalLink />', () => {
  const setUp = async (href = 'href', children?: ReactNode, rel?: string) => {
    await render(
      <ExternalLink href={href} rel={rel} data-testid="external-link">
        {children}
      </ExternalLink>,
    );
    return page.getByTestId('external-link');
  };

  it('properly renders "target" and "rel" attributes', async () => {
    const externalLink = await setUp();

    await expect.element(externalLink).toHaveAttribute('target', '_blank');
    await expect.element(externalLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('makes use of href attribute as children when no other children is provided', async () => {
    const href = 'https://google.com';
    const externalLink = await setUp(href);

    await expect.element(externalLink).toHaveAttribute('href', href);
    await expect.element(externalLink).toHaveTextContent(href);
  });

  it('renders specific children when provided', async () => {
    const href = 'https://google.com';
    const children = 'Go to Google';
    const externalLink = await setUp(href, children);

    await expect.element(externalLink).toHaveAttribute('href', href);
    await expect.element(externalLink).toHaveTextContent(children);
  });

  it('appends provided rel to protected one', async () => {
    const externalLink = await setUp('href', undefined, 'me');

    await expect.element(externalLink).toHaveAttribute('target', '_blank');
    await expect.element(externalLink).toHaveAttribute('rel', 'noopener noreferrer me');
  });

  it('passes a11y checks', async () => {
    const externalLink = await setUp();
    const { violations } = await axe.run(externalLink.element());

    expect(violations).toStrictEqual([]);
  });
});

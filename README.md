# React External Link

This library provides a simple `ExternalLink` component for [react](https://es.reactjs.org/) which can be used to render `a` tags with both `target="_blank"` and `rel="noopener noreferrer"` attributes.

## Installation

Using npm: `npm istall react-external-link --save`

Using yarn: `yarn add react-external-link`

## Usage

Simple link with no text:

```typescript jsx
import React from 'react';
import { ExternalLink } from 'react-external-link';

const MyComponent = () => (
  <div>
    <ExternalLink href="https://example.com" />
  </div>
);

export default MyComponent;
```

This will be rendered as `<a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a>`.

If you need to provide a custom content, you can do so by providing the `ExternalLink`'s `children`:

```typescript jsx
import React from 'react';
import { ExternalLink } from 'react-external-link';

const MyComponent = () => (
  <div>
    <ExternalLink href="https://example.com">Visit the site<ExternalLink>
  </div>
);

export default MyComponent;
```

This will be rendered as `<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit the site</a>`.

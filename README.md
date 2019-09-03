# React External Link

[![Build Status](https://img.shields.io/travis/acelaya/react-external-link.svg?style=flat-square)](https://travis-ci.org/acelaya/react-external-link)
[![Code Coverage](https://img.shields.io/scrutinizer/coverage/g/acelaya/react-external-link.svg?style=flat-square)](https://scrutinizer-ci.com/g/acelaya/react-external-link/?branch=master)
[![Scrutinizer Code Quality](https://img.shields.io/scrutinizer/g/acelaya/react-external-link.svg?style=flat-square)](https://scrutinizer-ci.com/g/acelaya/react-external-link/?branch=master)
[![npm](https://img.shields.io/npm/v/react-external-link?style=flat-square)](https://www.npmjs.com/package/react-external-link)
[![npm downloads](https://img.shields.io/npm/dt/react-external-link?style=flat-square)](https://www.npmjs.com/package/react-external-link)
[![GitHub license](https://img.shields.io/github/license/acelaya/react-external-link.svg?style=flat-square)](https://github.com/acelaya/react-external-link/blob/master/LICENSE)
[![Paypal Donate](https://img.shields.io/badge/Donate-paypal-blue.svg?style=flat-square&logo=paypal&colorA=cccccc)](https://acel.me/donate)

This library provides a simple `ExternalLink` component for [react](https://es.reactjs.org/) which can be used to render `a` tags with both `target="_blank"` and `rel="noopener noreferrer"` attributes.

## Installation

Using npm: `npm install react-external-link --save`

Using yarn: `yarn add react-external-link`

## Usage

If you just need a simple link with no custom text:

```tsx
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

```tsx
import React from 'react';
import { ExternalLink } from 'react-external-link';

const MyComponent = () => (
  <div>
    <ExternalLink href="https://example.com">
      <span>Visit the site</span>
    <ExternalLink>
  </div>
);

export default MyComponent;
```

This will be rendered as:

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  <span>Visit the site</span>
</a>
```

It is also possible to pass any extra props, and they will be propagated to the link:

```tsx
import React from 'react';
import { ExternalLink } from 'react-external-link';

const MyComponent = () => <ExternalLink href="https://example.com" className="my-class" />;

export default MyComponent;
```

The result in this case will be `<a href="https://example.com" target="_blank" rel="noopener noreferrer" class="my-class">https://example.com</a>`.

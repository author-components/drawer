# AuthorDrawerElement [![](https://data.jsdelivr.com/v1/package/npm/@author.io/element-drawer/badge)](https://www.jsdelivr.com/package/npm/@author.io/element-drawer?path=dist) [![Build Status](https://travis-ci.org/author-elements/drawer.svg?branch=master&style=for-the-badge)](https://travis-ci.org/author-elements/drawer)

<!-- TODO: Add description -->

![Source Size](https://img.shields.io/github/size/author-elements/drawer/src/element.js.svg?colorB=%23333333&label=Source&logo=JavaScript&logoColor=%23aaaaaa&style=for-the-badge) ![Deliverable Size](https://img.shields.io/bundlephobia/minzip/@author.io/element-drawer.svg?colorB=%23333333&label=Minified-Gzipped&logo=JavaScript&style=for-the-badge) ![npm](https://img.shields.io/npm/v/@author.io/element-drawer.svg?colorB=%23333&label=%40author.io%2Felement-drawer&logo=npm&style=for-the-badge)

We're using BrowserStack to make sure these components work on the browsers developers care about.

<a href="https://browserstack.com"><img src="https://github.com/author-elements/drawer/raw/master/browserstack.png" height="30px"/></a>

## Usage

There are 4 versions of this element:

1. *author-drawer.min.js* (ES6 Minified for Production)
1. _author-drawer.js_ (ES6 Unminified for Debugging)
1. *author-drawer.es5.min.js* (ES5 Minified for Production)
1. _author-drawer.es5.js_ (ES5 Unminified for Debugging)

Each version has it's own source map, so it's always possible to trace activity back to a specific code block in the source.

You only need to choose one of these files. If you need to support Internet Explorer, older versions of Chrome/Firefox/Safari, then you likely need the ES5 version.

*Via Global CDN*

```html
<html>
  <head>
    <script src="https://cdn.author.io/author-elements/base/1.0.0/author-base.min.js"></script>
    <script src="https://cdn.author.io/author-elements/drawer/x.x.x/author-drawer.min.js"></script>
  </head>
</html>
```

*Via npm*

If the [base class](https://github.com/author-elements/base) is not yet installed, install it:

`npm install @author.io/element-base -S`

Next, install the drawer module locally:

`npm install @author.io/element-drawer -S`

Then include them in your HTML:

```html
<html>
  <head>
    <script src="./node_modules/@author.io/element-base/dist/author-base.min.js"></script>
    <script src="./node_modules/@author.io/element-drawer/dist/author-drawer.min.js"></script>
  </head>

  <body>

  </body>
</html>
```

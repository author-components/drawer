// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-drawer v1.0.0 available at github.com/author-elements/drawer
// Last Build: 5/18/2019, 6:45:47 PM
var AuthorDrawerElement = (function () {
  'use strict';

  if (!window.hasOwnProperty('AuthorBaseElement')) {
              console.error('[ERROR] <author-drawer> Required dependency "AuthorBaseElement" not found.');
              console.info('AuthorBaseElement is available at https://github.com/author-elements/base');
            }
          (function () {
            let missingDependencies = Array.from(new Set([])).filter(dep => !customElements.get(dep));
            if (missingDependencies.length > 0) {
              console.error(`[ERROR] <author-drawer> Required dependenc${missingDependencies.length !== 1 ? 'ies' : 'y'} not found: ${missingDependencies.map(d => `<${d}>`).join(', ').replace(', ' + missingDependencies[missingDependencies.length - 1], ' and ' + missingDependencies[missingDependencies.length - 1])}`);
              missingDependencies.forEach((dep, i) => console.info(`${i+1}. <${dep}> is available at ${'https://github.com/author-elements/drawer'.replace('drawer', dep.replace('author-', ''))}`));
            }
          })();
          class AuthorDrawerElement extends AuthorBaseElement(HTMLElement) {
    constructor () {
      super(`<template><style>@charset "UTF-8"; :host{display:block}:host *,:host :after,:host :before{box-sizing:border-box}:host(:not([inert])){position:fixed;overflow:auto;visibility:hidden;transition:transform .382s}:host([position=top]:not([inert])){top:0;right:0;left:0;transform:translateY(-100%)}:host([position=right]:not([inert])){top:0;right:0;bottom:0;transform:translateX(100%)}:host([position=bottom]:not([inert])){top:auto;right:0;bottom:0;left:0;transform:translateY(100%)}:host(:not([inert])),:host([position=left]:not([inert])){top:0;bottom:0;transform:translateX(-100%)}:host([open]:not([inert])),:host([transition]:not([inert])){visibility:visible}:host([position=bottom][open]:not([inert])),:host([position=top][open]:not([inert])){transform:translateY(0)}:host([open]:not([inert])),:host([position=left][open]:not([inert])),:host([position=right][open]:not([inert])){transform:translateX(0)}author-drawer{display:block}author-drawer *,author-drawer :after,author-drawer :before{box-sizing:border-box}author-drawer:not([inert]){position:fixed;overflow:auto;visibility:hidden;transition:transform .382s}author-drawer[position=top]:not([inert]){top:0;right:0;left:0;transform:translateY(-100%)}author-drawer[position=right]:not([inert]){top:0;right:0;bottom:0;transform:translateX(100%)}author-drawer[position=bottom]:not([inert]){top:auto;right:0;bottom:0;left:0;transform:translateY(100%)}author-drawer([position=left]:not([inert])),author-drawer:not([inert]){top:0;bottom:0;transform:translateX(-100%)}author-drawer([transition]:not([inert])),author-drawer[open]:not([inert]){visibility:visible}author-drawer([position=bottom][open]:not([inert])),author-drawer[position=top][open]:not([inert]){transform:translateY(0)}author-drawer([position=left][open]:not([inert])),author-drawer([position=right][open]:not([inert])),author-drawer[open]:not([inert]){transform:translateX(0)}</style><slot></slot></template>`);

      this.UTIL.defineProperties({
        acceptablePositions: {
          private: true,
          readonly: true,
          default: ['top', 'right', 'bottom', 'left']
        },

        computedDimension: {
          private: true,
          readonly: true,
          get: () => {
            let style = window.getComputedStyle(this);

            switch (this.position) {
              case 'left':
              case 'right': return style.width
              default: return style.height
            }
          }
        },

        position: {
          readonly: true,
          get: () => {
            if (!this.hasAttribute('position')) {
              return 'left'
            }

            let position = this.getAttribute('position');

            if (!this.PRIVATE.acceptablePositions.includes(position)) {
              this.UTIL.printToConsole(`Invalid position "${position}". Reverting to default "left". Acceptable values: ${this.PRIVATE.acceptablePositions.join(', ')}`, 'warning');
              return 'left'
            }

            return position
          }
        }
      });

      this.UTIL.definePrivateMethods({
        open: () => {
          document.body.style.overflow = 'hidden';
          this.setAttribute('transition', '');
          this.emit('open');
        },

        close: () => {
          this.emit('close');
          setTimeout(() => {
            document.body.style.removeProperty('overflow');
            this.removeAttribute('transition');
          }, 382);
        }
      });

      this.UTIL.registerListeners(this, {
        'attribute.change': evt => {
          let { attribute, oldValue, newValue } = evt.detail;

          switch (attribute) {
            case 'open':
              if (this.hasAttribute('open')) {
                return this.PRIVATE.open()
              }

              return this.PRIVATE.close()
          }
        }
      });
    }

    static get observedAttributes () {
      return ['position', 'open']
    }

    open () {
      this.setAttribute('open', '');
    }

    close () {
      this.removeAttribute('open');
    }
  }

  customElements.define('author-drawer', AuthorDrawerElement);

  return AuthorDrawerElement;

}());
//# sourceMappingURL=author-drawer.js.map

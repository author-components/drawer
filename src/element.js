class AuthorDrawerElement extends AuthorBaseElement(HTMLElement) {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)

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
          let style = window.getComputedStyle(this)

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

          let position = this.getAttribute('position')

          if (!this.PRIVATE.acceptablePositions.includes(position)) {
            this.UTIL.printToConsole(`Invalid position "${position}". Reverting to default "left". Acceptable values: ${this.PRIVATE.acceptablePositions.join(', ')}`, 'warning')
            return 'left'
          }

          return position
        }
      }
    })

    this.UTIL.definePrivateMethods({
      open: () => {
        document.body.style.overflow = 'hidden'
        this.setAttribute('transition', '')
        this.emit('open')
      },

      close: () => {
        this.emit('close')
        setTimeout(() => {
          document.body.style.removeProperty('overflow')
          this.removeAttribute('transition')
        }, 382)
      }
    })

    this.UTIL.registerListeners(this, {
      'attribute.change': evt => {
        let { attribute, oldValue, newValue } = evt.detail

        switch (attribute) {
          case 'open':
            if (this.hasAttribute('open')) {
              return this.PRIVATE.open()
            }

            return this.PRIVATE.close()
        }
      }
    })
  }

  static get observedAttributes () {
    return ['position', 'open']
  }

  open () {
    this.setAttribute('open', '')
  }

  close () {
    this.removeAttribute('open')
  }
}

customElements.define('author-drawer', AuthorDrawerElement)

export default AuthorDrawerElement

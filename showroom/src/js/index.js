const Demo = new NGNX.VIEW.Registry({
  selector: '.demo',
  namespace: 'demo.',

  references: {
    drawers: 'author-drawer',
    openDrawers: 'author-drawer[open]',
    leftDrawer: 'author-drawer[position="left"]',
    rightDrawer: 'author-drawer[position="right"]',
    topDrawer: 'author-drawer[position="top"]',
    bottomDrawer: 'author-drawer[position="bottom"]',
    openLeftButton: 'button.open.left',
    openRightButton: 'button.open.right',
    openTopButton: 'button.open.top',
    openBottomButton: 'button.open.bottom'
  },

  init () {
    this.ref.openLeftButton.on('click', evt => {
      evt.stopPropagation()
      this.ref.leftDrawer.element.open()
    })

    this.ref.openRightButton.on('click', evt => {
      evt.stopPropagation()
      this.ref.rightDrawer.element.open()
    })

    this.ref.openTopButton.on('click', evt => {
      evt.stopPropagation()
      this.ref.topDrawer.element.open()
    })

    this.ref.openBottomButton.on('click', evt => {
      evt.stopPropagation()
      this.ref.bottomDrawer.element.open()
    })

    this.ref.drawers.each(drawer => {
      drawer.on('open', () => window.addEventListener('click', this.handleWindowClick.bind(this)))
      drawer.on('close', () => window.removeEventListener('click', this.handleWindowClick.bind(this)))
    })
  }
})

Demo.handleWindowClick = function (evt) {
  this.ref.openDrawers.each(drawer => {
    if (evt.target === drawer || drawer.contains(evt.target)) {
      return
    }

    drawer.close()
  })
}

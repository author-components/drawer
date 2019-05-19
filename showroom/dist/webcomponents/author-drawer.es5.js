// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-drawer v1.0.0 available at github.com/author-elements/drawer
// Last Build: 5/18/2019, 6:26:07 PM
var AuthorDrawerElement = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  if (!window.hasOwnProperty('AuthorBaseElement')) {
    console.error('[ERROR] <author-drawer> Required dependency "AuthorBaseElement" not found.');
    console.info('AuthorBaseElement is available at https://github.com/author-elements/base');
  }

  (function () {
    var missingDependencies = Array.from(new Set([])).filter(function (dep) {
      return !customElements.get(dep);
    });

    if (missingDependencies.length > 0) {
      console.error("[ERROR] <author-drawer> Required dependenc".concat(missingDependencies.length !== 1 ? 'ies' : 'y', " not found: ").concat(missingDependencies.map(function (d) {
        return "<".concat(d, ">");
      }).join(', ').replace(', ' + missingDependencies[missingDependencies.length - 1], ' and ' + missingDependencies[missingDependencies.length - 1])));
      missingDependencies.forEach(function (dep, i) {
        return console.info("".concat(i + 1, ". <").concat(dep, "> is available at ").concat('https://github.com/author-elements/drawer'.replace('drawer', dep.replace('author-', ''))));
      });
    }
  })();

  var AuthorDrawerElement =
  /*#__PURE__*/
  function (_AuthorBaseElement) {
    _inherits(AuthorDrawerElement, _AuthorBaseElement);

    function AuthorDrawerElement() {
      var _this;

      _classCallCheck(this, AuthorDrawerElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthorDrawerElement).call(this, "<template><style>@charset \"UTF-8\"; :host{position:fixed;overflow:auto;visibility:hidden;transition:transform .382s}:host *,:host :after,:host :before{box-sizing:border-box}:host([position=top]){top:0;right:0;left:0;transform:translateY(-100%)}:host([position=right]){top:0;right:0;bottom:0;transform:translateX(100%)}:host([position=bottom]){top:auto;right:0;bottom:0;left:0;transform:translateY(100%)}:host,:host([position=left]){top:0;bottom:0;transform:translateX(-100%)}:host([open]),:host([transition]){visibility:visible}:host([position=bottom][open]),:host([position=top][open]){transform:translateY(0)}:host([open]),:host([position=left][open]),:host([position=right][open]){transform:translateX(0)}author-drawer{position:fixed;overflow:auto;visibility:hidden;transition:transform .382s}author-drawer *,author-drawer :after,author-drawer :before{box-sizing:border-box}author-drawer[position=top]{top:0;right:0;left:0;transform:translateY(-100%)}author-drawer[position=right]{top:0;right:0;bottom:0;transform:translateX(100%)}author-drawer[position=bottom]{top:auto;right:0;bottom:0;left:0;transform:translateY(100%)}author-drawer,author-drawer[position=left]{top:0;bottom:0;transform:translateX(-100%)}author-drawer([transition]),author-drawer[open]{visibility:visible}author-drawer([position=bottom][open]),author-drawer[position=top][open]{transform:translateY(0)}author-drawer([position=left][open]),author-drawer([position=right][open]),author-drawer[open]{transform:translateX(0)}</style><slot></slot></template>"));

      _this.UTIL.defineProperties({
        acceptablePositions: {
          private: true,
          readonly: true,
          default: ['top', 'right', 'bottom', 'left']
        },
        computedDimension: {
          private: true,
          readonly: true,
          get: function get() {
            var style = window.getComputedStyle(_assertThisInitialized(_this));

            switch (_this.position) {
              case 'left':
              case 'right':
                return style.width;

              default:
                return style.height;
            }
          }
        },
        position: {
          readonly: true,
          get: function get() {
            if (!_this.hasAttribute('position')) {
              return 'left';
            }

            var position = _this.getAttribute('position');

            if (!_this.PRIVATE.acceptablePositions.includes(position)) {
              _this.UTIL.printToConsole("Invalid position \"".concat(position, "\". Reverting to default \"left\". Acceptable values: ").concat(_this.PRIVATE.acceptablePositions.join(', ')), 'warning');

              return 'left';
            }

            return position;
          }
        }
      });

      _this.UTIL.definePrivateMethods({
        open: function open() {
          document.body.style.overflow = 'hidden';

          _this.setAttribute('transition', '');

          _this.emit('open');
        },
        close: function close() {
          _this.emit('close');

          setTimeout(function () {
            document.body.style.removeProperty('overflow');

            _this.removeAttribute('transition');
          }, 382);
        }
      });

      _this.UTIL.registerListeners(_assertThisInitialized(_this), {
        'attribute.change': function attributeChange(evt) {
          var _evt$detail = evt.detail,
              attribute = _evt$detail.attribute,
              oldValue = _evt$detail.oldValue,
              newValue = _evt$detail.newValue;

          switch (attribute) {
            case 'open':
              if (_this.hasAttribute('open')) {
                return _this.PRIVATE.open();
              }

              return _this.PRIVATE.close();
          }
        }
      });

      return _this;
    }

    _createClass(AuthorDrawerElement, [{
      key: "open",
      value: function open() {
        this.setAttribute('open', '');
      }
    }, {
      key: "close",
      value: function close() {
        this.removeAttribute('open');
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['position', 'open'];
      }
    }]);

    return AuthorDrawerElement;
  }(AuthorBaseElement(HTMLElement));

  customElements.define('author-drawer', AuthorDrawerElement);

  return AuthorDrawerElement;

}());
//# sourceMappingURL=author-drawer.es5.js.map

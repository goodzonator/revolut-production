/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/choices.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* choices.min.js */
!function () {
  "use strict";

  var e = {
      282: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.clearChoices = t.activateChoices = t.filterChoices = t.addChoice = void 0;
        var n = i(883);
        t.addChoice = function (e) {
          var t = e.value,
            i = e.label,
            r = e.id,
            s = e.groupId,
            o = e.disabled,
            a = e.elementId,
            c = e.customProperties,
            l = e.placeholder,
            h = e.keyCode;
          return {
            type: n.ACTION_TYPES.ADD_CHOICE,
            value: t,
            label: i,
            id: r,
            groupId: s,
            disabled: o,
            elementId: a,
            customProperties: c,
            placeholder: l,
            keyCode: h
          };
        }, t.filterChoices = function (e) {
          return {
            type: n.ACTION_TYPES.FILTER_CHOICES,
            results: e
          };
        }, t.activateChoices = function (e) {
          return void 0 === e && (e = !0), {
            type: n.ACTION_TYPES.ACTIVATE_CHOICES,
            active: e
          };
        }, t.clearChoices = function () {
          return {
            type: n.ACTION_TYPES.CLEAR_CHOICES
          };
        };
      },
      783: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.addGroup = void 0;
        var n = i(883);
        t.addGroup = function (e) {
          var t = e.value,
            i = e.id,
            r = e.active,
            s = e.disabled;
          return {
            type: n.ACTION_TYPES.ADD_GROUP,
            value: t,
            id: i,
            active: r,
            disabled: s
          };
        };
      },
      464: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.highlightItem = t.removeItem = t.addItem = void 0;
        var n = i(883);
        t.addItem = function (e) {
          var t = e.value,
            i = e.label,
            r = e.id,
            s = e.choiceId,
            o = e.groupId,
            a = e.customProperties,
            c = e.placeholder,
            l = e.keyCode;
          return {
            type: n.ACTION_TYPES.ADD_ITEM,
            value: t,
            label: i,
            id: r,
            choiceId: s,
            groupId: o,
            customProperties: a,
            placeholder: c,
            keyCode: l
          };
        }, t.removeItem = function (e, t) {
          return {
            type: n.ACTION_TYPES.REMOVE_ITEM,
            id: e,
            choiceId: t
          };
        }, t.highlightItem = function (e, t) {
          return {
            type: n.ACTION_TYPES.HIGHLIGHT_ITEM,
            id: e,
            highlighted: t
          };
        };
      },
      137: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.setIsLoading = t.resetTo = t.clearAll = void 0;
        var n = i(883);
        t.clearAll = function () {
          return {
            type: n.ACTION_TYPES.CLEAR_ALL
          };
        }, t.resetTo = function (e) {
          return {
            type: n.ACTION_TYPES.RESET_TO,
            state: e
          };
        }, t.setIsLoading = function (e) {
          return {
            type: n.ACTION_TYPES.SET_IS_LOADING,
            isLoading: e
          };
        };
      },
      373: function _(e, t, i) {
        var n = this && this.__spreadArray || function (e, t, i) {
            if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
            return e.concat(n || Array.prototype.slice.call(t));
          },
          r = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              "default": e
            };
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var s = r(i(996)),
          o = r(i(221)),
          a = i(282),
          c = i(783),
          l = i(464),
          h = i(137),
          u = i(520),
          d = i(883),
          p = i(789),
          f = i(799),
          m = i(655),
          v = r(i(744)),
          g = r(i(686)),
          _ = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
          y = {},
          E = function () {
            function e(t, i) {
              void 0 === t && (t = "[data-choice]"), void 0 === i && (i = {});
              var r = this;
              void 0 === i.allowHTML && console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message."), this.config = s["default"].all([p.DEFAULT_CONFIG, e.defaults.options, i], {
                arrayMerge: function arrayMerge(e, t) {
                  return n([], t, !0);
                }
              });
              var o = (0, f.diff)(this.config, p.DEFAULT_CONFIG);
              o.length && console.warn("Unknown config option(s) passed", o.join(", "));
              var a = "string" == typeof t ? document.querySelector(t) : t;
              if (!(a instanceof HTMLInputElement || a instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
              if (this._isTextElement = a.type === d.TEXT_TYPE, this._isSelectOneElement = a.type === d.SELECT_ONE_TYPE, this._isSelectMultipleElement = a.type === d.SELECT_MULTIPLE_TYPE, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled, ["auto", "always"].includes("".concat(this.config.renderSelectedChoices)) || (this.config.renderSelectedChoices = "auto"), i.addItemFilter && "function" != typeof i.addItemFilter) {
                var c = i.addItemFilter instanceof RegExp ? i.addItemFilter : new RegExp(i.addItemFilter);
                this.config.addItemFilter = c.test.bind(c);
              }
              if (this._isTextElement ? this.passedElement = new u.WrappedInput({
                element: a,
                classNames: this.config.classNames,
                delimiter: this.config.delimiter
              }) : this.passedElement = new u.WrappedSelect({
                element: a,
                classNames: this.config.classNames,
                template: function template(e) {
                  return r._templates.option(e);
                }
              }), this.initialised = !1, this._store = new v["default"](), this._initialState = m.defaultState, this._currentState = m.defaultState, this._prevState = m.defaultState, this._currentValue = "", this._canSearch = !!this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = (0, f.generateId)(this.passedElement.element, "choices-"), this._direction = this.passedElement.dir, !this._direction) {
                var l = window.getComputedStyle(this.passedElement.element).direction;
                l !== window.getComputedStyle(document.documentElement).direction && (this._direction = l);
              }
              if (this._idNames = {
                itemChoice: "item-choice"
              }, this._isSelectElement && (this._presetGroups = this.passedElement.optionGroups, this._presetOptions = this.passedElement.options), this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && this._isTextElement) {
                var h = this.passedElement.value.split(this.config.delimiter);
                this._presetItems = this._presetItems.concat(h);
              }
              if (this.passedElement.options && this.passedElement.options.forEach(function (e) {
                r._presetChoices.push({
                  value: e.value,
                  label: e.innerHTML,
                  selected: !!e.selected,
                  disabled: e.disabled || e.parentNode.disabled,
                  placeholder: "" === e.value || e.hasAttribute("placeholder"),
                  customProperties: (0, f.parseCustomProperties)(e.dataset.customProperties)
                });
              }), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onSelectKey = this._onSelectKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.passedElement.isActive) return this.config.silent || console.warn("Trying to initialise Choices on element already initialised", {
                element: t
              }), void (this.initialised = !0);
              this.init();
            }
            return Object.defineProperty(e, "defaults", {
              get: function get() {
                return Object.preventExtensions({
                  get options() {
                    return y;
                  },
                  get templates() {
                    return g["default"];
                  }
                });
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.init = function () {
              if (!this.initialised) {
                this._createTemplates(), this._createElements(), this._createStructure(), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0;
                var e = this.config.callbackOnInit;
                e && "function" == typeof e && e.call(this);
              }
            }, e.prototype.destroy = function () {
              this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this.clearStore(), this._isSelectElement && (this.passedElement.options = this._presetOptions), this._templates = g["default"], this.initialised = !1);
            }, e.prototype.enable = function () {
              return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this;
            }, e.prototype.disable = function () {
              return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this;
            }, e.prototype.highlightItem = function (e, t) {
              if (void 0 === t && (t = !0), !e || !e.id) return this;
              var i = e.id,
                n = e.groupId,
                r = void 0 === n ? -1 : n,
                s = e.value,
                o = void 0 === s ? "" : s,
                a = e.label,
                c = void 0 === a ? "" : a,
                h = r >= 0 ? this._store.getGroupById(r) : null;
              return this._store.dispatch((0, l.highlightItem)(i, !0)), t && this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
                id: i,
                value: o,
                label: c,
                groupValue: h && h.value ? h.value : null
              }), this;
            }, e.prototype.unhighlightItem = function (e) {
              if (!e || !e.id) return this;
              var t = e.id,
                i = e.groupId,
                n = void 0 === i ? -1 : i,
                r = e.value,
                s = void 0 === r ? "" : r,
                o = e.label,
                a = void 0 === o ? "" : o,
                c = n >= 0 ? this._store.getGroupById(n) : null;
              return this._store.dispatch((0, l.highlightItem)(t, !1)), this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
                id: t,
                value: s,
                label: a,
                groupValue: c && c.value ? c.value : null
              }), this;
            }, e.prototype.highlightAll = function () {
              var e = this;
              return this._store.items.forEach(function (t) {
                return e.highlightItem(t);
              }), this;
            }, e.prototype.unhighlightAll = function () {
              var e = this;
              return this._store.items.forEach(function (t) {
                return e.unhighlightItem(t);
              }), this;
            }, e.prototype.removeActiveItemsByValue = function (e) {
              var t = this;
              return this._store.activeItems.filter(function (t) {
                return t.value === e;
              }).forEach(function (e) {
                return t._removeItem(e);
              }), this;
            }, e.prototype.removeActiveItems = function (e) {
              var t = this;
              return this._store.activeItems.filter(function (t) {
                return t.id !== e;
              }).forEach(function (e) {
                return t._removeItem(e);
              }), this;
            }, e.prototype.removeHighlightedItems = function (e) {
              var t = this;
              return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach(function (i) {
                t._removeItem(i), e && t._triggerChange(i.value);
              }), this;
            }, e.prototype.showDropdown = function (e) {
              var t = this;
              return this.dropdown.isActive || requestAnimationFrame(function () {
                t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(d.EVENTS.showDropdown, {});
              }), this;
            }, e.prototype.hideDropdown = function (e) {
              var t = this;
              return this.dropdown.isActive ? (requestAnimationFrame(function () {
                t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(d.EVENTS.hideDropdown, {});
              }), this) : this;
            }, e.prototype.getValue = function (e) {
              void 0 === e && (e = !1);
              var t = this._store.activeItems.reduce(function (t, i) {
                var n = e ? i.value : i;
                return t.push(n), t;
              }, []);
              return this._isSelectOneElement ? t[0] : t;
            }, e.prototype.setValue = function (e) {
              var t = this;
              return this.initialised ? (e.forEach(function (e) {
                return t._setChoiceOrItem(e);
              }), this) : this;
            }, e.prototype.setChoiceByValue = function (e) {
              var t = this;
              return !this.initialised || this._isTextElement || (Array.isArray(e) ? e : [e]).forEach(function (e) {
                return t._findAndSelectChoiceByValue(e);
              }), this;
            }, e.prototype.setChoices = function (e, t, i, n) {
              var r = this;
              if (void 0 === e && (e = []), void 0 === t && (t = "value"), void 0 === i && (i = "label"), void 0 === n && (n = !1), !this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
              if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
              if ("string" != typeof t || !t) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
              if (n && this.clearChoices(), "function" == typeof e) {
                var s = e(this);
                if ("function" == typeof Promise && s instanceof Promise) return new Promise(function (e) {
                  return requestAnimationFrame(e);
                }).then(function () {
                  return r._handleLoadingState(!0);
                }).then(function () {
                  return s;
                }).then(function (e) {
                  return r.setChoices(e, t, i, n);
                })["catch"](function (e) {
                  r.config.silent || console.error(e);
                }).then(function () {
                  return r._handleLoadingState(!1);
                }).then(function () {
                  return r;
                });
                if (!Array.isArray(s)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(_typeof(s)));
                return this.setChoices(s, t, i, !1);
              }
              if (!Array.isArray(e)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
              return this.containerOuter.removeLoadingState(), this._startLoading(), e.forEach(function (e) {
                if (e.choices) r._addGroup({
                  id: e.id ? parseInt("".concat(e.id), 10) : null,
                  group: e,
                  valueKey: t,
                  labelKey: i
                });else {
                  var n = e;
                  r._addChoice({
                    value: n[t],
                    label: n[i],
                    isSelected: !!n.selected,
                    isDisabled: !!n.disabled,
                    placeholder: !!n.placeholder,
                    customProperties: n.customProperties
                  });
                }
              }), this._stopLoading(), this;
            }, e.prototype.clearChoices = function () {
              return this._store.dispatch((0, a.clearChoices)()), this;
            }, e.prototype.clearStore = function () {
              return this._store.dispatch((0, h.clearAll)()), this;
            }, e.prototype.clearInput = function () {
              var e = !this._isSelectOneElement;
              return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))), this;
            }, e.prototype._render = function () {
              if (!this._store.isLoading()) {
                this._currentState = this._store.state;
                var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
                  t = this._isSelectElement,
                  i = this._currentState.items !== this._prevState.items;
                e && (t && this._renderChoices(), i && this._renderItems(), this._prevState = this._currentState);
              }
            }, e.prototype._renderChoices = function () {
              var e = this,
                t = this._store,
                i = t.activeGroups,
                n = t.activeChoices,
                r = document.createDocumentFragment();
              if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame(function () {
                return e.choiceList.scrollToTop();
              }), i.length >= 1 && !this._isSearching) {
                var s = n.filter(function (e) {
                  return !0 === e.placeholder && -1 === e.groupId;
                });
                s.length >= 1 && (r = this._createChoicesFragment(s, r)), r = this._createGroupsFragment(i, n, r);
              } else n.length >= 1 && (r = this._createChoicesFragment(n, r));
              if (r.childNodes && r.childNodes.length > 0) {
                var o = this._store.activeItems,
                  a = this._canAddItem(o, this.input.value);
                if (a.response) this.choiceList.append(r), this._highlightChoice();else {
                  var c = this._getTemplate("notice", a.notice);
                  this.choiceList.append(c);
                }
              } else {
                var l = void 0;
                c = void 0, this._isSearching ? (c = "function" == typeof this.config.noResultsText ? this.config.noResultsText() : this.config.noResultsText, l = this._getTemplate("notice", c, "no-results")) : (c = "function" == typeof this.config.noChoicesText ? this.config.noChoicesText() : this.config.noChoicesText, l = this._getTemplate("notice", c, "no-choices")), this.choiceList.append(l);
              }
            }, e.prototype._renderItems = function () {
              var e = this._store.activeItems || [];
              this.itemList.clear();
              var t = this._createItemsFragment(e);
              t.childNodes && this.itemList.append(t);
            }, e.prototype._createGroupsFragment = function (e, t, i) {
              var n = this;
              return void 0 === i && (i = document.createDocumentFragment()), this.config.shouldSort && e.sort(this.config.sorter), e.forEach(function (e) {
                var r = function (e) {
                  return t.filter(function (t) {
                    return n._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === n.config.renderSelectedChoices || !t.selected);
                  });
                }(e);
                if (r.length >= 1) {
                  var s = n._getTemplate("choiceGroup", e);
                  i.appendChild(s), n._createChoicesFragment(r, i, !0);
                }
              }), i;
            }, e.prototype._createChoicesFragment = function (e, t, i) {
              var r = this;
              void 0 === t && (t = document.createDocumentFragment()), void 0 === i && (i = !1);
              var s = this.config,
                o = s.renderSelectedChoices,
                a = s.searchResultLimit,
                c = s.renderChoiceLimit,
                l = this._isSearching ? f.sortByScore : this.config.sorter,
                h = function h(e) {
                  if ("auto" !== o || r._isSelectOneElement || !e.selected) {
                    var i = r._getTemplate("choice", e, r.config.itemSelectText);
                    t.appendChild(i);
                  }
                },
                u = e;
              "auto" !== o || this._isSelectOneElement || (u = e.filter(function (e) {
                return !e.selected;
              }));
              var d = u.reduce(function (e, t) {
                  return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e;
                }, {
                  placeholderChoices: [],
                  normalChoices: []
                }),
                p = d.placeholderChoices,
                m = d.normalChoices;
              (this.config.shouldSort || this._isSearching) && m.sort(l);
              var v = u.length,
                g = this._isSelectOneElement ? n(n([], p, !0), m, !0) : m;
              this._isSearching ? v = a : c && c > 0 && !i && (v = c);
              for (var _ = 0; _ < v; _ += 1) g[_] && h(g[_]);
              return t;
            }, e.prototype._createItemsFragment = function (e, t) {
              var i = this;
              void 0 === t && (t = document.createDocumentFragment());
              var n = this.config,
                r = n.shouldSortItems,
                s = n.sorter,
                o = n.removeItemButton;
              return r && !this._isSelectOneElement && e.sort(s), this._isTextElement ? this.passedElement.value = e.map(function (e) {
                return e.value;
              }).join(this.config.delimiter) : this.passedElement.options = e, e.forEach(function (e) {
                var n = i._getTemplate("item", e, o);
                t.appendChild(n);
              }), t;
            }, e.prototype._triggerChange = function (e) {
              null != e && this.passedElement.triggerEvent(d.EVENTS.change, {
                value: e
              });
            }, e.prototype._selectPlaceholderChoice = function (e) {
              this._addItem({
                value: e.value,
                label: e.label,
                choiceId: e.id,
                groupId: e.groupId,
                placeholder: e.placeholder
              }), this._triggerChange(e.value);
            }, e.prototype._handleButtonAction = function (e, t) {
              if (e && t && this.config.removeItems && this.config.removeItemButton) {
                var i = t.parentNode && t.parentNode.dataset.id,
                  n = i && e.find(function (e) {
                    return e.id === parseInt(i, 10);
                  });
                n && (this._removeItem(n), this._triggerChange(n.value), this._isSelectOneElement && this._store.placeholderChoice && this._selectPlaceholderChoice(this._store.placeholderChoice));
              }
            }, e.prototype._handleItemAction = function (e, t, i) {
              var n = this;
              if (void 0 === i && (i = !1), e && t && this.config.removeItems && !this._isSelectOneElement) {
                var r = t.dataset.id;
                e.forEach(function (e) {
                  e.id !== parseInt("".concat(r), 10) || e.highlighted ? !i && e.highlighted && n.unhighlightItem(e) : n.highlightItem(e);
                }), this.input.focus();
              }
            }, e.prototype._handleChoiceAction = function (e, t) {
              if (e && t) {
                var i = t.dataset.id,
                  n = i && this._store.getChoiceById(i);
                if (n) {
                  var r = e[0] && e[0].keyCode ? e[0].keyCode : void 0,
                    s = this.dropdown.isActive;
                  n.keyCode = r, this.passedElement.triggerEvent(d.EVENTS.choice, {
                    choice: n
                  }), n.selected || n.disabled || this._canAddItem(e, n.value).response && (this._addItem({
                    value: n.value,
                    label: n.label,
                    choiceId: n.id,
                    groupId: n.groupId,
                    customProperties: n.customProperties,
                    placeholder: n.placeholder,
                    keyCode: n.keyCode
                  }), this._triggerChange(n.value)), this.clearInput(), s && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus());
                }
              }
            }, e.prototype._handleBackspace = function (e) {
              if (this.config.removeItems && e) {
                var t = e[e.length - 1],
                  i = e.some(function (e) {
                    return e.highlighted;
                  });
                this.config.editItems && !i && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0));
              }
            }, e.prototype._startLoading = function () {
              this._store.dispatch((0, h.setIsLoading)(!0));
            }, e.prototype._stopLoading = function () {
              this._store.dispatch((0, h.setIsLoading)(!1));
            }, e.prototype._handleLoadingState = function (e) {
              void 0 === e && (e = !0);
              var t = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
              e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText)) && this.itemList.append(t) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t && (t.innerHTML = this._placeholderValue || "") : this.input.placeholder = this._placeholderValue || "");
            }, e.prototype._handleSearch = function (e) {
              if (this.input.isFocussed) {
                var t = this._store.choices,
                  i = this.config,
                  n = i.searchFloor,
                  r = i.searchChoices,
                  s = t.some(function (e) {
                    return !e.active;
                  });
                if (null != e && e.length >= n) {
                  var o = r ? this._searchChoices(e) : 0;
                  this.passedElement.triggerEvent(d.EVENTS.search, {
                    value: e,
                    resultCount: o
                  });
                } else s && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0)));
              }
            }, e.prototype._canAddItem = function (e, t) {
              var i = !0,
                n = "function" == typeof this.config.addItemText ? this.config.addItemText(t) : this.config.addItemText;
              if (!this._isSelectOneElement) {
                var r = (0, f.existsInArray)(e, t);
                this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (i = !1, n = "function" == typeof this.config.maxItemText ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && r && i && (i = !1, n = "function" == typeof this.config.uniqueItemText ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && i && "function" == typeof this.config.addItemFilter && !this.config.addItemFilter(t) && (i = !1, n = "function" == typeof this.config.customAddItemText ? this.config.customAddItemText(t) : this.config.customAddItemText);
              }
              return {
                response: i,
                notice: n
              };
            }, e.prototype._searchChoices = function (e) {
              var t = "string" == typeof e ? e.trim() : e,
                i = "string" == typeof this._currentValue ? this._currentValue.trim() : this._currentValue;
              if (t.length < 1 && t === "".concat(i, " ")) return 0;
              var r = this._store.searchableChoices,
                s = t,
                c = Object.assign(this.config.fuseOptions, {
                  keys: n([], this.config.searchFields, !0),
                  includeMatches: !0
                }),
                l = new o["default"](r, c).search(s);
              return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch((0, a.filterChoices)(l)), l.length;
            }, e.prototype._addEventListeners = function () {
              var e = document.documentElement;
              e.addEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.addEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, !0), e.addEventListener("click", this._onClick, {
                passive: !0
              }), e.addEventListener("touchmove", this._onTouchMove, {
                passive: !0
              }), this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                passive: !0
              }), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus, {
                passive: !0
              }), this.containerOuter.element.addEventListener("blur", this._onBlur, {
                passive: !0
              })), this.input.element.addEventListener("keyup", this._onKeyUp, {
                passive: !0
              }), this.input.element.addEventListener("focus", this._onFocus, {
                passive: !0
              }), this.input.element.addEventListener("blur", this._onBlur, {
                passive: !0
              }), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset, {
                passive: !0
              }), this.input.addEventListeners();
            }, e.prototype._removeEventListeners = function () {
              var e = document.documentElement;
              e.removeEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, !0), e.removeEventListener("click", this._onClick), e.removeEventListener("touchmove", this._onTouchMove), this.dropdown.element.removeEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("keyup", this._onKeyUp), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners();
            }, e.prototype._onKeyDown = function (e) {
              var t = e.keyCode,
                i = this._store.activeItems,
                n = this.input.isFocussed,
                r = this.dropdown.isActive,
                s = this.itemList.hasChildren(),
                o = String.fromCharCode(t),
                a = /[^\x00-\x1F]/.test(o),
                c = d.KEY_CODES.BACK_KEY,
                l = d.KEY_CODES.DELETE_KEY,
                h = d.KEY_CODES.ENTER_KEY,
                u = d.KEY_CODES.A_KEY,
                p = d.KEY_CODES.ESC_KEY,
                f = d.KEY_CODES.UP_KEY,
                m = d.KEY_CODES.DOWN_KEY,
                v = d.KEY_CODES.PAGE_UP_KEY,
                g = d.KEY_CODES.PAGE_DOWN_KEY;
              switch (this._isTextElement || r || !a || (this.showDropdown(), this.input.isFocussed || (this.input.value += e.key.toLowerCase())), t) {
                case u:
                  return this._onSelectKey(e, s);
                case h:
                  return this._onEnterKey(e, i, r);
                case p:
                  return this._onEscapeKey(r);
                case f:
                case v:
                case m:
                case g:
                  return this._onDirectionKey(e, r);
                case l:
                case c:
                  return this._onDeleteKey(e, i, n);
              }
            }, e.prototype._onKeyUp = function (e) {
              var t = e.target,
                i = e.keyCode,
                n = this.input.value,
                r = this._store.activeItems,
                s = this._canAddItem(r, n),
                o = d.KEY_CODES.BACK_KEY,
                c = d.KEY_CODES.DELETE_KEY;
              if (this._isTextElement) {
                if (s.notice && n) {
                  var l = this._getTemplate("notice", s.notice);
                  this.dropdown.element.innerHTML = l.outerHTML, this.showDropdown(!0);
                } else this.hideDropdown(!0);
              } else {
                var h = (i === o || i === c) && t && !t.value,
                  u = !this._isTextElement && this._isSearching,
                  p = this._canSearch && s.response;
                h && u ? (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))) : p && this._handleSearch(this.input.rawValue);
              }
              this._canSearch = this.config.searchEnabled;
            }, e.prototype._onSelectKey = function (e, t) {
              var i = e.ctrlKey,
                n = e.metaKey;
              (i || n) && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll());
            }, e.prototype._onEnterKey = function (e, t, i) {
              var n = e.target,
                r = d.KEY_CODES.ENTER_KEY,
                s = n && n.hasAttribute("data-button");
              if (this._isTextElement && n && n.value) {
                var o = this.input.value;
                this._canAddItem(t, o).response && (this.hideDropdown(!0), this._addItem({
                  value: o
                }), this._triggerChange(o), this.clearInput());
              }
              if (s && (this._handleButtonAction(t, n), e.preventDefault()), i) {
                var a = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                a && (t[0] && (t[0].keyCode = r), this._handleChoiceAction(t, a)), e.preventDefault();
              } else this._isSelectOneElement && (this.showDropdown(), e.preventDefault());
            }, e.prototype._onEscapeKey = function (e) {
              e && (this.hideDropdown(!0), this.containerOuter.focus());
            }, e.prototype._onDirectionKey = function (e, t) {
              var i = e.keyCode,
                n = e.metaKey,
                r = d.KEY_CODES.DOWN_KEY,
                s = d.KEY_CODES.PAGE_UP_KEY,
                o = d.KEY_CODES.PAGE_DOWN_KEY;
              if (t || this._isSelectOneElement) {
                this.showDropdown(), this._canSearch = !1;
                var a = i === r || i === o ? 1 : -1,
                  c = "[data-choice-selectable]",
                  l = void 0;
                if (n || i === o || i === s) l = a > 0 ? this.dropdown.element.querySelector("".concat(c, ":last-of-type")) : this.dropdown.element.querySelector(c);else {
                  var h = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                  l = h ? (0, f.getAdjacentEl)(h, c, a) : this.dropdown.element.querySelector(c);
                }
                l && ((0, f.isScrolledIntoView)(l, this.choiceList.element, a) || this.choiceList.scrollToChildElement(l, a), this._highlightChoice(l)), e.preventDefault();
              }
            }, e.prototype._onDeleteKey = function (e, t, i) {
              var n = e.target;
              this._isSelectOneElement || n.value || !i || (this._handleBackspace(t), e.preventDefault());
            }, e.prototype._onTouchMove = function () {
              this._wasTap && (this._wasTap = !1);
            }, e.prototype._onTouchEnd = function (e) {
              var t = (e || e.touches[0]).target;
              this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation()), this._wasTap = !0;
            }, e.prototype._onMouseDown = function (e) {
              var t = e.target;
              if (t instanceof HTMLElement) {
                if (_ && this.choiceList.element.contains(t)) {
                  var i = this.choiceList.element.firstElementChild,
                    n = "ltr" === this._direction ? e.offsetX >= i.offsetWidth : e.offsetX < i.offsetLeft;
                  this._isScrollingOnIe = n;
                }
                if (t !== this.input.element) {
                  var r = t.closest("[data-button],[data-item],[data-choice]");
                  if (r instanceof HTMLElement) {
                    var s = e.shiftKey,
                      o = this._store.activeItems,
                      a = r.dataset;
                    "button" in a ? this._handleButtonAction(o, r) : "item" in a ? this._handleItemAction(o, r, s) : "choice" in a && this._handleChoiceAction(o, r);
                  }
                  e.preventDefault();
                }
              }
            }, e.prototype._onMouseOver = function (e) {
              var t = e.target;
              t instanceof HTMLElement && "choice" in t.dataset && this._highlightChoice(t);
            }, e.prototype._onClick = function (e) {
              var t = e.target;
              this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0));
            }, e.prototype._onFocus = function (e) {
              var t,
                i = this,
                n = e.target;
              n && this.containerOuter.element.contains(n) && ((t = {})[d.TEXT_TYPE] = function () {
                n === i.input.element && i.containerOuter.addFocusState();
              }, t[d.SELECT_ONE_TYPE] = function () {
                i.containerOuter.addFocusState(), n === i.input.element && i.showDropdown(!0);
              }, t[d.SELECT_MULTIPLE_TYPE] = function () {
                n === i.input.element && (i.showDropdown(!0), i.containerOuter.addFocusState());
              }, t)[this.passedElement.element.type]();
            }, e.prototype._onBlur = function (e) {
              var t,
                i = this,
                n = e.target;
              if (n && this.containerOuter.element.contains(n) && !this._isScrollingOnIe) {
                var r = this._store.activeItems.some(function (e) {
                  return e.highlighted;
                });
                ((t = {})[d.TEXT_TYPE] = function () {
                  n === i.input.element && (i.containerOuter.removeFocusState(), r && i.unhighlightAll(), i.hideDropdown(!0));
                }, t[d.SELECT_ONE_TYPE] = function () {
                  i.containerOuter.removeFocusState(), (n === i.input.element || n === i.containerOuter.element && !i._canSearch) && i.hideDropdown(!0);
                }, t[d.SELECT_MULTIPLE_TYPE] = function () {
                  n === i.input.element && (i.containerOuter.removeFocusState(), i.hideDropdown(!0), r && i.unhighlightAll());
                }, t)[this.passedElement.element.type]();
              } else this._isScrollingOnIe = !1, this.input.element.focus();
            }, e.prototype._onFormReset = function () {
              this._store.dispatch((0, h.resetTo)(this._initialState));
            }, e.prototype._highlightChoice = function (e) {
              var t = this;
              void 0 === e && (e = null);
              var i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
              if (i.length) {
                var n = e;
                Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach(function (e) {
                  e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false");
                }), n ? this._highlightPosition = i.indexOf(n) : (n = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (n = i[0]), n.classList.add(this.config.classNames.highlightedState), n.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(d.EVENTS.highlightChoice, {
                  el: n
                }), this.dropdown.isActive && (this.input.setActiveDescendant(n.id), this.containerOuter.setActiveDescendant(n.id));
              }
            }, e.prototype._addItem = function (e) {
              var t = e.value,
                i = e.label,
                n = void 0 === i ? null : i,
                r = e.choiceId,
                s = void 0 === r ? -1 : r,
                o = e.groupId,
                a = void 0 === o ? -1 : o,
                c = e.customProperties,
                h = void 0 === c ? {} : c,
                u = e.placeholder,
                p = void 0 !== u && u,
                f = e.keyCode,
                m = void 0 === f ? -1 : f,
                v = "string" == typeof t ? t.trim() : t,
                g = this._store.items,
                _ = n || v,
                y = s || -1,
                E = a >= 0 ? this._store.getGroupById(a) : null,
                b = g ? g.length + 1 : 1;
              this.config.prependValue && (v = this.config.prependValue + v.toString()), this.config.appendValue && (v += this.config.appendValue.toString()), this._store.dispatch((0, l.addItem)({
                value: v,
                label: _,
                id: b,
                choiceId: y,
                groupId: a,
                customProperties: h,
                placeholder: p,
                keyCode: m
              })), this._isSelectOneElement && this.removeActiveItems(b), this.passedElement.triggerEvent(d.EVENTS.addItem, {
                id: b,
                value: v,
                label: _,
                customProperties: h,
                groupValue: E && E.value ? E.value : null,
                keyCode: m
              });
            }, e.prototype._removeItem = function (e) {
              var t = e.id,
                i = e.value,
                n = e.label,
                r = e.customProperties,
                s = e.choiceId,
                o = e.groupId,
                a = o && o >= 0 ? this._store.getGroupById(o) : null;
              t && s && (this._store.dispatch((0, l.removeItem)(t, s)), this.passedElement.triggerEvent(d.EVENTS.removeItem, {
                id: t,
                value: i,
                label: n,
                customProperties: r,
                groupValue: a && a.value ? a.value : null
              }));
            }, e.prototype._addChoice = function (e) {
              var t = e.value,
                i = e.label,
                n = void 0 === i ? null : i,
                r = e.isSelected,
                s = void 0 !== r && r,
                o = e.isDisabled,
                c = void 0 !== o && o,
                l = e.groupId,
                h = void 0 === l ? -1 : l,
                u = e.customProperties,
                d = void 0 === u ? {} : u,
                p = e.placeholder,
                f = void 0 !== p && p,
                m = e.keyCode,
                v = void 0 === m ? -1 : m;
              if (null != t) {
                var g = this._store.choices,
                  _ = n || t,
                  y = g ? g.length + 1 : 1,
                  E = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(y);
                this._store.dispatch((0, a.addChoice)({
                  id: y,
                  groupId: h,
                  elementId: E,
                  value: t,
                  label: _,
                  disabled: c,
                  customProperties: d,
                  placeholder: f,
                  keyCode: v
                })), s && this._addItem({
                  value: t,
                  label: _,
                  choiceId: y,
                  customProperties: d,
                  placeholder: f,
                  keyCode: v
                });
              }
            }, e.prototype._addGroup = function (e) {
              var t = this,
                i = e.group,
                n = e.id,
                r = e.valueKey,
                s = void 0 === r ? "value" : r,
                o = e.labelKey,
                a = void 0 === o ? "label" : o,
                l = (0, f.isType)("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")),
                h = n || Math.floor(new Date().valueOf() * Math.random()),
                u = !!i.disabled && i.disabled;
              l ? (this._store.dispatch((0, c.addGroup)({
                value: i.label,
                id: h,
                active: !0,
                disabled: u
              })), l.forEach(function (e) {
                var i = e.disabled || e.parentNode && e.parentNode.disabled;
                t._addChoice({
                  value: e[s],
                  label: (0, f.isType)("Object", e) ? e[a] : e.innerHTML,
                  isSelected: e.selected,
                  isDisabled: i,
                  groupId: h,
                  customProperties: e.customProperties,
                  placeholder: e.placeholder
                });
              })) : this._store.dispatch((0, c.addGroup)({
                value: i.label,
                id: i.id,
                active: !1,
                disabled: i.disabled
              }));
            }, e.prototype._getTemplate = function (e) {
              for (var t, i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
              return (t = this._templates[e]).call.apply(t, n([this, this.config], i, !1));
            }, e.prototype._createTemplates = function () {
              var e = this.config.callbackOnCreateTemplates,
                t = {};
              e && "function" == typeof e && (t = e.call(this, f.strToEl)), this._templates = (0, s["default"])(g["default"], t);
            }, e.prototype._createElements = function () {
              this.containerOuter = new u.Container({
                element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                position: this.config.position
              }), this.containerInner = new u.Container({
                element: this._getTemplate("containerInner"),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                position: this.config.position
              }), this.input = new u.Input({
                element: this._getTemplate("input", this._placeholderValue),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                preventPaste: !this.config.paste
              }), this.choiceList = new u.List({
                element: this._getTemplate("choiceList", this._isSelectOneElement)
              }), this.itemList = new u.List({
                element: this._getTemplate("itemList", this._isSelectOneElement)
              }), this.dropdown = new u.Dropdown({
                element: this._getTemplate("dropdown"),
                classNames: this.config.classNames,
                type: this.passedElement.element.type
              });
            }, e.prototype._createStructure = function () {
              this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth()), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement && (this._highlightPosition = 0, this._isSearching = !1, this._startLoading(), this._presetGroups.length ? this._addPredefinedGroups(this._presetGroups) : this._addPredefinedChoices(this._presetChoices), this._stopLoading()), this._isTextElement && this._addPredefinedItems(this._presetItems);
            }, e.prototype._addPredefinedGroups = function (e) {
              var t = this,
                i = this.passedElement.placeholderOption;
              i && i.parentNode && "SELECT" === i.parentNode.tagName && this._addChoice({
                value: i.value,
                label: i.innerHTML,
                isSelected: i.selected,
                isDisabled: i.disabled,
                placeholder: !0
              }), e.forEach(function (e) {
                return t._addGroup({
                  group: e,
                  id: e.id || null
                });
              });
            }, e.prototype._addPredefinedChoices = function (e) {
              var t = this;
              this.config.shouldSort && e.sort(this.config.sorter);
              var i = e.some(function (e) {
                  return e.selected;
                }),
                n = e.findIndex(function (e) {
                  return void 0 === e.disabled || !e.disabled;
                });
              e.forEach(function (e, r) {
                var s = e.value,
                  o = void 0 === s ? "" : s,
                  a = e.label,
                  c = e.customProperties,
                  l = e.placeholder;
                if (t._isSelectElement) {
                  if (e.choices) t._addGroup({
                    group: e,
                    id: e.id || null
                  });else {
                    var h = !(!t._isSelectOneElement || i || r !== n) || e.selected,
                      u = e.disabled;
                    t._addChoice({
                      value: o,
                      label: a,
                      isSelected: !!h,
                      isDisabled: !!u,
                      placeholder: !!l,
                      customProperties: c
                    });
                  }
                } else t._addChoice({
                  value: o,
                  label: a,
                  isSelected: !!e.selected,
                  isDisabled: !!e.disabled,
                  placeholder: !!e.placeholder,
                  customProperties: c
                });
              });
            }, e.prototype._addPredefinedItems = function (e) {
              var t = this;
              e.forEach(function (e) {
                "object" == _typeof(e) && e.value && t._addItem({
                  value: e.value,
                  label: e.label,
                  choiceId: e.id,
                  customProperties: e.customProperties,
                  placeholder: e.placeholder
                }), "string" == typeof e && t._addItem({
                  value: e
                });
              });
            }, e.prototype._setChoiceOrItem = function (e) {
              var t = this;
              ({
                object: function object() {
                  e.value && (t._isTextElement ? t._addItem({
                    value: e.value,
                    label: e.label,
                    choiceId: e.id,
                    customProperties: e.customProperties,
                    placeholder: e.placeholder
                  }) : t._addChoice({
                    value: e.value,
                    label: e.label,
                    isSelected: !0,
                    isDisabled: !1,
                    customProperties: e.customProperties,
                    placeholder: e.placeholder
                  }));
                },
                string: function string() {
                  t._isTextElement ? t._addItem({
                    value: e
                  }) : t._addChoice({
                    value: e,
                    label: e,
                    isSelected: !0,
                    isDisabled: !1
                  });
                }
              })[(0, f.getType)(e).toLowerCase()]();
            }, e.prototype._findAndSelectChoiceByValue = function (e) {
              var t = this,
                i = this._store.choices.find(function (i) {
                  return t.config.valueComparer(i.value, e);
                });
              i && !i.selected && this._addItem({
                value: i.value,
                label: i.label,
                choiceId: i.id,
                groupId: i.groupId,
                customProperties: i.customProperties,
                placeholder: i.placeholder,
                keyCode: i.keyCode
              });
            }, e.prototype._generatePlaceholderValue = function () {
              if (this._isSelectElement && this.passedElement.placeholderOption) {
                var e = this.passedElement.placeholderOption;
                return e ? e.text : null;
              }
              var t = this.config,
                i = t.placeholder,
                n = t.placeholderValue,
                r = this.passedElement.element.dataset;
              if (i) {
                if (n) return n;
                if (r.placeholder) return r.placeholder;
              }
              return null;
            }, e;
          }();
        t["default"] = E;
      },
      613: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(799),
          r = i(883),
          s = function () {
            function e(e) {
              var t = e.element,
                i = e.type,
                n = e.classNames,
                r = e.position;
              this.element = t, this.classNames = n, this.type = i, this.position = r, this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
            }
            return e.prototype.addEventListeners = function () {
              this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur);
            }, e.prototype.removeEventListeners = function () {
              this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
            }, e.prototype.shouldFlip = function (e) {
              if ("number" != typeof e) return !1;
              var t = !1;
              return "auto" === this.position ? t = !window.matchMedia("(min-height: ".concat(e + 1, "px)")).matches : "top" === this.position && (t = !0), t;
            }, e.prototype.setActiveDescendant = function (e) {
              this.element.setAttribute("aria-activedescendant", e);
            }, e.prototype.removeActiveDescendant = function () {
              this.element.removeAttribute("aria-activedescendant");
            }, e.prototype.open = function (e) {
              this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0);
            }, e.prototype.close = function () {
              this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1);
            }, e.prototype.focus = function () {
              this.isFocussed || this.element.focus();
            }, e.prototype.addFocusState = function () {
              this.element.classList.add(this.classNames.focusState);
            }, e.prototype.removeFocusState = function () {
              this.element.classList.remove(this.classNames.focusState);
            }, e.prototype.enable = function () {
              this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), this.type === r.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1;
            }, e.prototype.disable = function () {
              this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), this.type === r.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0;
            }, e.prototype.wrap = function (e) {
              (0, n.wrap)(e, this.element);
            }, e.prototype.unwrap = function (e) {
              this.element.parentNode && (this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element));
            }, e.prototype.addLoadingState = function () {
              this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0;
            }, e.prototype.removeLoadingState = function () {
              this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1;
            }, e.prototype._onFocus = function () {
              this.isFocussed = !0;
            }, e.prototype._onBlur = function () {
              this.isFocussed = !1;
            }, e;
          }();
        t["default"] = s;
      },
      217: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var i = function () {
          function e(e) {
            var t = e.element,
              i = e.type,
              n = e.classNames;
            this.element = t, this.classNames = n, this.type = i, this.isActive = !1;
          }
          return Object.defineProperty(e.prototype, "distanceFromTopWindow", {
            get: function get() {
              return this.element.getBoundingClientRect().bottom;
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.getChild = function (e) {
            return this.element.querySelector(e);
          }, e.prototype.show = function () {
            return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this;
          }, e.prototype.hide = function () {
            return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this;
          }, e;
        }();
        t["default"] = i;
      },
      520: function _(e, t, i) {
        var n = this && this.__importDefault || function (e) {
          return e && e.__esModule ? e : {
            "default": e
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.WrappedSelect = t.WrappedInput = t.List = t.Input = t.Container = t.Dropdown = void 0;
        var r = n(i(217));
        t.Dropdown = r["default"];
        var s = n(i(613));
        t.Container = s["default"];
        var o = n(i(11));
        t.Input = o["default"];
        var a = n(i(624));
        t.List = a["default"];
        var c = n(i(541));
        t.WrappedInput = c["default"];
        var l = n(i(982));
        t.WrappedSelect = l["default"];
      },
      11: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(799),
          r = i(883),
          s = function () {
            function e(e) {
              var t = e.element,
                i = e.type,
                n = e.classNames,
                r = e.preventPaste;
              this.element = t, this.type = i, this.classNames = n, this.preventPaste = r, this.isFocussed = this.element.isEqualNode(document.activeElement), this.isDisabled = t.disabled, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
            }
            return Object.defineProperty(e.prototype, "placeholder", {
              set: function set(e) {
                this.element.placeholder = e;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "value", {
              get: function get() {
                return (0, n.sanitise)(this.element.value);
              },
              set: function set(e) {
                this.element.value = e;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "rawValue", {
              get: function get() {
                return this.element.value;
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.addEventListeners = function () {
              this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("input", this._onInput, {
                passive: !0
              }), this.element.addEventListener("focus", this._onFocus, {
                passive: !0
              }), this.element.addEventListener("blur", this._onBlur, {
                passive: !0
              });
            }, e.prototype.removeEventListeners = function () {
              this.element.removeEventListener("input", this._onInput), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
            }, e.prototype.enable = function () {
              this.element.removeAttribute("disabled"), this.isDisabled = !1;
            }, e.prototype.disable = function () {
              this.element.setAttribute("disabled", ""), this.isDisabled = !0;
            }, e.prototype.focus = function () {
              this.isFocussed || this.element.focus();
            }, e.prototype.blur = function () {
              this.isFocussed && this.element.blur();
            }, e.prototype.clear = function (e) {
              return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this;
            }, e.prototype.setWidth = function () {
              var e = this.element,
                t = e.style,
                i = e.value,
                n = e.placeholder;
              t.minWidth = "".concat(n.length + 1, "ch"), t.width = "".concat(i.length + 1, "ch");
            }, e.prototype.setActiveDescendant = function (e) {
              this.element.setAttribute("aria-activedescendant", e);
            }, e.prototype.removeActiveDescendant = function () {
              this.element.removeAttribute("aria-activedescendant");
            }, e.prototype._onInput = function () {
              this.type !== r.SELECT_ONE_TYPE && this.setWidth();
            }, e.prototype._onPaste = function (e) {
              this.preventPaste && e.preventDefault();
            }, e.prototype._onFocus = function () {
              this.isFocussed = !0;
            }, e.prototype._onBlur = function () {
              this.isFocussed = !1;
            }, e;
          }();
        t["default"] = s;
      },
      624: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(883),
          r = function () {
            function e(e) {
              var t = e.element;
              this.element = t, this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight;
            }
            return e.prototype.clear = function () {
              this.element.innerHTML = "";
            }, e.prototype.append = function (e) {
              this.element.appendChild(e);
            }, e.prototype.getChild = function (e) {
              return this.element.querySelector(e);
            }, e.prototype.hasChildren = function () {
              return this.element.hasChildNodes();
            }, e.prototype.scrollToTop = function () {
              this.element.scrollTop = 0;
            }, e.prototype.scrollToChildElement = function (e, t) {
              var i = this;
              if (e) {
                var n = this.element.offsetHeight,
                  r = this.element.scrollTop + n,
                  s = e.offsetHeight,
                  o = e.offsetTop + s,
                  a = t > 0 ? this.element.scrollTop + o - r : e.offsetTop;
                requestAnimationFrame(function () {
                  i._animateScroll(a, t);
                });
              }
            }, e.prototype._scrollDown = function (e, t, i) {
              var n = (i - e) / t,
                r = n > 1 ? n : 1;
              this.element.scrollTop = e + r;
            }, e.prototype._scrollUp = function (e, t, i) {
              var n = (e - i) / t,
                r = n > 1 ? n : 1;
              this.element.scrollTop = e - r;
            }, e.prototype._animateScroll = function (e, t) {
              var i = this,
                r = n.SCROLLING_SPEED,
                s = this.element.scrollTop,
                o = !1;
              t > 0 ? (this._scrollDown(s, r, e), s < e && (o = !0)) : (this._scrollUp(s, r, e), s > e && (o = !0)), o && requestAnimationFrame(function () {
                i._animateScroll(e, t);
              });
            }, e;
          }();
        t["default"] = r;
      },
      730: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(799),
          r = function () {
            function e(e) {
              var t = e.element,
                i = e.classNames;
              if (this.element = t, this.classNames = i, !(t instanceof HTMLInputElement || t instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
              this.isDisabled = !1;
            }
            return Object.defineProperty(e.prototype, "isActive", {
              get: function get() {
                return "active" === this.element.dataset.choice;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "dir", {
              get: function get() {
                return this.element.dir;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "value", {
              get: function get() {
                return this.element.value;
              },
              set: function set(e) {
                this.element.value = e;
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.conceal = function () {
              this.element.classList.add(this.classNames.input), this.element.hidden = !0, this.element.tabIndex = -1;
              var e = this.element.getAttribute("style");
              e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("data-choice", "active");
            }, e.prototype.reveal = function () {
              this.element.classList.remove(this.classNames.input), this.element.hidden = !1, this.element.removeAttribute("tabindex");
              var e = this.element.getAttribute("data-choice-orig-style");
              e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value;
            }, e.prototype.enable = function () {
              this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1;
            }, e.prototype.disable = function () {
              this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0;
            }, e.prototype.triggerEvent = function (e, t) {
              (0, n.dispatchEvent)(this.element, e, t);
            }, e;
          }();
        t["default"] = r;
      },
      541: function _(e, t, i) {
        var _n,
          r = this && this.__extends || (_n = function n(e, t) {
            return _n = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }, _n(e, t);
          }, function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function i() {
              this.constructor = e;
            }
            _n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
          }),
          s = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              "default": e
            };
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var o = function (e) {
          function t(t) {
            var i = t.element,
              n = t.classNames,
              r = t.delimiter,
              s = e.call(this, {
                element: i,
                classNames: n
              }) || this;
            return s.delimiter = r, s;
          }
          return r(t, e), Object.defineProperty(t.prototype, "value", {
            get: function get() {
              return this.element.value;
            },
            set: function set(e) {
              this.element.setAttribute("value", e), this.element.value = e;
            },
            enumerable: !1,
            configurable: !0
          }), t;
        }(s(i(730))["default"]);
        t["default"] = o;
      },
      982: function _(e, t, i) {
        var _n2,
          r = this && this.__extends || (_n2 = function n(e, t) {
            return _n2 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }, _n2(e, t);
          }, function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function i() {
              this.constructor = e;
            }
            _n2(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
          }),
          s = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              "default": e
            };
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var o = function (e) {
          function t(t) {
            var i = t.element,
              n = t.classNames,
              r = t.template,
              s = e.call(this, {
                element: i,
                classNames: n
              }) || this;
            return s.template = r, s;
          }
          return r(t, e), Object.defineProperty(t.prototype, "placeholderOption", {
            get: function get() {
              return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "optionGroups", {
            get: function get() {
              return Array.from(this.element.getElementsByTagName("OPTGROUP"));
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "options", {
            get: function get() {
              return Array.from(this.element.options);
            },
            set: function set(e) {
              var t = this,
                i = document.createDocumentFragment();
              e.forEach(function (e) {
                return n = e, r = t.template(n), void i.appendChild(r);
                var n, r;
              }), this.appendDocFragment(i);
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.appendDocFragment = function (e) {
            this.element.innerHTML = "", this.element.appendChild(e);
          }, t;
        }(s(i(730))["default"]);
        t["default"] = o;
      },
      883: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.SCROLLING_SPEED = t.SELECT_MULTIPLE_TYPE = t.SELECT_ONE_TYPE = t.TEXT_TYPE = t.KEY_CODES = t.ACTION_TYPES = t.EVENTS = void 0, t.EVENTS = {
          showDropdown: "showDropdown",
          hideDropdown: "hideDropdown",
          change: "change",
          choice: "choice",
          search: "search",
          addItem: "addItem",
          removeItem: "removeItem",
          highlightItem: "highlightItem",
          highlightChoice: "highlightChoice",
          unhighlightItem: "unhighlightItem"
        }, t.ACTION_TYPES = {
          ADD_CHOICE: "ADD_CHOICE",
          FILTER_CHOICES: "FILTER_CHOICES",
          ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
          CLEAR_CHOICES: "CLEAR_CHOICES",
          ADD_GROUP: "ADD_GROUP",
          ADD_ITEM: "ADD_ITEM",
          REMOVE_ITEM: "REMOVE_ITEM",
          HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
          CLEAR_ALL: "CLEAR_ALL",
          RESET_TO: "RESET_TO",
          SET_IS_LOADING: "SET_IS_LOADING"
        }, t.KEY_CODES = {
          BACK_KEY: 46,
          DELETE_KEY: 8,
          ENTER_KEY: 13,
          A_KEY: 65,
          ESC_KEY: 27,
          UP_KEY: 38,
          DOWN_KEY: 40,
          PAGE_UP_KEY: 33,
          PAGE_DOWN_KEY: 34
        }, t.TEXT_TYPE = "text", t.SELECT_ONE_TYPE = "select-one", t.SELECT_MULTIPLE_TYPE = "select-multiple", t.SCROLLING_SPEED = 4;
      },
      789: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.DEFAULT_CONFIG = t.DEFAULT_CLASSNAMES = void 0;
        var n = i(799);
        t.DEFAULT_CLASSNAMES = {
          containerOuter: "choices",
          containerInner: "choices__inner",
          input: "choices__input",
          inputCloned: "choices__input--cloned",
          list: "choices__list",
          listItems: "choices__list--multiple",
          listSingle: "choices__list--single",
          listDropdown: "choices__list--dropdown",
          item: "choices__item",
          itemSelectable: "choices__item--selectable",
          itemDisabled: "choices__item--disabled",
          itemChoice: "choices__item--choice",
          placeholder: "choices__placeholder",
          group: "choices__group",
          groupHeading: "choices__heading",
          button: "choices__button",
          activeState: "is-active",
          focusState: "is-focused",
          openState: "is-open",
          disabledState: "is-disabled",
          highlightedState: "is-highlighted",
          selectedState: "is-selected",
          flippedState: "is-flipped",
          loadingState: "is-loading",
          noResults: "has-no-results",
          noChoices: "has-no-choices"
        }, t.DEFAULT_CONFIG = {
          items: [],
          choices: [],
          silent: !1,
          renderChoiceLimit: -1,
          maxItemCount: -1,
          addItems: !0,
          addItemFilter: null,
          removeItems: !0,
          removeItemButton: !1,
          editItems: !1,
          allowHTML: !0,
          duplicateItemsAllowed: !0,
          delimiter: ",",
          paste: !0,
          searchEnabled: !0,
          searchChoices: !0,
          searchFloor: 1,
          searchResultLimit: 4,
          searchFields: ["label", "value"],
          position: "auto",
          resetScrollPosition: !0,
          shouldSort: !0,
          shouldSortItems: !1,
          sorter: n.sortByAlpha,
          placeholder: !0,
          placeholderValue: null,
          searchPlaceholderValue: null,
          prependValue: null,
          appendValue: null,
          renderSelectedChoices: "auto",
          loadingText: "Loading...",
          noResultsText: "No results found",
          noChoicesText: "No choices to choose from",
          itemSelectText: "Press to select",
          uniqueItemText: "Only unique values can be added",
          customAddItemText: "Only values matching specific conditions can be added",
          addItemText: function addItemText(e) {
            return 'Press Enter to add <b>"'.concat((0, n.sanitise)(e), '"</b>');
          },
          maxItemText: function maxItemText(e) {
            return "Only ".concat(e, " values can be added");
          },
          valueComparer: function valueComparer(e, t) {
            return e === t;
          },
          fuseOptions: {
            includeScore: !0
          },
          labelId: "",
          callbackOnInit: null,
          callbackOnCreateTemplates: null,
          classNames: t.DEFAULT_CLASSNAMES
        };
      },
      18: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      978: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      948: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      359: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      285: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      533: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      187: function _(e, t, i) {
        var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
            void 0 === n && (n = i);
            var r = Object.getOwnPropertyDescriptor(t, i);
            r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
              enumerable: !0,
              get: function get() {
                return t[i];
              }
            }), Object.defineProperty(e, n, r);
          } : function (e, t, i, n) {
            void 0 === n && (n = i), e[n] = t[i];
          }),
          r = this && this.__exportStar || function (e, t) {
            for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i);
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), r(i(18), t), r(i(978), t), r(i(948), t), r(i(359), t), r(i(285), t), r(i(533), t), r(i(287), t), r(i(132), t), r(i(837), t), r(i(598), t), r(i(369), t), r(i(37), t), r(i(47), t), r(i(923), t), r(i(876), t);
      },
      287: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      132: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      837: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      598: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      37: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      369: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      47: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      923: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      876: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      799: function _(e, t) {
        var i;
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.parseCustomProperties = t.diff = t.cloneObject = t.existsInArray = t.dispatchEvent = t.sortByScore = t.sortByAlpha = t.strToEl = t.sanitise = t.isScrolledIntoView = t.getAdjacentEl = t.wrap = t.isType = t.getType = t.generateId = t.generateChars = t.getRandomNumber = void 0, t.getRandomNumber = function (e, t) {
          return Math.floor(Math.random() * (t - e) + e);
        }, t.generateChars = function (e) {
          return Array.from({
            length: e
          }, function () {
            return (0, t.getRandomNumber)(0, 36).toString(36);
          }).join("");
        }, t.generateId = function (e, i) {
          var n = e.id || e.name && "".concat(e.name, "-").concat((0, t.generateChars)(2)) || (0, t.generateChars)(4);
          return n = n.replace(/(:|\.|\[|\]|,)/g, ""), "".concat(i, "-").concat(n);
        }, t.getType = function (e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        }, t.isType = function (e, i) {
          return null != i && (0, t.getType)(i) === e;
        }, t.wrap = function (e, t) {
          return void 0 === t && (t = document.createElement("div")), e.parentNode && (e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)), t.appendChild(e);
        }, t.getAdjacentEl = function (e, t, i) {
          void 0 === i && (i = 1);
          for (var n = "".concat(i > 0 ? "next" : "previous", "ElementSibling"), r = e[n]; r;) {
            if (r.matches(t)) return r;
            r = r[n];
          }
          return r;
        }, t.isScrolledIntoView = function (e, t, i) {
          return void 0 === i && (i = 1), !!e && (i > 0 ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight : e.offsetTop >= t.scrollTop);
        }, t.sanitise = function (e) {
          return "string" != typeof e ? e : e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
        }, t.strToEl = (i = document.createElement("div"), function (e) {
          var t = e.trim();
          i.innerHTML = t;
          for (var n = i.children[0]; i.firstChild;) i.removeChild(i.firstChild);
          return n;
        }), t.sortByAlpha = function (e, t) {
          var i = e.value,
            n = e.label,
            r = void 0 === n ? i : n,
            s = t.value,
            o = t.label,
            a = void 0 === o ? s : o;
          return r.localeCompare(a, [], {
            sensitivity: "base",
            ignorePunctuation: !0,
            numeric: !0
          });
        }, t.sortByScore = function (e, t) {
          var i = e.score,
            n = void 0 === i ? 0 : i,
            r = t.score;
          return n - (void 0 === r ? 0 : r);
        }, t.dispatchEvent = function (e, t, i) {
          void 0 === i && (i = null);
          var n = new CustomEvent(t, {
            detail: i,
            bubbles: !0,
            cancelable: !0
          });
          return e.dispatchEvent(n);
        }, t.existsInArray = function (e, t, i) {
          return void 0 === i && (i = "value"), e.some(function (e) {
            return "string" == typeof t ? e[i] === t.trim() : e[i] === t;
          });
        }, t.cloneObject = function (e) {
          return JSON.parse(JSON.stringify(e));
        }, t.diff = function (e, t) {
          var i = Object.keys(e).sort(),
            n = Object.keys(t).sort();
          return i.filter(function (e) {
            return n.indexOf(e) < 0;
          });
        }, t.parseCustomProperties = function (e) {
          if (void 0 !== e) try {
            return JSON.parse(e);
          } catch (t) {
            return e;
          }
          return {};
        };
      },
      273: function _(e, t) {
        var i = this && this.__spreadArray || function (e, t, i) {
          if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
          return e.concat(n || Array.prototype.slice.call(t));
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0, t.defaultState = [], t["default"] = function (e, n) {
          switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
            case "ADD_CHOICE":
              var r = n,
                s = {
                  id: r.id,
                  elementId: r.elementId,
                  groupId: r.groupId,
                  value: r.value,
                  label: r.label || r.value,
                  disabled: r.disabled || !1,
                  selected: !1,
                  active: !0,
                  score: 9999,
                  customProperties: r.customProperties,
                  placeholder: r.placeholder || !1
                };
              return i(i([], e, !0), [s], !1);
            case "ADD_ITEM":
              var o = n;
              return o.choiceId > -1 ? e.map(function (e) {
                var t = e;
                return t.id === parseInt("".concat(o.choiceId), 10) && (t.selected = !0), t;
              }) : e;
            case "REMOVE_ITEM":
              var a = n;
              return a.choiceId && a.choiceId > -1 ? e.map(function (e) {
                var t = e;
                return t.id === parseInt("".concat(a.choiceId), 10) && (t.selected = !1), t;
              }) : e;
            case "FILTER_CHOICES":
              var c = n;
              return e.map(function (e) {
                var t = e;
                return t.active = c.results.some(function (e) {
                  var i = e.item,
                    n = e.score;
                  return i.id === t.id && (t.score = n, !0);
                }), t;
              });
            case "ACTIVATE_CHOICES":
              var l = n;
              return e.map(function (e) {
                var t = e;
                return t.active = l.active, t;
              });
            case "CLEAR_CHOICES":
              return t.defaultState;
            default:
              return e;
          }
        };
      },
      871: function _(e, t) {
        var i = this && this.__spreadArray || function (e, t, i) {
          if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
          return e.concat(n || Array.prototype.slice.call(t));
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0, t.defaultState = [], t["default"] = function (e, n) {
          switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
            case "ADD_GROUP":
              var r = n;
              return i(i([], e, !0), [{
                id: r.id,
                value: r.value,
                active: r.active,
                disabled: r.disabled
              }], !1);
            case "CLEAR_CHOICES":
              return [];
            default:
              return e;
          }
        };
      },
      655: function _(e, t, i) {
        var n = this && this.__importDefault || function (e) {
          return e && e.__esModule ? e : {
            "default": e
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0;
        var r = i(791),
          s = n(i(52)),
          o = n(i(871)),
          a = n(i(273)),
          c = n(i(502)),
          l = i(799);
        t.defaultState = {
          groups: [],
          items: [],
          choices: [],
          loading: !1
        };
        var h = (0, r.combineReducers)({
          items: s["default"],
          groups: o["default"],
          choices: a["default"],
          loading: c["default"]
        });
        t["default"] = function (e, i) {
          var n = e;
          if ("CLEAR_ALL" === i.type) n = t.defaultState;else if ("RESET_TO" === i.type) return (0, l.cloneObject)(i.state);
          return h(n, i);
        };
      },
      52: function _(e, t) {
        var i = this && this.__spreadArray || function (e, t, i) {
          if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
          return e.concat(n || Array.prototype.slice.call(t));
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0, t.defaultState = [], t["default"] = function (e, n) {
          switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
            case "ADD_ITEM":
              var r = n;
              return i(i([], e, !0), [{
                id: r.id,
                choiceId: r.choiceId,
                groupId: r.groupId,
                value: r.value,
                label: r.label,
                active: !0,
                highlighted: !1,
                customProperties: r.customProperties,
                placeholder: r.placeholder || !1,
                keyCode: null
              }], !1).map(function (e) {
                var t = e;
                return t.highlighted = !1, t;
              });
            case "REMOVE_ITEM":
              return e.map(function (e) {
                var t = e;
                return t.id === n.id && (t.active = !1), t;
              });
            case "HIGHLIGHT_ITEM":
              var s = n;
              return e.map(function (e) {
                var t = e;
                return t.id === s.id && (t.highlighted = s.highlighted), t;
              });
            default:
              return e;
          }
        };
      },
      502: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0, t.defaultState = !1, t["default"] = function (e, i) {
          return void 0 === e && (e = t.defaultState), void 0 === i && (i = {}), "SET_IS_LOADING" === i.type ? i.isLoading : e;
        };
      },
      744: function _(e, t, i) {
        var n = this && this.__spreadArray || function (e, t, i) {
            if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
            return e.concat(n || Array.prototype.slice.call(t));
          },
          r = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              "default": e
            };
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var s = i(791),
          o = r(i(655)),
          a = function () {
            function e() {
              this._store = (0, s.createStore)(o["default"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
            }
            return e.prototype.subscribe = function (e) {
              this._store.subscribe(e);
            }, e.prototype.dispatch = function (e) {
              this._store.dispatch(e);
            }, Object.defineProperty(e.prototype, "state", {
              get: function get() {
                return this._store.getState();
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "items", {
              get: function get() {
                return this.state.items;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "activeItems", {
              get: function get() {
                return this.items.filter(function (e) {
                  return !0 === e.active;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "highlightedActiveItems", {
              get: function get() {
                return this.items.filter(function (e) {
                  return e.active && e.highlighted;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "choices", {
              get: function get() {
                return this.state.choices;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "activeChoices", {
              get: function get() {
                return this.choices.filter(function (e) {
                  return !0 === e.active;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "selectableChoices", {
              get: function get() {
                return this.choices.filter(function (e) {
                  return !0 !== e.disabled;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "searchableChoices", {
              get: function get() {
                return this.selectableChoices.filter(function (e) {
                  return !0 !== e.placeholder;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "placeholderChoice", {
              get: function get() {
                return n([], this.choices, !0).reverse().find(function (e) {
                  return !0 === e.placeholder;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "groups", {
              get: function get() {
                return this.state.groups;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "activeGroups", {
              get: function get() {
                var e = this.groups,
                  t = this.choices;
                return e.filter(function (e) {
                  var i = !0 === e.active && !1 === e.disabled,
                    n = t.some(function (e) {
                      return !0 === e.active && !1 === e.disabled;
                    });
                  return i && n;
                }, []);
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.isLoading = function () {
              return this.state.loading;
            }, e.prototype.getChoiceById = function (e) {
              return this.activeChoices.find(function (t) {
                return t.id === parseInt(e, 10);
              });
            }, e.prototype.getGroupById = function (e) {
              return this.groups.find(function (t) {
                return t.id === e;
              });
            }, e;
          }();
        t["default"] = a;
      },
      686: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var i = {
          containerOuter: function containerOuter(e, t, i, n, r, s, o) {
            var a = e.classNames.containerOuter,
              c = Object.assign(document.createElement("div"), {
                className: a
              });
            return c.dataset.type = s, t && (c.dir = t), n && (c.tabIndex = 0), i && (c.setAttribute("role", r ? "combobox" : "listbox"), r && c.setAttribute("aria-autocomplete", "list")), c.setAttribute("aria-haspopup", "true"), c.setAttribute("aria-expanded", "false"), o && c.setAttribute("aria-labelledby", o), c;
          },
          containerInner: function containerInner(e) {
            var t = e.classNames.containerInner;
            return Object.assign(document.createElement("div"), {
              className: t
            });
          },
          itemList: function itemList(e, t) {
            var i = e.classNames,
              n = i.list,
              r = i.listSingle,
              s = i.listItems;
            return Object.assign(document.createElement("div"), {
              className: "".concat(n, " ").concat(t ? r : s)
            });
          },
          placeholder: function placeholder(e, t) {
            var i,
              n = e.allowHTML,
              r = e.classNames.placeholder;
            return Object.assign(document.createElement("div"), ((i = {
              className: r
            })[n ? "innerHTML" : "innerText"] = t, i));
          },
          item: function item(e, t, i) {
            var n,
              r,
              s = e.allowHTML,
              o = e.classNames,
              a = o.item,
              c = o.button,
              l = o.highlightedState,
              h = o.itemSelectable,
              u = o.placeholder,
              d = t.id,
              p = t.value,
              f = t.label,
              m = t.customProperties,
              v = t.active,
              g = t.disabled,
              _ = t.highlighted,
              y = t.placeholder,
              E = Object.assign(document.createElement("div"), ((n = {
                className: a
              })[s ? "innerHTML" : "innerText"] = f, n));
            if (Object.assign(E.dataset, {
              item: "",
              id: d,
              value: p,
              customProperties: m
            }), v && E.setAttribute("aria-selected", "true"), g && E.setAttribute("aria-disabled", "true"), y && E.classList.add(u), E.classList.add(_ ? l : h), i) {
              g && E.classList.remove(h), E.dataset.deletable = "";
              var b = "Remove item",
                S = Object.assign(document.createElement("button"), ((r = {
                  type: "button",
                  className: c
                })[s ? "innerHTML" : "innerText"] = b, r));
              S.setAttribute("aria-label", "".concat(b, ": '").concat(p, "'")), S.dataset.button = "", E.appendChild(S);
            }
            return E;
          },
          choiceList: function choiceList(e, t) {
            var i = e.classNames.list,
              n = Object.assign(document.createElement("div"), {
                className: i
              });
            return t || n.setAttribute("aria-multiselectable", "true"), n.setAttribute("role", "listbox"), n;
          },
          choiceGroup: function choiceGroup(e, t) {
            var i,
              n = e.allowHTML,
              r = e.classNames,
              s = r.group,
              o = r.groupHeading,
              a = r.itemDisabled,
              c = t.id,
              l = t.value,
              h = t.disabled,
              u = Object.assign(document.createElement("div"), {
                className: "".concat(s, " ").concat(h ? a : "")
              });
            return u.setAttribute("role", "group"), Object.assign(u.dataset, {
              group: "",
              id: c,
              value: l
            }), h && u.setAttribute("aria-disabled", "true"), u.appendChild(Object.assign(document.createElement("div"), ((i = {
              className: o
            })[n ? "innerHTML" : "innerText"] = l, i))), u;
          },
          choice: function choice(e, t, i) {
            var n,
              r = e.allowHTML,
              s = e.classNames,
              o = s.item,
              a = s.itemChoice,
              c = s.itemSelectable,
              l = s.selectedState,
              h = s.itemDisabled,
              u = s.placeholder,
              d = t.id,
              p = t.value,
              f = t.label,
              m = t.groupId,
              v = t.elementId,
              g = t.disabled,
              _ = t.selected,
              y = t.placeholder,
              E = Object.assign(document.createElement("div"), ((n = {
                id: v
              })[r ? "innerHTML" : "innerText"] = f, n.className = "".concat(o, " ").concat(a), n));
            return _ && E.classList.add(l), y && E.classList.add(u), E.setAttribute("role", m && m > 0 ? "treeitem" : "option"), Object.assign(E.dataset, {
              choice: "",
              id: d,
              value: p,
              selectText: i
            }), g ? (E.classList.add(h), E.dataset.choiceDisabled = "", E.setAttribute("aria-disabled", "true")) : (E.classList.add(c), E.dataset.choiceSelectable = ""), E;
          },
          input: function input(e, t) {
            var i = e.classNames,
              n = i.input,
              r = i.inputCloned,
              s = Object.assign(document.createElement("input"), {
                type: "search",
                name: "search_terms",
                className: "".concat(n, " ").concat(r),
                autocomplete: "off",
                autocapitalize: "off",
                spellcheck: !1
              });
            return s.setAttribute("role", "textbox"), s.setAttribute("aria-autocomplete", "list"), s.setAttribute("aria-label", t), s;
          },
          dropdown: function dropdown(e) {
            var t = e.classNames,
              i = t.list,
              n = t.listDropdown,
              r = document.createElement("div");
            return r.classList.add(i, n), r.setAttribute("aria-expanded", "false"), r;
          },
          notice: function notice(e, t, i) {
            var n,
              r = e.allowHTML,
              s = e.classNames,
              o = s.item,
              a = s.itemChoice,
              c = s.noResults,
              l = s.noChoices;
            void 0 === i && (i = "");
            var h = [o, a];
            return "no-choices" === i ? h.push(l) : "no-results" === i && h.push(c), Object.assign(document.createElement("div"), ((n = {})[r ? "innerHTML" : "innerText"] = t, n.className = h.join(" "), n));
          },
          option: function option(e) {
            var t = e.label,
              i = e.value,
              n = e.customProperties,
              r = e.active,
              s = e.disabled,
              o = new Option(t, i, !1, r);
            return n && (o.dataset.customProperties = "".concat(n)), o.disabled = !!s, o;
          }
        };
        t["default"] = i;
      },
      996: function _(e) {
        var t = function t(e) {
            return function (e) {
              return !!e && "object" == _typeof(e);
            }(e) && !function (e) {
              var t = Object.prototype.toString.call(e);
              return "[object RegExp]" === t || "[object Date]" === t || function (e) {
                return e.$$typeof === i;
              }(e);
            }(e);
          },
          i = "function" == typeof Symbol && Symbol["for"] ? Symbol["for"]("react.element") : 60103;
        function n(e, t) {
          return !1 !== t.clone && t.isMergeableObject(e) ? a((i = e, Array.isArray(i) ? [] : {}), e, t) : e;
          var i;
        }
        function r(e, t, i) {
          return e.concat(t).map(function (e) {
            return n(e, i);
          });
        }
        function s(e) {
          return Object.keys(e).concat(function (e) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function (t) {
              return e.propertyIsEnumerable(t);
            }) : [];
          }(e));
        }
        function o(e, t) {
          try {
            return t in e;
          } catch (e) {
            return !1;
          }
        }
        function a(e, i, c) {
          (c = c || {}).arrayMerge = c.arrayMerge || r, c.isMergeableObject = c.isMergeableObject || t, c.cloneUnlessOtherwiseSpecified = n;
          var l = Array.isArray(i);
          return l === Array.isArray(e) ? l ? c.arrayMerge(e, i, c) : function (e, t, i) {
            var r = {};
            return i.isMergeableObject(e) && s(e).forEach(function (t) {
              r[t] = n(e[t], i);
            }), s(t).forEach(function (s) {
              (function (e, t) {
                return o(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
              })(e, s) || (o(e, s) && i.isMergeableObject(t[s]) ? r[s] = function (e, t) {
                if (!t.customMerge) return a;
                var i = t.customMerge(e);
                return "function" == typeof i ? i : a;
              }(s, i)(e[s], t[s], i) : r[s] = n(t[s], i));
            }), r;
          }(e, i, c) : n(i, c);
        }
        a.all = function (e, t) {
          if (!Array.isArray(e)) throw new Error("first argument should be an array");
          return e.reduce(function (e, i) {
            return a(e, i, t);
          }, {});
        };
        var c = a;
        e.exports = c;
      },
      221: function _(e, t, i) {
        function n(e) {
          return Array.isArray ? Array.isArray(e) : "[object Array]" === l(e);
        }
        function r(e) {
          return "string" == typeof e;
        }
        function s(e) {
          return "number" == typeof e;
        }
        function o(e) {
          return "object" == _typeof(e);
        }
        function a(e) {
          return null != e;
        }
        function c(e) {
          return !e.trim().length;
        }
        function l(e) {
          return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
        }
        i.r(t), i.d(t, {
          "default": function _default() {
            return R;
          }
        });
        var h = Object.prototype.hasOwnProperty;
        var u = /*#__PURE__*/function () {
          function u(e) {
            var _this = this;
            _classCallCheck(this, u);
            this._keys = [], this._keyMap = {};
            var t = 0;
            e.forEach(function (e) {
              var i = d(e);
              t += i.weight, _this._keys.push(i), _this._keyMap[i.id] = i, t += i.weight;
            }), this._keys.forEach(function (e) {
              e.weight /= t;
            });
          }
          _createClass(u, [{
            key: "get",
            value: function get(e) {
              return this._keyMap[e];
            }
          }, {
            key: "keys",
            value: function keys() {
              return this._keys;
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              return JSON.stringify(this._keys);
            }
          }]);
          return u;
        }();
        function d(e) {
          var t = null,
            i = null,
            s = null,
            o = 1,
            a = null;
          if (r(e) || n(e)) s = e, t = p(e), i = f(e);else {
            if (!h.call(e, "name")) throw new Error("Missing name property in key");
            var _n3 = e.name;
            if (s = _n3, h.call(e, "weight") && (o = e.weight, o <= 0)) throw new Error(function (e) {
              return "Property 'weight' in key '".concat(e, "' must be a positive integer");
            }(_n3));
            t = p(_n3), i = f(_n3), a = e.getFn;
          }
          return {
            path: t,
            id: i,
            weight: o,
            src: s,
            getFn: a
          };
        }
        function p(e) {
          return n(e) ? e : e.split(".");
        }
        function f(e) {
          return n(e) ? e.join(".") : e;
        }
        var m = {
          isCaseSensitive: !1,
          includeScore: !1,
          keys: [],
          shouldSort: !0,
          sortFn: function sortFn(e, t) {
            return e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1;
          },
          includeMatches: !1,
          findAllMatches: !1,
          minMatchCharLength: 1,
          location: 0,
          threshold: .6,
          distance: 100,
          useExtendedSearch: !1,
          getFn: function getFn(e, t) {
            var i = [],
              c = !1;
            var h = function h(e, t, u) {
              if (a(e)) if (t[u]) {
                var _d = e[t[u]];
                if (!a(_d)) return;
                if (u === t.length - 1 && (r(_d) || s(_d) || function (e) {
                  return !0 === e || !1 === e || function (e) {
                    return o(e) && null !== e;
                  }(e) && "[object Boolean]" == l(e);
                }(_d))) i.push(function (e) {
                  return null == e ? "" : function (e) {
                    if ("string" == typeof e) return e;
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                  }(e);
                }(_d));else if (n(_d)) {
                  c = !0;
                  for (var _e = 0, _i = _d.length; _e < _i; _e += 1) h(_d[_e], t, u + 1);
                } else t.length && h(_d, t, u + 1);
              } else i.push(e);
            };
            return h(e, r(t) ? t.split(".") : t, 0), c ? i : i[0];
          },
          ignoreLocation: !1,
          ignoreFieldNorm: !1,
          fieldNormWeight: 1
        };
        var v = /[^ ]+/g;
        var g = /*#__PURE__*/function () {
          function g() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref$getFn = _ref.getFn,
              e = _ref$getFn === void 0 ? m.getFn : _ref$getFn,
              _ref$fieldNormWeight = _ref.fieldNormWeight,
              t = _ref$fieldNormWeight === void 0 ? m.fieldNormWeight : _ref$fieldNormWeight;
            _classCallCheck(this, g);
            this.norm = function () {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
              var i = new Map(),
                n = Math.pow(10, t);
              return {
                get: function get(t) {
                  var r = t.match(v).length;
                  if (i.has(r)) return i.get(r);
                  var s = 1 / Math.pow(r, .5 * e),
                    o = parseFloat(Math.round(s * n) / n);
                  return i.set(r, o), o;
                },
                clear: function clear() {
                  i.clear();
                }
              };
            }(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
          }
          _createClass(g, [{
            key: "setSources",
            value: function setSources() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              this.docs = e;
            }
          }, {
            key: "setIndexRecords",
            value: function setIndexRecords() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              this.records = e;
            }
          }, {
            key: "setKeys",
            value: function setKeys() {
              var _this2 = this;
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              this.keys = e, this._keysMap = {}, e.forEach(function (e, t) {
                _this2._keysMap[e.id] = t;
              });
            }
          }, {
            key: "create",
            value: function create() {
              var _this3 = this;
              !this.isCreated && this.docs.length && (this.isCreated = !0, r(this.docs[0]) ? this.docs.forEach(function (e, t) {
                _this3._addString(e, t);
              }) : this.docs.forEach(function (e, t) {
                _this3._addObject(e, t);
              }), this.norm.clear());
            }
          }, {
            key: "add",
            value: function add(e) {
              var t = this.size();
              r(e) ? this._addString(e, t) : this._addObject(e, t);
            }
          }, {
            key: "removeAt",
            value: function removeAt(e) {
              this.records.splice(e, 1);
              for (var _t = e, _i2 = this.size(); _t < _i2; _t += 1) this.records[_t].i -= 1;
            }
          }, {
            key: "getValueForItemAtKeyId",
            value: function getValueForItemAtKeyId(e, t) {
              return e[this._keysMap[t]];
            }
          }, {
            key: "size",
            value: function size() {
              return this.records.length;
            }
          }, {
            key: "_addString",
            value: function _addString(e, t) {
              if (!a(e) || c(e)) return;
              var i = {
                v: e,
                i: t,
                n: this.norm.get(e)
              };
              this.records.push(i);
            }
          }, {
            key: "_addObject",
            value: function _addObject(e, t) {
              var _this4 = this;
              var i = {
                i: t,
                $: {}
              };
              this.keys.forEach(function (t, s) {
                var o = t.getFn ? t.getFn(e) : _this4.getFn(e, t.path);
                if (a(o)) if (n(o)) {
                  var _e2 = [];
                  var _t2 = [{
                    nestedArrIndex: -1,
                    value: o
                  }];
                  for (; _t2.length;) {
                    var _t2$pop = _t2.pop(),
                      _i3 = _t2$pop.nestedArrIndex,
                      _s = _t2$pop.value;
                    if (a(_s)) if (r(_s) && !c(_s)) {
                      var _t3 = {
                        v: _s,
                        i: _i3,
                        n: _this4.norm.get(_s)
                      };
                      _e2.push(_t3);
                    } else n(_s) && _s.forEach(function (e, i) {
                      _t2.push({
                        nestedArrIndex: i,
                        value: e
                      });
                    });
                  }
                  i.$[s] = _e2;
                } else if (r(o) && !c(o)) {
                  var _e3 = {
                    v: o,
                    n: _this4.norm.get(o)
                  };
                  i.$[s] = _e3;
                }
              }), this.records.push(i);
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              return {
                keys: this.keys,
                records: this.records
              };
            }
          }]);
          return g;
        }();
        function _(e, t) {
          var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref2$getFn = _ref2.getFn,
            i = _ref2$getFn === void 0 ? m.getFn : _ref2$getFn,
            _ref2$fieldNormWeight = _ref2.fieldNormWeight,
            n = _ref2$fieldNormWeight === void 0 ? m.fieldNormWeight : _ref2$fieldNormWeight;
          var r = new g({
            getFn: i,
            fieldNormWeight: n
          });
          return r.setKeys(e.map(d)), r.setSources(t), r.create(), r;
        }
        function y(e) {
          var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$errors = _ref3.errors,
            t = _ref3$errors === void 0 ? 0 : _ref3$errors,
            _ref3$currentLocation = _ref3.currentLocation,
            i = _ref3$currentLocation === void 0 ? 0 : _ref3$currentLocation,
            _ref3$expectedLocatio = _ref3.expectedLocation,
            n = _ref3$expectedLocatio === void 0 ? 0 : _ref3$expectedLocatio,
            _ref3$distance = _ref3.distance,
            r = _ref3$distance === void 0 ? m.distance : _ref3$distance,
            _ref3$ignoreLocation = _ref3.ignoreLocation,
            s = _ref3$ignoreLocation === void 0 ? m.ignoreLocation : _ref3$ignoreLocation;
          var o = t / e.length;
          if (s) return o;
          var a = Math.abs(n - i);
          return r ? o + a / r : a ? 1 : o;
        }
        var E = 32;
        function b(e) {
          var t = {};
          for (var _i4 = 0, _n4 = e.length; _i4 < _n4; _i4 += 1) {
            var _r = e.charAt(_i4);
            t[_r] = (t[_r] || 0) | 1 << _n4 - _i4 - 1;
          }
          return t;
        }
        var S = /*#__PURE__*/function () {
          function S(e) {
            var _this5 = this;
            var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref4$location = _ref4.location,
              t = _ref4$location === void 0 ? m.location : _ref4$location,
              _ref4$threshold = _ref4.threshold,
              i = _ref4$threshold === void 0 ? m.threshold : _ref4$threshold,
              _ref4$distance = _ref4.distance,
              n = _ref4$distance === void 0 ? m.distance : _ref4$distance,
              _ref4$includeMatches = _ref4.includeMatches,
              r = _ref4$includeMatches === void 0 ? m.includeMatches : _ref4$includeMatches,
              _ref4$findAllMatches = _ref4.findAllMatches,
              s = _ref4$findAllMatches === void 0 ? m.findAllMatches : _ref4$findAllMatches,
              _ref4$minMatchCharLen = _ref4.minMatchCharLength,
              o = _ref4$minMatchCharLen === void 0 ? m.minMatchCharLength : _ref4$minMatchCharLen,
              _ref4$isCaseSensitive = _ref4.isCaseSensitive,
              a = _ref4$isCaseSensitive === void 0 ? m.isCaseSensitive : _ref4$isCaseSensitive,
              _ref4$ignoreLocation = _ref4.ignoreLocation,
              c = _ref4$ignoreLocation === void 0 ? m.ignoreLocation : _ref4$ignoreLocation;
            _classCallCheck(this, S);
            if (this.options = {
              location: t,
              threshold: i,
              distance: n,
              includeMatches: r,
              findAllMatches: s,
              minMatchCharLength: o,
              isCaseSensitive: a,
              ignoreLocation: c
            }, this.pattern = a ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length) return;
            var l = function l(e, t) {
                _this5.chunks.push({
                  pattern: e,
                  alphabet: b(e),
                  startIndex: t
                });
              },
              h = this.pattern.length;
            if (h > E) {
              var _e4 = 0;
              var _t4 = h % E,
                _i5 = h - _t4;
              for (; _e4 < _i5;) l(this.pattern.substr(_e4, E), _e4), _e4 += E;
              if (_t4) {
                var _e5 = h - E;
                l(this.pattern.substr(_e5), _e5);
              }
            } else l(this.pattern, 0);
          }
          _createClass(S, [{
            key: "searchIn",
            value: function searchIn(e) {
              var _this$options = this.options,
                t = _this$options.isCaseSensitive,
                i = _this$options.includeMatches;
              if (t || (e = e.toLowerCase()), this.pattern === e) {
                var _t5 = {
                  isMatch: !0,
                  score: 0
                };
                return i && (_t5.indices = [[0, e.length - 1]]), _t5;
              }
              var _this$options2 = this.options,
                n = _this$options2.location,
                r = _this$options2.distance,
                s = _this$options2.threshold,
                o = _this$options2.findAllMatches,
                a = _this$options2.minMatchCharLength,
                c = _this$options2.ignoreLocation;
              var l = [],
                h = 0,
                u = !1;
              this.chunks.forEach(function (_ref5) {
                var t = _ref5.pattern,
                  d = _ref5.alphabet,
                  p = _ref5.startIndex;
                var _ref6 = function (e, t, i) {
                    var _ref7 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
                      _ref7$location = _ref7.location,
                      n = _ref7$location === void 0 ? m.location : _ref7$location,
                      _ref7$distance = _ref7.distance,
                      r = _ref7$distance === void 0 ? m.distance : _ref7$distance,
                      _ref7$threshold = _ref7.threshold,
                      s = _ref7$threshold === void 0 ? m.threshold : _ref7$threshold,
                      _ref7$findAllMatches = _ref7.findAllMatches,
                      o = _ref7$findAllMatches === void 0 ? m.findAllMatches : _ref7$findAllMatches,
                      _ref7$minMatchCharLen = _ref7.minMatchCharLength,
                      a = _ref7$minMatchCharLen === void 0 ? m.minMatchCharLength : _ref7$minMatchCharLen,
                      _ref7$includeMatches = _ref7.includeMatches,
                      c = _ref7$includeMatches === void 0 ? m.includeMatches : _ref7$includeMatches,
                      _ref7$ignoreLocation = _ref7.ignoreLocation,
                      l = _ref7$ignoreLocation === void 0 ? m.ignoreLocation : _ref7$ignoreLocation;
                    if (t.length > E) throw new Error("Pattern length exceeds max of 32.");
                    var h = t.length,
                      u = e.length,
                      d = Math.max(0, Math.min(n, u));
                    var p = s,
                      f = d;
                    var v = a > 1 || c,
                      g = v ? Array(u) : [];
                    var _;
                    for (; (_ = e.indexOf(t, f)) > -1;) {
                      var _e6 = y(t, {
                        currentLocation: _,
                        expectedLocation: d,
                        distance: r,
                        ignoreLocation: l
                      });
                      if (p = Math.min(_e6, p), f = _ + h, v) {
                        var _e7 = 0;
                        for (; _e7 < h;) g[_ + _e7] = 1, _e7 += 1;
                      }
                    }
                    f = -1;
                    var b = [],
                      S = 1,
                      O = h + u;
                    var I = 1 << h - 1;
                    for (var _n5 = 0; _n5 < h; _n5 += 1) {
                      var _s2 = 0,
                        _a = O;
                      for (; _s2 < _a;) y(t, {
                        errors: _n5,
                        currentLocation: d + _a,
                        expectedLocation: d,
                        distance: r,
                        ignoreLocation: l
                      }) <= p ? _s2 = _a : O = _a, _a = Math.floor((O - _s2) / 2 + _s2);
                      O = _a;
                      var _c = Math.max(1, d - _a + 1),
                        _m = o ? u : Math.min(d + _a, u) + h,
                        _2 = Array(_m + 2);
                      _2[_m + 1] = (1 << _n5) - 1;
                      for (var _s3 = _m; _s3 >= _c; _s3 -= 1) {
                        var _o = _s3 - 1,
                          _a2 = i[e.charAt(_o)];
                        if (v && (g[_o] = +!!_a2), _2[_s3] = (_2[_s3 + 1] << 1 | 1) & _a2, _n5 && (_2[_s3] |= (b[_s3 + 1] | b[_s3]) << 1 | 1 | b[_s3 + 1]), _2[_s3] & I && (S = y(t, {
                          errors: _n5,
                          currentLocation: _o,
                          expectedLocation: d,
                          distance: r,
                          ignoreLocation: l
                        }), S <= p)) {
                          if (p = S, f = _o, f <= d) break;
                          _c = Math.max(1, 2 * d - f);
                        }
                      }
                      if (y(t, {
                        errors: _n5 + 1,
                        currentLocation: d,
                        expectedLocation: d,
                        distance: r,
                        ignoreLocation: l
                      }) > p) break;
                      b = _2;
                    }
                    var C = {
                      isMatch: f >= 0,
                      score: Math.max(.001, S)
                    };
                    if (v) {
                      var _e8 = function () {
                        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : m.minMatchCharLength;
                        var i = [],
                          n = -1,
                          r = -1,
                          s = 0;
                        for (var _o2 = e.length; s < _o2; s += 1) {
                          var _o3 = e[s];
                          _o3 && -1 === n ? n = s : _o3 || -1 === n || (r = s - 1, r - n + 1 >= t && i.push([n, r]), n = -1);
                        }
                        return e[s - 1] && s - n >= t && i.push([n, s - 1]), i;
                      }(g, a);
                      _e8.length ? c && (C.indices = _e8) : C.isMatch = !1;
                    }
                    return C;
                  }(e, t, d, {
                    location: n + p,
                    distance: r,
                    threshold: s,
                    findAllMatches: o,
                    minMatchCharLength: a,
                    includeMatches: i,
                    ignoreLocation: c
                  }),
                  f = _ref6.isMatch,
                  v = _ref6.score,
                  g = _ref6.indices;
                f && (u = !0), h += v, f && g && (l = [].concat(_toConsumableArray(l), _toConsumableArray(g)));
              });
              var d = {
                isMatch: u,
                score: u ? h / this.chunks.length : 1
              };
              return u && i && (d.indices = l), d;
            }
          }]);
          return S;
        }();
        var O = /*#__PURE__*/function () {
          function O(e) {
            _classCallCheck(this, O);
            this.pattern = e;
          }
          _createClass(O, [{
            key: "search",
            value: function search() {}
          }], [{
            key: "isMultiMatch",
            value: function isMultiMatch(e) {
              return I(e, this.multiRegex);
            }
          }, {
            key: "isSingleMatch",
            value: function isSingleMatch(e) {
              return I(e, this.singleRegex);
            }
          }]);
          return O;
        }();
        function I(e, t) {
          var i = e.match(t);
          return i ? i[1] : null;
        }
        var C = /*#__PURE__*/function (_O) {
          _inherits(C, _O);
          var _super = _createSuper(C);
          function C(e) {
            var _this6;
            var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref8$location = _ref8.location,
              t = _ref8$location === void 0 ? m.location : _ref8$location,
              _ref8$threshold = _ref8.threshold,
              i = _ref8$threshold === void 0 ? m.threshold : _ref8$threshold,
              _ref8$distance = _ref8.distance,
              n = _ref8$distance === void 0 ? m.distance : _ref8$distance,
              _ref8$includeMatches = _ref8.includeMatches,
              r = _ref8$includeMatches === void 0 ? m.includeMatches : _ref8$includeMatches,
              _ref8$findAllMatches = _ref8.findAllMatches,
              s = _ref8$findAllMatches === void 0 ? m.findAllMatches : _ref8$findAllMatches,
              _ref8$minMatchCharLen = _ref8.minMatchCharLength,
              o = _ref8$minMatchCharLen === void 0 ? m.minMatchCharLength : _ref8$minMatchCharLen,
              _ref8$isCaseSensitive = _ref8.isCaseSensitive,
              a = _ref8$isCaseSensitive === void 0 ? m.isCaseSensitive : _ref8$isCaseSensitive,
              _ref8$ignoreLocation = _ref8.ignoreLocation,
              c = _ref8$ignoreLocation === void 0 ? m.ignoreLocation : _ref8$ignoreLocation;
            _classCallCheck(this, C);
            _this6 = _super.call(this, e), _this6._bitapSearch = new S(e, {
              location: t,
              threshold: i,
              distance: n,
              includeMatches: r,
              findAllMatches: s,
              minMatchCharLength: o,
              isCaseSensitive: a,
              ignoreLocation: c
            });
            return _this6;
          }
          _createClass(C, [{
            key: "search",
            value: function search(e) {
              return this._bitapSearch.searchIn(e);
            }
          }], [{
            key: "type",
            get: function get() {
              return "fuzzy";
            }
          }, {
            key: "multiRegex",
            get: function get() {
              return /^"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get() {
              return /^(.*)$/;
            }
          }]);
          return C;
        }(O);
        var T = /*#__PURE__*/function (_O2) {
          _inherits(T, _O2);
          var _super2 = _createSuper(T);
          function T(e) {
            _classCallCheck(this, T);
            return _super2.call(this, e);
          }
          _createClass(T, [{
            key: "search",
            value: function search(e) {
              var t,
                i = 0;
              var n = [],
                r = this.pattern.length;
              for (; (t = e.indexOf(this.pattern, i)) > -1;) i = t + r, n.push([t, i - 1]);
              var s = !!n.length;
              return {
                isMatch: s,
                score: s ? 0 : 1,
                indices: n
              };
            }
          }], [{
            key: "type",
            get: function get() {
              return "include";
            }
          }, {
            key: "multiRegex",
            get: function get() {
              return /^'"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get() {
              return /^'(.*)$/;
            }
          }]);
          return T;
        }(O);
        var L = [/*#__PURE__*/function (_O3) {
            _inherits(_class, _O3);
            var _super3 = _createSuper(_class);
            function _class(e) {
              _classCallCheck(this, _class);
              return _super3.call(this, e);
            }
            _createClass(_class, [{
              key: "search",
              value: function search(e) {
                var t = e === this.pattern;
                return {
                  isMatch: t,
                  score: t ? 0 : 1,
                  indices: [0, this.pattern.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return "exact";
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^="(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^=(.*)$/;
              }
            }]);
            return _class;
          }(O), T, /*#__PURE__*/function (_O4) {
            _inherits(_class2, _O4);
            var _super4 = _createSuper(_class2);
            function _class2(e) {
              _classCallCheck(this, _class2);
              return _super4.call(this, e);
            }
            _createClass(_class2, [{
              key: "search",
              value: function search(e) {
                var t = e.startsWith(this.pattern);
                return {
                  isMatch: t,
                  score: t ? 0 : 1,
                  indices: [0, this.pattern.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return "prefix-exact";
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^\^"(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^\^(.*)$/;
              }
            }]);
            return _class2;
          }(O), /*#__PURE__*/function (_O5) {
            _inherits(_class3, _O5);
            var _super5 = _createSuper(_class3);
            function _class3(e) {
              _classCallCheck(this, _class3);
              return _super5.call(this, e);
            }
            _createClass(_class3, [{
              key: "search",
              value: function search(e) {
                var t = !e.startsWith(this.pattern);
                return {
                  isMatch: t,
                  score: t ? 0 : 1,
                  indices: [0, e.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return "inverse-prefix-exact";
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^!\^"(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^!\^(.*)$/;
              }
            }]);
            return _class3;
          }(O), /*#__PURE__*/function (_O6) {
            _inherits(_class4, _O6);
            var _super6 = _createSuper(_class4);
            function _class4(e) {
              _classCallCheck(this, _class4);
              return _super6.call(this, e);
            }
            _createClass(_class4, [{
              key: "search",
              value: function search(e) {
                var t = !e.endsWith(this.pattern);
                return {
                  isMatch: t,
                  score: t ? 0 : 1,
                  indices: [0, e.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return "inverse-suffix-exact";
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^!"(.*)"\$$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^!(.*)\$$/;
              }
            }]);
            return _class4;
          }(O), /*#__PURE__*/function (_O7) {
            _inherits(_class5, _O7);
            var _super7 = _createSuper(_class5);
            function _class5(e) {
              _classCallCheck(this, _class5);
              return _super7.call(this, e);
            }
            _createClass(_class5, [{
              key: "search",
              value: function search(e) {
                var t = e.endsWith(this.pattern);
                return {
                  isMatch: t,
                  score: t ? 0 : 1,
                  indices: [e.length - this.pattern.length, e.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return "suffix-exact";
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^"(.*)"\$$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^(.*)\$$/;
              }
            }]);
            return _class5;
          }(O), /*#__PURE__*/function (_O8) {
            _inherits(_class6, _O8);
            var _super8 = _createSuper(_class6);
            function _class6(e) {
              _classCallCheck(this, _class6);
              return _super8.call(this, e);
            }
            _createClass(_class6, [{
              key: "search",
              value: function search(e) {
                var t = -1 === e.indexOf(this.pattern);
                return {
                  isMatch: t,
                  score: t ? 0 : 1,
                  indices: [0, e.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return "inverse-exact";
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^!"(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^!(.*)$/;
              }
            }]);
            return _class6;
          }(O), C],
          w = L.length,
          A = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
          M = new Set([C.type, T.type]);
        var P = [];
        function x(e, t) {
          for (var _i6 = 0, _n6 = P.length; _i6 < _n6; _i6 += 1) {
            var _n7 = P[_i6];
            if (_n7.condition(e, t)) return new _n7(e, t);
          }
          return new S(e, t);
        }
        var N = "$and",
          D = function D(e) {
            return !(!e.$and && !e.$or);
          },
          j = function j(e) {
            return _defineProperty({}, N, Object.keys(e).map(function (t) {
              return _defineProperty({}, t, e[t]);
            }));
          };
        function F(e, t) {
          var _ref11 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref11$auto = _ref11.auto,
            i = _ref11$auto === void 0 ? !0 : _ref11$auto;
          var s = function s(e) {
            var a = Object.keys(e);
            var c = function (e) {
              return !!e.$path;
            }(e);
            if (!c && a.length > 1 && !D(e)) return s(j(e));
            if (function (e) {
              return !n(e) && o(e) && !D(e);
            }(e)) {
              var _n8 = c ? e.$path : a[0],
                _s4 = c ? e.$val : e[_n8];
              if (!r(_s4)) throw new Error(function (e) {
                return "Invalid value for key ".concat(e);
              }(_n8));
              var _o4 = {
                keyId: f(_n8),
                pattern: _s4
              };
              return i && (_o4.searcher = x(_s4, t)), _o4;
            }
            var l = {
              children: [],
              operator: a[0]
            };
            return a.forEach(function (t) {
              var i = e[t];
              n(i) && i.forEach(function (e) {
                l.children.push(s(e));
              });
            }), l;
          };
          return D(e) || (e = j(e)), s(e);
        }
        function k(e, t) {
          var i = e.matches;
          t.matches = [], a(i) && i.forEach(function (e) {
            if (!a(e.indices) || !e.indices.length) return;
            var i = e.indices,
              n = e.value;
            var r = {
              indices: i,
              value: n
            };
            e.key && (r.key = e.key.src), e.idx > -1 && (r.refIndex = e.idx), t.matches.push(r);
          });
        }
        function K(e, t) {
          t.score = e.score;
        }
        var R = /*#__PURE__*/function () {
          function R(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var i = arguments.length > 2 ? arguments[2] : undefined;
            _classCallCheck(this, R);
            this.options = _objectSpread(_objectSpread({}, m), t), this.options.useExtendedSearch, this._keyStore = new u(this.options.keys), this.setCollection(e, i);
          }
          _createClass(R, [{
            key: "setCollection",
            value: function setCollection(e, t) {
              if (this._docs = e, t && !(t instanceof g)) throw new Error("Incorrect 'index' type");
              this._myIndex = t || _(this.options.keys, this._docs, {
                getFn: this.options.getFn,
                fieldNormWeight: this.options.fieldNormWeight
              });
            }
          }, {
            key: "add",
            value: function add(e) {
              a(e) && (this._docs.push(e), this._myIndex.add(e));
            }
          }, {
            key: "remove",
            value: function remove() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
                return !1;
              };
              var t = [];
              for (var _i7 = 0, _n9 = this._docs.length; _i7 < _n9; _i7 += 1) {
                var _r2 = this._docs[_i7];
                e(_r2, _i7) && (this.removeAt(_i7), _i7 -= 1, _n9 -= 1, t.push(_r2));
              }
              return t;
            }
          }, {
            key: "removeAt",
            value: function removeAt(e) {
              this._docs.splice(e, 1), this._myIndex.removeAt(e);
            }
          }, {
            key: "getIndex",
            value: function getIndex() {
              return this._myIndex;
            }
          }, {
            key: "search",
            value: function search(e) {
              var _ref12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref12$limit = _ref12.limit,
                t = _ref12$limit === void 0 ? -1 : _ref12$limit;
              var _this$options3 = this.options,
                i = _this$options3.includeMatches,
                n = _this$options3.includeScore,
                o = _this$options3.shouldSort,
                a = _this$options3.sortFn,
                c = _this$options3.ignoreFieldNorm;
              var l = r(e) ? r(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
              return function (e, _ref13) {
                var _ref13$ignoreFieldNor = _ref13.ignoreFieldNorm,
                  t = _ref13$ignoreFieldNor === void 0 ? m.ignoreFieldNorm : _ref13$ignoreFieldNor;
                e.forEach(function (e) {
                  var i = 1;
                  e.matches.forEach(function (_ref14) {
                    var e = _ref14.key,
                      n = _ref14.norm,
                      r = _ref14.score;
                    var s = e ? e.weight : null;
                    i *= Math.pow(0 === r && s ? Number.EPSILON : r, (s || 1) * (t ? 1 : n));
                  }), e.score = i;
                });
              }(l, {
                ignoreFieldNorm: c
              }), o && l.sort(a), s(t) && t > -1 && (l = l.slice(0, t)), function (e, t) {
                var _ref15 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                  _ref15$includeMatches = _ref15.includeMatches,
                  i = _ref15$includeMatches === void 0 ? m.includeMatches : _ref15$includeMatches,
                  _ref15$includeScore = _ref15.includeScore,
                  n = _ref15$includeScore === void 0 ? m.includeScore : _ref15$includeScore;
                var r = [];
                return i && r.push(k), n && r.push(K), e.map(function (e) {
                  var i = e.idx,
                    n = {
                      item: t[i],
                      refIndex: i
                    };
                  return r.length && r.forEach(function (t) {
                    t(e, n);
                  }), n;
                });
              }(l, this._docs, {
                includeMatches: i,
                includeScore: n
              });
            }
          }, {
            key: "_searchStringList",
            value: function _searchStringList(e) {
              var t = x(e, this.options),
                i = this._myIndex.records,
                n = [];
              return i.forEach(function (_ref16) {
                var e = _ref16.v,
                  i = _ref16.i,
                  r = _ref16.n;
                if (!a(e)) return;
                var _t$searchIn = t.searchIn(e),
                  s = _t$searchIn.isMatch,
                  o = _t$searchIn.score,
                  c = _t$searchIn.indices;
                s && n.push({
                  item: e,
                  idx: i,
                  matches: [{
                    score: o,
                    value: e,
                    norm: r,
                    indices: c
                  }]
                });
              }), n;
            }
          }, {
            key: "_searchLogical",
            value: function _searchLogical(e) {
              var _this7 = this;
              var t = F(e, this.options),
                i = function i(e, t, n) {
                  if (!e.children) {
                    var _i8 = e.keyId,
                      _r3 = e.searcher,
                      _s5 = _this7._findMatches({
                        key: _this7._keyStore.get(_i8),
                        value: _this7._myIndex.getValueForItemAtKeyId(t, _i8),
                        searcher: _r3
                      });
                    return _s5 && _s5.length ? [{
                      idx: n,
                      item: t,
                      matches: _s5
                    }] : [];
                  }
                  var r = [];
                  for (var _s6 = 0, _o5 = e.children.length; _s6 < _o5; _s6 += 1) {
                    var _o6 = e.children[_s6],
                      _a3 = i(_o6, t, n);
                    if (_a3.length) r.push.apply(r, _toConsumableArray(_a3));else if (e.operator === N) return [];
                  }
                  return r;
                },
                n = this._myIndex.records,
                r = {},
                s = [];
              return n.forEach(function (_ref17) {
                var e = _ref17.$,
                  n = _ref17.i;
                if (a(e)) {
                  var _o7 = i(t, e, n);
                  _o7.length && (r[n] || (r[n] = {
                    idx: n,
                    item: e,
                    matches: []
                  }, s.push(r[n])), _o7.forEach(function (_ref18) {
                    var _r$n$matches;
                    var e = _ref18.matches;
                    (_r$n$matches = r[n].matches).push.apply(_r$n$matches, _toConsumableArray(e));
                  }));
                }
              }), s;
            }
          }, {
            key: "_searchObjectList",
            value: function _searchObjectList(e) {
              var _this8 = this;
              var t = x(e, this.options),
                _this$_myIndex = this._myIndex,
                i = _this$_myIndex.keys,
                n = _this$_myIndex.records,
                r = [];
              return n.forEach(function (_ref19) {
                var e = _ref19.$,
                  n = _ref19.i;
                if (!a(e)) return;
                var s = [];
                i.forEach(function (i, n) {
                  s.push.apply(s, _toConsumableArray(_this8._findMatches({
                    key: i,
                    value: e[n],
                    searcher: t
                  })));
                }), s.length && r.push({
                  idx: n,
                  item: e,
                  matches: s
                });
              }), r;
            }
          }, {
            key: "_findMatches",
            value: function _findMatches(_ref20) {
              var e = _ref20.key,
                t = _ref20.value,
                i = _ref20.searcher;
              if (!a(t)) return [];
              var r = [];
              if (n(t)) t.forEach(function (_ref21) {
                var t = _ref21.v,
                  n = _ref21.i,
                  s = _ref21.n;
                if (!a(t)) return;
                var _i$searchIn = i.searchIn(t),
                  o = _i$searchIn.isMatch,
                  c = _i$searchIn.score,
                  l = _i$searchIn.indices;
                o && r.push({
                  score: c,
                  key: e,
                  value: t,
                  idx: n,
                  norm: s,
                  indices: l
                });
              });else {
                var _n10 = t.v,
                  _s7 = t.n,
                  _i$searchIn2 = i.searchIn(_n10),
                  _o8 = _i$searchIn2.isMatch,
                  _a4 = _i$searchIn2.score,
                  _c2 = _i$searchIn2.indices;
                _o8 && r.push({
                  score: _a4,
                  key: e,
                  value: _n10,
                  norm: _s7,
                  indices: _c2
                });
              }
              return r;
            }
          }]);
          return R;
        }();
        R.version = "6.6.2", R.createIndex = _, R.parseIndex = function (e) {
          var _ref22 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref22$getFn = _ref22.getFn,
            t = _ref22$getFn === void 0 ? m.getFn : _ref22$getFn,
            _ref22$fieldNormWeigh = _ref22.fieldNormWeight,
            i = _ref22$fieldNormWeigh === void 0 ? m.fieldNormWeight : _ref22$fieldNormWeigh;
          var n = e.keys,
            r = e.records,
            s = new g({
              getFn: t,
              fieldNormWeight: i
            });
          return s.setKeys(n), s.setIndexRecords(r), s;
        }, R.config = m, R.parseQuery = F, function () {
          P.push.apply(P, arguments);
        }( /*#__PURE__*/function () {
          function _class7(e) {
            var _ref23 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref23$isCaseSensitiv = _ref23.isCaseSensitive,
              t = _ref23$isCaseSensitiv === void 0 ? m.isCaseSensitive : _ref23$isCaseSensitiv,
              _ref23$includeMatches = _ref23.includeMatches,
              i = _ref23$includeMatches === void 0 ? m.includeMatches : _ref23$includeMatches,
              _ref23$minMatchCharLe = _ref23.minMatchCharLength,
              n = _ref23$minMatchCharLe === void 0 ? m.minMatchCharLength : _ref23$minMatchCharLe,
              _ref23$ignoreLocation = _ref23.ignoreLocation,
              r = _ref23$ignoreLocation === void 0 ? m.ignoreLocation : _ref23$ignoreLocation,
              _ref23$findAllMatches = _ref23.findAllMatches,
              s = _ref23$findAllMatches === void 0 ? m.findAllMatches : _ref23$findAllMatches,
              _ref23$location = _ref23.location,
              o = _ref23$location === void 0 ? m.location : _ref23$location,
              _ref23$threshold = _ref23.threshold,
              a = _ref23$threshold === void 0 ? m.threshold : _ref23$threshold,
              _ref23$distance = _ref23.distance,
              c = _ref23$distance === void 0 ? m.distance : _ref23$distance;
            _classCallCheck(this, _class7);
            this.query = null, this.options = {
              isCaseSensitive: t,
              includeMatches: i,
              minMatchCharLength: n,
              findAllMatches: s,
              ignoreLocation: r,
              location: o,
              threshold: a,
              distance: c
            }, this.pattern = t ? e : e.toLowerCase(), this.query = function (e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              return e.split("|").map(function (e) {
                var i = e.trim().split(A).filter(function (e) {
                    return e && !!e.trim();
                  }),
                  n = [];
                for (var _e9 = 0, _r4 = i.length; _e9 < _r4; _e9 += 1) {
                  var _r5 = i[_e9];
                  var _s8 = !1,
                    _o9 = -1;
                  for (; !_s8 && ++_o9 < w;) {
                    var _e10 = L[_o9];
                    var _i9 = _e10.isMultiMatch(_r5);
                    _i9 && (n.push(new _e10(_i9, t)), _s8 = !0);
                  }
                  if (!_s8) for (_o9 = -1; ++_o9 < w;) {
                    var _e11 = L[_o9];
                    var _i10 = _e11.isSingleMatch(_r5);
                    if (_i10) {
                      n.push(new _e11(_i10, t));
                      break;
                    }
                  }
                }
                return n;
              });
            }(this.pattern, this.options);
          }
          _createClass(_class7, [{
            key: "searchIn",
            value: function searchIn(e) {
              var t = this.query;
              if (!t) return {
                isMatch: !1,
                score: 1
              };
              var _this$options4 = this.options,
                i = _this$options4.includeMatches,
                n = _this$options4.isCaseSensitive;
              e = n ? e : e.toLowerCase();
              var r = 0,
                s = [],
                o = 0;
              for (var _n11 = 0, _a5 = t.length; _n11 < _a5; _n11 += 1) {
                var _a6 = t[_n11];
                s.length = 0, r = 0;
                for (var _t6 = 0, _n12 = _a6.length; _t6 < _n12; _t6 += 1) {
                  var _n13 = _a6[_t6],
                    _n$search = _n13.search(e),
                    _c3 = _n$search.isMatch,
                    _l = _n$search.indices,
                    _h = _n$search.score;
                  if (!_c3) {
                    o = 0, r = 0, s.length = 0;
                    break;
                  }
                  if (r += 1, o += _h, i) {
                    var _e12 = _n13.constructor.type;
                    M.has(_e12) ? s = [].concat(_toConsumableArray(s), _toConsumableArray(_l)) : s.push(_l);
                  }
                }
                if (r) {
                  var _e13 = {
                    isMatch: !0,
                    score: o / r
                  };
                  return i && (_e13.indices = s), _e13;
                }
              }
              return {
                isMatch: !1,
                score: 1
              };
            }
          }], [{
            key: "condition",
            value: function condition(e, t) {
              return t.useExtendedSearch;
            }
          }]);
          return _class7;
        }());
      },
      791: function _(e, t, i) {
        function n(e) {
          return n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
            return _typeof(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
          }, n(e);
        }
        function r(e, t, i) {
          return (t = function (e) {
            var t = function (e, t) {
              if ("object" !== n(e) || null === e) return e;
              var i = e[Symbol.toPrimitive];
              if (void 0 !== i) {
                var r = i.call(e, t);
                if ("object" !== n(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            }(e, "string");
            return "symbol" === n(t) ? t : String(t);
          }(t)) in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = i, e;
        }
        function s(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(i), !0).forEach(function (t) {
              r(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        function a(e) {
          return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
        }
        i.r(t), i.d(t, {
          __DO_NOT_USE__ActionTypes: function __DO_NOT_USE__ActionTypes() {
            return h;
          },
          applyMiddleware: function applyMiddleware() {
            return _;
          },
          bindActionCreators: function bindActionCreators() {
            return v;
          },
          combineReducers: function combineReducers() {
            return f;
          },
          compose: function compose() {
            return g;
          },
          createStore: function createStore() {
            return d;
          },
          legacy_createStore: function legacy_createStore() {
            return p;
          }
        });
        var c = "function" == typeof Symbol && Symbol.observable || "@@observable",
          l = function l() {
            return Math.random().toString(36).substring(7).split("").join(".");
          },
          h = {
            INIT: "@@redux/INIT" + l(),
            REPLACE: "@@redux/REPLACE" + l(),
            PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
              return "@@redux/PROBE_UNKNOWN_ACTION" + l();
            }
          };
        function u(e) {
          if ("object" != _typeof(e) || null === e) return !1;
          for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
          return Object.getPrototypeOf(e) === t;
        }
        function d(e, t, i) {
          var n;
          if ("function" == typeof t && "function" == typeof i || "function" == typeof i && "function" == typeof arguments[3]) throw new Error(a(0));
          if ("function" == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) {
            if ("function" != typeof i) throw new Error(a(1));
            return i(d)(e, t);
          }
          if ("function" != typeof e) throw new Error(a(2));
          var r = e,
            s = t,
            o = [],
            l = o,
            p = !1;
          function f() {
            l === o && (l = o.slice());
          }
          function m() {
            if (p) throw new Error(a(3));
            return s;
          }
          function v(e) {
            if ("function" != typeof e) throw new Error(a(4));
            if (p) throw new Error(a(5));
            var t = !0;
            return f(), l.push(e), function () {
              if (t) {
                if (p) throw new Error(a(6));
                t = !1, f();
                var i = l.indexOf(e);
                l.splice(i, 1), o = null;
              }
            };
          }
          function g(e) {
            if (!u(e)) throw new Error(a(7));
            if (void 0 === e.type) throw new Error(a(8));
            if (p) throw new Error(a(9));
            try {
              p = !0, s = r(s, e);
            } finally {
              p = !1;
            }
            for (var t = o = l, i = 0; i < t.length; i++) (0, t[i])();
            return e;
          }
          function _(e) {
            if ("function" != typeof e) throw new Error(a(10));
            r = e, g({
              type: h.REPLACE
            });
          }
          function y() {
            var e,
              t = v;
            return (e = {
              subscribe: function subscribe(e) {
                if ("object" != _typeof(e) || null === e) throw new Error(a(11));
                function i() {
                  e.next && e.next(m());
                }
                return i(), {
                  unsubscribe: t(i)
                };
              }
            })[c] = function () {
              return this;
            }, e;
          }
          return g({
            type: h.INIT
          }), (n = {
            dispatch: g,
            subscribe: v,
            getState: m,
            replaceReducer: _
          })[c] = y, n;
        }
        var p = d;
        function f(e) {
          for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
            var r = t[n];
            "function" == typeof e[r] && (i[r] = e[r]);
          }
          var s,
            o = Object.keys(i);
          try {
            !function (e) {
              Object.keys(e).forEach(function (t) {
                var i = e[t];
                if (void 0 === i(void 0, {
                  type: h.INIT
                })) throw new Error(a(12));
                if (void 0 === i(void 0, {
                  type: h.PROBE_UNKNOWN_ACTION()
                })) throw new Error(a(13));
              });
            }(i);
          } catch (e) {
            s = e;
          }
          return function (e, t) {
            if (void 0 === e && (e = {}), s) throw s;
            for (var n = !1, r = {}, c = 0; c < o.length; c++) {
              var l = o[c],
                h = i[l],
                u = e[l],
                d = h(u, t);
              if (void 0 === d) throw t && t.type, new Error(a(14));
              r[l] = d, n = n || d !== u;
            }
            return (n = n || o.length !== Object.keys(e).length) ? r : e;
          };
        }
        function m(e, t) {
          return function () {
            return t(e.apply(this, arguments));
          };
        }
        function v(e, t) {
          if ("function" == typeof e) return m(e, t);
          if ("object" != _typeof(e) || null === e) throw new Error(a(16));
          var i = {};
          for (var n in e) {
            var r = e[n];
            "function" == typeof r && (i[n] = m(r, t));
          }
          return i;
        }
        function g() {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
          return 0 === t.length ? function (e) {
            return e;
          } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
            return function () {
              return e(t.apply(void 0, arguments));
            };
          });
        }
        function _() {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
          return function (e) {
            return function () {
              var i = e.apply(void 0, arguments),
                n = function n() {
                  throw new Error(a(15));
                },
                r = {
                  getState: i.getState,
                  dispatch: function dispatch() {
                    return n.apply(void 0, arguments);
                  }
                },
                s = t.map(function (e) {
                  return e(r);
                });
              return n = g.apply(void 0, s)(i.dispatch), o(o({}, i), {}, {
                dispatch: n
              });
            };
          };
        }
      }
    },
    t = {};
  function i(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var s = t[n] = {
      exports: {}
    };
    return e[n].call(s.exports, s, s.exports, i), s.exports;
  }
  i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, {
      a: t
    }), t;
  }, i.d = function (e, t) {
    for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  var n,
    r,
    s = {};
  n = i(373), r = i.n(n), i(187), i(883), i(789), i(686), s["default"] = r(), window.Choices = s["default"];
}();
/* end choices.min.js */
;// CONCATENATED MODULE: ./src/js/helpers/MobileChecker.js
function MobileChecker_typeof(obj) { "@babel/helpers - typeof"; return MobileChecker_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, MobileChecker_typeof(obj); }
function MobileChecker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function MobileChecker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, MobileChecker_toPropertyKey(descriptor.key), descriptor); } }
function MobileChecker_createClass(Constructor, protoProps, staticProps) { if (protoProps) MobileChecker_defineProperties(Constructor.prototype, protoProps); if (staticProps) MobileChecker_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function MobileChecker_defineProperty(obj, key, value) { key = MobileChecker_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function MobileChecker_toPropertyKey(arg) { var key = MobileChecker_toPrimitive(arg, "string"); return MobileChecker_typeof(key) === "symbol" ? key : String(key); }
function MobileChecker_toPrimitive(input, hint) { if (MobileChecker_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (MobileChecker_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Класс для проверки мобильного браузера.
 */
var MobileChecker = /*#__PURE__*/function () {
  function MobileChecker() {
    MobileChecker_classCallCheck(this, MobileChecker);
  }
  MobileChecker_createClass(MobileChecker, null, [{
    key: "isAndroid",
    get:
    /**
     * Проверяет, является ли устройство Android.
     * @returns {boolean} true, если устройство Android, в противном случае false.
     */
    function get() {
      return Boolean(this.userAgent.match(/Android/i));
    }

    /**
     * Проверяет, является ли устройство BlackBerry.
     * @returns {boolean} true, если устройство BlackBerry, в противном случае false.
     */
  }, {
    key: "isBlackBerry",
    get: function get() {
      return Boolean(this.userAgent.match(/BlackBerry/i));
    }

    /**
     * Проверяет, является ли устройство iOS (iPhone, iPad или iPod).
     * @returns {boolean} true, если устройство iOS, в противном случае false.
     */
  }, {
    key: "isAppleOS",
    get: function get() {
      return Boolean(this.userAgent.match(/iPhone|iPad|iPod/i));
    }

    /**
     * Проверяет, является ли устройство Opera Mini.
     * @returns {boolean} true, если устройство Opera Mini, в противном случае false.
     */
  }, {
    key: "isOpera",
    get: function get() {
      return Boolean(this.userAgent.match(/Opera Mini/i));
    }

    /**
     * Проверяет, является ли устройство Windows.
     * @returns {boolean} true, если устройство Windows, в противном случае false.
     */
  }, {
    key: "isWindows",
    get: function get() {
      return Boolean(this.userAgent.match(/IEMobile/i));
    }

    /**
     * Проверяет, является ли устройство любым из поддерживаемых типов (Android, BlackBerry, iOS, Opera Mini, Windows).
     * @returns {boolean} true, если устройство является любым из поддерживаемых типов, в противном случае false.
     */
  }, {
    key: "isAny",
    get: function get() {
      return MobileChecker.isAndroid || MobileChecker.isBlackBerry || MobileChecker.isAppleOS || MobileChecker.isOpera || MobileChecker.isWindows;
    }
  }]);
  return MobileChecker;
}();
MobileChecker_defineProperty(MobileChecker, "userAgent", navigator.userAgent);
/* harmony default export */ const helpers_MobileChecker = (MobileChecker);
;// CONCATENATED MODULE: ./src/js/helpers/BaseHelpers.js
function BaseHelpers_typeof(obj) { "@babel/helpers - typeof"; return BaseHelpers_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, BaseHelpers_typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || BaseHelpers_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function BaseHelpers_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BaseHelpers_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BaseHelpers_arrayLikeToArray(o, minLen); }
function BaseHelpers_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function BaseHelpers_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function BaseHelpers_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, BaseHelpers_toPropertyKey(descriptor.key), descriptor); } }
function BaseHelpers_createClass(Constructor, protoProps, staticProps) { if (protoProps) BaseHelpers_defineProperties(Constructor.prototype, protoProps); if (staticProps) BaseHelpers_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function BaseHelpers_defineProperty(obj, key, value) { key = BaseHelpers_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function BaseHelpers_toPropertyKey(arg) { var key = BaseHelpers_toPrimitive(arg, "string"); return BaseHelpers_typeof(key) === "symbol" ? key : String(key); }
function BaseHelpers_toPrimitive(input, hint) { if (BaseHelpers_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (BaseHelpers_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var BaseHelpers = /*#__PURE__*/function () {
  function BaseHelpers() {
    BaseHelpers_classCallCheck(this, BaseHelpers);
  }
  BaseHelpers_createClass(BaseHelpers, null, [{
    key: "checkWebpSupport",
    value:
    /**
     * Проверка браузера на поддержку .webp изображений
     * (i) необходимо для корректного отображения webp из css
     * */
    function checkWebpSupport() {
      var _this = this;
      /** Проверка поддержки webp */
      var testWebp = function testWebp(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
          return callback(webP.height === 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      };

      /** Добавление класса _webp или _no-webp для HTML */
      testWebp(function (support) {
        var className = support ? 'webp' : 'no-webp';
        _this.html.classList.add(className);
        console.log(support ? 'webp поддерживается' : 'webp не поддерживается');
      });
    }

    /**
     * Добавление класса touch для HTML если браузер мобильный
     * */
  }, {
    key: "addTouchClass",
    value: function addTouchClass() {
      if (helpers_MobileChecker.isAny) {
        this.html.classList.add('touch');
      }
    }

    /**
     * Добавление loaded для HTML после полной загрузки страницы
     * */
  }, {
    key: "addLoadedClass",
    value: function addLoadedClass() {
      var _this2 = this;
      window.addEventListener('load', function () {
        setTimeout(function () {
          _this2.html.classList.add('loaded');
        }, 0);
      });
    }

    /** Получение хеша в адресе сайта */
  }, {
    key: "getHash",
    get: function get() {
      var _location$hash;
      return (_location$hash = location.hash) === null || _location$hash === void 0 ? void 0 : _location$hash.replace('#', '');
    }

    /** Указание хеша в адресе сайта */
  }, {
    key: "setHash",
    value: function setHash(hash) {
      hash = hash ? "#".concat(hash) : location.href.split('#')[0];
      history.pushState('', '', hash);
    }

    /** Функция для фиксированной шапки при скролле */
  }, {
    key: "headerFixed",
    value: function headerFixed() {
      var _this3 = this;
      var headerStickyObserver = new IntersectionObserver(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
          entry = _ref2[0];
        _this3.html.classList.toggle('header-is-sticky', !entry.isIntersecting);
      });
      if (this.firstScreen) {
        headerStickyObserver.observe(this.firstScreen);
      }
    }
  }]);
  return BaseHelpers;
}();
BaseHelpers_defineProperty(BaseHelpers, "html", document.documentElement);
BaseHelpers_defineProperty(BaseHelpers, "header", document.querySelector('.header'));
BaseHelpers_defineProperty(BaseHelpers, "firstScreen", document.querySelector('[data-observ]'));
/* harmony default export */ const helpers_BaseHelpers = (BaseHelpers);
;// CONCATENATED MODULE: ./src/js/app.js


/* проверка на поддержку webp формата */

helpers_BaseHelpers.checkWebpSupport();
helpers_BaseHelpers.addTouchClass();
helpers_BaseHelpers.addLoadedClass();
helpers_BaseHelpers.headerFixed();
/* end проверка на поддержку webp формата */

document.addEventListener('DOMContentLoaded', function () {
  var choicesSelects = document.querySelectorAll('.choices-select-js');
  choicesSelects.forEach(function (element) {
    new Choices(element, {
      searchEnabled: false,
      itemSelectText: ''
    });
  });

  // Предварительная обработка и сохранение данных из опций
  var optionsData = {};
  document.querySelectorAll('#multi-select-js option').forEach(function (option) {
    var imgSrc = option.getAttribute('data-img-src');
    var value = option.value;
    optionsData[value] = imgSrc;
  });

  // Инициализация Select2 для элемента select
  $('#select2').select2({
    tags: true
  });
  if (document.getElementById('multi-select-js')) {
    var updateClearButtonVisibility = function updateClearButtonVisibility() {
      var hasValues = multiSelect.getValue().length > 0;
      clearButton.style.display = hasValues ? 'block' : 'none';
    };
    var multiSelect = new Choices('#multi-select-js', {
      removeItemButton: true,
      searchEnabled: false,
      shouldSort: false,
      callbackOnCreateTemplates: function callbackOnCreateTemplates(template) {
        var _this = this;
        return {
          choice: function choice(classNames, data) {
            // Получаем imgSrc из сохраненных данных
            var imgSrc = optionsData[data.value];
            return template("\n                        <div class=\"choice-with-image\" data-select-text=\"".concat(_this.config.itemSelectText, "\" data-choice data-id=\"").concat(data.id, "\" data-value=\"").concat(data.value, "\" ").concat(data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable', " role=\"option\">\n                            <img src=\"").concat(imgSrc, "\" class=\"choice-img\" style=\"width:24px; height:24px; margin-right:8px;\"> ").concat(data.label, "\n                        </div>\n                    "));
          }
        };
      }
    });
    var clearButton = document.createElement('div');
    clearButton.classList.add('choices__clear');
    clearButton.innerHTML = "\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                  d=\"M7.36612 7.36612C7.85427 6.87796 8.64573 6.87796 9.13388 7.36612L12 10.2322L14.8661 7.36612C15.3543 6.87796 16.1457 6.87796 16.6339 7.36612C17.122 7.85427 17.122 8.64573 16.6339 9.13388L13.7678 12L16.6339 14.8661C17.122 15.3543 17.122 16.1457 16.6339 16.6339C16.1457 17.122 15.3543 17.122 14.8661 16.6339L12 13.7678L9.13388 16.6339C8.64573 17.122 7.85427 17.122 7.36612 16.6339C6.87796 16.1457 6.87796 15.3543 7.36612 14.8661L10.2322 12L7.36612 9.13388C6.87796 8.64573 6.87796 7.85427 7.36612 7.36612Z\"\n                  fill=\"currentColor\"/>\n        </svg>\n    ";
    document.querySelector('.choices__inner').appendChild(clearButton);
    updateClearButtonVisibility();
    clearButton.addEventListener('click', function (e) {
      e.stopPropagation();
      multiSelect.removeActiveItems(); // Очищаем все выбранные элементы
      updateClearButtonVisibility();
    });
    multiSelect.passedElement.element.addEventListener('change', updateClearButtonVisibility);
  }
  flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "Y-m-d",
    onClose: function onClose(selectedDates, dateStr, instance) {
      var dates = dateStr.split(" to ");
      var startDate = dates[0]; // Начальная дата
      var endDate = dates[1]; // Конечная дата

      document.getElementById("dateRageStartDate").value = startDate;
      document.getElementById("dateRageEndDate").value = endDate;
    }
  });
  if (window.innerWidth < 1200 && document.querySelector('#dateRange')) {
    var dateRange = document.querySelector('#dateRange');
    var flatPickrRange = document.querySelector('.flatpickr-calendar.rangeMode');
    flatPickrRange.style.width = dateRange.offsetWidth + 'px';
    window.addEventListener('resize', function (event) {
      var dateRange = document.querySelector('#dateRange');
      var flatPickrRange = document.querySelector('.flatpickr-calendar.rangeMode');
      flatPickrRange.style.width = dateRange.offsetWidth + 'px';
    });
  }
  var dateInputs = document.querySelectorAll('.date-input-js');
  dateInputs.forEach(function (element) {
    flatpickr(element, {
      disableMobile: "true"
    });
  });
  var editors = document.querySelectorAll('.editor');
  if (editors) {
    editors.forEach(function (el, index) {
      var editor = ace.edit(el);
      editor.session.setMode("ace/mode/sql");
      editor.setTheme("ace/theme/tomorrow_night_blue");
      if (window.innerWidth < 359) {
        editor.setFontSize(12);
      } else if (window.innerWidth < 768) {
        editor.setFontSize(14);
      } else {
        editor.setFontSize(16);
      }
    });
  }
  document.querySelector('.sidebar__btn-open').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.add('active');
    document.body.classList.add('overflow-hidden');
  });
  document.querySelector('.sidebar__close').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  });
  var trackedInitiativesSidebarOpen = document.querySelector('.tracked-initiatives-sidebar__open');
  if (trackedInitiativesSidebarOpen) {
    trackedInitiativesSidebarOpen.addEventListener('click', function () {
      document.querySelector('.tracked-initiatives-sidebar').classList.add('active');
      document.body.classList.add('overflow-hidden');
    });
    document.querySelector('.tracked-initiatives-sidebar__close').addEventListener('click', function () {
      document.querySelector('.tracked-initiatives-sidebar').classList.remove('active');
      document.body.classList.remove('overflow-hidden');
    });
  }
  document.querySelectorAll('.show-pass').forEach(function (button) {
    button.addEventListener('click', function () {
      var parent = button.parentElement;
      var passwordInput = parent.querySelector('input[type="password"], input[type="text"]');
      var svgUseElement = button.querySelector('svg use');
      if (passwordInput && svgUseElement) {
        var isPassword = passwordInput.getAttribute('type') === 'password';
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
        svgUseElement.setAttribute('href', isPassword ? '/images/icons/icons.svg#no-view' : '/images/icons/icons.svg#view');
      }
    });
  });
  var tabsButtons = document.querySelectorAll('.tabs_button');
  function onTabClick(event) {
    event.preventDefault();
    var targetId = event.currentTarget.getAttribute('data-trigger');
    document.querySelectorAll('.all-initiatives-wrap').forEach(function (block) {
      block.style.display = 'none';
    });
    document.querySelector(targetId).style.display = 'block';

    // tabsButtons.forEach(button => {
    //     if(button === event.currentTarget) {
    //         button.classList.add('active');
    //     } else {
    //         button.classList.remove('active');
    //     }
    // });
  }

  tabsButtons.forEach(function (button) {
    button.addEventListener('click', onTabClick);
  });
});
/******/ })()
;
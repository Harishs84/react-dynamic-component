webpackJsonp([11,16],{

/***/ "./app/components/GetInitialResource/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/lib/index.js");

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _store = __webpack_require__("./app/store.js");

var _store2 = _interopRequireDefault(_store);

var _components = __webpack_require__("./app/components/index.js");

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Payment Calculator Page
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var GetInitialResource = function (_Component) {
  _inherits(GetInitialResource, _Component);

  function GetInitialResource() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GetInitialResource);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GetInitialResource.__proto__ || Object.getPrototypeOf(GetInitialResource)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      modalComponents: [],
      isDiffProps: false
    }, _this.renderDynamicComponent = function (responseData) {
      // const responseDataFromJSON = (responseData === undefined) ? null : responseData[0];

      var modalComponents = _this.state.modalComponents;
      var _this$props = _this.props,
          clicked = _this$props.clicked,
          activeTab = _this$props.activeTab,
          loader = _this$props.loader,
          device = _this$props.device,
          addDeviceResponseData = _this$props.addDeviceResponseData;


      console.log(_this.state.modalComponents);
      var initialState = {};
      var store = (0, _store2.default)(initialState);
      //return (
      modalComponents.map(function (component, index) {
        var ComponentClass = component.ComponentClass,
            componentProps = component.componentProps;
        var id = component.id;

        var element = document.getElementById(id);
        // console.log(component);

        return _reactDom2.default.render(_react2.default.createElement(
          _reactRedux.Provider,
          { store: store },
          _react2.default.createElement(ComponentClass, _extends({}, componentProps, {
            key: index,
            clicked: clicked,
            activeTab: activeTab,
            loader: loader,
            device: device,
            addDeviceResponseData: addDeviceResponseData
          }))
        ), element);
      });

      //)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GetInitialResource, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var resposonseLoaded = this.props.resposonseLoaded;

      resposonseLoaded();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextState) {
      var _this2 = this;

      console.log(this.state.isDiffProps);
      if (nextProps.responseData && this.state.isDiffProps !== true) {
        var responseData = nextProps.responseData;
        var modalComponents = this.state.modalComponents;

        var comps = responseData[0].Inputs.newTemp.Section;

        comps.forEach(function (cData) {
          console.log(_typeof(_components2.default[cData.TemplateID]));
          if (typeof _components2.default[cData.TemplateID] !== "undefined") {
            _components2.default[cData.TemplateID]().then(function (DynamicComponent) {
              modalComponents.push({
                ComponentClass: DynamicComponent,
                componentProps: cData,
                id: cData.TargetLocation
              });
              _this2.setState({
                modalComponents: modalComponents,
                isDiffProps: true
              });
            }).catch(function (err) {
              console.log(err); // eslint-disable-line
            });
          }
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this.renderDynamicComponent();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return GetInitialResource;
}(_react.Component);

exports.default = GetInitialResource;

/***/ }),

/***/ "./app/containers/GetInitialResource/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addADeviceSuccess = exports.loadedSuccessful = exports.addADevice = exports.resposonseLoaded = exports.fetchPaymentDetailsData = undefined;

var _constants = __webpack_require__("./app/containers/GetInitialResource/constants.js");

var fetchPaymentDetailsData = exports.fetchPaymentDetailsData = function fetchPaymentDetailsData(data) {
  // console.log(data);
  return {
    type: _constants.PAYMENTCALC_DATA,
    payload: data
  };
}; /*
    *
    * BYODConfig actions
    *
    */

var resposonseLoaded = exports.resposonseLoaded = function resposonseLoaded() {
  return {
    type: _constants.LOAD_REPOS_SUCCESS
  };
};

var addADevice = exports.addADevice = function addADevice(response) {
  return {
    type: _constants.LOAD_ADD_DEVICE,
    payload: response
  };
};

var loadedSuccessful = exports.loadedSuccessful = function loadedSuccessful(res) {
  return {
    type: _constants.LOAD_SUCCESS,
    res: res
  };
};

var addADeviceSuccess = exports.addADeviceSuccess = function addADeviceSuccess(result) {
  return {
    type: _constants.LOAD_DATA_ADD_DEVICE_SUCESS,
    result: result
  };
};

/***/ }),

/***/ "./app/containers/GetInitialResource/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/lib/index.js");

var _redux = __webpack_require__("./node_modules/redux/lib/index.js");

var _selectors = __webpack_require__("./app/containers/GetInitialResource/selectors.js");

var _selectors2 = _interopRequireDefault(_selectors);

var _GetInitialResource = __webpack_require__("./app/components/GetInitialResource/index.js");

var _GetInitialResource2 = _interopRequireDefault(_GetInitialResource);

var _actions = __webpack_require__("./app/containers/GetInitialResource/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * PaymentCalculator Page
 */

var mapStateToProps = (0, _selectors2.default)();

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchPaymentDetailsData: _actions.fetchPaymentDetailsData,
    resposonseLoaded: _actions.resposonseLoaded,
    addADevice: _actions.addADevice
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_GetInitialResource2.default);

/***/ }),

/***/ "./app/containers/GetInitialResource/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectPaymentCalcConfigDomain = undefined;

var _reselect = __webpack_require__("./node_modules/reselect/lib/index.js");

var selectPaymentCalcConfigDomain = function selectPaymentCalcConfigDomain() {
  return function (state) {
    return state.get('GetInitialResource');
  };
};

var selectPaymentCalcConfig = function selectPaymentCalcConfig() {
  return (0, _reselect.createSelector)(selectPaymentCalcConfigDomain(), function (substate) {
    return substate.toJS();
  });
};

exports.default = selectPaymentCalcConfig;
exports.selectPaymentCalcConfigDomain = selectPaymentCalcConfigDomain;

/***/ })

});
//# sourceMappingURL=chunk.11.js.map
webpackJsonp([12,16],{

/***/ "./app/common/ErrorPage/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _Image = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Image\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ErrorPage(props) {
	var wrapperClass = 'errorPage-wrapper textAlignCenter ' + (props.transparent ? '' : 'bg_whitePurple') + ' ' + props.className,
	    errorImg = props.showErrorImage ? _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(Img, { src: '/solo_static/img/error-page-icon.png', className: 'error-img pad40 m-obp', alt: 'Content not found' })
	) : null,
	    errorTitle = props.errorTitle,
	    errorDesc = props.errorDesc ? _react2.default.createElement('div', { className: 'pad40 m-obp', dangerouslySetInnerHTML: { __html: props.errorDesc } }) : null,
	    CtaLabel = props.ctaLabel,
	    CtaLink = props.ctaLink !== "" ? props.ctaLink : 'javascript:void(0)',
	    Cta = props.showCtaAsLink ? _react2.default.createElement(
		'a',
		{ href: CtaLink, className: 'purpleLink m-big', onClick: props.ctaClickHandler, 'aria-label': CtaLabel },
		CtaLabel
	) : _react2.default.createElement(
		'a',
		{ href: CtaLink, className: 'button m-reverse m-fullWidth', onClick: props.ctaClickHandler, 'aria-role': 'button', 'aria-label': CtaLabel },
		CtaLabel
	);

	return _react2.default.createElement(
		'div',
		{ className: wrapperClass },
		_react2.default.createElement(
			'div',
			{ className: 'errorPage-content' },
			errorImg,
			_react2.default.createElement('div', { className: 'features-heading bold pad40 m-obp', dangerouslySetInnerHTML: { __html: errorTitle } }),
			errorDesc,
			Cta
		)
	);
}

ErrorPage.defaultProps = {
	transparent: false,
	showErrorImage: true,
	showCtaAsLink: false
};

ErrorPage.propTypes = {
	/*optional - additional CSS classes to be set on wrapper */
	className: _react2.default.PropTypes.string,
	/*optional - set to 'true' if you dont the default background color*/
	transparent: _react2.default.PropTypes.bool,
	/** optional - set to false is '/month' text should be shown next to price*/
	/** default - error image [crying smiley] is always shown */
	showErrorImage: _react2.default.PropTypes.bool,
	/** required - error title */
	errorTitle: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]).isRequired,
	/** optional - error description text */
	errorDesc: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),
	/** optional - set to 'true' if CTA should be shown a link*/
	/** default is always be shown as button*/
	showCtaAsLink: _react2.default.PropTypes.bool,
	/** required - CTA text */
	ctaLabel: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]).isRequired,
	ctaLink: _react2.default.PropTypes.string,
	ctaClickHandler: _react2.default.PropTypes.func
};

exports.default = ErrorPage;

/***/ }),

/***/ "./app/containers/ErrorScreen/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__("./app/base.js");

var _ErrorPage = __webpack_require__("./app/common/ErrorPage/index.js");

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ErrorPage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var errorPageJson = window[(0, _base.getJsonVar)('errorScreen')];

var ErrorScreen = function (_Component) {
	_inherits(ErrorScreen, _Component);

	function ErrorScreen() {
		_classCallCheck(this, ErrorScreen);

		return _possibleConstructorReturn(this, (ErrorScreen.__proto__ || Object.getPrototypeOf(ErrorScreen)).apply(this, arguments));
	}

	_createClass(ErrorScreen, [{
		key: 'render',
		// eslint-disable-line react/prefer-stateless-function
		value: function render() {
			var errorTitle = errorPageJson.errorTitle,
			    errorDesc = errorPageJson.errorDesc,
			    buttonLabel = errorPageJson.buttonLabel,
			    redirectUrl = errorPageJson.redirectUrl;

			return _react2.default.createElement(_ErrorPage2.default, { errorTitle: errorTitle, errorDesc: errorDesc, ctaLabel: buttonLabel, ctaLink: redirectUrl });
		}
	}]);

	return ErrorScreen;
}(_react.Component);

exports.default = ErrorScreen;

/***/ })

});
//# sourceMappingURL=chunk.12.js.map
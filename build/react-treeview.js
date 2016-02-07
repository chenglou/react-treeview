(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["TreeView"] = factory(require("react"));
	else
		root["TreeView"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var TreeView = _react2['default'].createClass({
	  displayName: 'TreeView',
	
	  propTypes: {
	    collapsed: _react.PropTypes.bool,
	    defaultCollapsed: _react.PropTypes.bool,
	    nodeLabel: _react.PropTypes.node.isRequired,
	    className: _react.PropTypes.string,
	    itemClassName: _react.PropTypes.string
	  },
	
	  getInitialState: function getInitialState() {
	    return { collapsed: this.props.defaultCollapsed };
	  },
	
	  handleClick: function handleClick() {
	    this.setState({ collapsed: !this.state.collapsed });
	    if (this.props.onClick) {
	      var _props;
	
	      (_props = this.props).onClick.apply(_props, arguments);
	    }
	  },
	
	  render: function render() {
	    var _props2 = this.props;
	    var _props2$collapsed = _props2.collapsed;
	    var collapsed = _props2$collapsed === undefined ? this.state.collapsed : _props2$collapsed;
	    var _props2$className = _props2.className;
	    var className = _props2$className === undefined ? '' : _props2$className;
	    var _props2$itemClassName = _props2.itemClassName;
	    var itemClassName = _props2$itemClassName === undefined ? '' : _props2$itemClassName;
	    var nodeLabel = _props2.nodeLabel;
	    var children = _props2.children;
	
	    var rest = _objectWithoutProperties(_props2, ['collapsed', 'className', 'itemClassName', 'nodeLabel', 'children']);
	
	    var arrowClassName = 'tree-view_arrow';
	    var containerClassName = 'tree-view_children';
	    if (collapsed) {
	      arrowClassName += ' tree-view_arrow-collapsed';
	      containerClassName += ' tree-view_children-collapsed';
	    }
	
	    var arrow = _react2['default'].createElement('div', _extends({}, rest, {
	      className: className + ' ' + arrowClassName,
	      onClick: this.handleClick }));
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'tree-view' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'tree-view_item ' + itemClassName },
	        arrow,
	        nodeLabel
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: containerClassName },
	        children
	      )
	    );
	  }
	});
	
	exports['default'] = TreeView;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-treeview.map
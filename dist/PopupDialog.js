Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/PopupDialog.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNativeGeneralSiblings=require('react-native-general-siblings');var _reactNativeGeneralSiblings2=_interopRequireDefault(_reactNativeGeneralSiblings);var _Dialog=require('./components/Dialog');var _Dialog2=_interopRequireDefault(_Dialog);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var babelPluginFlowReactPropTypes_proptype_DialogProps=require('./type').babelPluginFlowReactPropTypes_proptype_DialogProps||require('prop-types').any;var PopupDialog=function(_Component){_inherits(PopupDialog,_Component);function PopupDialog(props){_classCallCheck(this,PopupDialog);var _this=_possibleConstructorReturn(this,(PopupDialog.__proto__||Object.getPrototypeOf(PopupDialog)).call(this,props));_this.handleDismiss=function(){var onDismiss=_this.props.onDismiss;if(onDismiss){onDismiss();}_this.destroyDialog();};_this.sibling=null;_this.state={visible:props.visible};return _this;}_createClass(PopupDialog,[{key:'componentDidMount',value:function componentDidMount(){var visible=this.state.visible;if(visible){this.createDialog();}}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){if(prevState.visible!==this.props.visible){this.setState({visible:this.props.visible});if(this.props.visible){this.createDialog();}}if(this.sibling){this.updateDialog();}}},{key:'createDialog',value:function createDialog(){if(!this.sibling){this.sibling=new _reactNativeGeneralSiblings2.default(this.renderDialog());}}},{key:'updateDialog',value:function updateDialog(){this.sibling.update(this.renderDialog());}},{key:'destroyDialog',value:function destroyDialog(){this.sibling.destroy();this.sibling=null;}},{key:'renderDialog',value:function renderDialog(){return _react2.default.createElement(_Dialog2.default,_extends({},this.props,{onDismiss:this.handleDismiss,visible:this.state.visible,__source:{fileName:_jsxFileName,lineNumber:73}}));}},{key:'render',value:function render(){return null;}}]);return PopupDialog;}(_react.Component);PopupDialog.propTypes=babelPluginFlowReactPropTypes_proptype_DialogProps;exports.default=PopupDialog;
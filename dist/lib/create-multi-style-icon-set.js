var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=createMultiStyleIconSet;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _createIconSet=_interopRequireWildcard(require("./create-icon-set"));var _jsxFileName="/Users/richardlindhout/go/src/github.com/RichardLindhout/react-native-vector-icons/lib/create-multi-style-icon-set.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function createMultiStyleIconSet(styles){var optionsInput=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var styleNames=Object.keys(styles);if(styleNames.length===0){throw new Error('You need to add at least one style');}var options=_objectSpread({defaultStyle:styleNames[0],fallbackFamily:function fallbackFamily(){return styleNames[0];},glyphValidator:function glyphValidator(){return true;}},optionsInput);var iconSets=styleNames.reduce(function(acc,name){var style=styles[name];acc[name]=(0,_createIconSet.default)(style.glyphMap||{},style.fontFamily||'',style.fontFile||'',style.fontStyle||{});return acc;},{});function styleFromProps(props){return Object.keys(props).reduce(function(result,propName){return styleNames.indexOf(propName)!==-1&&props[propName]===true?propName:result;},options.defaultStyle);}function getIconSetForProps(props){var name=props.name;var style=styleFromProps(props);if(options.glyphValidator(name,style))return iconSets[style];var family=options.fallbackFamily(name);if(styleNames.indexOf(family)===-1){return options.defaultStyle;}return iconSets[family];}function selectIconClass(iconSet,iconClass){return iconClass.length>0?iconSet[iconClass]:iconSet;}function reduceProps(props){return Object.keys(props).reduce(function(acc,prop){if(styleNames.indexOf(prop)===-1){acc[prop]=props[prop];}return acc;},{});}function getStyledIconSet(style){var name=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';if(styleNames.indexOf(style)===-1){return iconSets[options.defaultStyle];}return!name?iconSets[styleFromProps((0,_defineProperty2.default)({},style,true))]:getIconSetForProps((0,_defineProperty2.default)({name:name},style,true));}function getImageSource(name){var size=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_createIconSet.DEFAULT_ICON_SIZE;var color=arguments.length>2&&arguments[2]!==undefined?arguments[2]:_createIconSet.DEFAULT_ICON_COLOR;var style=arguments.length>3&&arguments[3]!==undefined?arguments[3]:options.defaultStyle;return getStyledIconSet(style,name).getImageSource(name,size,color);}function getFontFamily(){var style=arguments.length>0&&arguments[0]!==undefined?arguments[0]:options.defaultStyle;return getStyledIconSet(style).getFontFamily();}function getRawGlyphMap(){var style=arguments.length>0&&arguments[0]!==undefined?arguments[0]:options.defaultStyle;return getStyledIconSet(style).getRawGlyphMap();}function hasIcon(name){var style=arguments.length>1&&arguments[1]!==undefined?arguments[1]:options.defaultStyle;return options.glyphValidator(name,style);}function createStyledIconClass(){var selectClass=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var IconClass=function(_PureComponent){(0,_inherits2.default)(IconClass,_PureComponent);function IconClass(){(0,_classCallCheck2.default)(this,IconClass);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(IconClass).apply(this,arguments));}(0,_createClass2.default)(IconClass,[{key:"render",value:function render(){var selectedIconSet=getIconSetForProps(this.props);var SelectedIconClass=selectIconClass(selectedIconSet,selectClass);var props=reduceProps(this.props);return _react.default.createElement(SelectedIconClass,(0,_extends2.default)({},props,{__source:{fileName:_jsxFileName,lineNumber:117}}));}}]);return IconClass;}(_react.PureComponent);IconClass.defaultProps=styleNames.reduce(function(acc,name){acc[name]=false;return acc;},{});return IconClass;}var Icon=createStyledIconClass();Icon.Button=createStyledIconClass('Button');Icon.TabBarItem=createStyledIconClass('TabBarItem');Icon.TabBarItemIOS=createStyledIconClass('TabBarItemIOS');Icon.getStyledIconSet=getStyledIconSet;Icon.getImageSource=getImageSource;Icon.getFontFamily=getFontFamily;Icon.getRawGlyphMap=getRawGlyphMap;Icon.hasIcon=hasIcon;return Icon;}
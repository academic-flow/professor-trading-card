let React,forwardRef;module.link('react',{default(v){React=v},forwardRef(v){forwardRef=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);var _excluded = ["color", "size", "title"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var SimSlash = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: size,
    height: size,
    fill: color
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "m11.646.44.897.896-.707.707-.897-.897A.5.5 0 0 0 10.586 1H3.5a.5.5 0 0 0-.5.5v9.379l-1 1V1.5A1.5 1.5 0 0 1 3.5 0h7.086a1.5 1.5 0 0 1 1.06.44M10.5 3q.175 0 .34.039L9.879 4H8.5v1.379L6.879 7H5v1.879l-1 1V4.5A1.5 1.5 0 0 1 5.5 3zM12 6.121l-1 1V9H9.121L7.5 10.621V12H6.121l-.961.961q.165.039.34.039h5a1.5 1.5 0 0 0 1.5-1.5zM3.5 15a.5.5 0 0 1-.288-.091l-.71.71c.265.237.615.381.998.381h9a1.5 1.5 0 0 0 1.5-1.5V4.121l-1 1V14.5a.5.5 0 0 1-.5.5zm2-11a.5.5 0 0 0-.5.5V6h2.5V4zm5.5 6v1.5a.5.5 0 0 1-.5.5h-2v-2zm3.854-8.146a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708z"
  }));
});
SimSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
SimSlash.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
module.exportDefault(SimSlash);
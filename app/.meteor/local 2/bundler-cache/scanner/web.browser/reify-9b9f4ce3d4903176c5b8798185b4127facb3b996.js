let React,forwardRef;module.link('react',{default(v){React=v},forwardRef(v){forwardRef=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);var _excluded = ["color", "size", "title"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Skype = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M4.671 0c.88 0 1.733.247 2.468.702a7.42 7.42 0 0 1 6.02 2.118 7.37 7.37 0 0 1 2.167 5.215q0 .517-.072 1.026a4.66 4.66 0 0 1 .6 2.281 4.64 4.64 0 0 1-1.37 3.294A4.67 4.67 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.42 7.42 0 0 1-6.114-2.107A7.37 7.37 0 0 1 .529 8.035q0-.545.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7 7 0 0 0 1.257.653q.737.308 1.145.523c.229.112.437.264.615.448.135.142.21.331.21.528a.87.87 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.6 2.6 0 0 1-1.048-.206 11 11 0 0 1-.532-.253 1.3 1.3 0 0 0-.587-.15.72.72 0 0 0-.501.176.63.63 0 0 0-.195.491.8.8 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.1 5.1 0 0 0 2.212.419 4.6 4.6 0 0 0 1.624-.265 2.3 2.3 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.1 2.1 0 0 0-.279-1.101 2.5 2.5 0 0 0-.772-.792A7 7 0 0 0 8.486 7.3a1 1 0 0 0-.145-.058 18 18 0 0 1-1.013-.447 1.8 1.8 0 0 1-.54-.387.73.73 0 0 1-.2-.508.8.8 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096q.412.119.802.293c.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.7.7 0 0 0 .18-.496.72.72 0 0 0-.17-.476 1.4 1.4 0 0 0-.556-.354 3.7 3.7 0 0 0-.708-.183 6 6 0 0 0-1.022-.078 4.5 4.5 0 0 0-1.536.258 2.7 2.7 0 0 0-1.174.784 1.9 1.9 0 0 0-.45 1.287c-.01.37.076.736.25 1.063"
  }));
});
Skype.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
Skype.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
module.exportDefault(Skype);
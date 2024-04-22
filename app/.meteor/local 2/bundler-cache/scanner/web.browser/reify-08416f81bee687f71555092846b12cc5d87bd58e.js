let React,forwardRef;module.link('react',{default(v){React=v},forwardRef(v){forwardRef=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);var _excluded = ["color", "size", "title"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var PciCardSound = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M7.562 7.39 8 7.04v1.92l-.438-.35a.5.5 0 0 0-.312-.11H6.5v-1h.75a.5.5 0 0 0 .312-.11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.5 1a.5.5 0 0 0 0 1H1v12.5a.5.5 0 0 0 1 0V12h13.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H2V1.5a.5.5 0 0 0-.5-.5zm11.619 3.881q.15.173.28.367c.484.726.768 1.7.768 2.752s-.284 2.026-.768 2.752q-.13.195-.28.367l-.71-.71q.082-.096.158-.212c.36-.54.6-1.315.6-2.197s-.24-1.657-.6-2.198a3 3 0 0 0-.157-.212zm-1.375 4.863L10 9c.057 0 .17-.035.291-.217.12-.178.209-.454.209-.783 0-.33-.09-.605-.209-.783C10.17 7.035 10.057 7 10 7l.744-.744c.15.113.278.254.38.406.242.364.376.839.376 1.338s-.134.974-.377 1.338a1.7 1.7 0 0 1-.379.406M9 6v4a.5.5 0 0 1-.812.39L7.075 9.5H6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h1.075l1.113-.89A.5.5 0 0 1 9 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 12.5H3v1a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 .5-.5zm.5 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5"
  }));
});
PciCardSound.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
PciCardSound.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
module.exportDefault(PciCardSound);
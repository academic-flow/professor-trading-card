let React,forwardRef;module.link('react',{default(v){React=v},forwardRef(v){forwardRef=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);var _excluded = ["color", "size", "title"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var SignDeadEnd = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M4.783 6v2h.69c.593 0 .886-.359.886-1.002S6.07 6 5.473 6zm.333.28h.32c.395 0 .582.24.582.722 0 .48-.186.718-.581.718h-.321zM7.82 7.72h-.918v-.602h.863V6.85h-.863v-.57h.917V6H6.571v2H7.82zm.573-.274L8.216 8h-.34l.688-2h.371l.689 2h-.352l-.177-.554zm.627-.255-.268-.845h-.015l-.27.845zM9.746 6v2h.69c.593 0 .886-.359.886-1.002S11.032 6 10.436 6zm.333.28h.32c.394 0 .582.24.582.722 0 .48-.186.718-.582.718h-.32zm-4.173 4.44h.917V11H5.575V9h1.248v.28h-.917v.57h.863v.268h-.863zm1.489.28V9.56h.013L8.344 11h.292V9h-.32v1.436h-.014L7.369 9h-.293v2zm1.56 0V9h.69c.596 0 .886.355.886.998S10.238 11 9.645 11zm.653-1.72h-.32v1.44h.32c.395 0 .581-.239.581-.718 0-.481-.187-.722-.581-.722"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z"
  }));
});
SignDeadEnd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
SignDeadEnd.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
module.exportDefault(SignDeadEnd);
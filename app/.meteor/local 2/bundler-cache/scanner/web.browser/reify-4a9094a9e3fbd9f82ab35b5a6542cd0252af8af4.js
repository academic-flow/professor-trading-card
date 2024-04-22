let React,forwardRef;module.link('react',{default(v){React=v},forwardRef(v){forwardRef=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);var _excluded = ["color", "size", "title"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EmojiGrinFill = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M6.488 7c-.23-.598-.661-1-1.155-1-.493 0-.924.402-1.155 1A2.8 2.8 0 0 1 4 6c0-1.105.597-2 1.333-2 .737 0 1.334.895 1.334 2 0 .364-.065.706-.179 1m5.334 0c-.23-.598-.662-1-1.155-1-.494 0-.925.402-1.155 1a2.8 2.8 0 0 1-.179-1c0-1.105.597-2 1.334-2C11.403 4 12 4.895 12 6c0 .364-.065.706-.178 1M2.696 8.756a.48.48 0 0 1 .382-.118C4.348 8.786 6.448 9 8 9c1.553 0 3.653-.214 4.922-.362a.48.48 0 0 1 .383.118.3.3 0 0 1 .096.29c-.09.47-.242.921-.445 1.342-.263.035-.576.075-.929.115A37 37 0 0 1 8 10.75c-1.475 0-2.934-.123-4.027-.247-.353-.04-.666-.08-.93-.115A5.5 5.5 0 0 1 2.6 9.045a.3.3 0 0 1 .097-.29ZM8 13.5a5.49 5.49 0 0 1-4.256-2.017l.116.014c1.115.126 2.615.253 4.14.253s3.025-.127 4.14-.253l.117-.014A5.49 5.49 0 0 1 8 13.5"
  }));
});
EmojiGrinFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
EmojiGrinFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
module.exportDefault(EmojiGrinFill);
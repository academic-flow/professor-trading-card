let React,forwardRef;module.link('react',{default(v){React=v},forwardRef(v){forwardRef=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);var _excluded = ["color", "size", "title"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var SignYield = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M5.506 6.232V7H5.11v-.76L4.44 5h.44l.424.849h.016L5.748 5h.428zM6.628 5v2h-.396V5zm.684 1.676h.895V7H6.919V5h1.288v.324h-.895v.513h.842v.303h-.842zm1.521-.013h.848V7H8.437V5h.396z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.804 7V5h.73c.607 0 .894.364.894.995 0 .636-.291 1.005-.895 1.005zm.676-1.677h-.28v1.353h.28c.372 0 .54-.222.54-.674 0-.45-.169-.68-.54-.68Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.022 14.434a1.131 1.131 0 0 0 1.96 0l6.857-11.667c.457-.778-.092-1.767-.98-1.767H1.144c-.889 0-1.437.99-.98 1.767zm.98-.434a.13.13 0 0 1-.064-.016.15.15 0 0 1-.054-.057L1.027 2.26a.18.18 0 0 1-.002-.183.2.2 0 0 1 .054-.06A.1.1 0 0 1 1.145 2h13.713a.12.12 0 0 1 .066.017q.028.015.055.06a.18.18 0 0 1-.003.183L8.12 13.927a.15.15 0 0 1-.054.057.13.13 0 0 1-.063.016Z"
  }));
});
SignYield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
SignYield.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
module.exportDefault(SignYield);
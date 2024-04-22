let React,forwardRef;module.link('react',{default(v){React=v},forwardRef(v){forwardRef=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);var _excluded = ["color", "size", "title"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var FiletypeWoff = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    fillRule: "evenodd",
    d: "M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-5.464 9.688v-.522q0-.386-.117-.641a.86.86 0 0 0-.323-.387.86.86 0 0 0-.468-.129.87.87 0 0 0-.472.13.87.87 0 0 0-.32.386q-.116.255-.116.641v.522q0 .384.117.641a.87.87 0 0 0 .319.387.9.9 0 0 0 .472.126.9.9 0 0 0 .468-.126.86.86 0 0 0 .323-.386 1.55 1.55 0 0 0 .117-.642m.803-.516v.513q0 .563-.205.973-.205.406-.59.627-.38.216-.916.216-.534 0-.92-.216a1.46 1.46 0 0 1-.59-.627 2.15 2.15 0 0 1-.204-.973v-.513q0-.569.205-.975.205-.411.589-.627.386-.22.92-.22.536 0 .917.22.384.219.589.63.204.406.205.972m-6.064-.536-.74 2.79h-.73l-1.055-4h.855l.601 2.903h.038l.706-2.903h.683l.706 2.903h.04l.596-2.903h.858l-1.055 4h-.73l-.74-2.79zm7.398 2.79v-1.592h1.606v-.638h-1.606v-1.117h1.758v-.653H9.882v4zm2.988-1.592v1.591h-.791v-3.999h2.548v.653h-1.757v1.117h1.605v.638z"
  }));
});
FiletypeWoff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
FiletypeWoff.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
module.exportDefault(FiletypeWoff);
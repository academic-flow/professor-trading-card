let React,forwardRef;module.link('react',{default(v){React=v},forwardRef(v){forwardRef=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);var _excluded = ["color", "size", "title"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var FiletypeMov = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-6.914 9.166v.522q0 .384-.117.641a.86.86 0 0 1-.323.387.9.9 0 0 1-.468.126.9.9 0 0 1-.472-.126.87.87 0 0 1-.32-.386 1.55 1.55 0 0 1-.117-.642v-.522q0-.386.118-.641a.87.87 0 0 1 .319-.387.87.87 0 0 1 .472-.129q.263 0 .468.13a.86.86 0 0 1 .323.386q.117.255.117.641m.802.519v-.513q0-.565-.205-.972a1.46 1.46 0 0 0-.588-.63q-.381-.22-.917-.22-.534 0-.92.22a1.44 1.44 0 0 0-.59.627q-.204.406-.204.975v.513q0 .563.205.973.205.406.589.627.386.216.92.216.536 0 .917-.216.383-.22.588-.627.205-.41.205-.973m-7.182 1.74v-2.66h.038l.952 2.16h.516l.946-2.16h.038v2.66h.715v-3.999h-.8l-1.14 2.596h-.026l-1.14-2.596H0v4zm9.54 0h-.952l-1.34-3.999h.918l.896 3.138h.038l.888-3.138h.879z"
  }));
});
FiletypeMov.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
FiletypeMov.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
module.exportDefault(FiletypeMov);
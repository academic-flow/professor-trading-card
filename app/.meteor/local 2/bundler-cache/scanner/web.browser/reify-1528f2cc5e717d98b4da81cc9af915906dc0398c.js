let React,forwardRef;module.link('react',{default(v){React=v},forwardRef(v){forwardRef=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);var _excluded = ["color", "size", "title"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var FiletypeAac = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-5.808 8.554a1.7 1.7 0 0 0-.103.633v.495q0 .369.103.627a.83.83 0 0 0 .299.393.85.85 0 0 0 .477.131.9.9 0 0 0 .402-.088.7.7 0 0 0 .272-.248.8.8 0 0 0 .117-.364h.765v.076a1.27 1.27 0 0 1-.226.674q-.204.29-.55.454a1.8 1.8 0 0 1-.785.164q-.54 0-.915-.216a1.4 1.4 0 0 1-.57-.627q-.195-.408-.194-.976v-.498q0-.568.196-.978.195-.411.571-.633.378-.223.912-.223.327 0 .606.097.28.093.49.272a1.33 1.33 0 0 1 .465.964v.073h-.765a.85.85 0 0 0-.12-.38.7.7 0 0 0-.272-.261.8.8 0 0 0-.399-.097.8.8 0 0 0-.474.138.87.87 0 0 0-.302.398M.8 15.925l.313-1.028H2.45l.314 1.028h.84l-1.335-3.999h-.926l-1.342 4zm1.002-3.234.489 1.617H1.277l.49-1.617zm2.63 3.234.313-1.028H6.08l.313 1.028h.841L5.9 11.926h-.926l-1.341 4zm1.001-3.234.49 1.617H4.909l.49-1.617z"
  }));
});
FiletypeAac.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
FiletypeAac.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
module.exportDefault(FiletypeAac);
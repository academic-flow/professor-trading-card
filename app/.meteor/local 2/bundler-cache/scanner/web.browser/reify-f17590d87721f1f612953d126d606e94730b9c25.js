let React,forwardRef;module.link('react',{default(v){React=v},forwardRef(v){forwardRef=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);var _excluded = ["color", "size", "title"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EmojiKissFill = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M16 8a8 8 0 1 0-2.697 5.99c-.972-.665-1.632-1.356-1.99-2.062-.388-.766-.419-1.561-.075-2.23.496-.97 1.73-1.466 2.762-1.05.65-.262 1.38-.162 1.957.19Q16 8.425 16 8M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m1.512 3.647c-.347.08-.737.198-1.107.319a.5.5 0 1 1-.31-.95c.38-.125.802-.254 1.192-.343.37-.086.78-.153 1.103-.108.16.022.394.085.561.286.188.226.187.497.131.705a1.9 1.9 0 0 1-.31.593q-.115.16-.275.343.16.186.276.347c.142.197.256.397.31.595.055.208.056.479-.132.706-.168.2-.404.262-.563.284-.323.043-.733-.027-1.102-.113a15 15 0 0 1-1.191-.345.5.5 0 1 1 .31-.95c.371.12.761.24 1.109.321q.264.062.446.084a6 6 0 0 0-.502-.584.5.5 0 0 1 .002-.695 5.5 5.5 0 0 0 .5-.577 5 5 0 0 0-.448.082m.766-.086-.006-.002zm.002 1.867-.005.001.006-.002Zm.157-4.685a.5.5 0 0 1-.874-.486A1.93 1.93 0 0 1 10.25 5.75c.73 0 1.356.412 1.687 1.007a.5.5 0 1 1-.874.486.93.93 0 0 0-.813-.493.93.93 0 0 0-.813.493M14 9.828c1.11-1.14 3.884.856 0 3.422-3.884-2.566-1.11-4.562 0-3.421Z"
  }));
});
EmojiKissFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
EmojiKissFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
module.exportDefault(EmojiKissFill);
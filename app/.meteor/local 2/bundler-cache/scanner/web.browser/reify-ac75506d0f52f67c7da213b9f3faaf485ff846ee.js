let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let classNames;module.link('classnames',{default(v){classNames=v}},2);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},3);



const propTypes = {
  /** An accessible label indicating the relevant information about the Close Button. */
  'aria-label': PropTypes.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: PropTypes.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: PropTypes.oneOf(['white'])
};
const CloseButton = /*#__PURE__*/React.forwardRef(({
  className,
  variant,
  'aria-label': ariaLabel = 'Close',
  ...props
}, ref) => /*#__PURE__*/_jsx("button", {
  ref: ref,
  type: "button",
  className: classNames('btn-close', variant && `btn-close-${variant}`, className),
  "aria-label": ariaLabel,
  ...props
}));
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
module.exportDefault(CloseButton);
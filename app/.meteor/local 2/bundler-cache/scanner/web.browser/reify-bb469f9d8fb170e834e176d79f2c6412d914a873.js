"use client";module.export({propTypes:()=>propTypes},true);let classNames;module.link('classnames',{default(v){classNames=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},3);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},4);






const propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: PropTypes.string,
  /**
   * Sets image as fluid image.
   */
  fluid: PropTypes.bool,
  /**
   * Sets image shape as rounded.
   */
  rounded: PropTypes.bool,
  /**
   * Sets image shape as circle.
   */
  roundedCircle: PropTypes.bool,
  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: PropTypes.bool
};
const Image = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  fluid = false,
  rounded = false,
  roundedCircle = false,
  thumbnail = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'img');
  return /*#__PURE__*/_jsx("img", {
    // eslint-disable-line jsx-a11y/alt-text
    ref: ref,
    ...props,
    className: classNames(className, fluid && `${bsPrefix}-fluid`, rounded && `rounded`, roundedCircle && `rounded-circle`, thumbnail && `${bsPrefix}-thumbnail`)
  });
});
Image.displayName = 'Image';
module.exportDefault(Image);
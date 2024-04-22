"use client";let React;module.link('react',{"*"(v){React=v}},0);let classNames;module.link('classnames',{default(v){classNames=v}},1);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},2);let divWithClassName;module.link('./divWithClassName',{default(v){divWithClassName=v}},3);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},4);






const DivStyledAsH4 = divWithClassName('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';
const AlertHeading = /*#__PURE__*/React.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH4,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'alert-heading');
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
AlertHeading.displayName = 'AlertHeading';
module.exportDefault(AlertHeading);
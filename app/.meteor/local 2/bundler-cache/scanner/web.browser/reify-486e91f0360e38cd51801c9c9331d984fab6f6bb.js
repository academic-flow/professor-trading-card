"use client";let React;module.link('react',{"*"(v){React=v}},0);let classNames;module.link('classnames',{default(v){classNames=v}},1);let Anchor;module.link('@restart/ui/Anchor',{default(v){Anchor=v}},2);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},3);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},4);






const AlertLink = /*#__PURE__*/React.forwardRef(({
  className,
  bsPrefix,
  as: Component = Anchor,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'alert-link');
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
AlertLink.displayName = 'AlertLink';
module.exportDefault(AlertLink);
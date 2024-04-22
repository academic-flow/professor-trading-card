"use client";let React;module.link('react',{"*"(v){React=v}},0);let classNames;module.link('classnames',{default(v){classNames=v}},1);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},2);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},3);





const CardLink = /*#__PURE__*/React.forwardRef(({
  className,
  bsPrefix,
  as: Component = 'a',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'card-link');
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
CardLink.displayName = 'CardLink';
module.exportDefault(CardLink);
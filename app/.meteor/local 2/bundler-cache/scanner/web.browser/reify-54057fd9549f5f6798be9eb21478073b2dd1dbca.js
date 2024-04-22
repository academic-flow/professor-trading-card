"use client";let classNames;module.link('classnames',{default(v){classNames=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},2);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},3);





const ButtonToolbar = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  role = 'toolbar',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'btn-toolbar');
  return /*#__PURE__*/_jsx("div", {
    ...props,
    ref: ref,
    className: classNames(className, prefix),
    role: role
  });
});
ButtonToolbar.displayName = 'ButtonToolbar';
module.exportDefault(ButtonToolbar);
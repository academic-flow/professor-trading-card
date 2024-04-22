"use client";let React;module.link('react',{"*"(v){React=v}},0);let classNames;module.link('classnames',{default(v){classNames=v}},1);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},2);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},3);





const DropdownDivider = /*#__PURE__*/React.forwardRef(({
  className,
  bsPrefix,
  as: Component = 'hr',
  role = 'separator',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'dropdown-divider');
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    className: classNames(className, bsPrefix),
    role: role,
    ...props
  });
});
DropdownDivider.displayName = 'DropdownDivider';
module.exportDefault(DropdownDivider);
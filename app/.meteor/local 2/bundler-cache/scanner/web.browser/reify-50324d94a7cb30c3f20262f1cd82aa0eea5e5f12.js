"use client";let useMergedRefs;module.link('@restart/hooks/useMergedRefs',{default(v){useMergedRefs=v}},0);let DropdownContext;module.link('@restart/ui/DropdownContext',{default(v){DropdownContext=v}},1);let useDropdownToggle;module.link('@restart/ui/DropdownToggle',{useDropdownToggle(v){useDropdownToggle=v}},2);let classNames;module.link('classnames',{default(v){classNames=v}},3);let React;module.link('react',{"*"(v){React=v}},4);let useContext;module.link('react',{useContext(v){useContext=v}},5);let Button;module.link('./Button',{default(v){Button=v}},6);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},7);let useWrappedRefWithWarning;module.link('./useWrappedRefWithWarning',{default(v){useWrappedRefWithWarning=v}},8);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},9);











const DropdownToggle = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  split,
  className,
  childBsPrefix,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = Button,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-toggle');
  const dropdownContext = useContext(DropdownContext);
  if (childBsPrefix !== undefined) {
    props.bsPrefix = childBsPrefix;
  }
  const [toggleProps] = useDropdownToggle();
  toggleProps.ref = useMergedRefs(toggleProps.ref, useWrappedRefWithWarning(ref, 'DropdownToggle'));

  // This intentionally forwards size and variant (if set) to the
  // underlying component, to allow it to render size and style variants.
  return /*#__PURE__*/_jsx(Component, {
    className: classNames(className, prefix, split && `${prefix}-split`, (dropdownContext == null ? void 0 : dropdownContext.show) && 'show'),
    ...toggleProps,
    ...props
  });
});
DropdownToggle.displayName = 'DropdownToggle';
module.exportDefault(DropdownToggle);
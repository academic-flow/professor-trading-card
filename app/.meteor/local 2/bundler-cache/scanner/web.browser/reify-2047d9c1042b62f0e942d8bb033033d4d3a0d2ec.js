"use client";let classNames;module.link('classnames',{default(v){classNames=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let useCallback,useMemo;module.link('react',{useCallback(v){useCallback=v},useMemo(v){useMemo=v}},2);let SelectableContext;module.link('@restart/ui/SelectableContext',{default(v){SelectableContext=v}},3);let useUncontrolled;module.link('uncontrollable',{useUncontrolled(v){useUncontrolled=v}},4);let NavbarBrand;module.link('./NavbarBrand',{default(v){NavbarBrand=v}},5);let NavbarCollapse;module.link('./NavbarCollapse',{default(v){NavbarCollapse=v}},6);let NavbarToggle;module.link('./NavbarToggle',{default(v){NavbarToggle=v}},7);let NavbarOffcanvas;module.link('./NavbarOffcanvas',{default(v){NavbarOffcanvas=v}},8);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},9);let NavbarContext;module.link('./NavbarContext',{default(v){NavbarContext=v}},10);let NavbarText;module.link('./NavbarText',{default(v){NavbarText=v}},11);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},12);














const Navbar = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    expand = true,
    variant = 'light',
    bg,
    fixed,
    sticky,
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'nav',
    expanded,
    onToggle,
    onSelect,
    collapseOnSelect = false,
    ...controlledProps
  } = useUncontrolled(props, {
    expanded: 'onToggle'
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'navbar');
  const handleCollapse = useCallback((...args) => {
    onSelect == null ? void 0 : onSelect(...args);
    if (collapseOnSelect && expanded) {
      onToggle == null ? void 0 : onToggle(false);
    }
  }, [onSelect, collapseOnSelect, expanded, onToggle]);

  // will result in some false positives but that seems better
  // than false negatives. strict `undefined` check allows explicit
  // "nulling" of the role if the user really doesn't want one
  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }
  let expandClass = `${bsPrefix}-expand`;
  if (typeof expand === 'string') expandClass = `${expandClass}-${expand}`;
  const navbarContext = useMemo(() => ({
    onToggle: () => onToggle == null ? void 0 : onToggle(!expanded),
    bsPrefix,
    expanded: !!expanded,
    expand
  }), [bsPrefix, expanded, expand, onToggle]);
  return /*#__PURE__*/_jsx(NavbarContext.Provider, {
    value: navbarContext,
    children: /*#__PURE__*/_jsx(SelectableContext.Provider, {
      value: handleCollapse,
      children: /*#__PURE__*/_jsx(Component, {
        ref: ref,
        ...controlledProps,
        className: classNames(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
      })
    })
  });
});
Navbar.displayName = 'Navbar';
module.exportDefault(Object.assign(Navbar, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Offcanvas: NavbarOffcanvas,
  Text: NavbarText,
  Toggle: NavbarToggle
}));
"use client";module.export({getDropdownMenuPlacement:()=>getDropdownMenuPlacement});let classNames;module.link('classnames',{default(v){classNames=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let useContext;module.link('react',{useContext(v){useContext=v}},2);let useDropdownMenu;module.link('@restart/ui/DropdownMenu',{useDropdownMenu(v){useDropdownMenu=v}},3);let useIsomorphicEffect;module.link('@restart/hooks/useIsomorphicEffect',{default(v){useIsomorphicEffect=v}},4);let useMergedRefs;module.link('@restart/hooks/useMergedRefs',{default(v){useMergedRefs=v}},5);let warning;module.link('warning',{default(v){warning=v}},6);let DropdownContext;module.link('./DropdownContext',{default(v){DropdownContext=v}},7);let InputGroupContext;module.link('./InputGroupContext',{default(v){InputGroupContext=v}},8);let NavbarContext;module.link('./NavbarContext',{default(v){NavbarContext=v}},9);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},10);let useWrappedRefWithWarning;module.link('./useWrappedRefWithWarning',{default(v){useWrappedRefWithWarning=v}},11);let alignPropType;module.link('./types',{alignPropType(v){alignPropType=v}},12);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},13);















function getDropdownMenuPlacement(alignEnd, dropDirection, isRTL) {
  const topStart = isRTL ? 'top-end' : 'top-start';
  const topEnd = isRTL ? 'top-start' : 'top-end';
  const bottomStart = isRTL ? 'bottom-end' : 'bottom-start';
  const bottomEnd = isRTL ? 'bottom-start' : 'bottom-end';
  const leftStart = isRTL ? 'right-start' : 'left-start';
  const leftEnd = isRTL ? 'right-end' : 'left-end';
  const rightStart = isRTL ? 'left-start' : 'right-start';
  const rightEnd = isRTL ? 'left-end' : 'right-end';
  let placement = alignEnd ? bottomEnd : bottomStart;
  if (dropDirection === 'up') placement = alignEnd ? topEnd : topStart;else if (dropDirection === 'end') placement = alignEnd ? rightEnd : rightStart;else if (dropDirection === 'start') placement = alignEnd ? leftEnd : leftStart;else if (dropDirection === 'down-centered') placement = 'bottom';else if (dropDirection === 'up-centered') placement = 'top';
  return placement;
}
const DropdownMenu = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  align,
  rootCloseEvent,
  flip = true,
  show: showProps,
  renderOnMount,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  popperConfig,
  variant,
  ...props
}, ref) => {
  let alignEnd = false;
  const isNavbar = useContext(NavbarContext);
  const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-menu');
  const {
    align: contextAlign,
    drop,
    isRTL
  } = useContext(DropdownContext);
  align = align || contextAlign;
  const isInputGroup = useContext(InputGroupContext);
  const alignClasses = [];
  if (align) {
    if (typeof align === 'object') {
      const keys = Object.keys(align);
      process.env.NODE_ENV !== "production" ? warning(keys.length === 1, 'There should only be 1 breakpoint when passing an object to `align`') : void 0;
      if (keys.length) {
        const brkPoint = keys[0];
        const direction = align[brkPoint];

        // .dropdown-menu-end is required for responsively aligning
        // left in addition to align left classes.
        alignEnd = direction === 'start';
        alignClasses.push(`${prefix}-${brkPoint}-${direction}`);
      }
    } else if (align === 'end') {
      alignEnd = true;
    }
  }
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const [menuProps, {
    hasShown,
    popper,
    show,
    toggle
  }] = useDropdownMenu({
    flip,
    rootCloseEvent,
    show: showProps,
    usePopper: !isNavbar && alignClasses.length === 0,
    offset: [0, 2],
    popperConfig,
    placement
  });
  menuProps.ref = useMergedRefs(useWrappedRefWithWarning(ref, 'DropdownMenu'), menuProps.ref);
  useIsomorphicEffect(() => {
    // Popper's initial position for the menu is incorrect when
    // renderOnMount=true. Need to call update() to correct it.
    if (show) popper == null ? void 0 : popper.update();
  }, [show]);
  if (!hasShown && !renderOnMount && !isInputGroup) return null;

  // For custom components provide additional, non-DOM, props;
  if (typeof Component !== 'string') {
    menuProps.show = show;
    menuProps.close = () => toggle == null ? void 0 : toggle(false);
    menuProps.align = align;
  }
  let style = props.style;
  if (popper != null && popper.placement) {
    // we don't need the default popper style,
    // menus are display: none when not shown.
    style = {
      ...props.style,
      ...menuProps.style
    };
    props['x-placement'] = popper.placement;
  }
  return /*#__PURE__*/_jsx(Component, {
    ...props,
    ...menuProps,
    style: style
    // Bootstrap css requires this data attrib to style responsive menus.
    ,
    ...((alignClasses.length || isNavbar) && {
      'data-bs-popper': 'static'
    }),
    className: classNames(className, prefix, show && 'show', alignEnd && `${prefix}-end`, variant && `${prefix}-${variant}`, ...alignClasses)
  });
});
DropdownMenu.displayName = 'DropdownMenu';
module.exportDefault(DropdownMenu);
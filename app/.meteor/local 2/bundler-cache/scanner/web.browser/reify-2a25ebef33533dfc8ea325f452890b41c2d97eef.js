"use client";let classNames;module.link('classnames',{default(v){classNames=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let useContext,useMemo;module.link('react',{useContext(v){useContext=v},useMemo(v){useMemo=v}},2);let BaseDropdown;module.link('@restart/ui/Dropdown',{default(v){BaseDropdown=v}},3);let useUncontrolled;module.link('uncontrollable',{useUncontrolled(v){useUncontrolled=v}},4);let useEventCallback;module.link('@restart/hooks/useEventCallback',{default(v){useEventCallback=v}},5);let DropdownContext;module.link('./DropdownContext',{default(v){DropdownContext=v}},6);let DropdownDivider;module.link('./DropdownDivider',{default(v){DropdownDivider=v}},7);let DropdownHeader;module.link('./DropdownHeader',{default(v){DropdownHeader=v}},8);let DropdownItem;module.link('./DropdownItem',{default(v){DropdownItem=v}},9);let DropdownItemText;module.link('./DropdownItemText',{default(v){DropdownItemText=v}},10);let DropdownMenu,getDropdownMenuPlacement;module.link('./DropdownMenu',{default(v){DropdownMenu=v},getDropdownMenuPlacement(v){getDropdownMenuPlacement=v}},11);let DropdownToggle;module.link('./DropdownToggle',{default(v){DropdownToggle=v}},12);let InputGroupContext;module.link('./InputGroupContext',{default(v){InputGroupContext=v}},13);let useBootstrapPrefix,useIsRTL;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v},useIsRTL(v){useIsRTL=v}},14);let alignPropType;module.link('./types',{alignPropType(v){alignPropType=v}},15);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},16);


















const Dropdown = /*#__PURE__*/React.forwardRef((pProps, ref) => {
  const {
    bsPrefix,
    drop = 'down',
    show,
    className,
    align = 'start',
    onSelect,
    onToggle,
    focusFirstItemOnShow,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    navbar: _4,
    autoClose = true,
    ...props
  } = useUncontrolled(pProps, {
    show: 'onToggle'
  });
  const isInputGroup = useContext(InputGroupContext);
  const prefix = useBootstrapPrefix(bsPrefix, 'dropdown');
  const isRTL = useIsRTL();
  const isClosingPermitted = source => {
    // autoClose=false only permits close on button click
    if (autoClose === false) return source === 'click';

    // autoClose=inside doesn't permit close on rootClose
    if (autoClose === 'inside') return source !== 'rootClose';

    // autoClose=outside doesn't permit close on select
    if (autoClose === 'outside') return source !== 'select';
    return true;
  };
  const handleToggle = useEventCallback((nextShow, meta) => {
    var _meta$originalEvent, _meta$originalEvent$t;
    /** Checking if target of event is ToggleButton,
     * if it is then nullify mousedown event
     */
    const isToggleButton = (_meta$originalEvent = meta.originalEvent) == null ? void 0 : (_meta$originalEvent$t = _meta$originalEvent.target) == null ? void 0 : _meta$originalEvent$t.classList.contains('dropdown-toggle');
    if (isToggleButton && meta.source === 'mousedown') {
      return;
    }
    if (meta.originalEvent.currentTarget === document && (meta.source !== 'keydown' || meta.originalEvent.key === 'Escape')) meta.source = 'rootClose';
    if (isClosingPermitted(meta.source)) onToggle == null ? void 0 : onToggle(nextShow, meta);
  });
  const alignEnd = align === 'end';
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const contextValue = useMemo(() => ({
    align,
    drop,
    isRTL
  }), [align, drop, isRTL]);
  const directionClasses = {
    down: prefix,
    'down-centered': `${prefix}-center`,
    up: 'dropup',
    'up-centered': 'dropup-center dropup',
    end: 'dropend',
    start: 'dropstart'
  };
  return /*#__PURE__*/_jsx(DropdownContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/_jsx(BaseDropdown, {
      placement: placement,
      show: show,
      onSelect: onSelect,
      onToggle: handleToggle,
      focusFirstItemOnShow: focusFirstItemOnShow,
      itemSelector: `.${prefix}-item:not(.disabled):not(:disabled)`,
      children: isInputGroup ? props.children : /*#__PURE__*/_jsx(Component, {
        ...props,
        ref: ref,
        className: classNames(className, show && 'show', directionClasses[drop])
      })
    })
  });
});
Dropdown.displayName = 'Dropdown';
module.exportDefault(Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
  ItemText: DropdownItemText,
  Divider: DropdownDivider,
  Header: DropdownHeader
}));
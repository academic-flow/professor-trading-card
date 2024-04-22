"use client";let classNames;module.link('classnames',{default(v){classNames=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let useUncontrolled;module.link('uncontrollable',{useUncontrolled(v){useUncontrolled=v}},2);let useEventCallback;module.link('@restart/hooks/useEventCallback',{default(v){useEventCallback=v}},3);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},4);let AlertHeading;module.link('./AlertHeading',{default(v){AlertHeading=v}},5);let AlertLink;module.link('./AlertLink',{default(v){AlertLink=v}},6);let Fade;module.link('./Fade',{default(v){Fade=v}},7);let CloseButton;module.link('./CloseButton',{default(v){CloseButton=v}},8);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},9);let _jsxs;module.link("react/jsx-runtime",{jsxs(v){_jsxs=v}},10);












const Alert = /*#__PURE__*/React.forwardRef((uncontrolledProps, ref) => {
  const {
    bsPrefix,
    show = true,
    closeLabel = 'Close alert',
    closeVariant,
    className,
    children,
    variant = 'primary',
    onClose,
    dismissible,
    transition = Fade,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    show: 'onClose'
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'alert');
  const handleClose = useEventCallback(e => {
    if (onClose) {
      onClose(false, e);
    }
  });
  const Transition = transition === true ? Fade : transition;
  const alert = /*#__PURE__*/_jsxs("div", {
    role: "alert",
    ...(!Transition ? props : undefined),
    ref: ref,
    className: classNames(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
    children: [dismissible && /*#__PURE__*/_jsx(CloseButton, {
      onClick: handleClose,
      "aria-label": closeLabel,
      variant: closeVariant
    }), children]
  });
  if (!Transition) return show ? alert : null;
  return /*#__PURE__*/_jsx(Transition, {
    unmountOnExit: true,
    ...props,
    ref: undefined,
    in: show,
    children: alert
  });
});
Alert.displayName = 'Alert';
module.exportDefault(Object.assign(Alert, {
  Link: AlertLink,
  Heading: AlertHeading
}));
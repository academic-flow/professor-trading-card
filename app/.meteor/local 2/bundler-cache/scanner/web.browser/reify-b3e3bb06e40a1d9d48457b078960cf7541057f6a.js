"use client";let classNames;module.link('classnames',{default(v){classNames=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let useBootstrapPrefix,useIsRTL;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v},useIsRTL(v){useIsRTL=v}},2);let getOverlayDirection;module.link('./helpers',{getOverlayDirection(v){getOverlayDirection=v}},3);let getInitialPopperStyles;module.link('./getInitialPopperStyles',{default(v){getInitialPopperStyles=v}},4);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},5);let _jsxs;module.link("react/jsx-runtime",{jsxs(v){_jsxs=v}},6);








const Tooltip = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  placement = 'right',
  className,
  style,
  children,
  arrowProps,
  hasDoneInitialMeasure,
  popper,
  show,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'tooltip');
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  let computedStyle = style;
  if (show && !hasDoneInitialMeasure) {
    computedStyle = {
      ...style,
      ...getInitialPopperStyles(popper == null ? void 0 : popper.strategy)
    };
  }
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    style: computedStyle,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: classNames(className, bsPrefix, `bs-tooltip-${bsDirection}`),
    ...props,
    children: [/*#__PURE__*/_jsx("div", {
      className: "tooltip-arrow",
      ...arrowProps
    }), /*#__PURE__*/_jsx("div", {
      className: `${bsPrefix}-inner`,
      children: children
    })]
  });
});
Tooltip.displayName = 'Tooltip';
module.exportDefault(Object.assign(Tooltip, {
  // Default tooltip offset.
  // https://github.com/twbs/bootstrap/blob/beca2a6c7f6bc88b6449339fc76edcda832c59e5/js/src/tooltip.js#L65
  TOOLTIP_OFFSET: [0, 6]
}));
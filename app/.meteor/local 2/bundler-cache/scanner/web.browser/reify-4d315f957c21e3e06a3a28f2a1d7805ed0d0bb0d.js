let classNames;module.link('classnames',{default(v){classNames=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let useCallback;module.link('react',{useCallback(v){useCallback=v}},2);let ENTERED,ENTERING;module.link('react-transition-group/Transition',{ENTERED(v){ENTERED=v},ENTERING(v){ENTERING=v}},3);let transitionEndListener;module.link('./transitionEndListener',{default(v){transitionEndListener=v}},4);let triggerBrowserReflow;module.link('./triggerBrowserReflow',{default(v){triggerBrowserReflow=v}},5);let TransitionWrapper;module.link('./TransitionWrapper',{default(v){TransitionWrapper=v}},6);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},7);







const fadeStyles = {
  [ENTERING]: 'show',
  [ENTERED]: 'show'
};
const Fade = /*#__PURE__*/React.forwardRef(({
  className,
  children,
  transitionClasses = {},
  onEnter,
  ...rest
}, ref) => {
  const props = {
    in: false,
    timeout: 300,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    ...rest
  };
  const handleEnter = useCallback((node, isAppearing) => {
    triggerBrowserReflow(node);
    onEnter == null ? void 0 : onEnter(node, isAppearing);
  }, [onEnter]);
  return /*#__PURE__*/_jsx(TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/React.cloneElement(children, {
      ...innerProps,
      className: classNames('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.displayName = 'Fade';
module.exportDefault(Fade);
let React;module.link('react',{"*"(v){React=v}},0);let ReactDOM;module.link('react-dom',{default(v){ReactDOM=v}},1);let useCallbackRef;module.link('@restart/hooks/useCallbackRef',{default(v){useCallbackRef=v}},2);let useMergedRefs;module.link('@restart/hooks/useMergedRefs',{default(v){useMergedRefs=v}},3);let useState;module.link('react',{useState(v){useState=v}},4);let usePopper;module.link('./usePopper',{default(v){usePopper=v}},5);let useRootClose;module.link('./useRootClose',{default(v){useRootClose=v}},6);let useWaitForDOMRef;module.link('./useWaitForDOMRef',{default(v){useWaitForDOMRef=v}},7);let mergeOptionsWithPopperConfig;module.link('./mergeOptionsWithPopperConfig',{default(v){mergeOptionsWithPopperConfig=v}},8);let renderTransition;module.link('./ImperativeTransition',{renderTransition(v){renderTransition=v}},9);









/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
const Overlay = /*#__PURE__*/React.forwardRef((props, outerRef) => {
  const {
    flip,
    offset,
    placement,
    containerPadding,
    popperConfig = {},
    transition: Transition,
    runTransition
  } = props;
  const [rootElement, attachRef] = useCallbackRef();
  const [arrowElement, attachArrowRef] = useCallbackRef();
  const mergedRef = useMergedRefs(attachRef, outerRef);
  const container = useWaitForDOMRef(props.container);
  const target = useWaitForDOMRef(props.target);
  const [exited, setExited] = useState(!props.show);
  const popper = usePopper(target, rootElement, mergeOptionsWithPopperConfig({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip,
    offset,
    arrowElement,
    popperConfig
  }));

  // TODO: I think this needs to be in an effect
  if (props.show && exited) {
    setExited(false);
  }
  const handleHidden = (...args) => {
    setExited(true);
    if (props.onExited) {
      props.onExited(...args);
    }
  };

  // Don't un-render the overlay while it's transitioning out.
  const mountOverlay = props.show || !exited;
  useRootClose(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });
  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }
  const {
    onExit,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = props;
  let child = props.children(Object.assign({}, popper.attributes.popper, {
    style: popper.styles.popper,
    ref: mergedRef
  }), {
    popper,
    placement,
    show: !!props.show,
    arrowProps: Object.assign({}, popper.attributes.arrow, {
      style: popper.styles.arrow,
      ref: attachArrowRef
    })
  });
  child = renderTransition(Transition, runTransition, {
    in: !!props.show,
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
    children: child,
    onExit,
    onExiting,
    onExited: handleHidden,
    onEnter,
    onEntering,
    onEntered
  });
  return container ? /*#__PURE__*/ReactDOM.createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
module.exportDefault(Overlay);
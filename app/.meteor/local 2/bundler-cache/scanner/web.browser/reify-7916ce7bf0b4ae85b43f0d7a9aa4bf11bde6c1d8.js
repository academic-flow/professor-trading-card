module.export({useTransition:()=>useTransition,default:()=>ImperativeTransition,renderTransition:()=>renderTransition});let useMergedRefs;module.link('@restart/hooks/useMergedRefs',{default(v){useMergedRefs=v}},0);let useEventCallback;module.link('@restart/hooks/useEventCallback',{default(v){useEventCallback=v}},1);let useIsomorphicEffect;module.link('@restart/hooks/useIsomorphicEffect',{default(v){useIsomorphicEffect=v}},2);let React,useRef,cloneElement,useState;module.link('react',{default(v){React=v},useRef(v){useRef=v},cloneElement(v){cloneElement=v},useState(v){useState=v}},3);let NoopTransition;module.link('./NoopTransition',{default(v){NoopTransition=v}},4);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},5);





function useTransition({
  in: inProp,
  onTransition
}) {
  const ref = useRef(null);
  const isInitialRef = useRef(true);
  const handleTransition = useEventCallback(onTransition);
  useIsomorphicEffect(() => {
    if (!ref.current) {
      return undefined;
    }
    let stale = false;
    handleTransition({
      in: inProp,
      element: ref.current,
      initial: isInitialRef.current,
      isStale: () => stale
    });
    return () => {
      stale = true;
    };
  }, [inProp, handleTransition]);
  useIsomorphicEffect(() => {
    isInitialRef.current = false;
    // this is for strict mode
    return () => {
      isInitialRef.current = true;
    };
  }, []);
  return ref;
}
/**
 * Adapts an imperative transition function to a subset of the RTG `<Transition>` component API.
 *
 * ImperativeTransition does not support mounting options or `appear` at the moment, meaning
 * that it always acts like: `mountOnEnter={true} unmountOnExit={true} appear={true}`
 */
function ImperativeTransition({
  children,
  in: inProp,
  onExited,
  onEntered,
  transition
}) {
  const [exited, setExited] = useState(!inProp);

  // TODO: I think this needs to be in an effect
  if (inProp && exited) {
    setExited(false);
  }
  const ref = useTransition({
    in: !!inProp,
    onTransition: options => {
      const onFinish = () => {
        if (options.isStale()) return;
        if (options.in) {
          onEntered == null ? void 0 : onEntered(options.element, options.initial);
        } else {
          setExited(true);
          onExited == null ? void 0 : onExited(options.element);
        }
      };
      Promise.resolve(transition(options)).then(onFinish, error => {
        if (!options.in) setExited(true);
        throw error;
      });
    }
  });
  const combinedRef = useMergedRefs(ref, children.ref);
  return exited && !inProp ? null : /*#__PURE__*/cloneElement(children, {
    ref: combinedRef
  });
}
function renderTransition(Component, runTransition, props) {
  if (Component) {
    return /*#__PURE__*/_jsx(Component, Object.assign({}, props));
  }
  if (runTransition) {
    return /*#__PURE__*/_jsx(ImperativeTransition, Object.assign({}, props, {
      transition: runTransition
    }));
  }
  return /*#__PURE__*/_jsx(NoopTransition, Object.assign({}, props));
}
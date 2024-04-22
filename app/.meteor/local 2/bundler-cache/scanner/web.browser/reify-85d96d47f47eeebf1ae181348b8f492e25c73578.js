let useEventCallback;module.link('@restart/hooks/useEventCallback',{default(v){useEventCallback=v}},0);let useMergedRefs;module.link('@restart/hooks/useMergedRefs',{default(v){useMergedRefs=v}},1);let cloneElement,useEffect,useRef;module.link('react',{cloneElement(v){cloneElement=v},useEffect(v){useEffect=v},useRef(v){useRef=v}},2);


function NoopTransition({
  children,
  in: inProp,
  onExited,
  mountOnEnter,
  unmountOnExit
}) {
  const ref = useRef(null);
  const hasEnteredRef = useRef(inProp);
  const handleExited = useEventCallback(onExited);
  useEffect(() => {
    if (inProp) hasEnteredRef.current = true;else {
      handleExited(ref.current);
    }
  }, [inProp, handleExited]);
  const combinedRef = useMergedRefs(ref, children.ref);
  const child = /*#__PURE__*/cloneElement(children, {
    ref: combinedRef
  });
  if (inProp) return child;
  if (unmountOnExit) {
    return null;
  }
  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }
  return child;
}
module.exportDefault(NoopTransition);
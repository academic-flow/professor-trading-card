module.export({default:()=>useWrappedRefWithWarning});let invariant;module.link('invariant',{default(v){invariant=v}},0);let useCallback;module.link('react',{useCallback(v){useCallback=v}},1);let useMergedRefs;module.link('@restart/hooks/useMergedRefs',{default(v){useMergedRefs=v}},2);


function useWrappedRefWithWarning(ref, componentName) {
  // @ts-ignore
  if (!(process.env.NODE_ENV !== "production")) return ref;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const warningRef = useCallback(refValue => {
    !(refValue == null || !refValue.isReactComponent) ? process.env.NODE_ENV !== "production" ? invariant(false, `${componentName} injected a ref to a provided \`as\` component that resolved to a component instance instead of a DOM element. ` + 'Use `React.forwardRef` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element') : invariant(false) : void 0;
  }, [componentName]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMergedRefs(warningRef, ref);
}
module.export({default:()=>useEventCallback});let useCallback;module.link('react',{useCallback(v){useCallback=v}},0);let useCommittedRef;module.link('./useCommittedRef',{default(v){useCommittedRef=v}},1);

function useEventCallback(fn) {
  const ref = useCommittedRef(fn);
  return useCallback(function (...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}
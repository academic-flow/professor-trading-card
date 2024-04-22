let useCallback;module.link('react',{useCallback(v){useCallback=v}},0);let useMounted;module.link('./useMounted',{default(v){useMounted=v}},1);


/**
 * `useSafeState` takes the return value of a `useState` hook and wraps the
 * setter to prevent updates onces the component has unmounted. Can used
 * with `useMergeState` and `useStateAsync` as well
 *
 * @param state The return value of a useStateHook
 *
 * ```ts
 * const [show, setShow] = useSafeState(useState(true));
 * ```
 */

function useSafeState(state) {
  const isMounted = useMounted();
  return [state[0], useCallback(nextState => {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}
module.exportDefault(useSafeState);
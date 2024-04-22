module.export({default:()=>useGlobalListener});let useEventListener;module.link('./useEventListener',{default(v){useEventListener=v}},0);let useCallback;module.link('react',{useCallback(v){useCallback=v}},1);

/**
 * Attaches an event handler outside directly to the `document`,
 * bypassing the react synthetic event system.
 *
 * ```ts
 * useGlobalListener('keydown', (event) => {
 *  console.log(event.key)
 * })
 * ```
 *
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useGlobalListener(event, handler, capture = false) {
  const documentTarget = useCallback(() => document, []);
  return useEventListener(documentTarget, event, handler, capture);
}
let listen;module.link('dom-helpers/listen',{default(v){listen=v}},0);let ownerDocument;module.link('dom-helpers/ownerDocument',{default(v){ownerDocument=v}},1);let useEffect;module.link('react',{useEffect(v){useEffect=v}},2);let useEventCallback;module.link('@restart/hooks/useEventCallback',{default(v){useEventCallback=v}},3);let useClickOutside,getRefTarget;module.link('./useClickOutside',{default(v){useClickOutside=v},getRefTarget(v){getRefTarget=v}},4);let isEscKey;module.link('./utils',{isEscKey(v){isEscKey=v}},5);





const noop = () => {};
/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useRootClose(ref, onRootClose, {
  disabled,
  clickTrigger
} = {}) {
  const onClose = onRootClose || noop;
  useClickOutside(ref, onClose, {
    disabled,
    clickTrigger
  });
  const handleKeyUp = useEventCallback(e => {
    if (isEscKey(e)) {
      onClose(e);
    }
  });
  useEffect(() => {
    if (disabled || ref == null) return undefined;
    const doc = ownerDocument(getRefTarget(ref));

    // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074
    let currentEvent = (doc.defaultView || window).event;
    const removeKeyupListener = listen(doc, 'keyup', e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }
      handleKeyUp(e);
    });
    return () => {
      removeKeyupListener();
    };
  }, [ref, disabled, handleKeyUp]);
}
module.exportDefault(useRootClose);
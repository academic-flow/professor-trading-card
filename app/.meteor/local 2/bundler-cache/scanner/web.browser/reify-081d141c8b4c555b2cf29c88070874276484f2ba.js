"use client";module.export({default:()=>useOverlayOffset});let useMemo,useRef;module.link('react',{useMemo(v){useMemo=v},useRef(v){useRef=v}},0);let hasClass;module.link('dom-helpers/hasClass',{default(v){hasClass=v}},1);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},2);let Popover;module.link('./Popover',{default(v){Popover=v}},3);let Tooltip;module.link('./Tooltip',{default(v){Tooltip=v}},4);







// This is meant for internal use.
// This applies a custom offset to the overlay if it's a popover or tooltip.
function useOverlayOffset(customOffset) {
  const overlayRef = useRef(null);
  const popoverClass = useBootstrapPrefix(undefined, 'popover');
  const tooltipClass = useBootstrapPrefix(undefined, 'tooltip');
  const offset = useMemo(() => ({
    name: 'offset',
    options: {
      offset: () => {
        if (customOffset) {
          return customOffset;
        }
        if (overlayRef.current) {
          if (hasClass(overlayRef.current, popoverClass)) {
            return Popover.POPPER_OFFSET;
          }
          if (hasClass(overlayRef.current, tooltipClass)) {
            return Tooltip.TOOLTIP_OFFSET;
          }
        }
        return [0, 0];
      }
    }
  }), [customOffset, popoverClass, tooltipClass]);
  return [overlayRef, [offset]];
}
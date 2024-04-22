module.export({default:()=>useWillUnmount});let useUpdatedRef;module.link('./useUpdatedRef',{default(v){useUpdatedRef=v}},0);let useEffect;module.link('react',{useEffect(v){useEffect=v}},1);


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */
function useWillUnmount(fn) {
  const onUnmount = useUpdatedRef(fn);
  useEffect(() => () => onUnmount.current(), []);
}
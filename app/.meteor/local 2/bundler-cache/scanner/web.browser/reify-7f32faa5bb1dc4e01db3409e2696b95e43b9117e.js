module.export({default:()=>useMergeStateFromProps});let useMergeState;module.link('./useMergeState',{default(v){useMergeState=v}},0);
function useMergeStateFromProps(props, gDSFP, initialState) {
  const [state, setState] = useMergeState(initialState);
  const nextState = gDSFP(props, state);
  if (nextState !== null) setState(nextState);
  return [state, setState];
}
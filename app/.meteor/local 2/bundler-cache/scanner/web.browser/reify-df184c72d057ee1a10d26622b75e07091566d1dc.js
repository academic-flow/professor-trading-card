module.export({isEscKey:()=>isEscKey});/* eslint-disable import/prefer-default-export */
function isEscKey(e) {
  return e.code === 'Escape' || e.keyCode === 27;
}
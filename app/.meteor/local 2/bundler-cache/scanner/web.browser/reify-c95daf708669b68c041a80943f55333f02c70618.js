"use client";let classNames;module.link('classnames',{default(v){classNames=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},2);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},3);





const positionClasses = {
  'top-start': 'top-0 start-0',
  'top-center': 'top-0 start-50 translate-middle-x',
  'top-end': 'top-0 end-0',
  'middle-start': 'top-50 start-0 translate-middle-y',
  'middle-center': 'top-50 start-50 translate-middle',
  'middle-end': 'top-50 end-0 translate-middle-y',
  'bottom-start': 'bottom-0 start-0',
  'bottom-center': 'bottom-0 start-50 translate-middle-x',
  'bottom-end': 'bottom-0 end-0'
};
const ToastContainer = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  position,
  containerPosition,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'toast-container');
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    ...props,
    className: classNames(bsPrefix, position && positionClasses[position], containerPosition && `position-${containerPosition}`, className)
  });
});
ToastContainer.displayName = 'ToastContainer';
module.exportDefault(ToastContainer);
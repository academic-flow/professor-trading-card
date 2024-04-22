"use client";let React;module.link('react',{"*"(v){React=v}},0);let classNames;module.link('classnames',{default(v){classNames=v}},1);let divWithClassName;module.link('./divWithClassName',{default(v){divWithClassName=v}},2);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},3);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},4);






const DivStyledAsH4 = divWithClassName('h4');
const ModalTitle = /*#__PURE__*/React.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH4,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal-title');
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
ModalTitle.displayName = 'ModalTitle';
module.exportDefault(ModalTitle);
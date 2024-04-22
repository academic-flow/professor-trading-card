"use client";let React;module.link('react',{"*"(v){React=v}},0);let classNames;module.link('classnames',{default(v){classNames=v}},1);let FigureImage;module.link('./FigureImage',{default(v){FigureImage=v}},2);let FigureCaption;module.link('./FigureCaption',{default(v){FigureCaption=v}},3);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},4);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},5);







const Figure = /*#__PURE__*/React.forwardRef(({
  className,
  bsPrefix,
  as: Component = 'figure',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'figure');
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
Figure.displayName = 'Figure';
module.exportDefault(Object.assign(Figure, {
  Image: FigureImage,
  Caption: FigureCaption
}));
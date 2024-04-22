let classNames;module.link('classnames',{default(v){classNames=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let Image,imagePropTypes;module.link('./Image',{default(v){Image=v},propTypes(v){imagePropTypes=v}},2);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},3);



const FigureImage = /*#__PURE__*/React.forwardRef(({
  className,
  fluid = true,
  ...props
}, ref) => /*#__PURE__*/_jsx(Image, {
  ref: ref,
  ...props,
  fluid: fluid,
  className: classNames(className, 'figure-img')
}));
FigureImage.displayName = 'FigureImage';
FigureImage.propTypes = imagePropTypes;
module.exportDefault(FigureImage);
"use client";let classNames;module.link('classnames',{default(v){classNames=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let useBootstrapPrefix;module.link('./ThemeProvider',{useBootstrapPrefix(v){useBootstrapPrefix=v}},2);let CardBody;module.link('./CardBody',{default(v){CardBody=v}},3);let CardFooter;module.link('./CardFooter',{default(v){CardFooter=v}},4);let CardHeader;module.link('./CardHeader',{default(v){CardHeader=v}},5);let CardImg;module.link('./CardImg',{default(v){CardImg=v}},6);let CardImgOverlay;module.link('./CardImgOverlay',{default(v){CardImgOverlay=v}},7);let CardLink;module.link('./CardLink',{default(v){CardLink=v}},8);let CardSubtitle;module.link('./CardSubtitle',{default(v){CardSubtitle=v}},9);let CardText;module.link('./CardText',{default(v){CardText=v}},10);let CardTitle;module.link('./CardTitle',{default(v){CardTitle=v}},11);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},12);














const Card = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body = false,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'card');
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    ...props,
    className: classNames(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? /*#__PURE__*/_jsx(CardBody, {
      children: children
    }) : children
  });
});
Card.displayName = 'Card';
module.exportDefault(Object.assign(Card, {
  Img: CardImg,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: CardHeader,
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay
}));
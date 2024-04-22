let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},0);let TabContainer;module.link('./TabContainer',{default(v){TabContainer=v}},1);let TabContent;module.link('./TabContent',{default(v){TabContent=v}},2);let TabPane;module.link('./TabPane',{default(v){TabPane=v}},3);



/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Content for the tab title.
   */
  title: PropTypes.node.isRequired,
  /**
   * The disabled state of the tab.
   */
  disabled: PropTypes.bool,
  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: PropTypes.string,
  /**
   * Object containing attributes to pass to underlying nav link.
   */
  tabAttrs: PropTypes.object
};
const Tab = () => {
  throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
};
Tab.propTypes = propTypes;
module.exportDefault(Object.assign(Tab, {
  Container: TabContainer,
  Content: TabContent,
  Pane: TabPane
}));
import React from 'react';
import PropTypes from 'prop-types';

class TreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: this.props.defaultCollapsed
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(...args) {
    this.setState({collapsed: !this.state.collapsed});
    if (this.props.onClick) {
      this.props.onClick(...args);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.defaultCollapsed !== nextProps.defaultCollapsed
        || this.props.collapsed !== nextProps.collapsed
        || this.props.nodeLabel !== nextProps.nodeLabel
        || this.props.className !== nextProps.className
        || this.props.itemClassName !== nextProps.itemClassName
        || this.state.collapsed !== nextState.collapsed
  }

  render() {
    const {
      collapsed = this.state.collapsed,
      className = '',
      itemClassName = '',
      nodeLabel,
      children,
      ...rest,
    } = this.props;

    let arrowClassName = 'tree-view_arrow';
    let containerClassName = 'tree-view_children';
    if (collapsed) {
      arrowClassName += ' tree-view_arrow-collapsed';
      containerClassName += ' tree-view_children-collapsed';
    }

    const arrow =
      <div
        {...rest}
        className={className + ' ' + arrowClassName}
        onClick={this.handleClick}/>;

    return (
      <div className="tree-view">
        <div className={'tree-view_item ' + itemClassName}>
          {arrow}
          {nodeLabel}
        </div>
        <div className={containerClassName}>
          {collapsed ? null : children}
        </div>
      </div>
    );
  }
}

TreeView.propTypes = {
  collapsed: PropTypes.bool,
  defaultCollapsed: PropTypes.bool,
  nodeLabel: PropTypes.node.isRequired,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
};

export default TreeView;

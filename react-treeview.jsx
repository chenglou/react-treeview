/** * @jsx React.DOM */
(function (root, React, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['react'], factory);
  } else {
    // Browser globals
    root.TreeView = factory(root, React);
  }
})(this, typeof require === 'function' ? require('react') : React, function(window, React){
  'use strict';

  var TreeView = React.createClass({
    propTypes: {
      collapsed: React.PropTypes.bool,
      defaultCollapsed: React.PropTypes.bool,
      nodeLabel: React.PropTypes.renderable.isRequired
    },

    getInitialState: function() {
      return {collapsed: this.props.defaultCollapsed};
    },

    handleClick: function(a, b, c) {
      this.setState({
        collapsed: !this.state.collapsed
      });
      this.props.onClick && this.props.onClick(a, b, c);
    },

    render: function() {
      var collapsed = this.props.collapsed != null ?
        this.props.collapsed :
        this.state.collapsed;

      var arrowClassName = 'tree-view_arrow';
      var containerClassName = 'tree-view_children';
      if (collapsed) {
        arrowClassName += ' tree-view_arrow-collapsed';
        containerClassName += ' tree-view_children-collapsed';
      }

      var arrow =
        <div className={arrowClassName} onClick={this.handleClick}>▾</div>;

      return (
        <div className="tree-view">
          {this.transferPropsTo(arrow)}
          {this.props.nodeLabel}
          <div className={containerClassName}>
            {this.props.children}
          </div>
        </div>
      );
    }
  });

  if (typeof module === 'undefined') {
    window.TreeView = TreeView;
  } else {
    module.exports = TreeView;
  }

  return TreeView;
});

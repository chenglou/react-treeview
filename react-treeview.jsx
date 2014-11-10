(function (root, React, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    var carry = function(React){
      return factory(root, React);
    };
    define(['react'], carry);
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

    handleClick: function() {
      this.setState({
        collapsed: !this.state.collapsed
      });
      if(this.props.onClick)
        this.props.onClick();
    },

    render: function() {
      var props = this.props;

      var collapsed = props.collapsed !== null ?
        props.collapsed :
        this.state.collapsed;

      var arrowClassName = 'tree-view_arrow';
      var containerClassName = 'tree-view_children';
      if (collapsed) {
        arrowClassName += ' tree-view_arrow-collapsed';
        containerClassName += ' tree-view_children-collapsed';
      }

      var arrow =
        <div
          {...props}
          className={(props.className || '') + ' ' + arrowClassName}
          onClick={this.handleClick}>
            ▾
        </div>;

      return (
        <div className="tree-view">
          {arrow}
          {props.nodeLabel}
          <div className={containerClassName}>
            {props.children}
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

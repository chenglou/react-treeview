/** * @jsx React.DOM */

(function (window, React){
  'use strict';

  var TreeView = React.createClass({displayName: 'TreeView',
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
      this.props.handleClick && this.props.handleClick(a, b, c);
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
        React.DOM.div( {className:arrowClassName, onClick:this.handleClick}, "▾");

      return (
        React.DOM.div( {className:"tree-view"}, 
          this.transferPropsTo(arrow),
          this.props.nodeLabel,
          React.DOM.div( {className:containerClassName}, 
            this.props.children
          )
        )
      );
    }
  });

  if (typeof module === 'undefined') {
    window.TreeView = TreeView;
  } else {
    module.exports = TreeView;
  }
})(window, typeof require === 'function' ? require('React') : React);

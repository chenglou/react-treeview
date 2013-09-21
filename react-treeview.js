/**
* @jsx React.DOM
*/

var TreeView;

((function() {
  TreeView = React.createClass({
    render: function() {
      var self = this;
      // parse the data. format:
      // [
      //   {displayNode: bla, children: [bla, bla]},
      //   {displayNode: bla, children: [bla, bla]},
      // ]
      var wholeTree = this.props.source.map(function(item) {
        return self._formatSource(item);
      });
      var className = this.props.className;
      return (
        React.DOM.ul( {className:'treeview' + (className ? ' ' + className : '')}, 
          wholeTree
        )
      );
    },

    _formatSource: function(child) {
      // recursively construct the markup by digging into child nodes
      var self = this;
      // simple uid for the child to let React diff correctly during `render`
      if (!child.displayNode.props.key) {
        child.displayNode.props.key = Math.random();
      }
      return (
        // `initiallyCollapsed` works only at the beginning, If `canToggle` is set
        // to true, the tree node will naturally manage its expanded/collapsed
        // state itself afterward
        TreeNode(
          {key:child.displayNode.props.key,
          displayNode:child.displayNode,
          initiallyCollapsed:child.initiallyCollapsed,
          canToggle:child.canToggle == null ? true : child.canToggle,
          toggleOnDoubleClick:this.props.toggleOnDoubleClick}, 
          
            (child.children && child.children.length)
              ? child.children.map(function(subChild) {
                  return self._formatSource(subChild);
                })
              : null
          
        )
      );
    },
  });

  var TreeNode = React.createClass({displayName: 'TreeNode',
    getDefaultProps: function() {
      return {canToggle: true};
    },

    getInitialState: function() {
      return {collapsed: this.props.initiallyCollapsed};
    },

    render: function() {
      var nodeClassName = 'treenode' +
        (this.props.canToggle ? '' : ' treenode-no-toggle');

      return (
        React.DOM.li( {className:nodeClassName}, 
          React.DOM.div( {onClick:this.handleClick, onDoubleClick:this.handleDoubleClick}, 
            React.DOM.div( {className:"treenode-arrow"}, 
              this.props.children && this.props.children.length
                ? this.state.collapsed ? '▸' : '▾'
                : null
            ),
            React.DOM.div( {className:"treenode-item"}, this.props.displayNode),
            React.DOM.div( {className:"clearfix"})
          ),
          React.DOM.ul( {className:this.state.collapsed ? "treenode-collapsed" : ""}, 
            this.props.children
          )
        )
      );
    },

    handleClick: function() {
      if (!this.props.toggleOnDoubleClick && this.props.canToggle) {
        this.setState({collapsed: !this.state.collapsed});
      }
    },

    handleDoubleClick: function() {
      if (this.props.toggleOnDoubleClick && this.props.canToggle) {
        this.setState({collapsed: !this.state.collapsed});
      }
    }
  });
})());

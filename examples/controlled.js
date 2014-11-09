/*global TreeView, React */

// This example data format is totally arbitrary. No data massaging is
// required and you use regular js in `render` to iterate through and
// construct your nodes.
var dataSource = [
  ['Apple', 'Orange'],
  ['Facebook', 'Google'],
  ['Celery', 'Cheeseburger']
];

// A controlled TreeView, akin to React's controlled inputs
// (http://facebook.github.io/react/docs/forms.html#controlled-components), has
// many benefits. Among others, you can expand/collapse everything (i.e. easily
// trigger those somewhere else).
var Lists = React.createClass({
  getInitialState: function() {
    var collapsedBookkeeping = this.props.dataSource.map(function() {
      return false;
    });
    return {
      collapsedBookkeeping: collapsedBookkeeping
    };
  },

  handleClick: function(i) {
    this.state.collapsedBookkeeping[i] = !this.state.collapsedBookkeeping[i];
    this.setState({collapsedBookkeeping: this.state.collapsedBookkeeping});
  },

  collapseAll: function() {
    this.setState({
      collapsedBookkeeping: this.state.collapsedBookkeeping.map(function() {return true;})
    });
  },

  render: function() {
    var collapsedBookkeeping = this.state.collapsedBookkeeping;

    return (
      <div>
        <button onClick={this.collapseAll}>Collapse all</button>

        {this.props.dataSource.map(function(node, i) {
          // Let's make it so that the tree also toggles when we click the
          // label. Controlled components make this effortless.
          var label =
            <span className="node" onClick={this.handleClick.bind(null, i)}>
              Type {i}
            </span>;
          return (
            <TreeView
              key={i}
              nodeLabel={label}
              collapsed={collapsedBookkeeping[i]}
              onClick={this.handleClick.bind(null, i)}>
                {node.map(function(entry) {
                  return <div className="info" key={entry}>{entry}</div>;
                })}
            </TreeView>
          );
        }, this)}
      </div>
    );
  }
});

React.render(
  <Lists dataSource={dataSource} />,
  document.getElementById('controlled')
);

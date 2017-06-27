import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TreeView from './react-native-treeview';

const styles = StyleSheet.create({
  node: {
    paddingTop: 2,
    paddingRight: 10,
    paddingBottom: 2,
    paddingLeft: 5,
  },
});

// This example data format is totally arbitrary. No data massaging is
// required and you use regular js in `render` to iterate through and
// construct your nodes.
const dataSource = [
  ['Apple', 'Orange'],
  ['Facebook', 'Google'],
  ['Celery', 'Cheeseburger'],
];

// A controlled TreeView, akin to React's controlled inputs
// (http://facebook.github.io/react/docs/forms.html#controlled-components), has
// many benefits. Among others, you can expand/collapse everything (i.e. easily
// trigger those somewhere else).
class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsedBookkeeping: dataSource.map(() => false),
    };
    this.handleClick = this.handleClick.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
  }

  handleClick(i) {
    let [...collapsedBookkeeping] = this.state.collapsedBookkeeping;
    collapsedBookkeeping[i] = !collapsedBookkeeping[i];
    this.setState({ collapsedBookkeeping: collapsedBookkeeping });
  }

  collapseAll() {
    this.setState({
      collapsedBookkeeping: this.state.collapsedBookkeeping.map(() => true),
    });
  }

  render() {
    const collapsedBookkeeping = this.state.collapsedBookkeeping;
    return (
      <View>
        <TouchableOpacity onPress={this.collapseAll}>
          <Text>Collapse all</Text>
        </TouchableOpacity>
        {dataSource.map((node, i) => {
          // Let's make it so that the tree also toggles when we click the
          // label. Controlled components make this effortless.
          const label = (
            <TouchableOpacity onPress={this.handleClick.bind(null, i)}>
              <Text style={styles.node}>
                Type {i}
              </Text>
            </TouchableOpacity>
          );
          return (
            <TreeView
              key={i}
              nodeLabel={label}
              collapsed={collapsedBookkeeping[i]}
              onClick={this.handleClick.bind(null, i)}
            >
              {node.map(entry =>
                <Text style={styles.node} key={entry}>{entry}</Text>
              )}
            </TreeView>
          );
        })}
      </View>
    );
  }
}

export default Lists;

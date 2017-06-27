import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
  {
    type: 'Employees',
    collapsed: false,
    people: [
      {
        name: 'Paul Gordon',
        age: 29,
        sex: 'male',
        role: 'coder',
        collapsed: false,
      },
      {
        name: 'Sarah Lee',
        age: 27,
        sex: 'female',
        role: 'ocamler',
        collapsed: false,
      },
    ],
  },
  {
    type: 'CEO',
    collapsed: false,
    people: [
      {
        name: 'Drew Anderson',
        age: 39,
        sex: 'male',
        role: 'boss',
        collapsed: false,
      },
    ],
  },
];

// For the sake of simplicity, we're gonna use `defaultCollapsed`. Usually, a
// [controlled component](http://facebook.github.io/react/docs/forms.html#controlled-components)
// is preferred.
class CompanyPeople extends React.Component {
  render() {
    return (
      <View>
        {dataSource.map((node, i) => {
          const type = node.type;
          const label = (
            <Text style={styles.node}>
              {type}
            </Text>
          );
          return (
            <TreeView
              key={type + '|' + i}
              nodeLabel={label}
              defaultCollapsed={false}
            >
              {node.people.map(person => {
                const label2 = <Text style={styles.node}>{person.name}</Text>;
                return (
                  <TreeView
                    nodeLabel={label2}
                    key={person.name}
                    defaultCollapsed={false}
                  >
                    <Text style={styles.node}>age: {person.age}</Text>
                    <Text style={styles.node}>sex: {person.sex}</Text>
                    <Text style={styles.node}>role: {person.role}</Text>
                  </TreeView>
                );
              })}
            </TreeView>
          );
        })}
      </View>
    );
  }
}

export default CompanyPeople;

/**
* @jsx React.DOM
*/

var treeRoot = <TreeNode>Company people</TreeNode>;
React.renderComponent(treeRoot, document.body);

var data = {
  'Employees': {
    'Paul Gordon': {
      age: 25,
      sex: 'male',
      role: 'coder',
    },
    'Sarah Lee': {
      age: 23,
      sex: 'female',
      role: 'jqueryer',
    },
  },
  'CEO': {
    'Drew Anderson': {
      age: 35,
      sex: 'male',
      role: 'boss',
    }
  }
};

for (var category in data) {
  var categoryNode = treeRoot.append(<TreeNode><b>{category}</b></TreeNode>);
  for (var person in data[category]) {
    var personNode = categoryNode.append(<TreeNode>{person}</TreeNode>);
    for (var info in data[category][person]) {
      personNode.append(
        <TreeNode>
          <i>
            {info + ': ' + data[category][person][info]}
          </i>
        </TreeNode>
      );
    }
  }
}

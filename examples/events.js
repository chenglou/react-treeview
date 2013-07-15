/**
* @jsx React.DOM
*/

// setting up some event handlers
function handleChildAppend(childNode) {
  console.log('somewhere down the node, a child got appended', childNode);
}
function handleChildRemove(childNode) {
  console.log('a child node got removed', childNode);
}
function handleRemove() {
  console.log('the node itself got removed');
}
function handleAppend() {
  console.log('the node itself to appended');
}


// events will 'bubble'. A parent node receives all the events from its children
var fruits = (
  <TreeNode
  onChildAppended={handleChildAppend}
  onChildRemoved={handleChildRemove}>
    Fruit
  </TreeNode>
);

React.renderComponent(fruits, document.body);

var apple = <TreeNode>apple</TreeNode>;
fruits.append(apple); // trigger on fruits

// trigger on fruits
apple.append(
  <TreeNode
  onRemove={handleRemove}
  onAppend={handleAppend}>
    red
  </TreeNode>
);

apple.removeAt(0); // trigger onChildRemove on fruits and onRemove on node `red`

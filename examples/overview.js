/**
* @jsx React.DOM
*/

// either run this file through the jsx transformation tool or include them
// directly in an html file. More info:
// http://facebook.github.io/react/docs/getting-started.html

var food = <TreeNode>Edible stuff</TreeNode>;
React.renderComponent(food, document.body);

// some regular nodes... remember, any element can be appended, as long as you
// wrap it inside a TreeNode tag. If you're appending a `div` or any other
// `display: block` element, it's wiser to change it inline, otherwise the
// element wouldn't be on the same line as the collapse arrow on the left
var pastry = food.append(<TreeNode><span>Pastry</span></TreeNode>);
var dessert = food.append(<TreeNode>Dessert</TreeNode>);

// forgot entrées
food.appendAt(0, <TreeNode><i>Entrée</i></TreeNode>);

// again, appended children are themselves `TreeNode`s. Append some sub-children
// to desserts
['Ice Cream', 'Pudding', 'Chicken'].forEach(function(item) {
  dessert.append(<TreeNode><i>{item}</i></TreeNode>);
});
dessert.toggle();

// wait chicken isn't a dessert
dessert.removeAt(2); // chicken gone, tree auto refreshed! #Reactjs

// was pastry something edible?
pastry.parent(); // => gives the food node

// let's add some entrées... except we didn't store the entrée node in a
// variable, no problem
food.childAt(0).append(
  <TreeNode>
    <span className="overkill-tree-item">
      <a href="google.com/search?q=cake">Cake</a>
    </span>
  </TreeNode>
);

// remember pudding's unique id so that we can remove it directly rather than
// through its index
var puddingUid = dessert.childAt(1).getUid();

// meanwhile, remove ice cream
dessert.childAt(0).removeSelf();

// beauty of using uid to remove items:
// - you no longer have to search for it
// - you can access it from any of its ancestors
// - same api methods as using a number to access nodes
food.childAt(puddingUid); // => the pudding node
food.removeAt(puddingUid);

food.removeSelf() // woah, illegal operation and bad style

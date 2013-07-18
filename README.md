# React-treeview

Easy, light, flexible tree view made with [React](http://facebook.github.io/react/).

## install

```sh
bower install react-treeview
```

Or simply drop the script somewhere on your page (after React of course):

```html
<script src="path/to/react-treeview.js"></script>
```

## API

(This README uses the [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) syntax. If you prefer the JavaScript version, try the [JSX Compiler](http://facebook.github.io/react/jsx-compiler.html) any time.)

### &lt;TreeView />
The tag for declaring the tree view. A self-closing tag.

#### source
The only attribute. It takes an array with the following format (head to the example for a use case):

```js
[
  {
    displayNode: markupHere,
    initiallyCollapsed: booleanHere,
    canToggle: booleanHere,
    children: [moreObjectsHere]
  },
  {
    displayNode: markupHere,
    initiallyCollapsed: booleanHere,
    canToggle: booleanHere,
    children: [moreObjectsHere]
  },
  // more...
];
```

Where, inside each object of the array:
- `displayNode` is the only required key. Its value could be any valid React node (a string won't do), therefore conferring to the tree view an extreme flexibility ([hardness its full power here](https://github.com/chenglou/react-treeview/tree/master/examples/integration.js)), such as custom styling, data attachment, nested components, etc.

- `initiallyCollapsed` defaults to false. Setting it to true renders the tree with that node's children collapsed.

- `canToggle` defaults to true. This lets the user expand/collapse the node. This is the only state in the tree; disabling it effectively renders this whole component stateless, which might be desirable if you want full control from a parent component.

- `children` is an array of more nodes, taking the exact format as the whole outside array. A tree can be arbitrarily deep.

## Example

```html
var data = [
  {
    displayNode: <span>Apple</span>,
    children: [
      {displayNode: <i>FileMaker</i>},
      {displayNode: <i>Anobit</i>},
      {displayNode: <i>Braeburn Capital</i>}
    ]
  },
  {
    displayNode: <span>Facebook</span>,
    canToggle: false,
    children: [
      {displayNode: <i>Instagram</i>},
    ]
  }
];

var companies = <TreeView source={data} className="company-tree"/>;
React.renderComponent(companies, document.body);

setTimeout(function() {
  // let's remove Anobit three seconds after the initial display
  data[0].children.splice(1, 1);
  // the magic of React will render only what's changed
  React.renderComponent(companies, document.body);
}, 3000);
```

Now wasn't that easy? Here's how you can style the tree:

```
div.treenode-arrow -> ▾ Apple                    whole node is
                           FileMaker             a ul.treenode
                           Braeburn Capital
```

That's it. Since you can attach any component as child, the styling is flexible and entirely up to you.

Check out the [examples](https://github.com/chenglou/react-treeview/tree/master/examples) folder for two sophisticated demos with plenty of explanations!

## License

MIT.

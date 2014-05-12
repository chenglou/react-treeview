# React-treeview

Easy, light, flexible treeview made with [React](http://facebook.github.io/react/).

[Demo](http://chenglou.github.io/react-treeview/) (Also check out the `example/` folder for usage).

## install

Npm:
```sh
npm install react-treeview
```

Bower:
```sh
bower install react-treeview
```

The CSS file:

```html
<link rel="stylesheet" type="text/css" href="path/to/react-treeview.css">
```

## API

#### &lt;TreeView />
The component accepts [three props](https://github.com/chenglou/react-treeview/blob/master/react-treeview.jsx#L8-L10).

- `collapsed`: whether the node is collapsed or not.
- `defaultCollapsed`: the [uncontrolled](http://facebook.github.io/react/docs/forms.html#uncontrolled-components) equivalent to `collapsed`.
- `nodeLabel`: the component or string (or any renderable "thing") that's displayed beside the TreeView arrow.

TreeViews can be naturally nested.

**Note**: `this.transferPropsTo(<TreeView />)` will transfer the props to the arrow under the hood. All attributes and events naturally work on it.

## Styling
The CSS is flexible, commented and made to be easily customized. Feel free to inspect the demo's classes and check the [short CSS code](https://github.com/chenglou/react-treeview/blob/master/react-treeview.css).

## License

MIT.

/**
* @jsx React.DOM
*/

/*
  either run this file through the jsx transformation tool or include them
  directly in an html file. More info:
  http://facebook.github.io/react/docs/getting-started.html
*/

// since react-treeview accepts any valid component as child, we can create a
// new component for the sake of attaching data onto the nodes
var FruitNode = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <span onClick={this.handleClick}>
        {this.props.children}
      </span>
    );
  },
  handleClick: function() {
    console.log('This fruit\'s color is ' + this.props.source.color);
  }
});

var VeggyNode = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <span onClick={this.handleClick}>
        {this.props.children}
      </span>
    );
  },
  handleClick: function() {
    console.log('This vegetable is ' + this.props.source.size);
  }
});


var orangeData = {flavor: 'hum-um', color: 'orange'};
var tomatoData = {flavor: 'ok', color: 'red'};
var appleData = {flavor: 'hum-um', color: 'silver'};

var potatoData = {price: 1, size: 'big'};
var carrotData = {price: 2, size: 'small'};
var celeryData = {price: 3, size: 'small'};

var data = [
  {
    displayNode: <b>Fruits</b>,
    // make it always expanded. Good if you don't want any toggle state to mess
    // up your manually configured UI when tree view's outer component `render`s
    canToggle: false,
    children: [
      {displayNode: <FruitNode source={orangeData}>Orange</FruitNode>},
      {displayNode: <FruitNode source={tomatoData}><i>Tomato?</i></FruitNode>},
      {displayNode: <FruitNode source={appleData}>Apple</FruitNode>}
    ]
  },
  {
    displayNode: <b>Vegetables</b>,
    initiallyCollapsed: true,
    children: [
      {
        displayNode:
          <VeggyNode source={potatoData}>
            <a href="google.com/search?q=potato">Potato</a>
          </VeggyNode>
      },
      {
        displayNode:
          <VeggyNode source={carrotData}>
            <span className="favorite">Carrot</span>
          </VeggyNode>
      },
      {displayNode: <VeggyNode source={celeryData}>Celery</VeggyNode>}
    ]
  }
];

var food = <TreeView source={data}/>;

React.renderComponent(food, document.body);

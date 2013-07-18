/**
* @jsx React.DOM
*/

/*
  either run this file through the jsx transformation tool or include them
  directly in an html file. More info:
  http://facebook.github.io/react/docs/getting-started.html
*/

// server just sent back some data!
var rawData = {
  'Employees': {
    'Paul Gordon': {
      age: 25,
      sex: 'male',
      role: 'coder'
    },
    'Sarah Lee': {
      age: 23,
      sex: 'female',
      role: 'jqueryer'
    },
  },
  'CEO': {
    'Drew Anderson': {
      age: 35,
      sex: 'male',
      role: 'boss'
    }
  }
};

// time to parse it into a format the tree view recognizes
// [
//   {displayNode: bla, children: [bla, bla]},
//   {displayNode: bla, children: [bla, bla]},
// ]
var formattedData = [];

for (var rankName in rawData) {
  var rankNode = {
    // simply putting a string here doesn't work. The tree view needs a node
    displayNode: <b>{rankName}</b>,
    children: []
  };
  for (var personName in rawData[rankName]) {
    var personNode = {
      displayNode: <span>{personName}</span>,
      children: []
    };
    for (var personInfo in rawData[rankName][personName]) {
      var personInfoNode = {
        displayNode:
          <span>
            {personInfo + ': ' + rawData[rankName][personName][personInfo]}
          </span>
      };
      personNode.children.push(personInfoNode);
    }
    rankNode.children.push(personNode);
  }
  formattedData.push(rankNode);
}

var companyPeople = <TreeView source={formattedData}/>;
React.renderComponent(companyPeople, document.body);

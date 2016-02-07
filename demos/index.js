import React from 'react';
import ReactDOM from 'react-dom';
import Controlled from './Controlled';
import Uncontrolled from './Uncontrolled';

ReactDOM.render(<Controlled />, document.getElementById('controlled'));
ReactDOM.render(<Uncontrolled />, document.getElementById('uncontrolled'));

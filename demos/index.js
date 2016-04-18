import React from 'react';
import ReactDOM from 'react-dom';
import Controlled from './controlled';
import Uncontrolled from './uncontrolled';

ReactDOM.render(<Controlled />, document.getElementById('controlled'));
ReactDOM.render(<Uncontrolled />, document.getElementById('uncontrolled'));

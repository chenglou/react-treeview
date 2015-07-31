import React from 'react';
import Controlled from './Controlled';
import Uncontrolled from './Uncontrolled';

React.render(<Controlled />, document.getElementById('controlled'));
React.render(<Uncontrolled />, document.getElementById('uncontrolled'));

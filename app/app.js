import React from 'react';
import {render} from 'react-dom';
import projects from './data/projects.json';
import './styles/main.css';

import Portfolio from './components/Portfolio';

// ReactDOM is part of the introduction of React 0.14
render(
  <Portfolio projects={projects}/>, 
 document.getElementById('root')
);
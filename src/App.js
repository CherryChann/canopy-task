import React from 'react';
import { BrowserRouter as Router, Route }from "react-router-dom";
import { Provider } from 'react-redux';

import './custom.scss';
import Home from './Pages/Home';
import Chart from './Pages/Chart';
import Table from './Pages/Table';
import store from './Store/store.js';
import NavbarComponent from './Components/NavBar';


const items = [
  {
      name: 'Canopy',
      path: '/'
  },
  {
    name: 'Networth Chart',
    path: '/chart'
  },
  {
      name: 'Holdings Table',
      path: '/table'
  }
];
const App = () => (
    <Provider store={store}>
        <Router>
            <NavbarComponent items={items}/>
            <Route exact path="/" component={Home} />
            <Route exact path="/table" component={Table} />
            <Route exact path="/Chart" component={Chart} />
        </Router>    
    </Provider>
  
);
export default App;

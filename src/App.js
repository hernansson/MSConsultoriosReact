import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ClickTracker from './components/Ejercicios de clase/ClickTracker';
import Home from './components/pages/Home/Home'
import Productos from './components/pages/Productos/Productos';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <div>
        <Switch>
          <Route exact path={'/'} exact component={Home} />
          <Route path={'/Productos'} exact component={Productos} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}


export default App;

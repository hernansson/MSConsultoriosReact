import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ClickTracker from './components/Ejercicios de clase/ClickTracker';
import Home from './components/pages/Home/Home'
import Productos from './components/pages/Productos/Productos';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Categories from './components/pages/Productos/Categories/Categories';



function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <div>
        <Switch>
          <Route exact path={'/'} exact component={Home} />
          <Route exact path={'/Productos'} exact component={Productos} />
          <Route path={'/Productos/Categoria/:categoriaID'} exact component={Categories} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}


export default App;

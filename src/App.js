import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/pages/Home/Home'
import Productos from './components/pages/Productos/Productos';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Categories from './components/pages/Productos/Categories/Categories';
import ItemDetailContainer from './components/pages/Productos/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import CustomProvider from './components/Context/CustomProvider';
import Cart from './components/pages/Cart/Cart';

function App() {
  return (

    <BrowserRouter>
    <CustomProvider>
      <NavBar />
      <div>
        <Switch>
          <Route exact path={'/'} exact component={Home} />
          <Route exact path={'/Productos'} exact component={Productos} />
          <Route path={'/Productos/Categoria/:categoriaID'} exact component={Categories} />
          <Route path={'/Detalle/:title/:iD'} exact component={ItemDetailContainer} />
          <Route exact path={'/Cart'} exact component={Cart} />        
        </Switch>
      </div>
      </CustomProvider>
    </BrowserRouter>


  );
}


export default App;

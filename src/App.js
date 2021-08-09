import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/pages/Home/Home'
import Productos from './components/pages/Productos/Productos';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/pages/Productos/ItemListContainer/ItemList/Item/ItemDetailContainer/ItemDetailContainer'
import CustomProvider from './components/Context/CustomProvider';
import Cart from './components/pages/Cart/Cart';
import "tailwindcss/tailwind.css"
import ItemListContainer from './components/pages/Productos/ItemListContainer/ItemListContainer';
import Checkout from './components/pages/Cart/Checkout/Checkout';
function App() {
  return (

    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <div className="bg-green-500">
          <Switch>
            <Route exact path={'/'} exact component={Home} />
            <Route exact path={'/Productos'} exact component={Productos} />
            <Route path={'/Productos/Categoria/:id'} exact component={ItemListContainer} />
            <Route path={'/Detalle/:title/:iD'} exact component={ItemDetailContainer} />
            <Route exact path={'/Cart'} exact component={Cart} />
            <Route exact path={'/Cart/Checkout'} exact component={Checkout} />
          </Switch>
        </div>
      </CustomProvider>
    </BrowserRouter>


  );
}


export default App;

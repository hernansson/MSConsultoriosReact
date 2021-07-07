import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ClickTracker from './components/Ejercicios de clase/ClickTracker';
import Home from './components/NavBar/pages/Home/Home';
import Productos from './components/NavBar/pages/Productos/Productos';



function App() {
  return (
    <div>
      <div className="navigationBar">
        <NavBar />
      </div>

      <div className="bodyApp">
        <Productos />
      </div>

    </div>

  );
}


export default App;

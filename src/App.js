import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SingleCocktail from './pages/SingleCocktail';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    <>
    
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='about' Component={About} />
        <Route path='/cocktail/:id' Component={SingleCocktail}/>
        <Route path='*' Component={Error}/>
      </Routes>
    </Router>
   </>
  );
 
}



export default App;

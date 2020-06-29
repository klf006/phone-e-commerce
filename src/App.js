import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ProductList />     
      <Details />     
      <Cart />     
      <Default />         
    </React.Fragment>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import { useState } from 'react';
import FunctionalComponent from './FunctionalComponent';
import Products from './Products';
import MyNavBar from './MyNavBar';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const name = 'Nikhil'
  return (
    <>
      <MyNavBar/>
    <section>
      <h3>Anchor tags</h3>
      <a href="products">Products</a><br />
      <a href="routing">routing</a><br />
      <a href="test">Test</a>
      <h3>Link Component</h3>

      <Link to='products'>Link to Products</Link><br />
      <Link to='routing/sony-ps5-console-cfi-2008a01-1-tb'>Link to Routing</Link><br />
      <Link to='test'>Link to Test</Link>
    </section>
      <Outlet />
    </>
  )
}

export default App;

import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import { useState } from 'react';
import FunctionalComponent from './FunctionalComponent';
import Products from './Products';
import MyNavBar from './MyNavBar';
import { Link, Outlet } from 'react-router-dom';
import Loader from './Loader';
import MyToast from './MyToast';

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const name = 'Nikhil'
  return (
    <>
      <MyNavBar />
      <Loader />
      <MyToast />
      <section>
        {/* <h3>Anchor tags</h3>
      <a href="products">Products</a><br />
      <a href="routing">routing</a><br />
      <a href="test">Test</a>
      <h3>Link Component</h3> */}

        {/* <Link to='products'>Link to Products</Link><br />
      <Link to='routing/sony-ps5-console-cfi-2008a01-1-tb'>Link to Routing</Link> <br />
      <Link to='test'>Link to Test</Link><br />
      <Link to='parent'>Link to Parent</Link><br /> */}
        {/* <Link to='parent/child-1'>Link to child-1</Link><br />
      <Link to='parent/child-2'>Link to child-2</Link><br />
      <Link to='parent/child-3'>Link to child-3</Link><br /> */}
      </section>
      <Outlet />
    </>
  )
}

export default App;

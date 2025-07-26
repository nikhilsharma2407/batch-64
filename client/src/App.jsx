import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import { useState } from 'react';
import FunctionalComponent from './FunctionalComponent';

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const name = 'Nikhil'
  return (
    <>
      <button onClick={() => setShowComponent(!showComponent)}>{showComponent ? 'hide' : 'show'} component</button>
      {showComponent ?
        <>
          <ClassComponent name={name} />
          <FunctionalComponent name={name} />
        </> : null}


    </>
  )
}

export default App;

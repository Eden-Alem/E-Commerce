import React from 'react';
import './App.css';
import Main from './components/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faArrowLeft, faUserAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faShoppingCart, faArrowLeft, faUserAlt, faShoppingBag)
function App() {
  // const name = 'Lowin Neil';
  // const element = <h1>Hello, {name}</h1>
  return (
    <div className="App">
      <Main/>
		{/* {element} */}
    </div>
  );
}

export default App;

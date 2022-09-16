import React from 'react';
import './App.css';
import Banner from './component/Banner/Banner';
import NavBar from './component/NavBar/NavBar';
import {originals, action} from './constants/urls'
import RowPost from './component/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netfix Originals' />
      <RowPost  url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;

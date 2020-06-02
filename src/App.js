import React from 'react';
import './App.css';
import MyList from './components/MyList';


function App() {
  //const logo= "./data/logo.png.jpg";
  return (
    <div className="App">
      <img className="logo" src="https://cdn.vox-cdn.com/thumbor/LOEXyxwl5puG7PDEQ8n9gvlufic=/39x0:3111x2048/1820x1213/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt="logo"/>
      <MyList />
    </div>
  );
} 

export default App;
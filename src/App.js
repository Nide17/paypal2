import React from 'react';
// import NavBarComponent from './components/header/NavBarComponent'
// import VideoComponent from './components/video/VideoComponent'
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>

      <div className="App">
        {/* <NavBarComponent /> */}
        <Header/>
        {/* <VideoComponent/> */}
        <Main />
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;

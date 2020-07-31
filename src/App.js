import React from 'react';
import NavBarComponent from './components/nav/NavBarComponent'
// import VideoComponent from './components/video/VideoComponent'
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Footer from './components/Footer';


// import './style.css'

const App = () => {
  return (
    <BrowserRouter>

      <div className="App">
        <NavBarComponent />
        {/* <VideoComponent/> */}
        <Main />
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import './App.css';

const App = () => {
  return (
      <div className="App">
        <Header/>
        <Main />
        <Footer />
      </div>
  );
}

export default App;

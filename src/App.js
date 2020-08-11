import React, { Component } from 'react';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    }
  }
  openNav = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    return (
      <div className="main-content" style={{
        marginLeft:
          this.state.menuOpen ? '240px' : '0px', width: "100%"
      }}>
        <Header openMenu={this.state.menuOpen} onClick={this.openNav} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

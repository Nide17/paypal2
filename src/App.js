import React, { Component } from 'react';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
      isBusiness: false,
      isPersonal: false,
      contentHeight: 0
    }

    this.showBusiness = this.showBusiness.bind(this);
    this.showPersonal = this.showPersonal.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
  }

  showPersonal = (e) => {
    e.preventDefault();
    this.setState({
      isBusiness: false,
      isPersonal: !this.state.isPersonal,
    })
  }

  showBusiness = (e) => {
    e.preventDefault();
    this.setState({
      isPersonal: false,
      isBusiness: !this.state.isBusiness
    })
  }

  closeHandler = () => {
    this.setState({
      isPersonal: false,
      isBusiness: false
    })
  }

  openNav = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  componentDidMount() {
    const contH = document.getElementById('content').clientHeight;
    this.setState({
      contentHeight: contH
    })
  }

  render() {
    const bodyElement = document.body
    this.state.menuOpen ? bodyElement.classList.add("menu-open") : bodyElement.classList.remove("menu-open")

    return (
      <div id="content" className="main-content">
        <Header
          openMenu={this.state.menuOpen}
          contentHeight={this.state.contentHeight}
          isBusiness={this.state.isBusiness}
          isPersonal={this.state.isPersonal}

          showBusiness={this.showBusiness}
          showPersonal={this.showPersonal}
          closeHandler={this.closeHandler}
          menuOpened={this.openNav}
        />

        <Main
          isBusiness={this.state.isBusiness}
          isPersonal={this.state.isPersonal}
        />

        <Footer />
      </div>
    );
  }
}

export default App;

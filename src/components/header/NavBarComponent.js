import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import './nav.css'

class NavBarComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isNavOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {

    return (

          <div>

            <Navbar dark expand="md" className="header-container" color="#2b83bd" light style={{ backgroundColor: '#2b83bd' }}>

              <div className="container">
                <div className="navbutton-wrapper">
                  <NavbarToggler onClick={this.toggleNav} className="menu-button navbutton my-btn---outline-white my-btn--small"> Menu
            </NavbarToggler>
                </div>

                <NavbarBrand className="mr-auto" href="/"><img src='https://www.paypalobjects.com/webstatic/i/logo/rebrand/ppcom-white.svg' height="42px" alt='PayPal' />
                </NavbarBrand>

                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar className="ml-auto">

                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        PERSONAL
              </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                </DropdownItem>
                        <DropdownItem>
                          Option 2
                </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        BUSINESS
              </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                </DropdownItem>
                        <DropdownItem>
                          Option 2
                </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <NavItem>
                      <NavLink className="nav-link" to='/'><span className=""></span>DEVELOPER</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to='/'><span className=""></span>HELP</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to='/'><span className=""></span>Login</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to='/'><span className=""></span>Sign up</NavLink>
                    </NavItem>
                  </Nav>

                </Collapse>
              </div>

            </Navbar>

          </div>
   
    )
  }
}
export default NavBarComponent

import React from 'react';
import Radium from 'radium';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

    const styles = {
        navbar: {
            backgroundColor: '#0B2249'
        },

        text: {
            color: '#F78A7E'
        }

    }


class Sitebar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          sessionToken: this.props.sessionToken,
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      logout = () =>  {
        this.setState({
          sessionToken: '',
        });
        localStorage.removeItem('token');
        window.location.reload();
      }

      render() {
        return (
          <div style={styles.navbar}>
            <Navbar expand="md">
              <NavbarBrand href="/" style={styles.text}>Totally 80s</NavbarBrand>
            
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <button onClick={() => this.logout()}>
                      LOGOUT
                    </button>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }   
}

export default Radium(Sitebar);
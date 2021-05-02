import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './Convert.css';

export default class Menu extends Component {
  render() {
    return (
        <Navbar className="navbar" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt="logomarca"
                src="https://github.com/StefanyRepetcki/dinamic-api-ajax/blob/master/assets/image/logo.png?raw=true"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '} 
            </Navbar.Brand>
        </Navbar>
    );
  }
}

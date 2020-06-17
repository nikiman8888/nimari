import React, { Component } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import DropdownAccesories from "../DropdownAccesories/DropdownAccesories";
import DropdownKinkaleri from "../DropdownKinkaleri/DropdownKinkaleri";
import DropdownClothes from "../DropdownClothes/DropdownClothes";
import DropdownServices from "../DropdownServices/DrDropdownServices";
import nameChecker from "../../utils/clasnameHolder";
import anime from "animejs";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      disabled: false,
    };
  }
  onDisabledHandler = (event) => {
    setTimeout(() =>{
      this.setState({disabled:false})
    },350);
}

  onClick = (e) => {
    
    if (this.state.disabled) {
      return;
  }
    this.setState({disabled: true});  
    this.onDisabledHandler(); 
    this.setState({ isOpen: !this.state.isOpen })
  
    if (this.state.isOpen) {
      
      this.offClick();
      return;
    }
   
    anime({
      targets: ".slowdown .dropdown-wrapper",
      opacity: ["0", "1"],
      translateY: "485",
      duration: "800",
      easing: "easeInOutQuad",
    });
    

  };

  offClick = () => {
    this.setState({ isOpen: false });
    
    anime({
      targets: ".slowdown .dropdown-wrapper",
      opacity: 0,
      translateY: "-485",
      duration: "1000",
      easing: "easeInOutQuad",
    });
  };

  render() {
    return (
      <div className="navigation-wrapper">
        <div className="left-part-navigation">
          <ul className="left-ul">
            <li>
              <Link to="/" className="home-link" onClick={this.offClick}>
                НАЧАЛО
              </Link>
            </li>
            <li className="slowdown" onClick={this.onClick}>
              <Link to="#" className="dropdownServices">
                ШИВАШКИ УСЛУГИ
              </Link>
              <DropdownServices closeNav={this.offClick} />
            </li>

            <li>
              <Link
                to="/clothes"
                className="dropdownClothes"
                onClick={this.offClick}
              >
                ДРЕХИ
              </Link>
            </li>
            <li>
              <Link
                to="/accesories"
                className="dropdownAccesories"
                onClick={this.offClick}
              >
                АКСЕСОАРИ
              </Link>
            </li>
            <li>
              <a href="https://www.google.com/">КИНКАЛЕРИЯ</a>
            </li>
          </ul>
        </div>
        <div className="right-part-navigation">
          <ul>
            <li onClick={this.offClick}>
              <Link to="/contacts">КОНТАКТИ</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;

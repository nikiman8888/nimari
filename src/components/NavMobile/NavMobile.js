import React, { Component } from "react";
import "./NavMobile.css";
import { Link } from "react-router-dom";
import DropdownServices from "../DropdownServices/DrDropdownServices";
import anime from "animejs";

class NavMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dropMenuServices:false,
     // isOpen: false,
      disabled: false,
      navMobile: this.props.navMobileState,
    };
  }
  onClickDrop = (e) => {
    if (this.state.disabled) { // if is true do not handler the second click
      
      return;
    }
    
    this.setState({ disabled: true });
    this.onDisabledHandler(); // this is to prevent double click event of user
   
   
    anime({
      targets: ".nav-mobile .dropdown-wrapper",
      opacity: [ "1"],
      translateY: "399",
      duration: "800",
      easing: "easeInOutQuad",
    });
  };
  
  offClickDrop = () => {
    
    
    anime({
      targets: ".nav-mobile .dropdown-wrapper",
      opacity: 0,
      translateY: "-485",
      duration: "1000",
      easing: "easeInOutQuad",
    });
  };
  onDisabledHandler = (event) => {
    setTimeout(() => {
      this.setState({ disabled: false });
    }, 350);
  };
 

  render() {
    //const { closeNav} = this.props;
    //const{isOpen} = this.state;
    return (
      <div className="nav-mobile">
        <DropdownServices closeNav = {this.offClickDrop}/>
        <ul>
          <li>
            <Link to="/nimari" >
              {" "}
              НАЧАЛО
            </Link>
          </li>
          <li className = "services-dropdown">
            <Link to="#" onClick = {this.onClickDrop} className = "services-dropdown" >
              
              ШИВАШКИ УСЛУГИ
            </Link>
            
          </li>
          <li>
            <Link to="/clothes" >
              ДРЕХИ
            </Link>
          </li>
          <li>
            <Link to="/accesories">
              АКСЕСОАРИ
            </Link>
          </li>

          <li>
            <a href="https://www.google.com/">КИНКАЛЕРИЯ</a>
          </li>
          <li>
            <Link to="/contacts">
              КОНТАКТИ
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavMobile;

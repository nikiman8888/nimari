import React, { Component } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import DropdownServices from "../DropdownServices/DrDropdownServices";
import anime from "animejs";
import NavMobile from '../NavMobile/NavMobile';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      isOpen: false,
      disabled: false,
      navMobile:this.props.navMobileState,
      
    };
  }
  
  onClickLines = (e) => {
   
    console.log(e.target.className)
    if(e.target.className !== 'services-dropdown' && !e.target.classList.contains('mobile') ){ // we do this to prevent closing of dropdown when user click services
      this.setState({ navMobile: !this.state.navMobile });
    }

    
    
  };
  onDisabledHandler = (event) => {
    setTimeout(() => {
      this.setState({ disabled: false });
    }, 350);
  };
 
  onClick = (e) => {
    if (this.state.disabled) {
      return;
    }
    this.setState({ disabled: true });
    this.onDisabledHandler();
    this.setState({ isOpen: !this.state.isOpen });

    if (this.state.isOpen) {
      this.offClick();
      return;
    }

    anime({
      targets: ".slowdown .dropdown-wrapper",
      opacity: [ "1"],
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
    const {navMobile} = this.state;
   if(navMobile){
    anime({
      targets:".span-lines-one",
      translateY:10,
      rotate:"45deg",
      duration:"2000"
    })
    anime({
      targets:".span-lines-two",
      opacity:0,
      duration:1000
    })
    anime({
      targets:".span-lines-three",
      translateY:-11,
      rotate:"-45deg",
      duration:"2000"
    })
   }else {
    anime({
      targets:".span-lines-one",
      translateY:0,
      rotate:"0deg",
      duration:"2000"
    })
    anime({
      targets:".span-lines-two",
      opacity:1,
      duration:1000
    })
    anime({
      targets:".span-lines-three",
      translateY:0,
      rotate:"0deg",
      duration:"2000"
    })
   }
   
    return (
      <div className="navigation-wrapper">
        <div className="left-part-navigation">
          <ul className="left-ul">
            <li>
              <Link to="/nimari" className="home-link" onClick={this.offClick}>
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
        <div className="drop-lines-responsive" onClick = {this.onClickLines} > 
          <span className = "span-lines-one"></span>
          <span className = "span-lines-two"></span>
          <span className = "span-lines-three"></span>
          {navMobile && <NavMobile closeNav = {this.onClickLines} />}
        </div>
      </div>
    );
  }
}

export default Navigation;

import React, { Component } from "react";
import "./ClothesContainer.css";
import Clothes from "./Clothes/Clothes";
import clothNames from "../../utils/clothesHolder.js";
class ClothesContainer extends Component {
  state = {
    items:''
  }

  scrollTop()
{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
  componentDidMount() {
    this.scrollTop();
     this.setState({items:clothNames.map((name) => 
      <Clothes key = {name} name = {name}/>)}) 
  }
  render() {
   const {items} = this.state;
    return (
      <div className="clothes-wrapper" onMouseOver={this.props.closeNav}>
        {items}
      </div>
    );
  }
}

export default ClothesContainer;

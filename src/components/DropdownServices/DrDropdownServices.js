import React, { Component } from "react";
import "./DropdownServices.css";
import servicesFoto from "../../images/services1.png";

class DropdownServices extends Component {
  render() {
    
    return (
      <div className="dropdown-wrapper mobile">
        <h1 className="sewing-services  mobile">Шивашки услуги</h1>
        <div className="content-img-wrapper  mobile">
          <div className="first section  mobile">
            
            <ul className = "mobile">
              <li className = "mobile">Category 1</li>
              <hr className = "mobile"/>
              <li className = "mobile">Category 2</li>
              <hr className = "mobile"/>
              <li className = "mobile">Category 3</li>
              <hr className = "mobile"/>
              <li className = "mobile">Category 4</li>
              <hr className = "mobile"/>
            </ul>
          </div>
          <div className="second section mobile">
            
            <ul className = "mobile">
              <li className = "mobile">Category 5</li>
              <hr className = "mobile" />
              <li className = "mobile">Category 6</li>
              <hr className = "mobile"/>
              <li className = "mobile">Category 7</li>
              <hr className = "mobile"/>
              <li className = "mobile">Category 8</li>
              <hr className = "mobile"/>
            </ul>
          </div>

          <img src={servicesFoto} className = "mobile" alt = "sewing-services"/>
        </div>

        <button className = "close-button mobile" type="button" onClick={this.props.closeNav}>
          ЗАТВОРИ
        </button>
      </div>
    );
  }
}

export default DropdownServices;

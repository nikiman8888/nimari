import React, { Component } from "react";
import "./DropdownDresses.css";
import { Link } from "react-router-dom";
import shoesFoto from "../../images/dresses1.png";

class DropdownDresses extends Component {
  render() {
    return (
      <div className="dropdown-wrapper">
        <h1>Рокли</h1>
        <div className="content-img-wrapper">
          <div className="first section">
            <h3>Sport Dresses</h3>
            <hr/>
            <ul>
              <li>
                <Link to="/" />
                Dress 1
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Dress 2
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Dress 3
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Dress 4
              </li>
              <hr/>
            </ul>
          </div>
          <div className="second section">
            <h3>Night Dresses</h3>
            <hr/>
            <ul>
              <li>
                <Link to="/" />
                Dress 1
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Dress 2
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Dress 3
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Dress 4
              </li>
              <hr/>
            </ul>
          </div>

          <img src={shoesFoto} />
        </div>

        <button type="button" onClick={this.props.onClickHandler}>
          ЗАТВОРИ
        </button>
      </div>
    );
  }
}

export default DropdownDresses;

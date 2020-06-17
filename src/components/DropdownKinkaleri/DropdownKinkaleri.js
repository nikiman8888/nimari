import React, { Component } from "react";
import "./DropdownKinkaleri.css";
import { Link } from "react-router-dom";
import pantsFoto from "../../images/materials1.jpg";

class DropdownKinkaleri extends Component {
  render() {
    return (
      <div className="dropdown-wrapper">
        <h1 className ="kinkaleri-h1">Кинкалерия</h1>
        <div className="content-img-wrapper">
          <div className="first section">
            <h3>Sport Pants</h3>
            <hr/>
            <ul>
              <li>
                <Link to="/" />
                Pants 1
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Pants 2
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Pants 3
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Pants 4
              </li>
              <hr/>
            </ul>
          </div>
          <div className="second section">
            <h3>Night Pants</h3>
            <hr/>
            <ul>
              <li>
                <Link to="/" />
                Pants 1
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Pants 2
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Pants 3
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Pants 4
              </li>
              <hr/>
            </ul>
          </div>

          <img src={pantsFoto} />
        </div>

        <button type="button" onClick={this.props.onClickHandler}>
          ЗАТВОРИ
        </button>
      </div>
    );
  }
}

export default DropdownKinkaleri;

import React, { Component } from "react";
import "./DropdownMaterials.css";
import { Link } from "react-router-dom";
import materialFoto from "../../images/materials1.jpg";
class DropdownMaterials extends Component {
  render() {
    return (
      <div className="dropdown-wrapper">
        <h1>Materials</h1>
        <div className="content-img-wrapper">
          <div className="first section">
            <h3>Единични бройки</h3>
            <hr/>
            <ul>
              <li>
                <Link to="/" />
                Material 1
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Material 2
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Material 3
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Material 4
              </li>
              <hr/>
            </ul>
          </div>
          <div className="second section">
            <h3>На едро</h3>
            <hr/>
            <ul>
              <li>
                <Link to="/" />
                Material 1
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Material 2
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Material 3
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Material 4
              </li>
              <hr/>
            </ul>
          </div>

          <img src={materialFoto} />
        </div>

        <button type="button" onClick={this.props.onClickHandler}>
          ЗАТВОРИ
        </button>
      </div>
    );
  }
}

export default DropdownMaterials;

import React, { Component } from "react";
import "./Contacts.css";
import foto from "../../images/store1.jpg";
class Contacts extends Component {
  
  render() {
    return (
      <div className="contacts-wrapper" onMouseOver = {this.props.closeNav}>
        <h1>Contacts</h1>
        <div className="content-contact-img-wrapper">
          <ul>
            <li>Sofia</li>

            <li>str. Hollywood</li>

            <li>kv. Studentski grad</li>

            <li>tel:00-00-00-00</li>

            <li>Email: supe@muper.com</li>
          </ul>
          <div>
            <img src={foto} alt = "adress"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;

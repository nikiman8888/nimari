import React, { Component } from "react";
import "./ServicesContainer.css";
import foto1 from "../../images/services3.png";
import foto2 from "../../images/services4.jpg";
import foto3 from "../../images/services5.jpg";

class ServicesContainer extends Component {
  constructor (props) {
    super(props)
    
  }
  scrollToBottom = (ref) => {
    this.refs[ref].scrollIntoView({ behavior: "smooth" });
  };
  componentDidMount() {
    const { linkIdName } = this.props.state;

    if (linkIdName) {
      this.scrollToBottom(linkIdName);
    }
  }
 

  render() {
    return (
      <div className="services-wrapper" onMouseOver={this.props.closeNav}>
        <div className="services-content-wrapper">
          <h2>ШИВАШКИ УСЛУГИ</h2>
          <div className="services-category-wrapper">
            <div className="category-wrapper" ref= "category1">
              <h3>Category 1</h3>
              <ul>
                <li>Usluga 1</li>
                <li>Usluga 2</li>
                <li>Usluga 3</li>
                <li>Usluga 4</li>
                <li>Usluga 5</li>
                <li>Usluga 6</li>
              </ul>
            </div>
            <div className="category-wrapper" ref="category2">
              <h3>Category 2</h3>
              <ul>
                <li>Usluga 1</li>
                <li>Usluga 2</li>
                <li>Usluga 3</li>
                <li>Usluga 4</li>
                <li>Usluga 5</li>
                <li>Usluga 6</li>
              </ul>
            </div>
            <div className="category-wrapper" ref="category3">
              <h3>Category 3</h3>
              <ul>
                <li>Usluga 1</li>
                <li>Usluga 2</li>
                <li>Usluga 3</li>
                <li>Usluga 4</li>
                <li>Usluga 5</li>
                <li>Usluga 6</li>
              </ul>
            </div>
            <div className="category-wrapper" ref= "category4">
              <h3>Category 4</h3>
              <ul>
                <li>Usluga 1</li>
                <li>Usluga 2</li>
                <li>Usluga 3</li>
                <li>Usluga 4</li>
                <li>Usluga 5</li>
                <li>Usluga 6</li>
              </ul>
            </div>
            <div className="category-wrapper" ref="category5">
              <h3>Category 5</h3>
              <ul>
                <li>Usluga 1</li>
                <li>Usluga 2</li>
                <li>Usluga 3</li>
                <li>Usluga 4</li>
                <li>Usluga 5</li>
                <li>Usluga 6</li>
              </ul>
            </div>
            <div className="category-wrapper" ref="category6">
              <h3>Category 6</h3>
              <ul>
                <li>Usluga 1</li>
                <li>Usluga 2</li>
                <li>Usluga 3</li>
                <li>Usluga 4</li>
                <li>Usluga 5</li>
                <li>Usluga 6</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ServicesContainer;

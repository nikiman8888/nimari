import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import ClothesContainer from "./components/ClothesContainer/ClothesContainer";
import AccesoriesContainer from "./components/AccesoriesContainer/AccesoriesContainer";

import "./responsive1024.css";
import "./responsive823.css";
import "./responsive600.css";
import "./responsive414.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navMobile: false,
    };
  }

  render() {
    
    return (
      <Router>
        <div className="app-wrapper">
          <Logo />
          <Navigation clickMobileNav={this.onClickLines} />

          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} />}
            />
            <Route
              path="/contacts"
              render={(props) => <Contacts {...props} />}
            />
            <Route path="/clothes" render={(props) => <ClothesContainer />} />
            <Route
              path="/accesories"
              render={(props) => <AccesoriesContainer {...props} />}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

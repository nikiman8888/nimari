import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import ClothesContainer from "./components/ClothesContainer/ClothesContainer";
import AccesoriesContainer from "./components/AccesoriesContainer/AccesoriesContainer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Logo />
          <Navigation />

          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} />} />
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

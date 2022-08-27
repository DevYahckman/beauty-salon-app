import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/NavBar";
import AboutUs from "./pages/Aboutus/AboutUs";
import Home from "./pages/home/home";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        {/* <AboutUs /> */}
        <Switch>
          <Route path="/AboutUs" component={AboutUs} />
          <Route path = "/" exact  component = {Home}/>
        </Switch>

        <Footer />

      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/NavBar";
import Treatment from "./pages/treatment/treatment";
import About from "./pages/aboutus/about";
import Academy from "./pages/academy/academy";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Book from './pages/book/book';
// import SideBars from "./components/sideBars/sideBar";

class App extends Component {
  state = {};
  render() {
    return (
      <div >
        <ToastContainer/>
        <NavBar />
        {/* <SideBars/> */}

        <Switch>
          <Route path="/book" component={ Book } />
          <Route path="/Academy" component={Academy} />
          <Route path="/contact" component={ Contact } />
          <Route path="/treatment" component={Treatment} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
        </Switch>
        {/* <SideBars/>        */}
        <Footer />

      
      </div>
    );
  }
}

export default App;

import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Steptopart from "./pages/Steptopart"
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import Aboutcsr from "./pages/Aboutcsr"
import HomePage from "./pages/HomePage";
import Navbar1 from "./Navbar1";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/homecontent" component={HomePage}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route path="/steptopart" component={Steptopart}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/aboutcsr" component={Aboutcsr}></Route>
        <Route path="/navbar1" component={Navbar1}></Route>

        {/* <Route path="/a" component={Aboutcsr}></Route> */}
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;

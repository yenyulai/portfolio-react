import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Header";
import About from "./pages/About";
import WorkList from "./pages/Project";
import Contact from "./pages/Contact";
import Project from "./pages/Project";


// import Footer from "./components/Footer";


class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          {/* <Header /> */}
          <Route exact path="/" component={About} />
          <Route exact path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}





export default App;

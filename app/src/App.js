import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from "./component/Blogs";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Blogs} />
      </div>
    </Router>
  );
}

export default App;

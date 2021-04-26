import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from "./component/Blogs";
import NewBlog from "./component/NewBlog";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Blogs} />
        <Route path="/article/new" component={NewBlog} />
      </div>
    </Router>
  );
}

export default App;

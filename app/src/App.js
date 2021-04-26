import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from "./component/Blogs";
import NewBlog from "./component/NewBlog";
import ReadBlog from "./component/ReadBlog";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Blogs} />
        <Route path="/article/new" component={NewBlog} />
        <Route path="/articles/:slug" component={ReadBlog} />
      </div>
    </Router>
  );
}

export default App;

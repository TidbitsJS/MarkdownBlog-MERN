import React, { Component } from "react";
import Fields from "./Fields";

export class NewBlog extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="mb-4">New Article</h1>

        <form action="/articles">
          <Fields />
        </form>
      </div>
    );
  }
}

export default NewBlog;

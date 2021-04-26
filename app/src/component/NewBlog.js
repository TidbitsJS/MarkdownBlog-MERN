import React, { Component } from "react";
import Fields from "./Fields";

export class NewBlog extends Component {
  render() {
    return (
      <div className="container py-5">
        <h1 className="mb-4">New Article</h1>

        <form onSubmit={this.onSubmit}>
          <Fields path="articles/new" />
        </form>
      </div>
    );
  }
}

export default NewBlog;

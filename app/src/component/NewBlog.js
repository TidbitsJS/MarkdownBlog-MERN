import React, { Component } from "react";
import Fields from "./Fields";

export class NewBlog extends Component {
  render() {
    const article = {
      title: "",
      description: "",
      markdown: "",
    };
    return (
      <div className="container py-5">
        <h1 className="mb-4">New Article</h1>

        <form>
          <Fields path="articles/new" article={article} />
        </form>
      </div>
    );
  }
}

export default NewBlog;

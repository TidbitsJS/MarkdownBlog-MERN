import React, { Component } from "react";
import Fields from "./Fields";

export class EditBlog extends Component {
  render() {
    const article = this.props.location.state;
    const path = this.props.match.url;

    return (
      <div className="container py-5">
        <h1 className="mb-4">Edit Article</h1>

        <form>
          <Fields path={path} article={article} />
        </form>
      </div>
    );
  }
}

export default EditBlog;

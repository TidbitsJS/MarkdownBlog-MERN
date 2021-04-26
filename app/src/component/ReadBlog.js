import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export class ReadBlog extends Component {
  state = {
    blog: null,
  };

  render() {
    const article = this.props.location.state;
    return (
      <div className="container py-5">
        <h1 className="mb-1">{article.title}</h1>
        <div className="text-muted mb-2">{article.createdAt}</div>
        <Link to="/" className="btn btn-secondary" style={{ marginRight: 10 }}>
          All Articles
        </Link>
        <Link to="/articles/edit" className="btn btn-info">
          Edit
        </Link>

        <div
          dangerouslySetInnerHTML={{ __html: article.sanitizedHtml }}
          className="py-5"
        />
      </div>
    );
  }
}

export default withRouter(ReadBlog);

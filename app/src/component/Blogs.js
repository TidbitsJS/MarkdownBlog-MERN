import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Blogs extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="mb-4">Blog Articles</h1>
        <Link to="/article/new" className="btn btn-success">
          New Article
        </Link>

        <div className="card mt-4">
          <div className="card-body">
            <h4 className="card-title">Blog IT</h4>
            <div className="card-subtitle text-muted mb-2">23/05/2021</div>
            <div className="card-text mb-2">Writing a blog here</div>
            <Link
              to="/article/slug"
              className="btn btn-primary"
              style={{ marginRight: 10 }}
            >
              Read More
            </Link>
            <Link to="/article/edit" className="btn btn-info">
              Edit
            </Link>
            <form onSubmit={this.onSubmit} style={{ marginTop: 10 }}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;

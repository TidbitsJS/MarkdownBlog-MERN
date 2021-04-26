import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Fields extends Component {
  render() {
    return (
      <>
        <div className="form-group">
          <label for="title">Title</label>
          <input
            required
            value="article title"
            type="text"
            name="title"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            className="form-control"
          >
            article description
          </textarea>
        </div>

        <div className="form-group">
          <label for="markdown">Markdown</label>
          <textarea
            required
            name="markdown"
            id="markdown"
            className="form-control"
          >
            article markdown
          </textarea>
        </div>

        <Link to="/" className="btn btn-secondary" style={{ marginRight: 10 }}>
          Cancel
        </Link>
        <button
          type="submit"
          onSubmit={this.onSubmit}
          className="btn btn-primary"
        >
          Save
        </button>
      </>
    );
  }
}

export default Fields;

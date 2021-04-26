import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Fields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.article.title,
      description: this.props.article.description,
      markdown: this.props.article.markdown,
    };
  }

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  onChangeMarkdown = (e) => {
    this.setState({ markdown: e.target.value });
  };

  addBlog = (e) => {
    e.preventDefault();

    const article = {
      title: this.state.title,
      description: this.state.description,
      markdown: this.state.markdown,
    };

    if (this.props.path === "articles/new") {
      axios
        .post(process.env.REACT_APP_SERVER_URI + this.props.path, article)
        .then((res) => console.log(res.data))
        .catch((err) => console.log("Error: " + err));
    } else {
      axios
        .put(
          process.env.REACT_APP_SERVER_URI + this.props.path.substring(1),
          article
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log("Error: " + err));
    }

    window.location = "/";
  };

  render() {
    return (
      <>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            required
            value={this.state.title}
            onChange={this.onChangeTitle}
            type="text"
            name="title"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.onChangeDescription}
            className="form-control"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="markdown">Markdown</label>
          <textarea
            required
            name="markdown"
            value={this.state.markdown}
            onChange={this.onChangeMarkdown}
            id="markdown"
            className="form-control"
          ></textarea>
        </div>

        <Link to="/" className="btn btn-secondary" style={{ marginRight: 10 }}>
          Cancel
        </Link>
        <button className="btn btn-primary" onClick={this.addBlog}>
          Save
        </button>
      </>
    );
  }
}

export default Fields;

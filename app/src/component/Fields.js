import React, { Component } from "react";
import { Link } from "react-router-dom";
import Editor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
import "react-markdown-editor-lite/lib/index.css";
import axios from "axios";

const mdParser = new MarkdownIt()

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

  onChangeMarkdown = ({html, text}) => {
    const newValue = text.replace(/\d/g, "")
    console.log(newValue, text)
    this.setState({ markdown: newValue });
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

        {/* <div className="form-group">
          <label htmlFor="markdown">Markdown</label>
          <textarea
            required
            name="markdown"
            value={this.state.markdown}
            onChange={this.onChangeMarkdown}
            id="markdown"
            className="form-control"
          ></textarea>
        </div> */}

        <p>Markdown Article</p>
        <Editor value={this.state.markdown} 
          onChange={this.onChangeMarkdown}
          style={{height: 500}}
          renderHTML={text => mdParser.render(text)}
        />

        <Link to="/" className="btn btn-secondary" style={{ margin: "15px 10px" }}>
          Cancel
        </Link>
        <button className="btn btn-primary" onClick={this.addBlog} style={{margin: "15px 10px"}}>
          Save
        </button>
      </>
    );
  }
}

export default Fields;

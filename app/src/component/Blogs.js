import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Blogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_SERVER_URI)
      .then((res) => {
        this.setState({ blogs: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteBlog = (id) => {
    console.log(id);
    axios
      .delete(process.env.REACT_APP_SERVER_URI + `articles/${id}`)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      blogs: this.state.blogs.filter((el) => el._id !== id),
    });
  };

  render() {
    console.log(this.state.blogs);

    return (
      <div className="container py-5">
        <h1 className="mb-4">Blog Articles</h1>
        <Link to="/article/new" className="btn btn-success">
          New Article
        </Link>

        {this.state.blogs.map((blog, index) => (
          <div className="card mt-4" key={blog.title + index}>
            <div className="card-body">
              <h4 className="card-title">{blog.title}</h4>
              <div className="card-subtitle text-muted mb-2">
                {blog.createdAt.substring(0, 10)}
              </div>
              <div className="card-text mb-2">{blog.description}</div>
              <Link
                to={{
                  pathname: `/articles/${blog.slug}`,
                  state: { ...blog },
                }}
                className="btn btn-primary"
                style={{ marginRight: 10 }}
              >
                Read More
              </Link>
              <Link
                to="/article/edit"
                className="btn btn-info"
                style={{ marginRight: 10 }}
              >
                Edit
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => this.deleteBlog(blog._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Blogs;

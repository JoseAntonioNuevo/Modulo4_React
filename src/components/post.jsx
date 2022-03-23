import React from "react";
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.addLike = this.addLike.bind(this);
    this.state = {
      likes: parseInt(this.props.likes),
      state: 0,
    };
  }

  changeLike = () => {
    let countLike = 0;
    if (this.state.state == 0) {
      countLike = this.state.likes += 1;
      this.setState({ state: 1 });
    } else {
      countLike = this.state.likes -= 1;
      this.setState({ state: 0 });
    }
    this.setState({ likes: countLike });
  };

  addLike() {
    this.changeLike();
  }

  render() {
    return (
      <div className="card-div">
        <img
          className="img-grid"
          src="https://source.unsplash.com/random/800x800"
        ></img>
        <div className="card-cont align-left">
          <button
            onClick={this.addLike}
            className={`${this.state.state == 0 ? "like-btn" : "no-like-btn"}`}
          >
            <i className="fa-solid fa-heart"></i>
            {this.state.likes}
          </button>
          <p>{this.props.time} ago</p>
          <p>@{this.props.user}</p>
          <p className="desc">{this.props.title}</p>
          <p className="pointer">
            <i className="fa-regular fa-message"></i>Comments (
            {this.props.comments})
          </p>
          <div className="comment-1 hide"></div>
        </div>
      </div>
    );
  }
}

export default Post;

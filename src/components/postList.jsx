import Post from "./post";
import React from "react";
import JsonData from "../datos.json";
class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.search,
    };
  }

    render() {     
      const myCards = JsonData.map((dato, key) => {
        return (
          (dato.title.toLowerCase().includes(this.props.search.toLowerCase()) || this.props.search === "") &&
            <div key={key} className="col-sm-6 col-lg-4 col-xl-3">
              <Post
                title={dato.title}
                time={dato.time}
                user={dato.user}
                likes={dato.like}
                comments={dato.comment}
              />
            </div>
          );
      })

  return (
    <div className="row align-center">
     {myCards}
    </div>
  );
}
}

export default PostList;

import Post from "./post";
import React from "react";
import axios from 'axios';
class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.search,
      posts: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    axios.get('https://three-points.herokuapp.com/api/posts',
    { headers: {"Authorization" : `Bearer ${token}`} })
      .then(res => {
        if (res.status === 401){
          window.localStorage.clear();
          window.location.href = "/login";
        }else{
          const poster = res.data; 
          this.setState({ posts: poster });
         console.log(this.state.posts);
        }
    }).catch((err) => {
          window.localStorage.clear();
          window.location.href = "/login";
    })
    }

    getDateInterval(date) { 
      var date1 = new Date(date);
      var date2 = new Date();
      var timeDiff = Math.abs(date2.getTime() - date1.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays;
    }

    render() {     
      const myCards = this.state.posts?.map((dato, key) => (
          (dato.text.toLowerCase().includes(this.props.search.toLowerCase()) || this.props.search === "") &&
            <div key={key} className="col-sm-6 col-lg-4 col-xl-3">
              <Post
                title={dato.text}
                time={this.getDateInterval(dato.createdAt)}
                user={dato.author.name}
                likes={dato.likes}
                comments={dato.comments.length}
                image={dato.image}
              />
            </div>
          ));

  return (
    <div className="row align-center">
     {myCards}
    </div>
  );
}
}

export default PostList;

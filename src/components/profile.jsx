import React from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';
class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

    componentDidMount() {
    const token = localStorage.getItem('token');
    axios.get('https://three-points.herokuapp.com/api/users/6136944fcd79ba24707e2f82',
    { headers: {"Authorization" : `Bearer ${token}`} })
      .then(res => {
        if (res.status === 401){
          window.localStorage.clear();
          window.location.href = "/login";
        }else{
          const user = res.data; 
          this.setState({ user: user });
        }
    }).catch((err) => {
          window.localStorage.clear();
          window.location.href = "/login";
    })
    }

  render() {
  return (
      <div className="user-div">
        <img className="user-logo" src={this.state.user.avatar} alt={"user"} />
        <br></br>
        <br></br>
        <h4>@{this.state.user.name}</h4>
        <br></br>
        <p>
          {this.state.user.bio}
        </p>
      </div>
    
    );
  }
}

export default Profile;

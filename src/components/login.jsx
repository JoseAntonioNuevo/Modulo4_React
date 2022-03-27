import React from "react";
import axios from 'axios';
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: 0,
      data: '',
      email: '',
      pass: ''
    };
  }

  setEmail(email){
    this.setState({ email: email });
  }

  setPassword(psw){
    this.setState({ pass: psw });
  }

onLoginUser = () => {
    if (this.state.email != "" && this.state.pass != "") {
    axios.post('https://three-points.herokuapp.com/api/login', {
        username: this.state.email,
        password: this.state.pass
    },)
    .then(res => {
        localStorage.setItem('token', res.data.token);
        window.location.reload(false);
   }).catch((err) => {
        this.setState({ error: 1 });
        })
}else{
    alert("Rellena todos los campos");
}
};

  render() {
    return (
      <div className="login-div">
          {this.state.error == 1 && (<div className="error-msg">Email o Contraseña incorrecto</div>)}
        <label>Email</label>
        <br></br>
        <input onChange={event => this.setEmail(event.target.value)} className="input-login" type="text"></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input onChange={event => this.setPassword(event.target.value)} className="input-login" type="password"></input>
        <br></br>
        <button onClick={this.onLoginUser} className="btn btn-primary">Login</button>
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}

export default Post;

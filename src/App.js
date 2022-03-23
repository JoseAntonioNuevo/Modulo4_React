import "./App.css";
import "./style.css";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import SearchBar from "./components/searchBar";
import PostList from "./components/postList";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 0,
      search: "",
      screen: 0,
    };
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ state: 1 });
      }.bind(this),
      3000
    );
  }

  handleScreen(screen) {
    this.setState({ screen: screen });
  }

  render() {
    return (
      <div className="App">
        <Navbar data={{ handleScreen: this.handleScreen.bind(this) }} />
        {this.state.screen != 0 ? (
          <Profile></Profile>
        ) : (
          <div>
            <SearchBar
              handleChange={(e) => this.setState({ search: e.target.value })}
            />
            <div className="cont-princ">
              <div id="cards" className="row align-center">
                {this.state.state === 1 ? (
                  <PostList search={this.state.search} />
                ) : (
                  <h1 className="load">Loading...</h1>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;

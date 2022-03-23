import React from "react";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleScreenChange() {
    this.props.onSelectScreen(1);
  }

  render() {
    return (
      <header>
        <div className="row">
          <div className="col-10 align-left">
            <a
              className="pointer"
              onClick={() => this.props.data.handleScreen(0)}
            >
              <i className="fa-brands fa-twitter"></i>
              Three pics
            </a>
          </div>
          <div className="col-2 align-right">
            <i
              onClick={() => this.props.data.handleScreen(1)}
              className="fa-solid fa-user-ninja pointer"
            ></i>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;

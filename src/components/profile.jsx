import React from "react";
import user from "../img/user.png";
class Profile extends React.Component {
  render() {
    return (
      <div className="user-div">
        <img className="user-logo" src={user} alt={"user"} />
        <br></br>
        <br></br>
        <h4>@User</h4>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare
          neque et lobortis malesuada. Proin commodo nibh ante, ut posuere diam
          efficitur non. Aenean auctor pellentesque lacus, vitae maximus tortor
          varius nec. Vestibulum rutrum enim eu elit aliquam, non vestibulum sem
          malesuada. Vestibulum nec elementum sapien. Maecenas nec orci nec leo
          sodales rutrum id in urna. Cras eu elit ex.
        </p>
      </div>
    );
  }
}

export default Profile;

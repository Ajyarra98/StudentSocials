import React from "react";
import "./css/Profile.css";
const Profile = () => {
  return (
    <div className="profilebody">
      <div className="profilecard">
        <div className="img">
          <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="infos">
          <div className="name">
            <h2>Bradley Paris</h2>
            <h4>@bradparis</h4>
          </div>
          <p className="text">
            I'm a Student, follow me to be the first who see my new
            work.
          </p>
          <ul className="stats">
            <li>
              <h3>150</h3>
              <h4>Views</h4>
            </li>
            <li>
              <h3>82</h3>
              <h4>Clubs</h4>
            </li>
            <li>
              <h3>1.3K</h3>
              <h4>Posts</h4>
            </li>
          </ul>
          {/* <div className="links">
            <button className="follow">Edit</button>
            <button className="view">View profile</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import './Profile.css';
import Header from "../BaseComponents/Header/Header";
import ProfileContent from "./ProfileContent/ProfileContent";

function Profile(props) {
  return (
    <div className="profile">
      <Header />
      <ProfileContent />
    </div>
  )
}

export default Profile;
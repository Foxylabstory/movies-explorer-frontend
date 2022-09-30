import React from "react";
import './Profile.css';
import Header from "../BaseComponents/Header/Header";
import ProfileContent from "./ProfileContent/ProfileContent";

function Profile({onUpdate, onSignOut, errorText}) {
  return (
    <div className="profile">
      <Header />
      <ProfileContent
      onUpdate={onUpdate}
      onSignOut={onSignOut}
      errorText={errorText}
      />
    </div>
  )
}

export default Profile;
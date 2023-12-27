'use client'
import React from "react";
import WithAuth from "../helper/WithAuth";

const ProfilePage = ({userData}) => {
  return (
    <div className="card card-body">
      <h2>Hello {userData?.name}</h2>
      
    </div>
  );
};

export default WithAuth(ProfilePage);

'use client'
import React from "react";
import WithAuth from "../helper/WithAuth";
import UserData from "./sharedProfile/UserData";
import Link from "next/link";

const HomePage = ({userData}) => {
  return (
    <div className=" mx-auto">
        <UserData userData={userData}></UserData>
        <br></br><br></br>
        <div className="text-center">
          <Link className="btn btn-primary" href="/user/diagnose">Diagnose</Link>
          &nbsp;&nbsp;
          <Link className="btn" href="/user/diagnosis-history">See History</Link>
        </div>
        
    </div>
  );
};

export default WithAuth(HomePage);

"use client";
import React, { useState } from "react";
import WithAuth from "../../helper/WithAuth";
import UserData from "../sharedProfile/UserData";
import PredictionForm from "../sharedProfile/PredictionForm";
import DiagnosisResult from "../sharedProfile/DiagnosisResult";

const DiagnosePage = ({userData}) => {
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  return (
    <div>
      <UserData userData={userData}/>
      {!diagnosisResult ? <PredictionForm 
        setDiagnosisResult={setDiagnosisResult} 
        userData={userData}/> : 
        <DiagnosisResult diagnosisResult={diagnosisResult} 
        setDiagnosisResult={setDiagnosisResult}
         userData={userData} />
      }

    </div>
  );
};

export default WithAuth(DiagnosePage);

"use client";
import React, { useState } from "react";
import WithAuth from "../../helper/WithAuth";
import UserData from "../sharedProfile/UserData";
import PredictionForm from "../sharedProfile/PredictionForm";

const DiagnosePage = ({userData}) => {
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  return (
    <div>
      <UserData userData={userData}/>
      {!diagnosisResult ? <PredictionForm 
        setDiagnosisResult={setDiagnosisResult} 
        userData={userData}/> : 
        <>
          <div>
            <pre>
              <code>
                {JSON.stringify(diagnosisResult)}
              </code>
            </pre>
          </div>
        </>
      }
    </div>
  );
};

export default WithAuth(DiagnosePage);

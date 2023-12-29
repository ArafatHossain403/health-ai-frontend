import Link from 'next/link';
import React from 'react';

const DiagnosisResult = ({ setDiagnosisResult, diagnosisResult, userData}) => {
    return (
        <div>
            <div className='my-5'>
            <h1 className='text-center font-bold text-xl  text-green-800 '>Diagnose Result Summary </h1>
            </div>
            <div className="card card-body">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Values</th>
                </tr>
              </thead>
              <tbody>
                {userData?.gender == "female" && (
                     <tr>
                    <td>Pregnancies: </td>
                    <td>{diagnosisResult?.pregnancies}</td>
                  </tr> 
                  )}
                  <tr>
                    <td>glucose: </td>
                    <td>{diagnosisResult?.glucose}</td>
                  </tr> 
                  <tr>
                    <td>Blood Pressure: </td>
                    <td>{diagnosisResult?.bp}</td>
                  </tr> 
                  <tr>
                    <td>Tkin Thickness: </td>
                    <td>{diagnosisResult?.skin_thickness}</td>
                  </tr> 
                  <tr>
                    <td>Insulin: </td>
                    <td>{diagnosisResult?.insulin}</td>
                  </tr> 
                  <tr>
                    <td>Height: </td>
                    <td>{diagnosisResult?.height}</td>
                  </tr>
                  <tr>
                    <td>Weight: </td>
                    <td>{diagnosisResult?.weight}</td>
                  </tr>
                  <tr>
                    <td>Age: </td>
                    <td>{diagnosisResult?.age}</td>
                  </tr>
                  <tr>
                    <td>Outcome: </td>
                    <td>{diagnosisResult?.outcome}</td>
                  </tr>
                 
                 
              </tbody>
            </table>
            {
              diagnosisResult?.outcome == 0 ? <div> Your are Diabetes is Negative </div>:  <div> Your are Diabetes is Positive <small>Please contact your doctor </small></div>
            }
            <div className="form-control mt-6">
          <button onClick={()=> setDiagnosisResult(null)} className="btn btn-primary"> <Link href="/user/diagnose">Check Again</Link></button>
        </div>
          </div>
        </div>

            
        </div>
    );
};

export default DiagnosisResult;
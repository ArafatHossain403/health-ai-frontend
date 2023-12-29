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
                    <td>Glucose (mg/dL): </td>
                    <td>{diagnosisResult?.glucose}</td>
                  </tr> 
                  <tr>
                    <td>Systolic Blood Pressure: </td>
                    <td>{diagnosisResult?.s_bp}</td>
                  </tr> 
                  <tr>
                    <td>Diastolic Blood Pressure: </td>
                    <td>{diagnosisResult?.d_bp}</td>
                  </tr>
                  <tr>
                    <td>Mean Blood Pressure: </td>
                    <td>{diagnosisResult?.mbp}</td>
                  </tr>
                  <tr>
                    <td>Skin Thickness (mm): </td>
                    <td>{diagnosisResult?.skin_thickness}</td>
                  </tr> 
                  <tr>
                    <td>Insulin (µU/mL): </td>
                    <td>{diagnosisResult?.insulin}</td>
                  </tr> 
                  <tr>
                    <td>Height (cm): </td>
                    <td>{diagnosisResult?.height}</td>
                  </tr>
                  <tr>
                    <td>Weight (kg): </td>
                    <td>{diagnosisResult?.weight}</td>
                  </tr>
                  <tr>
                    <td>Result: </td>
                    <td> Diabetes {diagnosisResult?.outcome == 1
                    ? <span className="text-red-600 font-bold">Positive</span>
                    : <span className="text-green-600 font-bold">Negative</span>
                  }</td>
                  </tr>
                 
                 
              </tbody>
            </table>
            <br></br>
            {
              diagnosisResult?.outcome == 1 
              ? <div>
                  <span className='font-bold'>Note: </span>
                  <span> Your Should Consult Your Doctor </span>
                </div>: ''
            }
        <div className='flex gap-3'>
          <div className="form-control mt-3">
            <button onClick={()=> setDiagnosisResult(null)} className="btn btn-primary"> <Link href="/user/diagnose">Check Again</Link></button>
          </div>
          <div className="form-control mt-3">
            <button onClick={()=> alert('in progress...')} className="btn btn-info">Send To Mail</button>
          </div>
        </div>
          </div>
        </div>

            
        </div>
    );
};

export default DiagnosisResult;
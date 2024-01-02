import moment from "moment";
import React, { useState } from "react";

const DiagnosisHistoryTable = ({ histories, userData }) => {
  const [selectedHistory, setSelectedHistory] = useState(null);

  const openModal = (history) => {
    setSelectedHistory(history);
    document.getElementById("my_modal_1").showModal();
  };
  return (
    <div className="card card-body">
      <h1 className="text-center font-bold text-lg">History Table</h1>

      <div className="card card-body">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {userData?.userData?.gender == "female" && <th>Pregnancies</th>}
                <th>Glucose</th>
                <th>Blood Pressure</th>
                <th>Skin Thickness</th>
                <th>Insulin</th>
                <th>BMI</th>
                <th>Result</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {histories.map((history) => (
                <tr key={history.id}>
                  {userData?.gender == "female" && (
                    <td>{history?.pregnancies}</td>
                  )}
                  <td>{history?.glucose}</td>
                  <td>{history?.mbp}</td>
                  <td>{history?.skin_thickness}</td>
                  <td>{history?.insulin}</td>
                  <td>{history?.bmi}</td>
                  <td>{history?.outcome == 1
                    ? <span className="text-red-600 font-bold">Positive</span>
                    : <span className="text-green-600 font-bold">Negative</span>
                  }</td>
                  <td>
                    <button
                      className="btn btn-neutral"
                      onClick={() => openModal(history)}
                    >
                      View More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
{/* modal start here */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello {userData?.name}</h3>
          <p className="py-4">
            Your Diagnosis History In Details
          </p>
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
                    <td>{selectedHistory?.pregnancies}</td>
                  </tr> 
                  )}
                  <tr>
                    <td>Glucose (mg/dL): </td>
                    <td>{selectedHistory?.glucose}</td>
                  </tr> 
                  <tr>
                    <td>Systolic Blood Pressure: </td>
                    <td>{selectedHistory?.s_bp}</td>
                  </tr> 
                  <tr>
                    <td>Diastolic Blood Pressure: </td>
                    <td>{selectedHistory?.d_bp}</td>
                  </tr>
                  <tr>
                    <td>Mean Blood Pressure: </td>
                    <td>{selectedHistory?.mbp}</td>
                  </tr>
                  <tr>
                    <td>Skin Thickness (mm): </td>
                    <td>{selectedHistory?.skin_thickness}</td>
                  </tr> 
                  <tr>
                    <td>Insulin (µU/mL): </td>
                    <td>{selectedHistory?.insulin}</td>
                  </tr> 
                  <tr>
                    <td>Height (cm): </td>
                    <td>{selectedHistory?.height}</td>
                  </tr>
                  <tr>
                    <td>Weight (kg): </td>
                    <td>{selectedHistory?.weight}</td>
                  </tr>
                  <tr>
                    <td>Body Mass Index (kg): </td>
                    <td>{selectedHistory?.bmi}</td>
                  </tr>
                  <tr>
                    <td>Result: </td>
                    <td> Diabetes {selectedHistory?.outcome == 1
                    ? <span className="text-red-600 font-bold">Positive</span>
                    : <span className="text-green-600 font-bold">Negative</span>
                  }</td>
                  </tr>
                  <tr>
                    <td>Created At: </td>
                    <td><span className="stat-value text-info text-sm">
                            {moment(selectedHistory?.created_at).format('ll')} </span></td>
                  </tr>
                 
                 
              </tbody>
            </table>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={() => document.getElementById("my_modal_1").close()}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DiagnosisHistoryTable;

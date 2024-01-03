import { callFetcher } from "@/app/helper/fetcher";
import { swalError, swalSuccess } from "@/app/helper/functions";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";

const DiagnosisResult = ({ setDiagnosisResult, diagnosisResult, userData }) => {
  const [email, setEmail] = useState("");

  const sendEmail = async () => {
    try {
      const response = await callFetcher(
        "user/diagnose/diabetes/history/send-to-mail",
        "post",
        { to_mail_address: email }
      );

      if (response.success) {
        //  Show SweetAlert for success
        swalSuccess(response.message);
        setEmail("");
      }
    } catch (error) {
      swalError(error.message);
    }
  };
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center font-bold text-xl  text-green-800 ">
          Diagnose Result Summary{" "}
        </h1>
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
                <td>BMI: </td>
                <td>{diagnosisResult?.bmi}</td>
              </tr>
              <tr>
                <td>Result: </td>
                <td>
                  {" "}
                  Diabetes{" "}
                  {diagnosisResult?.outcome == 1 ? (
                    <span className="text-red-600 font-bold">Positive</span>
                  ) : (
                    <span className="text-green-600 font-bold">Negative</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <br></br>
          {diagnosisResult?.outcome == 1 ? (
            <div>
              <span className="font-bold">Note: </span>
              <span> Your Should Consult Your Doctor </span>
            </div>
          ) : (
            ""
          )}
          <div className="flex gap-3">
            <div className="form-control mt-3">
              <button
                onClick={() => setDiagnosisResult(null)}
                className="btn btn-primary"
              >
                {" "}
                <Link href="/user/diagnose">Check Again</Link>
              </button>
            </div>
            <div className="form-control mt-3">
              <button
                className="btn btn-info"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Send To Mail
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal start */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Enter Destination Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn mr-2"
                onClick={() => {
                  setEmail("");
                  document.getElementById("my_modal_1").close();
                }}
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={sendEmail}>
                Send Email
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DiagnosisResult;

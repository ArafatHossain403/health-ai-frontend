import Link from "next/link";
import React from "react";

const userPage = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Pregnancies</th>
                  <th>Glucose</th>
                  <th>SkinThickness</th>
                  <th>BloodPressure</th>
                  <th>Insulin</th>
                  <th> BMI</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td></td>
                  <td></td>

                  <td></td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Diagnosis</a>
            </li>
            <li>
              <a>Feedback</a>
            </li>
            <li>
              <a>Overview</a>
            </li>
            <li>
              <Link href="/profile/offers">Our offerings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default userPage;

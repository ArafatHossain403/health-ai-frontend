import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-4xl font-bold">
              Live decision support system for disease diagnosis.!
            </h1>
            <p className="py-8">
              Real-Time Analysis: When a healthcare professional enters patient
              information into the system, the AI algorithm processes this data
              instantly, comparing it to historical data and medical literature
              to provide potential diagnoses or suggest further tests.Decision
              Support: The system generates a list of possible diagnoses or
              recommendations based on the analysis. It might offer
              probabilities for each potential diagnosis or suggest specific
              tests to confirm or rule out certain conditions.
            </p>

            <div className="hero min-h-screen bg-base-100">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src="pic10.jpg"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold">Our Service!</h1>
                  <br></br>
                  <h2 className="text-3xl front-bold">Diabetes</h2>
                  <p className="py-6">
                    Diabetes is a disease that occurs when your blood glucose,
                    also called blood sugar, is too high.
                  </p>

                   <h2 className="text-3xl front-bold">Blood Pressure</h2>
                    <p className="py-6">
                      Blood pressure is measured using two numbers The first
                      number called systolic blood pressure.The second number
                      called diastolic blood pressure.
                    </p>

                   <h2 className="text-3xl front-bold">MRI Diagnostic</h2>
                    <p className="py-6">
                      {`The MRI scan is a medical imaging procedure that uses a
                      magnetic field and radio waves to take pictures of your
                      body's interio`}
                    </p>
                </div>
                
              </div>
            </div>
           

             <div className="carousel rounded-box">
              <div className="carousel-item">
                <img src="pic7.jpg" alt="Burger" />
              </div>
              <div className="carousel-item">
                <img src="pic4.jpg" alt="Burger" />
              </div>
              <div className="carousel-item">
                <img src="pic3.jpg" alt="Burger" />
              </div>
              <div className="carousel-item">
                <img src="pic2.jpg" alt="Burger" />
              </div>

              <div className="carousel-item">
                <img src="pic1.jpg" alt="Burger" />
              </div>
            </div> 

          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

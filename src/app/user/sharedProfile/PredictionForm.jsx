import { callFetcher } from '@/app/helper/fetcher';
import { swalError } from '@/app/helper/functions';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const PredictionForm = ({setDiagnosisResult, userData}) => {
//form submit
  const [formData, setFormData] = useState({
      pregnancies: '',
      glucose: '',
      bp: '',
      skin_thickness: '',
      insulin: '',
      height: '',
      weight: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Parse float for fields
    const parsedValue =
      value === '' ? null : parseFloat(value);
  
    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const convertedFormData = {
            ...formData,
            pregnancies: parseFloat(formData.pregnancies),
            glucose: parseFloat(formData.glucose),
            bp: parseFloat(formData.bp),
            skin_thickness: parseFloat(formData.skin_thickness),
            insulin: parseFloat(formData.insulin),
            height: parseFloat(formData.height),
            weight: parseFloat(formData.weight),
          };


      const response = await callFetcher('user/diagnose/diabetes', 'post', convertedFormData);
      if (response.id) {
        // Show SweetAlert for success
        // Swal.fire({
        //   title: 'Submit Successful!',
        //   text: 'Thanks for your submit',
        //   icon: 'success',
        //   confirmButtonText: 'OK',
        // });
        setDiagnosisResult(response);
    
      }
    } catch (error) {
        console.log()
      swalError(error.message);
    }
  };

    
    return (
        <div>
            <div className="card">
      <form className="card-body text-center" onSubmit={handleSubmit}>
        <h1 className="text-center text-lg font-bold">
          Diabetes Prediction Form
        </h1>
        <div className='flex gap-9'>
        {userData?.gender === "female" && (
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pregnancies</span>
              </label>
              <input
                type="number"
                name="pregnancies"
                placeholder="Pregnancies"
                className="input input-bordered"
                value={formData.pregnancies}
                onChange={handleChange}
                required
              />
            </div>
          )} 
          <div className="form-control">
          <label className="label">
            <span className="label-text">Glucose</span>
          </label>
          <input
            type="number"
            name="glucose"
            placeholder="Glucose"
            className="input input-bordered"
            value={formData.glucose}
                onChange={handleChange}
            required
          />
        </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Blood Pressure</span>
          </label>
          <input
            type="number"
            name="bp"
            placeholder="Blood Pressure"
            className="input input-bordered"
            value={formData.bp}
                onChange={handleChange}
            required
          />
          <label className="label"></label>
        </div>

        <div className='flex gap-9'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Skin Thickness</span>
          </label>
          <input
            type="number"
            name="skin_thickness"
            placeholder="Skin Thickness"
            className="input input-bordered"
            value={formData.skin_thickness}
                onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Insulin</span>
          </label>
          <input
            type="number"
            name="insulin"
            placeholder="number"
            className="input input-bordered"
            value={formData.insulin}
                onChange={handleChange}
            required
          />
        </div>

        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Height (in cm)</span>
          </label>
          <input
            type="number"
            name="height"
            placeholder="Height"
            className="input input-bordered"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Weight (in kg)</span>
          </label>
          <input
            type="number"
            name="weight"
            placeholder="number"
            className="input input-bordered"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default PredictionForm;
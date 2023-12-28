'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { callFetcher } from '../helper/fetcher';
import WithoutAuth from '../helper/WithoutAuth';
import { useRouter } from 'next/navigation';
import { swalError } from '../helper/functions';

const SignupPage = () => {

  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    address: '',
    gender: '',
    birth_date: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await callFetcher('user/signup', 'post', formData);
      if (response.id) {
        // Show SweetAlert for success
        Swal.fire({
          title: 'Signup Successful!',
          text: 'You have successfully signed up.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        
        // Reset the form data
        setFormData({
          name: '',
          email: '',
          password: '',
          mobile: '',
          address: '',
          gender: '',
          birth_date: '',
        });

        router.push('/login');
      } else {
        // Handle error, e.g., show an error message
        console.error('Signup failed');
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    } catch (error) {
      swalError(error.message);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
              <h1 className='text-center text-lg font-bold'>
                Please Signup
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select 
                  name="gender" 
                  id="gender"
                  className="input input-bordered" 
                  required={true}
                  onChange={handleChange}
                >
                  <option value="">--Select--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="number"
                  className="input input-bordered"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Birth Date</span>
                </label>
                <input
                  type="date"
                  name="birth_date"
                  placeholder="Birth Date"
                  className="input input-bordered"
                  value={formData.birth_date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input input-bordered"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Do Have an Account?
                  </Link>
                </label>
                <Link href="/login" className="link link-accent" passHref>
                  Login
                </Link>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default WithoutAuth(SignupPage);
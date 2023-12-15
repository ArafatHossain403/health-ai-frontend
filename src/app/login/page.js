import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div>
      
      <h2 className="text-green-700 ">Authentication System</h2>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
         
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
            <h1 className='text-center text-lg font-bold'>
            Please Login
          </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                  Do not Have an Account?
                  </a>
                  
                </label>
                <Link className="link link-accent" href="/register">Register</Link>
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default LoginPage;
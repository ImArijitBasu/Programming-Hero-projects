import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const Register = () => {
    const {createNewUser , setUser} = useContext(AuthContext)
    const handleFormSubmit= (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        createNewUser(email , password)
        .then(result => {
            setUser(result.user)
        })
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleFormSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Register</button>
              </div>
            </form>
            <p>
              {" "}
              already have an account ? <Link to={"/login"} className="font-bold text-lg">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password);
    setError("");
    if(!terms){
      setError("accept our terms and conditions")
    }
    if (password < 6) {
      setError("password must be more longer");
      return;
      // code breaks here for better ux
    }
    const regexPass =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!regexPass.test(password)) {
      setError(
        "at least one uppercase , one lowercase , one number , one special charecter needed"
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);

        //email verification
        sendEmailVerification(auth.currentUser)
        .then(()=>{
          console.log('email verification sent');
        })
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccess(false);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <button
                onClick={() => setShowPass(!showPass)}
                className="btn btn-xs absolute top-12 right-2"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text mr-2">Please accept our terms and condition</span>
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Successful</p>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

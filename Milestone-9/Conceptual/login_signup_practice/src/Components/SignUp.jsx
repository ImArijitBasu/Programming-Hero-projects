import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../MainLayout/Mainlayout';

const SignUp = () => {
    const {handleSignUp} = useContext(authContext)
    const handleForm = e => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPass = e.target.conPass.value;
        if(password.length < 6){
            alert('password must be long');
            return;
        }
        if(password!==conPass){
            alert("auth error")
            return;
        }
        handleSignUp(email , password)
    }
    return (
        <div>
            <form onSubmit={handleForm} action="">
                Email:<input type="text" name="email" id="" /><br />
                Password:<input type="password" name="password" id="" /><br />
                Conform:<input type="password" name="conPass" id="" /><br />
                <button type='submit' className='btn btn-xs btn-accent'>Sign up</button>
            </form>
        </div>
    );
};

export default SignUp;
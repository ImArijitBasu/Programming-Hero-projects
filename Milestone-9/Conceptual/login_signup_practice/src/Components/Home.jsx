import React, { useContext } from 'react';
import { auth } from './Firebase/firebase.config';
import { authContext } from '../MainLayout/Mainlayout';

const Home = () => {
    const {handleGoogleLogin,handleGithubLogin,user , setUser , handleLogOut} = useContext(authContext);


    return (
        <div>
            iam home 
            <button onClick={handleGoogleLogin} className='btn btn-primary'>Google</button>
            <button onClick={handleGithubLogin} className='btn btn-primary'>Github</button>
            <button onClick={handleLogOut} className='btn btn-error'>Log Out</button>
            {/* <button onClick={()=>setUser("username")}>user</button> */}
            <p>{user?.displayName}</p>
                    </div>
    );
};

export default Home;
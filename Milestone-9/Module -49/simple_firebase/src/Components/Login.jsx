import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        alert(error);
      });
  };
  //   console.log(user.displayName);
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Login with google</button>
      )}

      {user ? (
        <div>
          <p>name: {user.displayName}</p>
          <p>email : {user.email}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Login;

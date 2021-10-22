import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/home";
    const {
      getEmail,
      getPassword,
      signUpWithEmail,
      signInWithGoogle,
      setUser,
      getName,
      setError,
      sendVilifiedEmail,
      setUserName,
    } = useAuth();
    return (

        <div>
        <div className="container mx-auto w-50 text-center m-5 border border-1 border-warning p-5 ">
      <h2 className=" text-warning">Create Account</h2>
         <form 
          onSubmit={(e) => {
            e.preventDefault();
            signUpWithEmail()
              .then((result) => {
                setUserName();
                sendVilifiedEmail();
                alert("User has been Created!");
                history.push("/login");
              })
          }}
         >
          <input type="text" onBlur={getName} name="" placeholder="Your Name" className="w-50 m-2 text-center" id="" />
         <input type="email"
          name="" className="w-50 m-2 text-center" 
           placeholder="Your email" 
           onBlur={getEmail}
           autoComplete="current-email"
           id="email"
           required />
         <br/>
          <input 
             onBlur={getPassword}
             type="password"
             autoComplete="current-password"
             id="password"
             placeholder="Enter your password" className="w-50 m-2 text-center" required />
          <input type="submit" className="btn-warning w-50 m-2 text-center" value="Submit" />
          <br />
         </form>
         <p>Already have an account ? <Link to ="/login">Login Account</Link></p>
          <p>Or</p>
          <button 
            onClick={() => {
                signInWithGoogle()
                  .then((result) => {
                    setUser(result.user);
                    history.push(redirect);
                  })
                  .catch((err) => {
                    setError(err.message);
                  });
              }}
           className="btn-warning w-50 m-2 text-center rounded-3" >Sign-in with google</button>

      </div>
  </div>
      
    );
};

export default Register;
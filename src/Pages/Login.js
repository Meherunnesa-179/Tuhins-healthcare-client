import React from 'react';
import "./login.css"
import useAuth from './../Hooks/useAuth';
import { Link } from 'react-router-dom';
import { useHistory , useLocation} from 'react-router-dom';

const Login = () => {
  const {signInWithGoogle , signInWithEmail , setUser,setError,getEmail,getPassword} = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/home";
    return (
        <div>
                    <div className="container mx-auto w-50 text-center m-5 border border-1 border-warning p-5 ">
            <h2>Login</h2>
               <form   onSubmit={() => {
            signInWithEmail()
              .then((result) => {
                setUser(result.user);
                history.push(redirect);
              })
              .catch((err) => {
                setError(err.message);
              });
          }}>
               <input type="email"  onBlur={getEmail} name="" className="w-50 m-2 text-center" id="    email" placeholder="Enter your email" />
               <br/>
                <input type="password"  onBlur={getPassword} name="" id="password"  className="w-50 m-2 text-center" placeholder="Password" />
                <br />
                <input type="submit" className="btn-warning w-50 m-2 text-center rounded-3" value="Submit" />
                <br />
               </form>
               {/* <h3>{error}</h3> */}
               <p>new to Tuhin's Healthcare ? <Link to ="/register">Create An Account</Link></p>
                <p>Or</p>
                <button className="btn-warning w-50 m-2 text-center rounded-3"
                  onClick={() => {
                    signInWithGoogle()
                      .then((result) => {
                        // setUser(user);
                        history.push(redirect);
                      })
                  }} >Sign-in with google</button>
            </div>
        </div>
    );
};

export default Login;
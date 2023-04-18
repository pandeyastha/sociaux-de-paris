import {auth, provider} from "../config/firebase";
import  {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import googleLogo from "./googleLogo.png"


export const Login =() => {
    const navigate= useNavigate();
    const signInWithGoogle=  async () => {
         const result=   await signInWithPopup(auth,provider);         //provides auth obj from provider :Google
         console.log(result);
         navigate("/")                                                //redirect to home on Login
    };  
 
                                                                      //start GoogleAuth
    return (<div> 
          
          <p>Sign in With Google!</p>                                   
          <button className="loginBtn" onClick={signInWithGoogle}>         
               <img className="loginLogo" src={googleLogo} />                 
               </button>
           </div>);                                                    //End for googleAuth


};
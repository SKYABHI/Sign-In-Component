import React, {useState} from 'react';
import '../Styles/SignIn.css';
import {Link} from 'react-router-dom';
import axios from 'axios';



const SignIn = () => {

    const [email, setemail] = useState('');  // useState to get input Email
    const [password, setpassword] = useState('');  // useState to get input password


    const submitHandler = async e => {
        e.preventDefault();             // to prevent browser default behaviour

        const userInput ={              // to grab value in single object named userInput
            enteredEmail:email ,
            enteredPassword:password
        };

        await axios.post("localhost:8000/api/login",userInput);  // post method to update data in API
        
        setemail("");                               //to set input field empty after submit
        setpassword("");
        
    };


return(
    <div className="container">
        <form onSubmit= {e => submitHandler(e)}>
        <legend><h1>Sign in</h1></legend>
        <div>
            
            <label className="main1">Email</label>
            <div>
                <input className="input1" value={email} onChange={e => setemail(e.target.value)} 
                 type="email" name="email"  id="email" required />
            </div>
            
        </div>
        <div>
            
             
            <label className="main1">Password</label>
            <div > 
                <input className="input1" value={password} onChange={e => setpassword(e.target.value)} 
                 type="password" name="password"  id="password" required/>
            </div>  
            
        </div>
        <div>
            <label><input className="largerCheckbox" type="checkbox" /> &nbsp;Remember me?</label>
        </div>
        <div>
            <input type="submit" value="Sign in" />
        </div>
        
        </form>
        <div className="bottom2">
        <div className="bottom1">
            
            <Link className="bottom" to="/forgotpassword" >Forgot your password?</Link>
            
        </div>
        <div className="bottom1">
            
           <span> Don't have an account? <Link className="bottom" to="/signup">Sign up</Link></span> 
        
        </div>
        <div className="bottom1">
            
            <Link className="bottom" to="/emailconfirmation">Resend email confirmation</Link>
        
        </div>
        </div>
    </div>

);

};
export default SignIn;
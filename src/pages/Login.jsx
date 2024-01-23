import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

// title
import {useTitle} from '../hooks/useTitle';
import { useState } from "react";

export const Login = () => {
  useTitle('Login | Velocity Opticals')

  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setPassword] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(userEmail, userPassword);

      axios.post('https://faradic.codtrees-dev.cloud/api/login', {email:userEmail, password:userPassword}).then((res)=>{
        console.log(res);
        sessionStorage.clear()//clears the sesstion storage
        //adds creds
        sessionStorage.setItem('email',userEmail);
        sessionStorage.setItem('password', userPassword);
        //removes input from the input field
        setUserEmail('');
        setPassword('');
        //redirects to home
        navigate('/')
      }).catch((error)=> {
        console.log(error.response.data.errors.email)
    });
  }


  return (
    <div className="registration">
      <div className="logo"></div>
      <div className="form-content">
      <form className="theForm" onSubmit={handleSubmit}>
        <div className="title">Login From</div>
        <div className="input-box">
          <input type="text" id="email" name='email' autoComplete="false" onChange={e=>setUserEmail(e.target.value)} value={userEmail} required/>
          <label>Email</label>
        </div>
        <div className="input-box">
          <input type="password" name='number' onChange={e=>setPassword(e.target.value)} value={userPassword} required/>
          <label>Password</label>
        </div>

        <div className="otherStuff">
          <div className="others">
            <input type="checkbox" id="remember-me"/>
            <label htmlFor="remember-me">Remember me.</label>
          </div>
          <div className="others">
            <NavLink to='/login'>Forgot password?</NavLink>
          </div>
        </div>

        <button className="primary-btn" type="submit">Login</button>
        {/* {isValid !== null && (
          <p className='validate-message' style={{ color: isValid ? 'green' : 'red' }}>
            {isValid ? 'Your enquiry has been sent!' : 'Please enter a valid email.'}
          </p>
        )} */}
      </form>
      </div>
    </div>
  )
}

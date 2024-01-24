import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

// title
import {useTitle} from '../hooks/useTitle';
import { useRef } from "react";
import toast from "react-hot-toast";

export const Login = () => {
  useTitle('Login | Velocity Opticals')

  const navigate = useNavigate();

  // const [userEmail, setUserEmail] = useState('');
  // const [userPassword, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    console.log(emailRef.current.value, passwordRef.current.value);

    axios.post('https://faradic.codtrees-dev.cloud/api/login', {email:emailRef.current.value, password:passwordRef.current.value}).then((res)=>{
      sessionStorage.clear()

      sessionStorage.setItem('email',emailRef.current.value);
      sessionStorage.setItem('password', passwordRef.current.value);

      emailRef.current.value = "";
      passwordRef.current.value = "";
      toast.success(res.data.message,{ duration: 5000});
      navigate('/')
    }).catch((error)=> {
      toast.error("Login Unsuccessfull",{ duration: 5000});
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
          <input type="text" id="email" autoComplete="false" ref={emailRef} required/>
          <label>Email</label>
        </div>
        <div className="input-box">
          <input type="password" ref={passwordRef} required/>
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

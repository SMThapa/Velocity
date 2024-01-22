// title
import {useTitle} from '../hooks/useTitle';

import { NavLink } from "react-router-dom"

export const Registration = () => {

  useTitle('Registration | Velocity Opticals');

  return (
    <div className="registration">
      <div className="logo"></div>
      <div className="form-content">
      <form className="theForm">
        <div className="title">Registration From</div>
        <div className="input-box">
          <input type="text" name='name' required/>
          <label>Name</label>
        </div>
        <div className="input-box">
          <input type="text" id="email" name='email' required/>
          <label>Email</label>
        </div>
        <div className="input-box">
          <input type="password" name='number' required/>
          <label>Password</label>
        </div>
        <div className="input-box">
          <input type="password" name='number' required/>
          <label>Re-Enter Password</label>
        </div>

        <div className="otherStuff">
          <div className="others">
            <input type="checkbox" id="remember-me"/>
            <label htmlFor="remember-me">Remember me.</label>
          </div>
          <div className="others">
            <NavLink to='/login'>Already have an account? Lets go!!</NavLink>
          </div>
        </div>

        <button className="primary-btn" type='submit'>Register</button>
      </form>
      </div>
    </div>
  )
}

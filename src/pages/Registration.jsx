// title
import { useState } from 'react';
import {useTitle} from '../hooks/useTitle';

import { NavLink } from "react-router-dom"
import axios from 'axios';

export const Registration = () => {

  useTitle('Registration | Velocity Opticals');


  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyType , setcompanyType] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pancard, setPancard] = useState('');
  const [gst, setGst] = useState('');
  const [tan, setTan] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [pocName, setPocName] = useState('');
  const [pocNumber, setPocNumber] = useState('');
  const [dealer, setDealer] = useState('');
  const [creditLimit, setCreditLimit] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e)=>{
    e.preventDefault();
    
    axios.post('https://faradic.codtrees-dev.cloud/api/registervelocity', {
      name:name, 
      company_name:companyName, 
      phone_number:phone, 
      email:email, 
      address:address, 
      company_type:companyType, 
      pan_card_id:pancard, 
      GST_no:gst, 
      tan:tan, 
      aadhar:aadhar, 
      POC_name:pocName, 
      POC_number:pocNumber, 
      Applying_for:dealer, 
      credit_limit:creditLimit, 
      password:password
    }).then((res)=>{
        console.log(res.data.message);
        setName('');
        setCompanyName('');
        setcompanyType('');
        setAddress('');
        setPhone('');
        setEmail('');
        setPancard('');
        setGst('');
        setTan('');
        setAadhar('');
        setPocName('');
        setPocNumber('');
        setDealer('');
        setCreditLimit('');
        setPassword('');
      }).catch((error)=>{
        console.log(error.response.data.errors);
      })

  }


  return (
    <div className="registration">
      <div className="logo"></div>
      <div className="form-content">
      <form className="theForm" onSubmit={handleSubmit}>
        <div className="title">Registration From</div>

        <div className="input-box">
          <input type="text" name='name' onChange={e=>setName(e.target.value)} value={name} required/>
          <label>Name</label>
        </div>        
        
        <div className="input-box">
          <input type="text" name='companyName' onChange={e=>setCompanyName(e.target.value)} value={companyName} required/>
          <label>Company Name</label>
        </div>        

        <div className="input-box-divide">
          <div className="input-box">
            <input type="text" name='number' onChange={e=>setPhone(e.target.value)} value={phone} required/>
            <label>Number</label>
          </div>        

          <div className="input-box">
            <input type="email" name='email' onChange={e=>setEmail(e.target.value)} value={email} required/>
            <label>Email</label>  
          </div>   
        </div>     

        <div className="input-box">
          <input type="text" name='companyType' onChange={e=>setcompanyType(e.target.value)} value={companyType} required/>
          <label>Company Type</label>
        </div>        

        <div className="input-box">
          <input type="text" name='address' onChange={e=>setAddress(e.target.value)} value={address} required/>
          <label>Address</label>
        </div>        

        <div className="input-box-divide">
          <div className="input-box">
            <input type="text" name='Pan Card' onChange={e=>setPancard(e.target.value)} value={pancard} required/>
            <label>Pancard</label>
          </div>        

          <div className="input-box">
            <input type="text" name='gst' onChange={e=>setGst(e.target.value)} value={gst} required/>
            <label>GST</label>
          </div>  
        </div>      

        <div className="input-box-divide">
          <div className="input-box">
            <input type="text" name='tan' onChange={e=>setTan(e.target.value)} value={tan} required/>
            <label>Tan</label>
          </div>        

          <div className="input-box">
            <input type="text" name='aadhar' onChange={e=>setAadhar(e.target.value)} value={aadhar} required/>
            <label>AAdhar</label>
          </div>        
        </div>

        <div className="input-box-divide">
          <div className="input-box">
            <input type="text" name='pocNumber' onChange={e=>setPocName(e.target.value)} value={pocName} required/>
            <label>POC Name</label>
          </div>        

          <div className="input-box">
            <input type="text" name='pocNumber' onChange={e=>setPocNumber(e.target.value)} value={pocNumber} required/>
            <label>POC Number</label>
          </div>        
        </div>

        <div className="input-box-divide">
          <div className="input-box">
            <select name="" id="" onChange={e=>setDealer(e.target.value)} value={dealer}>
              <option value="--select role for applying--">--select role for applying--</option>
              <option value="Dealer">Dealer</option>
              <option value="Direct Dealer">Direct Dealer</option>
              <option value="Distributer">Distributer</option>
            </select>
          </div>     

          <div className="input-box">
            <input type="text" name='creditLimit' onChange={e=>setCreditLimit(e.target.value)} value={creditLimit} required/>
            <label>Credit Limit</label>
          </div>   
        </div>    
        <div className="input-box">
            <input type="password" name='creditLimit' onChange={e=>setPassword(e.target.value)} value={password} required/>
            <label>Password</label>
          </div>   

        <div className="otherStuff">
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

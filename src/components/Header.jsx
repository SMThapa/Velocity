import { NavLink, Link } from 'react-router-dom'

import logo from '../assets/logo/velocity-logo1.png';
import '../style/header.scss'
import { useState } from 'react';

export const Header = () => {

  // const isUser = sessionStorage.getItem('email');
  const [isUser, setUser] = useState(sessionStorage.length === 0 ? false : true);


  const handleLogout = ()=>{
    sessionStorage.clear(); 
    setUser(true);
  }

  return (
    <nav>
      <div className="theHeader">

        <div className="navItems">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/aboutUs'>About Us</NavLink>
          <NavLink to='/blogs'>Blogs</NavLink>
          <NavLink to='/contact'>Contacts</NavLink>
        </div>

        <div className="hamburgerMenu">
          menu
        </div>

        <div className="navLogo">
          <NavLink to='/'>
            <img src={logo} alt="" />
          </NavLink>
        </div>

        <div className="navButtons">
          <div className="searchBar">
            <button type='submit'><i className="bi bi-search"></i></button>
            <input type="text" />
          </div>
        
          
          <p className={`${isUser ? 'hidden' : ''} login`}><NavLink  to='/registration'>Login or Register <i className="bi bi-person-add"></i></NavLink></p>
          
          <div className={`navUtilButtons ${isUser ? '' : 'hidden'}`}>
            <Link to="/userProfile"><i className="bi bi-person"></i></Link>
            <Link to="/wishlist"><i className="bi bi-heart"></i></Link>
            <Link to="/cart"><i className="bi bi-bag"></i></Link>
            <i onClick={handleLogout} className="bi bi-box-arrow-right"></i>
          </div>

        </div>

      </div>
    </nav>
  )
}

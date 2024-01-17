import { NavLink } from 'react-router-dom'
import '../style/header.css'

export const Header = () => {
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

        <div className="navLogo">
          <NavLink to='/'>
            <h1>Velocity</h1>
            <p>Glasses</p>
          </NavLink>
        </div>

        <div className="navButtons">
          <div className="searchBar">
            <button type='submit'><i className="bi bi-search"></i></button>
            <input type="text" />
          </div>
          <p className='login'><NavLink  to='/registration'>Login or Register <i className="bi bi-person-add"></i></NavLink></p>
        </div>

      </div>
    </nav>
  )
}

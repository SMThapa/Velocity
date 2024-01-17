import '../style/header.css'

export const Header = () => {
  return (
    <nav>
      <div className="theHeader">

        <div className="navItems">
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">Products</a>
          <a href="">Blogs</a>
          <a href="">Contacts</a>
        </div>

        <div className="navLogo">
          <a href="">
            <h1>Velocity</h1>
            <p>Glasses</p>
          </a>
        </div>

        <div className="navButtons">
          <div className="searchBar">
            <button type='submit'><i className="bi bi-search"></i></button>
            <input type="text" />
          </div>
          <p className='login'><a href="">login / Register</a></p>
        </div>

      </div>
    </nav>
  )
}

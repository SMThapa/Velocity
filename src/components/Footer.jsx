import '../style/footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-contents">
        <div className="about-us">
          <h1>About Us</h1>
          <p><a href="">Our Shop</a></p>
          <p><a href="">Contact</a></p>
          <p><a href="">Artists</a></p>
          <p><a href="">Local Giving</a></p>
          <p><a href="">Press</a></p>
        </div>
        <div className="get-help">
          <h1>Get Help</h1>
          <p><a href="">Delivery Information</a></p>
          <p><a href="">Term & Conditions</a></p>
          <p><a href="">Returns & Refunds</a></p>
          <p><a href="">Privacy Notice</a></p>
          <p><a href="">Shopping FAQ&apos;s</a></p>
        </div>
        <div className="customer-care">
          <h1>Customer Care</h1>
          <p><a href="">FAQs</a></p>
          <p><a href="">Store Location</a></p>
          <p><a href="">Returns</a></p>
          <p><a href="">Shipping Information</a></p>
          <p><a href="">Wholesale</a></p>
        </div>
        <div className="social-media">
          {/* <h1>Social Media  </h1> */}
          <div className="media-icons">
            <p><a href=""><i className="bi bi-twitter-x"></i></a></p>
            <p><a href=""><i className="bi bi-facebook"></i></a></p>
            <p><a href=""><i className="bi bi-instagram"></i></a></p>
            <p><a href=""><i className="bi bi-linkedin"></i></a></p>
          </div>
        </div>
      </div>
      <div className="footer-buttom-content">
        <div className="copyright">
          <p>copyright <i className="bi bi-c-circle"></i> 2024. All right reserved.</p>
        </div>
      </div>
    </footer>
  )
}

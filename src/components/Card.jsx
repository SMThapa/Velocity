import glass from '../assets/images/glass1.jpg';

export const Card = (data) => {
  return (
    <div className="card">
      <div className="image">
        <a href="">
          <img src={glass} alt="glass1" />
        </a>
        <div className="pop-ups-icons">
          <a href="">
            <div className="icons">
              <p className='showOnHover'>WishList</p>
              <i className="bi bi-heart"></i>
            </div>
          </a>
          <a href="">
            <div className="icons">
              <p className='showOnHover'>Add to Cart</p>
              <i className="bi bi-bag-plus"></i>
            </div>
          </a>
        </div>
      </div>        
      <div className="card-text">
          <p className='product-title'>{data.data.product_name}</p>
          <p className="product-price">Rs. {data.data.product_price}</p>
      </div>
    </div>
  )
}

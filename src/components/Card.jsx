import glass from '../assets/images/glass1.jpg';
// import glass2 from '../assets/images/img1.jpg';

export const Card = () => {
  return (
    <div className="card">
        <a href="">
            <img src={glass} alt="glass1" />
        </a>
        <div className="card-text">
            <p className='product-title'>Product Name</p>
            <p className="product-price">Rs. 10</p>
        </div>
    </div>
  )
}

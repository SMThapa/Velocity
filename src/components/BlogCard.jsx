import blogImg from '../assets/images/img3.jpg';

export const BlogCard = () => {
  return (
    <div className="card">
      <a href="">
        <img src={blogImg} alt="glass1" />
      </a>
      <div className="card-text">
        <p className="product-price">12 December, 2024</p>
        <p className='product-title'>Blog Title</p>
      </div>
    </div>
  )
}

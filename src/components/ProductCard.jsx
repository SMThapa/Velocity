import img from '../assets/shop/products-5.jpg';

export const ProductCard = (data) => {
  

  return (
    <div className="col-md-4">
        <img src={img} alt="" />
        <h4>{data.data.product_name}</h4>
        <p>Rs. {data.data.product_price}</p>
  </div>
  )
}

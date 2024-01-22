
export const Scheme = (Data) => {
  return (
    <div className="scheme">
    <div className="scheme-text">
      <p className="title">Our Latest Products</p>
      <p className="p-content">
        &quot;
        Lorem Ipsum is simply dummy text ofthe printing
        <br />and typesetting industry.&quot;
      </p>
      <div className="latestProductButton">
        <a href="" className="primary-btn">Shop Now</a>
      </div>
    </div>
    <div className="image-map">
      <img src={Data.Img} alt="image-maping" useMap="#imageMap" />
      <div className="product1-circle">
        <i className="bi bi-plus-lg"></i>

        <div className="showCard">

        </div>
      </div>
      <div className="product2-circle">
        <i className="bi bi-plus-lg"></i>
      </div>
    </div>
  </div>
  )
}

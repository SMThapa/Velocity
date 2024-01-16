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
        <a href="" className="shop-now-btn">Shop Now</a>
      </div>
    </div>
    <div className="image-map">
      <img src={Data.Img} alt="image-maping" useMap="#imageMap" />
      <map name="imageMap">
        <area target="" alt="" title="" href="" coords="1638,1529,1691,1645,1773,1713,1904,1718,1996,1660,2049,1548,2010,1442,2199,1423,2165,1495,2194,1602,2286,1674,2416,1664,2518,1577,2532,1471,2484,1374,2223,1365,1875,1399,1730,1408" shape="poly" />
        <area target="" alt="" title="" href="" coords="3030,1446,3083,1354,3185,1344,3233,1388,3310,1335,3388,1335,3475,1378,3658,1388,3446,1412,3417,1470,3306,1480,3248,1412,3199,1460,3165,1533,3093,1494" shape="poly" />
      </map>  
    </div>
  </div>
  )
}

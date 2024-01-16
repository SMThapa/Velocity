export const Categories = (Data) => {
  return (
    <div className="categories">
        <div className="centerContainer">
          <div className="cate-options">
            <p className="title">Shop <br />by Categories</p>
            <div className="cate-options">
              <div className="option">
                <p>All Glasses</p>
                <span className="hoizontal-line"></span>
              </div>
              <div className="option">
                <p>Women&apos;s Glasses</p>
                <span className="hoizontal-line"></span>
              </div>
              <div className="option">
                <p>Men&apos;s  Glasses</p>
                <span className="hoizontal-line"></span>
              </div>
              <div className="option">
                <p>Eco-friendly</p>
                <span className="hoizontal-line"></span>
              </div>
              <div className="option">
                <p>Street Style</p>
                {/* <span className="hoizontal-line"></span> */}
              </div>
            </div>
          </div>
          <div className="cate-images">
            <div className="image">
              <img src={Data.ImgArr[0]} alt="hover-images" />
            </div>
          </div>
        </div>
      </div>
  )
}

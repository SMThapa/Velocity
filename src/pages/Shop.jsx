import "../style/Shop.css";
import img from "../assets/shop/category-12.jpg";
import img2 from "../assets/shop/category-9.jpg";
import img3 from "../assets/shop/category-13.jpg";
import img4 from "../assets/shop/category-11.jpg";
import img5 from "../assets/shop/category-8.jpg";
import img6 from "../assets/shop/category-10.jpg";
import img7 from "../assets/shop/category-7.jpg";
import img8 from "../assets/shop/products-74-600x600.jpg";
import img9 from "../assets/shop/products-16-1-600x600.jpg";
import img10 from "../assets/shop/1-600x600.jpg";
import img11 from "../assets/shop/products-27-1-600x600.jpg";
import img12 from "../assets/shop/products-87-600x600.jpg";
import img13 from "../assets/shop/products-46-1-600x600.jpg";
import img14 from "../assets/shop/products-1-600x600.jpg";
import img15 from "../assets/shop/products-39-600x600.jpg";
import img16 from "../assets/shop/products-23-1-600x600.jpg";
import img17 from "../assets/shop/products-79-600x600.jpg";
import img18 from "../assets/shop/products-59-1-600x600.jpg";
import img19 from "../assets/shop/products-5-600x600.jpg";
import img20 from "../assets/shop/products-31-600x600.jpg";
import img21 from "../assets/shop/products-20-1-600x600.jpg";
import img22 from "../assets/shop/products-9-1-600x600.jpg";
import img23 from "../assets/shop/products-35-2-600x600.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Shop = () => {
  return (
    <div>
      <div className="breadcrumb_body">
        <div className="Title text-center">
          <h1>Shop</h1>
        </div>
        <div className="breadcrumbbody">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
        <div className="row category-slider">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="comments">
              <Swiper
                navigation={false}
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={4}
                loop={true}
                className="mySwiper round"
              >
                <SwiperSlide>
                  <a href="#">
                    <img className="img1" src={img} alt="" />
                  </a>
                  <a href="#">
                    <h4>All glasses</h4>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#">
                    <img src={img2} alt="" />
                  </a>
                  <a href="#">
                    <h4>Eco-Friendly</h4>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="">
                    <img src={img3} alt="" />
                  </a>
                  <a href="">
                    <h4>Glitter Glasses</h4>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="">
                    <img src={img4} alt="" />
                  </a>
                  <a href="">
                    <h4>Kids Glasses</h4>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="">
                    <img src={img5} alt="" />
                  </a>
                  <a href="">
                    <h4>Men&apos;s Glasses</h4>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="">
                    <img src={img6} alt="" />
                  </a>
                  <a href="">
                    <h4>Street Style</h4>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="">
                    <img src={img7} alt="" />
                  </a>
                  <a href="">
                    <h4>Women&apos;s Glasses</h4>
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 product-filter">
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse show categories Category-section"
            aria-labelledby="headingTwo"
          >
            <h4>Categories</h4>
            <div className="accordion-body">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked1"
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked1">
                    All Glasses
                  </label>
                  <span className="badge badge-secondary float-end">(8)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked2">
                    Eco-Friendly
                  </label>
                  <span className="badge badge-secondary float-end">(7)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked3"
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked3">
                    Glitter Glasses
                  </label>
                  <span className="badge badge-secondary float-end">(9)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked4"
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked4">
                    Kid&apos;s Glasses
                  </label>
                  <span className="badge badge-secondary float-end">(6)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Men&apos;s Glasses
                  </label>
                  <span className="badge badge-secondary float-end">(3)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Street Style
                  </label>
                  <span className="badge badge-secondary float-end">(6)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Women&apos;s Glasses
                  </label>
                  <span className="badge badge-secondary float-end">(9)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="underline"></div>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse show Brand-section"
            aria-labelledby="headingTwo"
          >
            <h4>Brands</h4>
            <div className="accordion-body">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked1"
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked1">
                    Dakley
                  </label>
                  <span className="badge badge-secondary float-end">(6)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked2">
                    DKNT
                  </label>
                  <span className="badge badge-secondary float-end">(2)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked3"
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked3">
                    Glamour
                  </label>
                  <span className="badge badge-secondary float-end">(10)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked4"
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked4">
                    Instyle
                  </label>
                  <span className="badge badge-secondary float-end">(1)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Nine West
                  </label>
                  <span className="badge badge-secondary float-end">(4)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Prada
                  </label>
                  <span className="badge badge-secondary float-end">(2)</span>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Ray Ban
                  </label>
                  <span className="badge badge-secondary float-end">(3)</span>
                </div>
              </div>
            </div>
            <div className="underline"></div>
          </div>
          <div>
            <div className="feature-product-title text-center">
              <h4>Feature Products</h4>
            </div>
            <div className="feature-product">
              <span>
                <img src={img10} alt="" />
              </span>
              <span>
                <h4>Red Printed T-shirt</h4>
              </span>
            </div>
            <div className="feature-product">
              <span>
                <img src={img22} alt="" />
              </span>
              <span>
                <h4>Red Printed T-shirt</h4>
              </span>
            </div>
            <div className="feature-product">
              <span>
                <img src={img23} alt="" />
              </span>
              <span>
                <h4>Red Printed T-shirt</h4>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="small-container produtcs-list">
            <div className="row row-2">
              <select>
                <option value="">Default Sorting</option>
                <option value="">Sort By Popularity</option>
                <option value="">Sort By Average Rating</option>
                <option value="">Sort By Latest</option>
                <option value="">Sort By Price: Low To High</option>
                <option value="">Sort By Price: High To Low</option>
              </select>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img src={img8} alt="" />
                <h4>Astoria</h4>
                <p>$200.00</p>
              </div>

              <div className="col-md-4">
                <img src={img9} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>

              <div className="col-md-4">
                <img src={img10} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>

              <div className="col-md-4">
                <img src={img11} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <img src={img12} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>

              <div className="col-md-4">
                <img src={img13} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>

              <div className="col-md-4">
                <img src={img14} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>

              <div className="col-md-4">
                <img src={img15} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <img src={img16} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>

              <div className="col-md-4">
                <img src={img17} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>

              <div className="col-md-4">
                <img src={img18} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>

              <div className="col-md-4">
                <img src={img19} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <img src={img20} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>

              <div className="col-md-4">
                <img src={img21} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>

              <div className="col-md-4">
                <img src={img22} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>

              <div className="col-md-4">
                <img src={img23} alt="" />
                <h4>Red Printed T-shirt</h4>
                <p>₹500.00</p>
              </div>
            </div>

            <div className="page-btn text-center">
              <a href="" className="load-more">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

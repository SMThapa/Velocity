import { HeroBanner, AboutUs, Scheme, Categories, Testimonial} from "./Components/Home/index";
import { ProductCarousel, Card, UspCard, EnquireForm, BlogCard } from "../components/index";

import aboutUsImg from '../assets/images/img1.jpg'
import schemeImg from '../assets/images/scheme-img.jpg';
import womenCate from '../assets/images/img4.jpg';
import menCate from '../assets/images/img7.jpg';
import testimonialImg from '../assets/images/img8.jpg';
import NikeLogo from '../assets/logo/icon.jpg';

import '../style/home.css';


export const Home = () => {
  
  const latestProductCard = <Card/>;
  const blogCard = <BlogCard/>;


  return (
    <>
      <HeroBanner/>
      <AboutUs Img={aboutUsImg}/>

      <div className="OurUSP">
        <p className="title">Our USP</p>
        <div className="uspCards">
          <UspCard/>
          <UspCard/>
          <UspCard/>
          <UspCard/>
        </div>
      </div>

      <div className="centerContainer">
        <div className="title">Partner With Us</div>
        <div className="partner-with-us">
          <p className="p-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
          <a href="" className="partner-btn">Let&apos;s Go!</a>
        </div>    
      </div>
      {/* <div className="marquee-image">
        <div className="marquee-img">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img">
          <img src={NikeLogo} alt="" />
        </div>
      </div>    */}
      <div className="marquee-image reverse">
        <div className="marquee-img-reverse">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img-reverse">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img-reverse">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img-reverse">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img-reverse">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img-reverse">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img-reverse">
          <img src={NikeLogo} alt="" />
        </div>
        <div className="marquee-img-reverse">
          <img src={NikeLogo} alt="" />
        </div>
      </div>   
      
      <div className="latestProduct">
        <div className="carouselContainer">
          <p className="title">Our Product</p>
          <ProductCarousel component={latestProductCard}/>
          <div className="latestProductButton">
            <a href="" className="shop-now-btn">Shop Now</a>
          </div>
        </div>
      </div>

      <div className="marquee-div">
        <p>Sunglasses <span className="dot"></span></p>
        <p>Sunglasses <span className="dot"></span></p>
        <p>Sunglasses <span className="dot"></span></p>
        <p>Sunglasses <span className="dot"></span></p>
        <p>Sunglasses <span className="dot"></span></p>
      </div>        

      <Scheme Img={schemeImg}/>

      <Categories ImgArr={[womenCate, menCate]}/>

      <Testimonial Img={testimonialImg}/>

      <div className="latestProduct">
        <div className="carouselContainer">
          <p className="title">Blogs</p>
          <ProductCarousel component={blogCard}/>
        </div>
      </div>

      <EnquireForm/>
    </>
  )
}

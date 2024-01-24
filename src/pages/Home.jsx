import { HeroBanner, AboutUs, Scheme, Categories, Testimonial, PartnerScheme, EnquireForm} from "./Components/Home/index";
import { ProductCarousel, UspCard, BlogCard } from "../components/index";

// title
import {useTitle} from '../hooks/useTitle';

import aboutUsImg from '../assets/images/img1.jpg'
import schemeImg from '../assets/images/scheme-img.jpg';

//category images
import allCate from '../assets/images/img10.jpg'
import womenCate from '../assets/images/img1.jpg';
import menCate from '../assets/images/img4.jpg';
import ecoCate from '../assets/images/img5.jpg';
import streetCate from '../assets/images/img7.jpg';


import testimonialImg from '../assets/images/img8.jpg';


// usp images
import usp1 from '../assets/USP/usp1.png';
import usp2 from '../assets/USP/usp2.png';
import usp3 from '../assets/USP/usp3.png';


import '../style/Home.scss';
import { Link } from "react-router-dom";


export const Home = () => {

  useTitle('Home | Velocity Opticals')


  return (
    <>
      <HeroBanner/>

      <div className="centerContainer">
        <div className="home-login-register">
          <p className="p-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
          <Link to="/registration" className="primary-btn">Login or Register</Link>
        </div>    
      </div>   

      <AboutUs Img={aboutUsImg}/>

      <div className="centerContainer">
        <div className="title partner-title">Partner With Us</div>
        <div className="partner-with-us">
          <p className="p-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
          <a to="" className="primary-btn">Let&apos;s Go!</a>
        </div>    
      </div>      

      <div className="OurUSP">
        <p className="title">Our USP</p>
        <div className="uspCards">
          <UspCard img={usp1}/>
          <UspCard img={usp2}/>
          <UspCard img={usp3}/>
          <UspCard img={usp1}/>
        </div>
      </div>

      <PartnerScheme/>

      <div className="latestProduct">
        <div className="carouselContainer">
          <p className="title">Our Product</p>
          <ProductCarousel/>
          <div className="latestProductButton">
            <a href="" className="primary-btn">Shop Now</a>
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

      <Categories ImgArr={[allCate, womenCate, menCate, ecoCate, streetCate]}/>

      <Testimonial Img={testimonialImg}/>

      <div className="latestProduct">
        <div className="carouselContainer">
          <p className="title">Blogs</p>
          <div className="blogCards">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </div>

      <EnquireForm/>
    </>
  )
}

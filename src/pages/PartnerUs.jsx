import { Registration } from "./Registration"
import { useContext } from "react"
import { SignInContext } from "../App"
import { useTitle } from "../hooks/useTitle"
import { Link } from "react-router-dom"
import { Testimonial } from "./Components/Home"
import '../style/PartnerUs.scss'

export const PartnerUs = () => {

    useTitle('Partner With Us | Velocity Opticals')

    const [signedIn, setSignedIn] = useContext(SignInContext)

  return (
    <section>
        <div className="topBanner">
            <div className="bannerContent">
                <p className="top-p">Partner With Us</p>
                <p className="big-text">
                    Simply dummy text of the printing <br />and typesetting
                </p>
                <p className="last-p">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimenbook.</p>
                <Link to="/login" className="primary-btn">Partner Login</Link>
            </div>
        </div>      
        <div className="partnerUs">

            <div className="our-partner-program">
                <p className="heading">
                    Our Partner Programme
                </p>

                <div className="p-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
Aldus PageMaker including versions of Lorem Ipsu
                </div>
            </div>
            {/* <div className="experience-banner">
                <div className="box">
                    <div className="count">10<span>+</span></div>
                    <strong className="field">Years of Excellence</strong>
                </div>
                <div className="box">
                    <div className="count">X<span>+</span></div>
                    <strong className="field">Products</strong>
                </div>
                <div className="box">
                    <div className="count">Y<span>+</span></div>
                    <strong className="field">Channel Partners</strong>
                </div>
                <div className="box">
                    <div className="count">Z<span>+</span></div>
                    <strong className="field">Happy Customers</strong>
                </div>
            </div> */}

            <div className="partner-us-content">
                <div className="image">
                    
                </div>
                <div className="contents">
                    <h1 className="heading">Your benefits as our partner</h1>
                    <ul>
                        <li><p>simply dummy text of the printing and typesetting industry.</p></li>
                        <li><p>simply dummy text of the printing and typesetting industry.</p></li>
                        <li><p>simply dummy text of the printing and typesetting industry.</p></li>
                        <li><p>simply dummy text of the printing and typesetting industry.</p></li>
                        <li><p>simply dummy text of the printing and typesetting industry.</p></li>
                    </ul>
                </div>
            </div>
        </div>
        <Testimonial/>
        {
            signedIn ? <div className="margin-bottom-100px"></div> : <Registration/>
        }
    </section>
  )
}

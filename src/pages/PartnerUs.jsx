import { Registration } from "./Registration"
import { useContext } from "react"
import { SignInContext } from "../App"
import { useTitle } from "../hooks/useTitle"
import '../style/PartnerUs.scss'

export const PartnerUs = () => {

    useTitle('Partner With Us | Velocity Opticals')

    const [signedIn, setSignedIn] = useContext(SignInContext)

  return (
    <section>
        <div className="topBanner">
                
        </div>      
        <div className="partnerUs">

            <div className="experience-banner">
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
            </div>

            <div className="partner-us-content">
                <div className="image">
                    
                </div>
                <div className="contents">
                    <h1 className="heading">Partner With Us : Together We Grow</h1>
                    <p>At Velocity Opticals, we value our partnership with all our channel partners and seek to establish a long-term relationship for mutual growth. With a diverse portfolio, our professional network includes over 500 distributors and 7,000 dealers across 100 cities in India.</p>
                    <p>As a Velocity Partner, you will get our marketing support and training, priority updates on offers and new launches, attractive commission schemes, prompt payouts, invitation to our partner contests and events and more. 
                        Join us today as a channel partner and enjoy the benefits of associating with Velocity Opticals.
                        Fill out the form below, and we will reach out to assist you further.</p>
                </div>
            </div>
        </div>
        {
            signedIn ? <div className="margin-bottom-100px"></div> : <Registration/>
        }
    </section>
  )
}

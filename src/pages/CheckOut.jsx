import toast from 'react-hot-toast';
import '../style/checkout.scss'
import { useNavigate } from 'react-router-dom';

export const CheckOut = () => {

    const userData = JSON.parse(sessionStorage.getItem('User'));

    const navigate = useNavigate()

    const proceedPay = () =>{
        toast.success('Thank you for your order, will get back to you soon!!', {duration:5000})
        
        navigate('/')
    }

  return (
    <>
        <div className="checkout">
            <div className="address">
                <form className="checkout-form">
                <label htmlFor="first_name">First Name:</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="First Name"
                    value={userData[0].name.split(' ')[0]}
                    required
                />
                <label htmlFor="last_name">Last Name:</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Last Name"
                    value={userData[0].name.split(' ')[1]}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={userData[0].email}
                    required
                />
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    value={userData[0].phone_number}
                    required
                />
                <label htmlFor="street_address">Street Address:</label>
                <input
                    type="text"
                    id="street_address"
                    name="street_address"
                    placeholder="Street Address"
                    value={userData[0].address}
                    required
                />
                <input
                    type="text"
                    id="street_address"
                    name="street_address"
                    placeholder="Street Address (optional)"
                    required
                />
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    value={userData[0].city}
                    required
                />
                <label htmlFor="city">State:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="State"
                    required
                />
                <label htmlFor="city">Zip:</label>
                <input
                    type="number"
                    id="city"
                    name="city"
                    placeholder="Pincode"
                    required
                />
                <label htmlFor="city">Country:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Country"
                    required
                />
                </form>
            </div>

            <div className="info">              
                <div className="order-summary">
                    <div className="order-summary__content">
                    <div className="order-summary__row">
                        <span className="order-summary__label">Price (3 Items)</span>
                        <span className="order-summary__value">143</span>
                    </div>
                    <div className="order-summary__row">
                        <span className="order-summary__label">GST</span>
                        <span className="order-summary__value">17.16</span>
                    </div>
                    <div className="order-summary__row">
                        <span className="order-summary__label">Total Payable With Tax</span>
                        <span className="order-summary__value">160.16</span>
                    </div>
                    <div className="order-summary__row">
                        <span className="order-summary__label">Apply Coupon</span>
                        <input type="text" className="order-summary__coupon-input" placeholder="Enter coupon code"/>
                    </div>
                    <div className="order-summary__row">
                        <button className="order-summary__button" onClick={proceedPay}>Proceed to Pay</button>
                    </div>
                    <div className="order-summary__agreement">
                        <input type="checkbox" className="order-summary__agreement-checkbox" id="agreement" />
                        <label htmlFor="agreement">I have read and agree to the website terms and conditions</label>
                    </div>
                    </div>
                    <div className="order-summary__privacy-policy">
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

import '../style/Cart.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import glass from '../assets/images/glass1.jpg';
import toast from "react-hot-toast";
import { NavLink } from 'react-router-dom';

export const Cart = () => {
  const [cartdata, setcartdata] = useState([]);


  useEffect(() => {
    const user_details = JSON.parse(sessionStorage.getItem('User'));
    const user_id = user_details[0].id;

    
    axios.post('https://faradic.codtrees-dev.cloud/api/cartshow', { user_id })
      .then((res) => {
        setcartdata(res.data.cart_data);
        console.log(res.data.cart_data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);



  const handleDec = (id) => {
    
    axios.post('https://faradic.codtrees-dev.cloud/api/proddec', { id })
      .then((response) => {
        console.log('Decrement', response.data);
        // Update the cartdata state based on the response
        setcartdata((prevCartData) =>
          prevCartData.map((item) =>
            item.id === id && item.product_qty > 1
              ? { ...item, product_qty: item.product_qty - 1 }
              : item
          )
        );
        toast.success("Product Decremented",{ duration: 5000});
      })
      .catch((error) => {
        console.error(error);
        toast.error("Product Cannot Be Less Than 1",{ duration: 5000});
      });
  };

  const handleInc = (id) => {
    
    axios.post('https://faradic.codtrees-dev.cloud/api/prodinc', { id })
      .then((response) => {
        console.log('Increment', response.data);
        // Update the cartdata state based on the response
        setcartdata((UpdatetData) =>
          UpdatetData.map((item) =>
            item.id === id ? { ...item, product_qty: (parseFloat(item.product_qty) + 1) } : item
          )
        );

        toast.success("Product Incremented",{ duration: 5000});

      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRemove = (id) => {
    
    axios.post('https://faradic.codtrees-dev.cloud/api/proddelete', { id })
      .then((response) => {
        console.log('Product Deleted', response.data);
        // Update the cartdata state by excluding the item with the specified ID
        setcartdata((prevCartData) => prevCartData.filter((item) => item.id !== id));

        toast.success('Product Deleted', { duration: 5000 });
      })
      .catch((error) => {
        console.error(error);
        toast.error('Error deleting product', { duration: 5000 });
      });
  };



  const cart_details = cartdata.map((item, index) => {
    const price = item.product_salePrice ? item.product_salePrice : item.product_price;

    return (
  <tr key={index}>
    <td> <img src={glass} alt="glass1" style={{ width: '84px' }} /></td>
    <td>{item.product_name}</td>
    <td>₹{price}</td>
    <td>
      <div className="quantity1 style-12">
        <span className="quantity-control">
          <i className="fa-solid fa-minus" data-id={item.id}
                    onClick={() => handleDec(item.id)}/>
          <p>{item.product_qty}</p>
          <i className="fa-solid fa-plus"  data-id={item.id}
                    onClick={() => handleInc(item.id)}/>
        </span>
      </div>
    </td>
    <td><strong>₹{parseFloat(item.product_qty) * parseFloat(price)}</strong></td>
    <td className="text-center"><a href onClick={() => handleRemove(item.id)}><i className="fas fa-2x fa-times" style = {{cursor:'pointer'}} /></a></td>
  </tr>

    );
  });

  const subtotal = cartdata.reduce((sum, item) => {
    const price = item.product_salePrice ? item.product_salePrice : item.product_price;
    return sum + parseFloat(price) * item.product_qty;
  }, 0);

  const shipping = 0; // Replace with your shipping cost calculation
  const tax = 0; // Replace with your tax calculation
  const total = subtotal + shipping + tax;

  useEffect(() => {
    // Use this effect to update UI when cartdata changes
    console.log('Cart data updated:', cartdata);
  }, [cartdata]);


  return (
    <section className='cart-section  '>
      <div className="grid-container">
        <div className="grid-item">
          <table className="table cart">
            {cartdata.length===0 ?<div className="flex-p"><p className='p-content'>Cart is empty!</p></div>  : ''}
            <tbody>
            {cart_details}
            </tbody>
          </table>
        </div>
        <div className="grid-item">
          <div className="cart-totals">
            <h2>Cart Totals</h2>
            <p>Subtotal: <span>₹{total}</span></p>
            <p>Shipping: <span>₹{shipping}</span></p>
            <NavLink to={'/checkout'} className="button-two"><span>Checkout</span></NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

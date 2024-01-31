import {Routes, Route} from 'react-router-dom';
import {Home, PageNotFound, AboutUs, Shop, Registration, Login, Cart, UserProfile, WishList, PartnerUs, CheckOut, PartnerScheme} from '../pages/index';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path='/partnerUs' element={<PartnerUs/>}/>
      <Route path='/partnerScheme' element={<PartnerScheme/>}/>
      
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
      <Route path="/userProfile" element={<UserProfile/>}/>

      <Route path='/checkout' element={<CheckOut/>}/>

      <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

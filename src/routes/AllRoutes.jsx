import {Routes, Route} from 'react-router-dom';
import {Home, PageNotFound, AboutUs, Shop, Registration, Login} from '../pages/index';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/shop" element={<Shop/>}/>

      <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

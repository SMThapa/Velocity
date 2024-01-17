import {Routes, Route} from 'react-router-dom';
import {Home, PageNotFound, AboutUs, Shop, Registration} from '../pages/index';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/shop" element={<Shop/>}/>

      <Route path="/registration" element={<Registration/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

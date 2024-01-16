import {Routes, Route} from 'react-router-dom';
import {Home, PageNotFound, AboutUs} from '../pages/index';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

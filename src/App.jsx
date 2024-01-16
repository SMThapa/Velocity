import { Header, Footer } from './components';
// import {Home } from './pages/index';
import {AllRoutes} from './routes/AllRoutes';
import './App.css';

function App() {

  return (
    <>
      <Header/>
      <AllRoutes/>
      {/* <Home/> */}
      <Footer/>
    </>
  )
}

export default App

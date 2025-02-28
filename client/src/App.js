import logo from './logo.svg';
import './App.css';
//import components
import Carousel from './resources/carousel';
import Map from './resources/map';
import { Darshboard } from './resources/dashboard';
import { BsFacebook, BsWhatsapp, BsArrowUp } from "react-icons/bs";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './admin/login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Darshboard/> }></Route>
            <Route path='/admin' element={ <Login/> }></Route>
            {/* <Route path='/register' element={ <Register/> }></Route>
            <Route path='/login' element={ <ShowTickets/>}></Route>
            <Route path='/admin' element={ <CreateTicket/> }></Route> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

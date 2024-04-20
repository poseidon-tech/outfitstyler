
import './App.css';
import Login from './components/LoginForm/Login';
import {BrowserRouter as Router, Routes, Route, BrowserRouter }from "react-router-dom";
import Register from './components/RegisterForm/Register';
import Home from './components/HomeForm/Home'
import Header from './components/Header/Header';
import Ocassion from './components/Ocassion/Ocassion';
<<<<<<< HEAD
import ClosetMatching from './components/Closet Matching/closet matching';
import ImageGallery from './components/ImageGallery/imagegallery';

=======
import Formal from './components/Formal/Formal';
import Social from './components/Social/Social';
import Seasonal from './components/Seasonal/Seasonal';
import Casual from './components/Casual/Casual';
import Accessory from './components/Accessory/Accessory';
import CustomCalendar from './components/Calendar/Calendar';
>>>>>>> 8b2c819cd7a67d88aa9166ac82500431c2aa65df

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Register />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Home" element={<Home />}/>    
          <Route path="/Ocassion" element={<Ocassion />}/> 
<<<<<<< HEAD
          <Route path="/ClosetMatching" element={<ClosetMatching />}/>
          <Route path="/ImageGallery" element={<ImageGallery />} />
=======
          <Route path="/Formal" element={<Formal/>}/>
          <Route path="/Casual" element={<Casual/>}/>
          <Route path="/Seasonal" element={<Seasonal/>}/>
          <Route path="/Social" element={<Social/>}/>
          <Route path="/Accessory" element={<Accessory/>}/>
          <Route path="/Calendar" element={<CustomCalendar/>}/>
>>>>>>> 8b2c819cd7a67d88aa9166ac82500431c2aa65df
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

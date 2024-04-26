import './App.css';
import {BrowserRouter as  Router, Routes, Route, BrowserRouter }from "react-router-dom";
import Home from './components/HomeForm/Home'
import Header from './components/Header/Header';
import Ocassion from './components/Ocassion/Ocassion';
import ClosetMatching from './components/Closet Matching/closet matching';
import ImageGallery from './components/ImageGallery/imagegallery';
import Formal from './components/Formal/Formal';
import Social from './components/Social/Social';
import Seasonal from './components/Seasonal/Seasonal';
import Casual from './components/Casual/Casual';
import Accessory from './components/Accessory/Accessory';
import Donation from './components/Donation/Donation';
import ReactGA from "react-ga4";
import CustomCalendar from './components/Calendar/Calendar'
import LoginPage from './components/Login/LoginPage';
import { AuthProvider } from './components/Auth/AuthContext';
import Vibe from './components/Vibe/Vibe';
function App() {
  ReactGA.initialize('G-W1FQ5BKSJD');
  return (
    <AuthProvider>
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/Login" element={<LoginPage />}/>
          <Route path="/Ocassion" element={<Ocassion />}/> 
          <Route path="/ClosetMatching" element={<ClosetMatching />}/>
          <Route path="/ImageGallery" element={<ImageGallery />} />
          <Route path="/Formal" element={<Formal/>}/>
          <Route path="/Casual" element={<Casual/>}/>
          <Route path="/Seasonal" element={<Seasonal/>}/>
          <Route path="/Social" element={<Social/>}/>
          <Route path="/Accessory" element={<Accessory/>}/>
          <Route path="/Donation" element={<Donation/>}/>
          <Route path="/CustomCalendar" element={<CustomCalendar/>}/>
          <Route path="/vibe" element={<Vibe/>}/>
          <Route path="/" element={<Home />}/>    
          
        </Routes>
      </BrowserRouter>
      </div>
      </AuthProvider>
    
  );
}

export default App;

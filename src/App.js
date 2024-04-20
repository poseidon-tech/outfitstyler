
import './App.css';
import Login from './components/LoginForm/Login';
import {BrowserRouter as Router, Routes, Route, BrowserRouter }from "react-router-dom";
import Register from './components/RegisterForm/Register';
import Home from './components/HomeForm/Home'
import Header from './components/Header/Header';
import Ocassion from './components/Ocassion/Ocassion';
import ClosetMatching from './components/Closet Matching/closet matching';
import ImageGallery from './components/ImageGallery/imagegallery';


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
          <Route path="/ClosetMatching" element={<ClosetMatching />}/>
          <Route path="/ImageGallery" element={<ImageGallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

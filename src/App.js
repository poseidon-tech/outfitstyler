
import './App.css';
import Login from './components/LoginForm/Login';
import {BrowserRouter as Router, Routes, Route, BrowserRouter }from "react-router-dom";
import Register from './components/RegisterForm/Register';
import Home from './components/HomeForm/Home'
import Header from './components/Header/Header';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

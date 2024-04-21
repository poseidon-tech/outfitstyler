import './Ocassion.css' 
import image1 from './image-1.png'
import image2 from './image-2.png'
import image3 from './image-3.png'
import image4 from './image-4.png'
import { Link } from "react-router-dom";
import Calendar from '../Calendar/Calendar';
import ReactGA from "react-ga4";
import { useEffect } from 'react'

function Ocassion() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Custom Title",
    });
  });
  return (
    <div className="c1">
      <Calendar />
      <div className="flipcards">
        <Link to="/Formal"> 
          <div className="container">
            <div className="cardd"> 
              <div className="front">
                <h2>Formal events</h2>
                <img className="img" src={image1} alt="Formal Event"></img>
              </div>
              <div className="back">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, a?</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/Casual"> 
          <div className="container">
            <div className="cardd">  
              <div className="front">
                <h2>Casual events</h2>
                <img className="img" src={image2} alt="Casual Event"></img>
              </div>
              <div className="back">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, a?</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/Social"> 
          <div className="container">
            <div className="cardd">  
              <div className="front">
                <h2>Social events</h2>
                <img className="img" src={image3} alt="Social Event"></img>
              </div>
              <div className="back">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, a?</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/Seasonal">
          <div className="container">
            <div className="cardd">  
              <div className="front">
                <h2>Seasonal events</h2>
                <img className="img" src={image4} alt="Seasonal Event"></img>
              </div>
              <div className="back">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, a?</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Ocassion;

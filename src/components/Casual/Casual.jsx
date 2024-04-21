import './Casual.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from "react-ga4";
import { useEffect} from 'react';

function Casual() {
    useEffect(() => {
        ReactGA.send({
          hitType: "pageview",
          page: window.location.pathname,
          title: "Casual",
        });
      });
    const navigate = useNavigate();
    const handleButtonClick = (route) => {
        setSelectedButton(route);
        navigate(route);
    };
    const [selectedButton, setSelectedButton] = useState('Casual Events');
    const [imageSrc, setImageSrc] = useState();
    const handleGenerateOutfitClick = () => {
        setImageSrc();
    };

    return(
        <div className="flex-container">
                        <div className="col1">
                <h2>Generate outfit Based on</h2>
                <button onClick={() => { setSelectedButton('Formal Events'); handleButtonClick('/Formal'); }} className={selectedButton === 'Formal Events' ? 'selected' : ''}>Formal Events</button>
                <button onClick={() => { setSelectedButton('Casual Events'); handleButtonClick('/Casual'); }} className={selectedButton === 'Casual Events' ? 'selected' : ''}>Casual Events</button>
                <button onClick={() => { setSelectedButton('Seasonal Events'); handleButtonClick('/Seasonal'); }} className={selectedButton === 'Seasonal Events' ? 'selected' : ''}>Seasonal Events</button>
                <button onClick={() => { setSelectedButton('Special Occasions'); handleButtonClick('/Social'); }} className={selectedButton === 'Special Occasions' ? 'selected' : ''}>Social Occasions</button>
            </div>
            <div className="col2">
                <h2>Generated outfit</h2>
                <img className="imgg" src={imageSrc} alt="Generated outfit"/>
            </div>
            <div className="col3">
                <button onClick={handleGenerateOutfitClick}>Generate another Outfit</button>
                <Link to="/Accessory" state={{ category: "Casual" }}>
    <button>Add Accessories to your Outfit</button></Link>
            </div>
        </div>
    );
}

export default Casual;

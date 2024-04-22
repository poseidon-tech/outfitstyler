import './Formal.css';
import image1 from './image.png';
import image2 from './image2.png';
import ReactGA from "react-ga4";
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Formal() {
    useEffect(() => {
        ReactGA.send({
          hitType: "pageview",
          page: window.location.pathname,
          title: "formal",
        });
      });
    const navigate = useNavigate();
    const handleButtonClick = (route) => {
        setSelectedButton(route);
        navigate(route);
    };
    const set1 = [image1, image2];
    const [imageIndex, setImageIndex] = useState(0);
    const [selectedButton, setSelectedButton] = useState('Formal Events');
    const [imageSrc, setImageSrc] = useState(set1[0]); // Initialize with the first image

    const handleGenerateOutfitClick = () => {
        ReactGA.event({
            category: "User Interaction",
            action: "Clicked formal-Generate Other outfit Link",
            label:  "formal" // Optional
          });
        setImageIndex((imageIndex + 1) % set1.length); // Increment image index
        setImageSrc(set1[imageIndex]); // Set image source based on the new index
    };

    return (
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
                <img className="imgg" src={imageSrc} alt="Generated outfit" />
            </div>
            <div className="col3">
                <button onClick={handleGenerateOutfitClick}>Generate another Outfit</button>
                <Link to="/Accessory" state={{ category: "Formal" , image: imageSrc }}>
                    <button>Add Accessories to your Outfit</button>
                </Link>
            </div>
        </div>
    );
}

export default Formal;

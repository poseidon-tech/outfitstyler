import './Seasonal.css';
import image1 from './image.png';
import image2 from './image2.png'
import image3 from './image2.png'
import image4 from './image2.png'
import image5 from './image2.png'
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';

function Seasonal() {
    const navigate = useNavigate();
    const handleButtonClick = (route) => {
        setSelectedButton(route);
        navigate(route);
    };
    const [selectedButton, setSelectedButton] = useState('Seasonal Events');
    const [imageSrc, setImageSrc] = useState(image1);
    const handleGenerateOutfitClick = () => {
        setImageSrc(image2);
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
                <button>Add Accessories to your Outfit</button>
            </div>
        </div>
    );
}

export default Seasonal;
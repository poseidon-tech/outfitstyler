import './Accessory.css';
import image1 from './image.png';
import image2 from './image2.png';
import image3 from './image3.png';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from "react-ga4";



function Accessory(props) {
    useEffect(() => {
        ReactGA.send({
          hitType: "pageview",
          page: window.location.pathname,
          title: "Custom Title",
        });
      });
    const [imageIndex, setImageIndex] = useState(0);
    const [imageSrc, setImageSrc] = useState([]);
    const location = useLocation();
    const { category,image } = location.state || {};    
   
    // Set image sources based on category prop
    useEffect(() => {
        if (category === "Formal") {
            setImageSrc([image1, image3]);
        } else if (category === "Casual") {
            setImageSrc([image2]);
        } else if (category === "Social") {
            setImageSrc([]);
        } else {
            setImageSrc([]);
        }
        
    }, [category]);

    // This function handles the click event to generate another accessory
    const handleGenerateOutfitClick = () => {
        setImageIndex((imageIndex + 1) % imageSrc.length);
    };

    return (
        <div className="flex-container">
            <div className="col1">
                <h2>Add Accessories</h2>
            </div>
            <div className="col2">
                <h2>Generated outfit</h2>
                <img className="imgg" src={image} alt="Generated outfit" />
            </div>
            <div className="col3">
                <h2>Generated Accessory</h2>
                {imageSrc.length > 0 && (
                    <>
                        <img className="imggg" src={imageSrc[imageIndex]} alt="Generated accessory" />
                       
                    </>
                )}
                 <button onClick={handleGenerateOutfitClick}>Generate another Accessory</button>
            </div>
        </div>
    );
}

export default Accessory;


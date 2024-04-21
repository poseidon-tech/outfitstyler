import React, { useState } from 'react';
import './closet matching.css';
import ShirtModal from './shirtmodal';
import PantsModal from './pantsmodal';
import EthinicModal from './ethinicmodal'; 
import CasualModal from './casualmodal';
import BussinessModal from './bussinessmodal'; // Import BussinessModal
import ReactGA from "react-ga4";
import { useEffect } from 'react'
function ClosetMatching() {
    useEffect(() => {
        ReactGA.send({
          hitType: "pageview",
          page: window.location.pathname,
          title: "Custom Title",
        });
      });
   const [selectedButton, setSelectedButton] = useState('Casual Events');
    const [showShirtModal, setShowShirtModal] = useState(false);
    const [showPantsModal, setShowPantsModal] = useState(false);
    const [showEthinicModal, setShowEthinicModal] = useState(false);
    const [showCasualModal, setShowCasualModal] = useState(false);
    const [showBussinessModal, setShowBussinessModal] = useState(false);

    const handleShirtsButtonClick = () => {
        setShowShirtModal(true);
    }

    const handlePantsButtonClick = () => {
        setShowPantsModal(true);
    }

    const handleCloseShirtModal = () => {
        setShowShirtModal(false);
    }

    const handleClosePantsModal = () => {
        setShowPantsModal(false);
    }

    const handleEthinicButtonClick = () => {
        setShowEthinicModal(true);
    }

    const handleCloseEthinicModal = () => {
        setShowEthinicModal(false);
    }

    const handleCasualButtonClick = () => {
        setShowCasualModal(true);
    }

    const handleCloseCasualModal = () => {
        setShowCasualModal(false);
    }

    const handleBussinessButtonClick = () => {
        setShowBussinessModal(true);
    }

    const handleCloseBussinessModal = () => {
        setShowBussinessModal(false);
    }

    const handleFileInputChange = (event) => {
        console.log('File selected:', event.target.files[0].name);
        // Here, you can perform further actions such as uploading the file
    }

    const handleTakePictureClick = async () => {
        try {
            //const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            // You can do further processing with the camera stream here
            console.log('Camera opened');
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    }

    const handleGenerateButtonClick = () => {
        // Implement the functionality for generating here
    }

    return (
        <div className="flex-container">
            <div className="col1">
                <h2>Wardrobe</h2>
                <button className={selectedButton === 'Formal Events' ? 'selected' : ''} onClick={handleShirtsButtonClick}>Shirts</button>
                <button className={selectedButton === 'Formal Events' ? 'selected' : ''} onClick={handlePantsButtonClick}>Pants</button>
                <button className={selectedButton === 'Business Meetings' ? 'selected' : ''} onClick={handleEthinicButtonClick}>Ethnic</button>
                <button className={selectedButton === 'Business Meetings' ? 'selected' : ''} onClick={handleCasualButtonClick}>Casual</button>
                <button className={selectedButton === 'Business' ? 'selected' : ''} onClick={handleBussinessButtonClick}>Business</button>
            </div>

            <div className="col3">
                <h2>Upload your dress from device</h2>
                <button onClick={() => document.getElementById('fileInput').click()}>Upload From Device</button>
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileInputChange} />
                Or
                <button onClick={handleTakePictureClick}>Take a Picture</button>
                <button className="Special" onClick={handleGenerateButtonClick}>Generate</button>
            </div>

            {showShirtModal && <ShirtModal onClose={handleCloseShirtModal} />}
            {showPantsModal && <PantsModal onClose={handleClosePantsModal} />}
            {showEthinicModal && <EthinicModal onClose={handleCloseEthinicModal} />}
            {showCasualModal && <CasualModal onClose={handleCloseCasualModal} />}
            {showBussinessModal && <BussinessModal onClose={handleCloseBussinessModal} />}
        </div>
    );
}

export default ClosetMatching;

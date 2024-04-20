import React from 'react';
import './bussinessmodal.css'; // Correct import path

function BussinessModal({ onClose }) {
  // Array of pant image URLs
  const pantImages = [
    'url_to_your_pant_image1',
    'url_to_your_pant_image2',
    'url_to_your_pant_image3',
    // Add more pant image URLs as needed
  ];

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Your dresses</h2> {/* Updated heading */}
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
        <div className="pant-images">
          {pantImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Pant ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BussinessModal;

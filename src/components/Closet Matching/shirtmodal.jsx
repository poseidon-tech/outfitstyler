import React from 'react';
import './shirtmodal.css'; // Correct import path

function ShirtModal({ onClose }) {
  // Array of shirt image URLs
  const shirtImages = [
    'url_to_your_shirt_image1',
    'url_to_your_shirt_image2',
    'url_to_your_shirt_image3',
    // Add more shirt image URLs as needed
  ];

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Your Shirts</h2>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
        <div className="shirt-images">
          {shirtImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Shirt ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShirtModal;

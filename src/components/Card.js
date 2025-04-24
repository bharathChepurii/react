import React, { useState } from 'react';
import './Card.css'; 

const Card = () => {
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  const iphones = [
    {
      id: 1,
      name: 'iPhone 16 Pro',
      description: 'The ultimate iPhone experience with A16 Bionic chip.',
      image: 'https://inventstore.in/wp-content/uploads/2024/09/69-1024x1024.webp',
    },
    {
      id: 2,
      name: 'iPhone 13',
      description: 'A powerful iPhone with A15 Bionic chip.',
      image: 'https://inventstore.in/wp-content/uploads/2023/04/iPhone_13_Blue.webp',
    },
    {
      id: 3,
      name: 'iPad Pro',
      description: 'Run apps like Microsoft 365, Adobe Photoshop and graphics-intensive games. iPad is ready for anything.',
      image: 'https://inventstore.in/wp-content/uploads/2023/05/iPad-10th-gen-blue-600x600-1.webp',
    },
  ];

  const handleAddClick = (phone) => {
    setSelectedPhone(phone);
    setFormVisible(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Your preferences have been saved!');
    setFormVisible(false);
    setSelectedPhone(null);
  };

  return (
    <div className="card-container">
      <h1>iPhone Collection</h1>
      <div className="card-list">
        {iphones.map((phone) => (
          <div key={phone.id} className="card">
            <img src={phone.image} alt={phone.name} />
            <h2>{phone.name}</h2>
            <p>{phone.description}</p>
            <button onClick={() => handleAddClick(phone)}>Add</button>
          </div>
        ))}
      </div>

      {formVisible && selectedPhone && (
        <div className="form-container">
          <h2>Customize Your {selectedPhone.name}</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Select Color:
              <select>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="gold">Gold</option>
              </select>
            </label>
            <br />
            <label>
              Select Model:
              <select>
                <option value="128gb">128GB</option>
                <option value="256gb">256GB</option>
                <option value="512gb">512GB</option>
              </select>
            </label>
            <br />
            <label>
              Select RAM:
              <select>
                <option value="6gb">6GB</option>
                <option value="8gb">8GB</option>
              </select>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Card;
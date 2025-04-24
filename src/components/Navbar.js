import React, { useState, useEffect } from 'react';
import './Navbar.css';
import menuData from './menuData'; 

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData); 
  }, []);

  const addMenuItem = () => {
    const newItem = {
      id: menuItems.length + 1, 
      name: `New Item ${menuItems.length + 1}`, 
      link: `#new-item-${menuItems.length + 1}`,
    };
    setMenuItems([...menuItems, newItem]); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple Logo"
          className="apple-logo"
        />
      </div>
      <ul className="navbar-links">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <button onClick={addMenuItem}>Add Menu</button>
    </nav>
  );
};

export default Navbar;
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu feturing a delicatable array of dishes
          crafted with the finest incredients and culinary expertise.our mission
          is to satisfy our cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "../styles/banner.css";
function Banner() {
  return (
    <div className="banner-container">
      <div className="content-container">
        <h1>
          AI-Powered <span> Old Book </span> Exchange Platform
        </h1>
        <p>Buy & Sell Pre-Owned Books Easily!</p>
        <div className="btn-container">
            <button>Find Books </button>
            <button className="sell-btn">Sell Your Books</button>
        </div>
      </div>
      <div className="image-container">
        <img src="/src/assets/banner-image.png" alt="" />
      </div>
    </div>
  );
}

export default Banner;

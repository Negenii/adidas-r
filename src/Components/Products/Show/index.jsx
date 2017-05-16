import React from 'react';

export default () => (
  <main className="content">
    <div className="item-heading">
      <h1>Ultra<br />boost</h1>
      <button type="button" name="save" id="save-button">save</button>
    </div>
    <div className="colors-badges-price">
      <div className="item-options">
        <div className="color-selector">
          <button type="button" name="color-gray" className="color-button gray" />
          <button type="button" name="color-blue" className="color-button blue" />
          <button type="button" name="color-black" className="color-button black" />
          <button type="button" name="color-light-gray" className="color-button light-gray" />
        </div>
        <div className="sale-badge sale-badge-item-postion">
          sale
        </div>
      </div>
      <div className="item-price">
        <h2>170$</h2>
      </div>
    </div>
    <div className="row">
      <img src="./bitmap-copy.png" alt="" className="item-big-image" />
    </div>
    <div className="row">
      <div className="item-thumbnails">
        <img src="./shoe_thumb1.jpg" alt="" className="item-thumbnails" />
        <img src="./shoe_thumb2.jpg" alt="" className="item-thumbnails" />
        <img src="./shoe_thumb3.jpg" alt="" className="item-thumbnails" />
        <img src="./shoe_thumb4.jpg" alt="" className="item-thumbnails" />
        <div className="more-images">
          <span />
        </div>
        <button className="more-images-button">see more photos</button>
      </div>
    </div>
    <p className="about-text">
      <span className="first-word">Adidas</span>
      <p className="about-text">
        <span className="first-word">Adidas</span>
        {' '}
        is a German multinational corporation, headquartered in Herzogenaurach,
        Germany, that designs and manufactures shoes, clothing and accessories.
        {' '}
      </p>
    </p>
    <button className="buy-now-button">Buy Now</button>
  </main>
);

import React from 'react';
import styled from 'styled-components';
import './styles.css';
import '../../../fonts.css';
import ShoeLargeImage from './bitmap-copy.png';
import ShoeThumb1 from './shoe_thumb1.jpg';
import ShoeThumb2 from './shoe_thumb2.jpg';
import ShoeThumb3 from './shoe_thumb3.jpg';
import ShoeThumb4 from './shoe_thumb4.jpg';

const H1 = styled.h1`
    font-family: AvenirNext;
    font-weight: bold;
    font-size: 64px;
    color: #3a3a3a;
    text-transform: uppercase;
    margin: 0;
`;

const H2 = styled.h2`
    margin: 0;
    font-size: 1em;
    font-family: AvenirNext;
    font-weight: bold;
    font-size: 80px !important;
    color: #e2e2e2;
`;

export default () => (
  <main className="content">
    <div className="item-heading">
      <H1>Ultra<br />boost</H1>
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
        <H2>170$</H2>
      </div>
    </div>
    <div className="row">
      <img src={ShoeLargeImage} alt="" className="item-big-image" />
    </div>
    <div className="row">
      <div className="item-thumbnails">
        <img src={ShoeThumb1} alt="" className="item-thumbnails" />
        <img src={ShoeThumb2} alt="" className="item-thumbnails" />
        <img src={ShoeThumb3} alt="" className="item-thumbnails" />
        <img src={ShoeThumb4} alt="" className="item-thumbnails" />
        <div className="more-images">
          <span />
        </div>
        <button className="more-images-button">see more photos</button>
      </div>
    </div>

    <p className="about-text">
      <span className="first-word">Adidas</span>
      {' '}
      is a German multinational corporation, headquartered in Herzogenaurach,
      Germany, that designs and manufactures shoes, clothing and accessories.
      {' '}
    </p>

    <button className="buy-now-button">Buy Now</button>
  </main>
);

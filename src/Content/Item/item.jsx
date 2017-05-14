import React from "react";
import ProductImage from "./bitmap1.jpg";
import styled from "styled-components";

const A = styled.a`
display: flex;
width: 100%;
height: 30%;
margin-top: 2%;
background: ${props => (props.onsale ? "linear-gradient(107deg, #0c09bf, #966dd8)" : "#fff")};
justify-content: center;
align-items: center;
font-family: .avenirBold.;
font-size: 30px;
color: ${props => (props.onsale ? "#fff" : "#000")};
border-top: 8px solid #f4f4f4;
`;

const Item = styled.div`

box-sizing: border-box;
height: 311px;
margin-top: 22px;
border: 8px solid #f4f4f4;
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: space-around;

`;

export default () => {
  return (
    <Item>
      <img src={ProductImage} className="item-image" alt="" />
      <A onsale href="#">170$</A>
    </Item>
  );
};

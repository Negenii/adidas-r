import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductImage from './bitmap1.jpg';
import '../../../fonts.css';

const Item = styled.div`

box-sizing: border-box;
height: 311px;
margin-top: 22px;
border: 8px solid #f4f4f4;
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: space-around;
margin: 10px 0 0;
`;
const ItemLink = styled(Link)`
display: flex;
width: 100%;
height: 30%;
margin-top: 2%;
background: ${props => (props.onsale ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : '#fff')};
justify-content: center;
align-items: center;
font-family: AvenirNext;
font-weight: bold;
font-size: 30px;
color: ${props => (props.onsale ? '#fff' : '#000')};
border-top: 8px solid #f4f4f4;
`;

const ItemImage = styled.img`
    display: flex;
    max-height: 70%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`;

export default () => (
  <Item>
    <ItemImage src={ProductImage} />
    <ItemLink to="/item" onsale href="#">170$</ItemLink>
  </Item>
);

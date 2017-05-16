import React from 'react';
import styled from 'styled-components';
import SortIcon from './filter.png';

const Sort = styled.div`
background: url(${SortIcon}) no-repeat;
background-position: center center;
cursor: pointer;
border: none;
width: 55px;
height: 55px;
margin-left: 15px!important;
margin-right: 20px!important;
background-color: #ebebeb;
margin: 10px 10px 0;
`;

export default () => <Sort />;

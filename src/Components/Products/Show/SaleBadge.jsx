import React from 'react';
import styled from 'styled-components';

const SaleBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff5c5c;
  color: #fff;
  width: 76px;
  height: 32px;
  font-family: AvenirNext;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  margin: 10px 0px 10px 50px;
`;

export default () => <SaleBadge>Sale</SaleBadge>;

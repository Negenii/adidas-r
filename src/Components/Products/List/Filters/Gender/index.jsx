import React from 'react';
import styled from 'styled-components';

const GenderBox = styled.div`
margin: 0 10px 0;
`;
const FilterButton = styled.button`
padding: 0;
border: 0;
margin: 0 5px 0 0;
background: none;
font-family: AvenirNext;
font-weight: bold;
font-size: 24px;
color: ${props => (props.active ? '#4d42f8' : '#dedede')};
text-transform: uppercase;
margin: 0 10px 0;
`;
export default () => (
  <GenderBox class="box gender">
    <FilterButton type="button" name="button" active>man</FilterButton>
    <FilterButton type="button" name="button" className="filter-button">woman</FilterButton>
  </GenderBox>
);

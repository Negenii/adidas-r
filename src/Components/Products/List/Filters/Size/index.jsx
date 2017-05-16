import React from 'react';
import styled from 'styled-components';

const FilterButton = styled.button`
padding: 0;
border: 0;
margin: 0 5px 0 0;
background: none;
font-family: AvenirNext;
font-weight: bold;
font-size: 24px;
color: ${props => (props.active ? '#4d42f8' : '#dedede') || (props.label ? '#4d42f8' : '#dedede')};
text-transform: uppercase;
margin: 0 10px 0;
`;

export default () => (
  <div className="box">
    <FilterButton name="36" label>Size</FilterButton>
    <FilterButton name="36">36</FilterButton>
    <FilterButton name="37">37</FilterButton>
    <FilterButton name="38">38</FilterButton>
    <FilterButton name="39">39</FilterButton>
    <FilterButton name="40">40</FilterButton>
    <FilterButton name="41" active>41</FilterButton>
    <FilterButton name="42">42</FilterButton>
  </div>
);

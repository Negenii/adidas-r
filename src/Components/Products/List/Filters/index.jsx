import React from 'react';
import { Grid } from 'react-flexbox-grid/lib';
import styled from 'styled-components';
import Sort from './Sort';
import Gender from './Gender';
import Size from './Size';

const FiltersRow = styled.div`width: 100%;
display: flex;
align-items: center;
justify-content: flex-start !important
`;

export default () => (
  <Grid fluid>
    <FiltersRow>
      <Sort />
      <Gender />
      <Size />
    </FiltersRow>
  </Grid>
);

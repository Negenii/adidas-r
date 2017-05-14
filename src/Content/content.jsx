import React from 'react';
import { Grid, Row, Col } from 'react-flexboxgrid';
import Item from './Item/item';

export default () => (
  <Grid fluid>
    <Row>
      <Col xs={12} md={6}>
        <Item />
      </Col>
      <Col xs={12} md={6}>
        <Item />
      </Col>
    </Row>
  </Grid>
  );

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import Card from './card';

const Home = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} md={4} lg={4}>
        <Card />
      </Col>
      <Col xs={12} md={4} lg={4}>
        <Card />
      </Col>
      <Col xs={12} md={4} lg={4}>
        <Card />
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={4} lg={4}>
        <Card />
      </Col>
      <Col xs={12} md={4} lg={4}>
        <Card />
      </Col>
      <Col xs={12} md={4} lg={4}>
        <Card />
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={4} lg={4}>
        <Card />
      </Col>
      <Col xs={12} md={4} lg={4}>
        <Card />
      </Col>
      <Col xs={12} md={4} lg={4}>
        <Card />
      </Col>
    </Row>
  </Grid>
);
export default Home;

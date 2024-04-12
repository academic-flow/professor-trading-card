import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';

function MainPage() {
  return (
      <div>
        <div>
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} fluid>
            <Row>
              <Col>
                <h1 style={{ paddingTop: '20px', color: 'black', fontSize: '36pt', display: 'inline-block', paddingBottom: '20px' }}>
                  Welcome to ProfTCG
                  <PersonCircle size={64} color="black" style={{ marginLeft: '800px' }}/>
                </h1>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <Container className="justify-content-center text-center">
            <h2 style={{ color: 'black' }}> Available Packages To Open: </h2>
          </Container>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Container className="justify-content-center text-center">
          <p> Pack goes here </p>
        </Container>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className="landing-white-background text-center">
          <h2 style={{ color: 'black' }}>
            Trade requested from 'UserName'
          </h2>
          <Container>
            <Row md={1} lg={2}>
              <Col xs={6}></Col>
              <Col xs={6}></Col>
            </Row>
          </Container>
        </div>
        <br/>

        <div className="landing-white-background text-center">
          <h2 style={{ color: 'black' }}>
            Card Offered:
          </h2>
          <Container>
            <Row md={1} lg={2}>
              <Col xs={6}></Col>
              <Col xs={6}></Col>
            </Row>
          </Container>
        </div>
        <br/>

        <div className="landing-white-background text-center">
          <h2 style={{ color: 'black' }}>
            Card Wanted:
          </h2>
          <Container>
            <Row md={1} lg={2}>
              <Col xs={6}></Col>
              <Col xs={6}></Col>
            </Row>
          </Container>
        </div>
        <br/>

        <div className="text-center">
          <p> Accept Trade? </p>
          <button style={{ marginRight: '10px' }}>Yes</button>
          <button>No</button>
        </div>
      </div>
  );
}

export default MainPage;

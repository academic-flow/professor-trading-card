
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PersonCircle, GiftFill } from 'react-bootstrap-icons';
import { Meteor } from 'meteor/meteor';
import { Trades } from '../../api/trade/Trade';
import TradeItem from '../components/TradeComponent';
import LoadingSpinner from '../components/LoadingSpinner';
import styles from '../../../public/stylesheets/MainPage.css';


const MainPage = () => {
  const { ready, requests } = useTracker(() => {

    const subscription = Meteor.subscribe(Trades.userPublicationName);
    const rdy = subscription.ready();

    const tradeItems = Trades.collection.find({}).fetch();
    return {
      requests: tradeItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
      <>
        <Container class="container">
          <div class="row">
          <Container fluid>
            <Row>
              <Col/>
              <Col sm={6} className="text-center">
                <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#333', marginTop: '40px' }}>Welcome to ProfTCG</h1>
              </Col>
              <Col className="d-flex align-items-center justify-content-end">
                <PersonCircle size={64} style={{ marginBottom: '30px' }}/>
              </Col>
            </Row>
            <hr className="line"/>
          </Container>
          <Container className="bg-image" fluid>
            <Container className="justify-content-center text-center">
              <h2 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Available Packages To Open:</h2>
              <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>Click here to open your package:</p>
              <Button variant="primary" size="lg" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <GiftFill size={64}/>
              </Button>
            </Container>
          </Container>
          <Container>
            {requests.map((request) => <TradeItem key={request._id} trade={request}/>)}

          </Container>
          </div>
        </Container>

      </>
    ) : <LoadingSpinner/>
  );
};

export default MainPage;

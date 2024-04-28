import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PersonCircle, GiftFill } from 'react-bootstrap-icons';
import { Meteor } from 'meteor/meteor';
import { Trades } from '../../api/trade/Trade';
import TradeItem from '../components/TradeComponent';
import LoadingSpinner from '../components/LoadingSpinner';
import { motion } from 'framer-motion';
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

  return (
      ready ? (
          <>
            <Container className="my-4" style={{ paddingBottom: '20px' }}>
              <div className="row" style={{ paddingBottom: '20px' }}>
                <Container fluid style={{ paddingBottom: '20px' }}>
                  <Row style={{ paddingBottom: '20px' }}>
                    <Col/>
                    <Col sm={6} className="text-center" style={{ paddingBottom: '20px' }}>
                      <motion.h1
                          initial={{ opacity: 0, y: -50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1 }}
                          style={{ fontSize: '48px', fontWeight: 'bold', color: '#333', marginTop: '40px', marginBottom: '20px' }}
                      >
                        Welcome to ProfTCG
                      </motion.h1>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end" style={{ paddingBottom: '20px' }}>
                    </Col>
                  </Row>
                  <hr className="line"/>
                </Container>
                <Container className="bg-image" fluid style={{ paddingBottom: '20px' }}>
                  <Container className="justify-content-center text-center" style={{ paddingBottom: '20px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        style={{ color: '#333', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}
                    >
                      Available Packages To Open:
                    </motion.h2>

                    < br />

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}
                    >
                      Click here to open your package:
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2 }}
                        style={{ marginBottom: '20px' }}
                    >
                      < br />
                      < br />

                      <Button variant="primary" size="lg" style={{ backgroundColor: '#333', borderColor: '#333' }} >
                        <GiftFill size={64}/>
                      </Button>
                    </motion.div>
                  </Container>
                </Container>
                <Container className="my-4" style={{ paddingBottom: '20px' }}>
                  {requests.map((request, index) => (
                      <motion.div
                          key={request._id}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2.5 + index * 0.2 }}
                          style={{ marginBottom: '20px' }}
                      >
                        <TradeItem trade={request}/>
                      </motion.div>
                  ))}
                </Container>
              </div>
            </Container>
          </>
      ) : <LoadingSpinner/>
  );
};

export default MainPage;

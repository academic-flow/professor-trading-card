import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';
import LoadingSpinner from './LoadingSpinner';
import { Row, Col } from 'react-bootstrap';
import style from '../../../public/stylesheets/tradeComponent.css'

const TradeItem = ({ trade }) => {
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getTextColor = (rarity) => {
    switch (rarity) {
      case 'Common':
        return '#A9A9A9';
      case 'Uncommon':
        return '#008000';
      case 'Mythic':
        return '#FF4500';
      default:
        return 'none';
    }
  };

  const confirmTrade = () => {
    Meteor.call('confirmTrade', trade, (err) => {
      if (err) {
        console.log(err);
      }
    });
  };

  const denyTrade = () => {
    Meteor.call('denyTrade', trade, (err) => {
      if (err) {
        console.log(err);
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    if (trade.card_wanted && trade.card_offer) {
      Meteor.call('getCardDataForTradeComponent', trade.card_wanted, trade.card_offer, (error, result) => {
        if (error) {
          console.log(error);
        } else {
          setCardData(result);
          setLoading(false);
        }
      });
    }
  }, [trade.card_wanted, trade.card_offer]);

  return (
      <div className="d-flex">
        {loading ? (
            <LoadingSpinner />
        ) : (
            <div className="d-flex tradeContainer flex-column px-3">
              <h4>{trade.sender} would like to trade with you:</h4>
              <div className="d-flex">
                <div className="cardWanted">
                  <Card style={{ width: '18rem' , margin: '10px'}} className="d-flex mr-3">
                    <Card.Title>Card wanted:</Card.Title>
                    <div style={{ maxHeight: '200px', overflow: 'hidden' }}>
                      <Card.Img variant="top" src={cardData.cardWanted.image} height={200} style={{ objectFit: 'contain' }} />
                    </div>
                    <Card.Body style={{ maxHeight: 'none', overflow: 'hidden', height: '100px' }}>
                      <Card.Text>
                        Rarity: <span style={{ color: getTextColor(cardData.cardWanted.rarity) }}>{cardData.cardWanted.rarity}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="cardOffer d-flex mr-3">
                  <Card style={{ width: '18rem' , margin: '10px'}}>
                    <Card.Title>Card offered:</Card.Title>
                    <div style={{ maxHeight: '200px', overflow: 'hidden' }}>
                      <Card.Img variant="top" src={cardData.cardOffer.image} height={200} style={{ objectFit: 'contain' }} />
                    </div>
                    <Card.Body style={{ maxHeight: 'none', overflow: 'hidden', height: '100px' }}>
                      <Card.Text>
                        Rarity: <span style={{ color: getTextColor(cardData.cardOffer.rarity) }}>{cardData.cardOffer.rarity}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="primary" className="justify-content-center" style={{backgroundColor: 'green'}} onClick={confirmTrade}>
                  Accept
                </Button>
                <Button variant="primary" style={{backgroundColor: 'red'}} onClick={denyTrade}>
                  Deny
                </Button>
              </div>
            </div>
        )}
      </div>
  );
  };


  TradeItem.propTypes = {
  trade: PropTypes.shape({
    sender: PropTypes.string,
    receiver: PropTypes.string,
    card_wanted: PropTypes.string,
    card_offer: PropTypes.string,
  }).isRequired,
};

export default TradeItem;

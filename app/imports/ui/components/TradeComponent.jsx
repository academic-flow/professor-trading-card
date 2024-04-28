import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';
import LoadingSpinner from './LoadingSpinner';

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
        <div className="d-flex tradeContainer flex-column">
          <h4>{trade.sender} would like to trade with you</h4>
          <div className="d-flex flex-row">
            <div className="cardWanted d-flex flex-column">
              <Card style={{ width: '18rem' }}>
                <Card.Title>{cardData.cardWanted.name}</Card.Title>
                <div style={{ maxHeight: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={cardData.cardWanted.image}
                    height={200}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <Card.Body style={{ maxHeight: 'none', overflow: 'hidden', height: '100px' }}>
                  <Card.Text>
                    Rarity: <span style={{ color: getTextColor(cardData.cardWanted.rarity) }}>{cardData.cardOffer.rarity}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="cardOffer d-flex">

              <Card style={{ width: '18rem' }}>
                <Card.Title>{cardData.cardOffer.name}</Card.Title>
                <div style={{ maxHeight: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={cardData.cardOffer.image}
                    height={200}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <Card.Body style={{ maxHeight: 'none', overflow: 'hidden', height: '100px' }}>
                  <Card.Text>
                    Rarity: <span style={{ color: getTextColor(cardData.cardOffer.rarity) }}>{cardData.cardOffer.rarity}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <Button variant="primary" className="pb-2" onClick={confirmTrade}>
            Accept
          </Button>
          <Button variant="primary" className="pb-2" onClick={denyTrade}>
            Deny
          </Button>
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

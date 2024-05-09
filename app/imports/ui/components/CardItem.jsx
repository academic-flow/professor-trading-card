import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';

const CardItem = ({ card }) => {

  const [flip, setFlip] = useState(false);
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

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="right">
      <div className="col" style={{ marginBottom: '20px' }}>
        <Card onClick={() => setFlip(!flip)} style={{ width: '18rem' }}>
          <Card.Title>{card.name}</Card.Title>
          <div style={{ maxHeight: '200px', overflow: 'hidden' }}>
            <Card.Img
              variant="top"
              src={card.image}
              height={200}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <Card.Body style={{ maxHeight: 'none', overflow: 'hidden', height: '100px' }}>
            <Card.Text>
              Rarity: <span style={{ color: getTextColor(card.rarity) }}>{card.rarity}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col" style={{ marginBottom: '20px' }}>
        <Card onClick={() => setFlip(!flip)} style={{ width: '18rem' }}>
          <Card.Title>{card.name}</Card.Title>
          <Card.Body style={{ maxHeight: 'none', overflow: 'hidden', height: '300px' }}>
            <Card.Text>
              {card.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </ReactCardFlip>
  );
};

CardItem.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    rarity: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default CardItem;

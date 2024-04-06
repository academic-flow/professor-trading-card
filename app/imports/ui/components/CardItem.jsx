import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardItem = ({ card }) => {
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
    <div className="col">
      <Card style={{ width: '18rem' }}>
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
        <Link to={`/edit/${card._id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card>
    </div>
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

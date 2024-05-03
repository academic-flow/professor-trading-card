import React, { useState, useEffect } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

import { Meteor } from 'meteor/meteor';
import CardItem from '../components/CardItem';
import LoadingSpinner from '../components/LoadingSpinner';
import { Cards } from '../../api/card/Card';

const ViewCollection = () => {
  const { friendUserName } = useParams();
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  console.log(friendUserName)

  const { ready, myCards, currentUserName } = useTracker(() => {
    const subscription = Meteor.subscribe(Cards.userPublicationName);
    const myCardItems = Cards.collection.find({}).fetch();
    const currentUser = Meteor.user();
    const username = currentUser ? currentUser.username : null;
    return {
      currentUserName: username,
      myCards: myCardItems,
      ready: subscription.ready(),

    };
  }, []);

  useEffect(() => {
    Meteor.call('gettingFriendCardCollection', friendUserName, (error, result) => {
      if (error) {
        console.error('Error:', error);
      } else {
        setCollection(result);
        setLoading(false);
      }
    });
  }, [friendUserName]);

  const tradeFunction = (myCardID) => {
    console.log(Meteor.call('tradeCard', myCardID, selectedCard._id, friendUserName, currentUserName));

  };

  const handleTradeButtonClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    setShowModal(false);
    console.log(selectedCard);
  };

  return loading || !ready ? (
    <LoadingSpinner />
  ) : (
    <Container className="py-3">
      <h3>{friendUserName} collection</h3>
      <div>

        {collection.map((card) => (
          <>
            <div className="pt-2" key={card._id}>
              <CardItem card={card} />
            </div>
            <Button id="trade" onClick={() => handleTradeButtonClick(card)}>Trade</Button>
          </>
        ))}
      </div>
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Select a card to trade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">
            {myCards.map((card) => (
              <div className="d-flex justify-content-evenly">
                <CardItem card={card} key={card._id} />
                <Button id="completeTrade" className="align-self-center" onClick={() => tradeFunction(card._id)}>Select to trade with {selectedCard && selectedCard.name}</Button>
              </div>

            ))}
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ViewCollection;

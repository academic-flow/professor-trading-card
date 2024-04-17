import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Meteor } from 'meteor/meteor';
import CardItem from '../components/CardItem';
import LoadingSpinner from '../components/LoadingSpinner';

const ViewCollection = () => {
  const { username } = useParams();
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    Meteor.call('gettingFriendCardCollection', username, (error, result) => {
      if (error) {
        console.error('Error:', error);
      } else {
        setCollection(result);
        setLoading(false);
      }
    });
  }, [username]);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <Container className="py-3">
      <h3>Friend collection</h3>
      {collection.map((card) => (
        <div className="d-flex flex-col">
          <CardItem key={card._id} card={card} />
          <h3>trade</h3>
        </div>
      ))}
    </Container>
  );
};

export default ViewCollection;

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Cards } from '../../api/card/Card';
import CardItem from '../components/CardItem';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListCard = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, cards } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Cards.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const cardItems = Cards.collection.find({}).fetch();
    return {
      cards: cardItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <div className="d-flex flex-row justify-content-around">
      <div className="d-flex justify-content-center flex-column text-center align-items-center" id="rightside" style={{ flex: 2 }}>
        <h1>ProfTCG</h1>
        <h4>Your Card Collection List</h4>
        <div className="container text-center">
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 ">
            {cards.map((card) => <CardItem key={card._id} card={card} />)}

          </div>
        </div>
      </div>
    </div>
  ) : <LoadingSpinner />);
};

export default ListCard;

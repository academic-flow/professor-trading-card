import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField, BoolField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Cards } from '../../api/card/Card';

const formSchema = new SimpleSchema({
  name: String,
  image: String,
  description: String,
  owner: { type: String, optional: true },
  amount: Number,
  tradeAble: { type: Boolean, defaultValue: true },
  rarity: {
    type: String,
    allowedValues: ['Common', 'Uncommon', 'Mythic'],
    defaultValue: 'Common',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

const TeacherAddCard = () => {

  const submit = (data, formRef) => {
    const { name, image, description, rarity, tradeAble, owner, amount } = data;
    let ownerValue = owner || '';
    if (ownerValue === '') {
      ownerValue = 'None';
    }
    for (let i = 0; i < amount; i++) {
      Cards.collection.insert(
        { name, image, description, owner: ownerValue, rarity, tradeAble },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Card added successfully', 'success');
          }
        },
      );
    }

    formRef.reset();
  };

  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Add Stuff</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={(data) => submit(data, data.amount, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="name" />
                <TextField name="image" />
                <TextField name="description" />
                <TextField name="owner" optional />
                <SelectField name="rarity" />
                <BoolField name="tradeAble" defaultChecked />
                <NumField name="amount" defaultValue={1} min={1} />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherAddCard;

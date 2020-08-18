import React from 'react';
import {Card, Button, Dropdown} from 'react-bootstrap';
import './SubscriptionCard.scss';

export default (props) => {
  const isActiveSub = props.active
  let buttons;
  if (isActiveSub) {
    buttons = <div>
      <Button variant = "secondary"> Change Amount</Button>
      <Button variant="secondary">Cancel Subscription</Button>
      </div>
  } else {
    buttons = <div></div>
  }

  return (
      <Card className = "card">
          <Card.Body>
            <Card.Title>Environmental Rights</Card.Title>
            <Card.Subtitle>May 2020-Current</Card.Subtitle>
            <Card.Text>You are donating <b styles={{color:"red"}}> $10 a month </b>, and have donated $50 total. Your money went to prominant
              organizations such as GreenPeace and the {props.name}. Nice job!
            </Card.Text>
            <div className="button-holder">
              {buttons}
            </div>
          </Card.Body>
      </Card>
  )
}
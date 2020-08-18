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
  
  //lol thanks stackoverflow https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
  Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }
  const endMessage = ['Nice Job!', "Hell ya!", "You are changing the world!", "Thanks for helping out!"].random()


  return (
      <Card className = "card">
          <Card.Body>
            <Card.Title>Environmental Rights</Card.Title>
            <Card.Subtitle>May 2020-Current</Card.Subtitle>
            <Card.Text>You {isActiveSub ? 'are' : 'were'} donating <b style={{color: 'green'}}> $10 a month </b>, and have donated $50 total. Your money {isActiveSub ? 'is going' : 'went'} to prominant
              organizations such as GreenPeace and the {props.name}. {endMessage}
            </Card.Text>
            <div className="button-holder">
              {buttons}
            </div>
          </Card.Body>
      </Card>
  )
}
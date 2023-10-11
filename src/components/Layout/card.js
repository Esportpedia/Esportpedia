import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const card = () => {
  return (
    <>
     <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/bgmi-sixteen_nine.jpeg?VersionId=zsLltclyY6uqeoWa_W7f7gVwerMYf5MZ" />
      <Card.Body>
        <Card.Title>BGMI</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" style={{ justifyContent:'center', textAlign:'center'}}>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </ListGroup>
    </Card>
    </>
  )
}

export default card
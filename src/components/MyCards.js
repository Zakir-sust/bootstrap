import React from 'react'
import {Card,Button,CardGroup,Row,Col} from 'react-bootstrap'
import img from '../images/img1.png'
export default function MyCards() {
  return (
    <div>
        <h4>Card</h4>
        <Card style={{width:'15rem'}} className='mb-4' >
            <Card.Img src={img} variant='top'></Card.Img>
            <Card.Body>
                <Card.Title>Laptop</Card.Title>
                <Card.Text><p>Memory: 16 GB RAM</p><p>Storage; 1TB</p><p>Monitor: 15" LCD monitor</p></Card.Text>
                <Button variant='primary'>buy</Button>
            </Card.Body>
        </Card>
        <h4>Card Grid</h4>
        <Row xs={1} md={2} lg={3} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

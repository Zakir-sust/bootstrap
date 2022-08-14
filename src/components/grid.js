import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
export default function grid() {
const ara = ["mango","orange","Banana","Pineapple","Date","guava"]
const elem = ara.map((item)=>
    (<div className="col-md-4" key={item}>{item}</div>))
    console.log('elem = ',elem)
  return (
    <div>
      <div className='container'>
        <h4>Grid</h4>
        <div className="row" >
            {elem}
        </div>
        <div className="row">
            <div className="col-md-4 ">.col-md-4</div>
            <div className="col-md-4">.col-md-4</div>
            <div className="col-md-4">.col-md-4</div>
            <div className="col-md-4">.col-md-4</div>
            <div className="col-md-4 col-md-4">.col-md-4</div>
        </div>
        <p>React things</p>
        <div className='row'>
            <Col md={4}>.col-md-4</Col>
            <Col md={4}>.col-md-4</Col>
            <Col md={4}>.col-md-4</Col>
            <Col md={4}>.col-md-4</Col>
            <Col md={{span:4,offset:4}}>.col-md-4</Col>
        </div>
    </div>
    </div>
  )
}

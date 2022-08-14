import React from 'react'
import { Accordion } from 'react-bootstrap'
export default function MyAccordion() {
  return (
    <div >
        <h4>Accordion</h4>
        <Accordion defaultActiveKey='0' flush>
            <Accordion.Item eventKey='0'>
                    <Accordion.Header>Click to expand</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e   
                        iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  )
}

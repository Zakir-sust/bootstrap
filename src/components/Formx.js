import React from 'react'
import {Form,Col,Button,FloatingLabel} from 'react-bootstrap'
export default function Formx() {
  return (
    <div className='container'>
      <h4>Form</h4>
      <Form >
        <Form.Group className='mb-3'>
          <FloatingLabel controlId='floatingInput' label='first name' className='mb-3'>
          <Form.Control type='text' placeholder='enter first name'/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className='mb-3'>
          <FloatingLabel className='mb-3' label='last name' controlId='floatinginput2'>
            <Form.Control type='text' placeholder='enter first name'/>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='enter email'/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='choose a strong password'/>
        </Form.Group>
        <Form.Select aria-label='select' className='mb-3'>
          <option>Choose a number</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Form.Select>

        <Button variant='success' type='submit'>Submit</Button>
      </Form>  
    </div>

  )
}

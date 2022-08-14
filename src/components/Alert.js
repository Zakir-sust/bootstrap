import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link,Routes,Route } from 'react-router-dom'
export default function MyAlert() {
    const ara = ['primary','secondary','success','danger','warning','info','light','dark']
    const [show,setShow] = useState(false)
    return (
    <div className='mb-4'>
        <h4>Alerts</h4>
        <Alert variant='success' className='col-sm-9'>Operation success!</Alert>
        <Alert variant='info' className='col-sm-9' >
            Go to forms <Link to = '/form' className='alert-link'>using this link</Link>!
        </Alert>
        <Alert variant = 'info' className='col-sm-7'>
            <h3>Additional content</h3>
            <p>Alerts can contain whatever content you like. Headers, paragraphs, dividers, go crazy.</p>
        </Alert>
        {!show&&<div className='btn btn-danger' onClick={()=>{setShow(true)}}>Show error</div>}
        {show&&
            <Alert dismissible variant='danger' onClose={()=>setShow(false)}>
                <Alert.Heading>Error!/Alert.Heading</Alert.Heading>
                <p>Please try again</p>
            </Alert>
        }
    </div>
    )
}

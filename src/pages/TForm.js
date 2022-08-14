import React from 'react'
import Formx from '../components/Formx'
import FormExample from '../components/FormExample'
import FormGrid from '../components/FormGrid'
export default function TForm() {
  return (
    <div className='container'>
        <h4>Form</h4>
        <Formx/>
        <br/>
        <FormExample/>
        <br/>
        <FormGrid/>
    </div>
  )
}

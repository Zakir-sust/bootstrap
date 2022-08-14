import React from 'react'
import { Col } from 'react-bootstrap'
export default function Table() {
  return (
    <div className='container'>
        
        <h4>Table</h4>
        <table className='table'>
        <tr>
            <td><strong>First Name</strong></td>
            
            <td><strong>Last Name</strong></td>
            
            <td><strong>Username</strong></td>
        </tr>
        <tr>
            <td>Andy</td>
            <td>Morgan</td>
            <td>anmo</td>
        </tr>
        <tr>
            <td>By</td>   
            <td>Fx</td>
            <td>byx</td>
        </tr>
        <tr>
            <td>Apple</td>   
            <td>Orange</td>
            <td>Onyx</td>
        </tr>
    </table>
    </div>
  )
}

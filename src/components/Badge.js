import React from 'react'
import { Badge } from 'react-bootstrap'
export default function MyBadge() {
  return (
    <div>
        <h4>Badge</h4>
        <Badge bg='primary'>Example Badge</Badge>{' '}
        <Badge bg = 'dark'>Dark Badge</Badge>{' '}
        <Badge bg = 'warning' pill>Pill Badge</Badge>
    </div>
  )
}

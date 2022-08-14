import React from 'react'
import { Button ,ButtonGroup} from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export default function MyButton() {
  return (
    <div className='mb-3'>
        <h4>Button</h4>
        <ButtonGroup>
            <Button>1</Button><Button>2</Button><Button>3</Button>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>
    </div>
  )
}

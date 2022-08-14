import { render } from '@testing-library/react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Texts() {
  const renderTooltip = (props)=>(
    <Tooltip {...props}>simple tooltip</Tooltip>
  )
  return (
    <div className='container'>
        <h4>Texts</h4>
        <p className='lead'> lead: hello world</p>
        <p > <mark>mark</mark> and <small>small</small>: A quick brown <mark>fox</mark> jumps over the lazy <small>dog</small>.</p>
        <p><del>This line is deleted</del></p>
        <p><u>This is underlined text</u></p>
        <p className="text-left">Left aligned text.</p>
        <p className="text-right">Right aligned text.</p>
        <p> Others are text-center,text-justify,text-nowrap</p>
        <p><abbr title='Hyper Text Markup Language'>HTML</abbr>is not a programming language</p>
        <blockquote className='blockquote-reverse'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
        <OverlayTrigger placement='top' delay={{show:240,hide:400}} overlay={renderTooltip}>
        <button variant='primary'>Hover me to see</button>
        </OverlayTrigger>        
    </div>
  )
}

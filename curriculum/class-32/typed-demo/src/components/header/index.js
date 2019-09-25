import React from 'react';

import './header.scss'

export default function Header(props) {
  return (
    <div className="appBar">
      <h1>{props.children}</h1>
    </div>
  )
}

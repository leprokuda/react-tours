import React from 'react';

import '../label/sale.css'

const Label = (props) => {
  return (
    <div style={props.style} className={'label'}>
      <p className={'label__name'}>{props.name}</p>
    </div>
  )
}

export default Label
import React from 'react'
import './Slides.css'


function Slides({selected , Icon, title}) {
  return (
    <div class={`siding ${selected && "selected"}`}>
        <Icon className="ss"/>
      <h2 className="sss">{title}</h2>
    </div>
  )
}

export default Slides;

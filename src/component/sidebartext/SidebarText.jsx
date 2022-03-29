import React from 'react'

export default function SidebarText(props) {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-3">
                {props.input.img}
            </div>
            <div className="col-6">
                <h6>{props.input.heading}</h6>
            </div>
            <div className="col-3">
                <p>{props.input.num}</p>
            </div>
        </div>

    </div>
  )
}

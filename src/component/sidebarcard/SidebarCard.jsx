import React from 'react'

export default function SidebarText(props) {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-2">
                {props.img}
            </div>
            <div className="col-8">
                <h6>{props.heading}</h6>
            </div>
            <div className="col-2">
                <p>{props.num}</p>
            </div>
        </div>

    </div>
  )
}

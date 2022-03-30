import React from 'react'

export default function InputCard(props) {
  return (
    <div className='container'>
        <div className="row">
        <div className="col-1 pt-2">{props.icon}</div>
        <div className="col-10">{props.text} <br /><span style={{ color: "#a8a8a8" }}> task</span></div>
        <div className="col-1"><button className='btn'>{props.icon2}</button></div>
        </div>
    </div>
  )
}

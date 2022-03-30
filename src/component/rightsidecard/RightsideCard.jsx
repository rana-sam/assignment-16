import React from "react";

export default function RightsideCard(props) {
  return (
    <div className="container">
      <div className="row  pt-3 d-flex">
        <div className="col-2  d-flex text-center justify-content-between">
            {props.icon} </div>
            <div className="col-10 d-flex">
          {props.title}
        </div>
      </div>
    </div>
  );
}

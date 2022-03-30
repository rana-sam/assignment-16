import React from "react";
import RightsideCard from "../component/rightsidecard/RightsideCard";

export default function RightSideBar() {
  return (
    <div className="container" style={{ backgroundColo: "#c9c7c7" }}>
      <div className="row  pt-3 d-flex">
        <div className="col-12  d-flex text-center justify-content-between">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label lh-1 " for="flexCheckDefault">
              <p className="ms-3 ">test 3</p>
            </label>
          </div>
          <button
            type="button"
            class="btn "
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Mark task as important"
          >
            <i class="bi bi-star"></i>
          </button>
        </div>
      </div>
      <div className="row text-primary mt-2">
        <RightsideCard icon={<i class="bi bi-plus-lg"></i>} title="Add steps"/>
      </div>
      <div className="row text-primary d-flex mt-4 pb-3 border">
      <RightsideCard icon={<i class="bi bi-brightness-high"></i>} title="Add to My Day"/>
      </div>
        <div className="row pt-3 ">
        <RightsideCard icon={<i class="bi bi-bell"></i>} title="Remind me"/>
        </div>
        <div className="row ">
        <RightsideCard icon={<i class="bi bi-calendar-minus"></i>} title="Add Due date"/>
        </div>
        <div className="row ">
        <RightsideCard icon={<i class="bi bi-arrow-clockwise"></i>} title="Reapete"/>
        </div>


        <div className="row mt-4 pb-3 border">
        <RightsideCard icon={<i class="bi bi-tag" style={{transform:"rotate(90deg)"}}></i>} title="Pick a Category"/>
        </div>
        <div className="row mt-4 pb-3 border">
        <RightsideCard icon={<i class="bi bi-link"style={{transform:"rotate(90deg)"}}></i>} title="Add a File"/>
        </div>

        <div className="row">
            <div className="col-12 mt-3"><textarea placeholder="Add Note" name="" id="" cols="40" rows="3"></textarea></div>
        </div>

      
    </div>
  );
}

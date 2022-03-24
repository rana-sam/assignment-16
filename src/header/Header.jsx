import React from "react";
import grid from "../assests/grid.png";
import search from "../assests/search.png";
import setting from "../assests/settings.png";
import Rs from "../assests/rupee.png";
import question from "../assests/question.png";
export default function Header() {
  return (
    <div>
      <div className="fluid-container bg-primary text-light">
        <div className="row pt-2 pb-2">
          <div className="col-3 ms-3 d-flex align-items-center">
            <i className="bi bi-grid-3x3-gap ms-3 fs-4"></i>
            <h6 className="ms-3 pt-2">To Do</h6>
          </div>
          <div className="col-5 d-flex align-items-center position-relative">
            <button className="btn " style={{ backgroundColor: "#bde4fc" }}>
              <i class="bi bi-search"></i>
            </button>
            <input
              type="text"
              class="form-control w-75 position-absolute "
              style={{
                backgroundColor: "#bde4fc",
                padding: "7px",
                left: "45px",
                boxShadow: "none",
                outline: "none",
                border: "none",
              }}
            />
          </div>
          <div className=" col-3 d-flex justify-content-end align-items-center position-relative">
            <div className="position-absolute end-0 d-flex justify-content-between w-50">
            <i class="bi bi-gear"></i>
            <i class="bi bi-question-lg text-light"></i>
            <i class="bi bi-megaphone"></i>
            <i class="bi bi-person-circle text-light"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

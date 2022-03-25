import React from "react";

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
        <div className="col-1">
          <i class="bi bi-plus-lg"></i>
        </div>
        <div className="col-10  ms-2 d-flex">Add steps</div>
      </div>

      <div className="row text-primary d-flex mt-4 pt-3 border">
        <div className="col-1">
          <i class="bi bi-brightness-high"></i>
        </div>
        <div className="col-10 d-flex">
          <p className="ps-2">Add to My Day</p>
        </div>
      </div>

        <div className="row pt-3 ">
            <div className="col-2 d-flex">
            <i class="bi bi-bell"></i>
            </div>
            <div className="col-10 d-flex border-bottom">
                <p>Remind me</p>
            </div>
        </div>
        <div className="row pt-3 ">
            <div className="col-2 d-flex">
            <i class="bi bi-calendar-minus"></i>
            </div>
            <div className="col-10 d-flex border-bottom">
                <p>Add Due date</p>
            </div>
        </div>
        <div className="row pt-3 ">
            <div className="col-2 d-flex">
            <i class="bi bi-arrow-clockwise"></i>
            </div>
            <div className="col-10 d-flex border-bottom">
                <p>Reapete</p>
            </div>
        </div>


        <div className="row mt-4 pt-3 border">
            <div className="col-2 d-flex">
            <i class="bi bi-tag" style={{transform:"rotate(90deg)"}}></i>
            </div>
            <div className="col-10 d-flex">
                <p>Pick a Category</p>
            </div>
        </div>
        <div className="row mt-4 pt-3 border">
            <div className="col-2 d-flex">
            <i class="bi bi-link"style={{transform:"rotate(90deg)"}}></i>
            </div>
            <div className="col-10 d-flex">
                <p>Add a File</p>
            </div>
        </div>

        <div className="row">
            <div className="col-12 mt-3"><textarea placeholder="Add Note" name="" id="" cols="40" rows="3"></textarea></div>
        </div>

      
    </div>
  );
}

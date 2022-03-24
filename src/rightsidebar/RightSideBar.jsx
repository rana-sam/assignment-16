import React from 'react'

export default function RightSideBar() {
  return (
        <div className="container" style={{backgroundColo:"#c9c7c7"}}>
        <div
              className="row  pt-3 d-flex"
              
            >
              <div className="col-12  d-flex text-center justify-content-between">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label lh-1 " for="flexCheckDefault">
                    <p className="ms-3 ">
                      test 3
                    </p>
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
            <div className="col-1"><i class="bi bi-plus-lg"></i></div>
            <div className="col-10  ms-2 d-flex">Add steps</div>
        </div>







    </div>
  )
}

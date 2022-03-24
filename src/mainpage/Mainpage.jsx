import React from "react";
import RightSideBar from "../rightsidebar/RightSideBar";
import Sidebar from "../sidebar/Sidebar";
import "./MainpageStyle.css";
export default function Mainpage() {
  return (
    <div>
      <div className="fluid-container ">
        <div className="row">
          <div className="col-3"><Sidebar/></div>

          <div className="col-6 d-flex flex-column mt-4">
            <div className="row ">
              <div className="col-12 d-flex justify-content-between">
                <div>
                  <span className="d-flex ms-3">
                    <h3>My Day</h3>
                    <button
                      className="btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Tooltip on top"
                    >
                      <i class="bi bi-three-dots ms-3 text-dark"></i>
                    </button>
                  </span>
                  <p>Thursday,March 24</p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="d-flex">
                    <i class="bi bi-arrow-down-up ps-2 pe-2"></i>
                    <p>Sort</p>
                  </span>
                  <span className="d-flex">
                    <i class="bi bi-lightbulb-fill ps-5 pe-2"></i>
                    <p>Suggestion</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="row text-primary">
              <div
                className="col-12 d-flex align-items-center ms-2 "
                style={{ backgroundColor: "#e0e0e0" }}
              >
                <button className="btn text-primary fs-2 ">
                  <i class="bi bi-plus-lg pe-3"></i>
                </button>
                <input
                  placeholder="Add a Task"
                  type="text"
                  style={{
                    backgroundColor: "#e0e0e0",
                    outline: "none",
                    border: "none",
                  }}
                />
              </div>
            </div>
            <div className="row d-flex  pt-3 ">
              <div className="col-12 d-flex justify-content-between">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label lh-1 " for="flexCheckDefault">
                    <p className="ms-3">
                      test <br />
                      <span style={{ color: "#a8a8a8" }}> task</span>
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
            <div
              className="row  pt-3 d-flex"
              style={{ backgroundColor: "#c8ecfa" }}
            >
              <div className="col-12  d-flex justify-content-between">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label lh-1 " for="flexCheckDefault">
                    <p className="ms-3 ">
                      test 3 <br />
                      <span style={{ color: "#a8a8a8" }}> task</span>
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
            <div className="row ">
              <div className="col-12 d-flex">
                <div class="btn-group">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn dropdown-toggle dropdown-toggle-split"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></button>
                    <ul class="dropdown-menu"></ul>
                  </div>
                  <button type="button" class="btn">
                    complete
                  </button>
                  <button className="btn" style={{ color: "#a8a8a8" }}>
                    1
                  </button>
                </div>
              </div>
            </div>
            <div className="row d-flex  pt-3 ">
              <div className="col-12 d-flex justify-content-between">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label lh-1 " for="flexCheckDefault">
                    <p className="ms-3">
                      <span className="text-decoration-line-through">test 2</span><br />
                      <span style={{ color: "#a8a8a8" }}> task</span>
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
            <div className="row">
                <div className="col-12 py-4 border-bottom"></div>
            </div>
            <div className="row">
                <div className="col-12 py-4 border-bottom"></div>
            </div>
            <div className="row">
                <div className="col-12 py-4 border-bottom"></div>
            </div>
            <div className="row">
                <div className="col-12 py-4 border-bottom"></div>
            </div>
            <div className="row">
                <div className="col-12 py-4 border-bottom"></div>
            </div>
            <div className="row">
                <div className="col-12 py-4 border-bottom"></div>
            </div>
            <div className="row">
                <div className="col-12 py-4 border-bottom"></div>
            </div>
          </div>

          <div className="col-3">
             <RightSideBar/> 
          </div>
        </div>
      </div>
    </div>
  );
}

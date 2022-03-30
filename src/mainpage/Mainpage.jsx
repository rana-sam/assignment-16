import React ,{useState} from "react";
import Checkbutton from "../component/checkbutton/Checkbutton";
import InputCard from "../component/inputcard/InputCard";
import RightSideBar from "../rightsidebar/RightSideBar";
import Sidebar from "../sidebar/Sidebar";
import "./MainpageStyle.css";
export default function Mainpage() {
  const onclickHandler = ()=>{
    <InputCard icon={<Checkbutton/>} text={onchange} icon2={<i class="bi bi-star"></i>}/>
  }
  const onchangehandle = (e)=>{
    setonchange(e.target.value);
  }
  const [onchange, setonchange] = useState()


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
                      <i className="bi bi-three-dots ms-3 text-dark"></i>
                    </button>
                  </span>
                  <p>Thursday,March 24</p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="d-flex">
                    <i className="bi bi-arrow-down-up ps-2 pe-2"></i>
                    <p>Sort</p>
                  </span>
                  <span className="d-flex">
                    <i className="bi bi-lightbulb-fill ps-5 pe-2"></i>
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
                <button className="btn text-primary fs-2 " onClick={onclickHandler}>
                  <i className="bi bi-plus-lg pe-3"></i>
                </button>
                <input onChange={onchangehandle}
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
            <InputCard icon={<Checkbutton/>} text="text" icon2={<i class="bi bi-star"></i>}/>
            </div>
            <div className="row d-flex  pt-3 ">
            <InputCard icon={<Checkbutton/>} text="text2" icon2={<i class="bi bi-star"></i>}/>
            </div>
            <div className="row d-flex  pt-3 text-decoration-line-through ">
            <InputCard icon={<Checkbutton/>} text="text3" icon2={<i class="bi bi-star"></i>}/>
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

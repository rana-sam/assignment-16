import React from 'react'
import grid from '../assests/grid.png'
import search from '../assests/search.png'
import setting from "../assests/settings.png"
import Rs from "../assests/rupee.png"
import question from "../assests/question.png"
export default function Header() {
  return (
    <div>
        
        <div className="fluid-container bg-primary text-light">
          <div className="row">
            <div className="col-3 ms-3 d-flex align-items-center">
                <img src={grid} alt="" height={40} width={40} />
                <h6 className='ms-2'>To Do</h6>
            </div>
            <div className="col-5 d-flex align-items-center position-relative" >
              <img style={{position:"absolute",left:"20px"}} src={search} alt="" height={20} width={20} />
              <input type="text" class="form-control" style={{backgroundColor:"#bde4fc"}} />
            </div>
            <div className=" col-3 d-flex justify-content-end">
              <div className="">
                
              <img src={setting} alt="" height={20} width={20} />
              <img className='ms-4 me-4' src={question} alt=""height={20} width={20} />
              <img src={Rs} alt="" height={20} width={20}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

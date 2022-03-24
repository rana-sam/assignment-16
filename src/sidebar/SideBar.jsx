import React from "react";

export default function Sidebar() {
  return (
    <div className="container" style={{backgroundColo:"#c9c7c7"}}>
      <div className="row mt-4 mb-5">
           <div className="col-12 d-flex fs-2">
                 <i class="bi bi-list"></i>
           </div>
      </div>
      <div className="row">
          <div className="col-2">
          <i class="bi bi-brightness-high"></i>
          </div>
          <div className="col-8 d-flex"><h6>My Day</h6></div>
          <div className="col-2">2</div>
      </div>

      <div className="row">
          <div className="col-2">
          <i class="bi bi-star"></i>
          </div>
          <div className="col-8 d-flex"><p>Important</p></div>
          <div className="col-2">2</div>
      </div>
      <div className="row">
          <div className="col-2">
          <i class="bi bi-calendar3"></i>
          </div>
          <div className="col-8 d-flex"><p>Planned</p></div>
          <div className="col-2">1</div>
      </div>
      <div className="row">
          <div className="col-2">
          <i class="bi bi-person"></i>
          </div>
          <div className="col-8 d-flex"><p>Assignment to me</p></div>
          <div className="col-2"></div>
      </div>
      <div className="row">
          <div className="col-2">
          <i class="bi bi-flag"></i>
          </div>
          <div className="col-8 d-flex"><p>Flagged Email</p></div>
          <div className="col-2"></div>
      </div>
      <div className="row">
          <div className="col-2">
          <i class="bi bi-house"></i>
          </div>
          <div className="col-8 d-flex"><p>Tasks</p></div>
          <div className="col-2">16</div>
      </div>

      <div className="row mt-4 text-primary">
          <div className="col-2 ">
          <i class="bi bi-plus-lg"></i>
          </div>
          <div className="col-8 d-flex"><p>New List</p></div>
          <div className="col-2"><i class="bi bi-calendar-plus me-4"></i></div>
      </div>






    </div>
  );
}

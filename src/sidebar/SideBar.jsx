import React from "react";
import SidebarCard from "../component/sidebarcard/SidebarCard";

export default function Sidebar(props) {
  return (
    <div className="container mt-5" style={{ backgroundColo: "#c9c7c7" }}>
      <div className="row">
        <SidebarCard
          img={<i class="bi bi-brightness-high"></i>}
          heading="My Day"
          num={props.num}
        />
      </div>
      <div className="row">
        <SidebarCard
          img={<i class="bi bi-star"></i>}
          heading="Important"
          num="2"
        />
        <div />
        <div className="row">
          <SidebarCard
            img={<i class="bi bi-calendar3"></i>}
            heading="Planned"
            num="1"
          />
        </div>
        <div className="row">
          <SidebarCard
            img={<i class="bi bi-person"></i>}
            heading="Assignment to me"
            num=""
          />
        </div>
        <div className="row">
          <SidebarCard
            img={<i class="bi bi-flag"></i>}
            heading="Flagged Email"
            num=""
          />
        </div>
        <div className="row">
          <SidebarCard
            img={<i class="bi bi-house"></i>}
            heading="Tasks"
            num={props.num}
          />
        </div>
        <div className="row mt-4 text-primary">
          <SidebarCard
            img={<i class="bi bi-plus-lg"></i>}
            heading="New List"
            num={<i class="bi bi-calendar-plus me-4"></i>}
          />
        </div>
      </div>
    </div>
  );
}

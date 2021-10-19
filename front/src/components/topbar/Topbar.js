import React from "react";
import "./Topbar.css";
// import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Latin'Appli</span>
        </div>
        <div className="topRight">
          <div className="">
              <p>admin :</p>
          </div>
          <div className="">
          <p>John</p>
          </div>
         </div>
      </div>
    </div>
  );
}
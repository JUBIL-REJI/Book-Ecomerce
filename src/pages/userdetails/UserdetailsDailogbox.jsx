import React from "react";
import "./user.css";

function UserdetailsDailogbox() {
  return (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div className="cardin p-4">
        <div className=" image d-flex flex-column justify-content-center align-items-center">
          <button className="btn btn-secondary">
            <img
              src="https://i.imgur.com/wvxPV9S.png"
              height="100"
              width="100"
              alt=""
            />
          </button>
          <span className="name mt-3">Eleanor Pena</span>
          <span className="idd">@eleanorpena</span>
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <span className="idd1">Oxc4c16a645_b21a</span>
            <span>
              <i className="fa fa-copy"></i>
            </span>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center mt-3"></div>
          <div className=" d-flex mt-2">
            <button className="btn1 btn-dark">+ add more details</button>
          </div>
          <div className="text mt-3">
            <span style={{color:'wheat'}}>
              address:
              <br />
              phone:
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserdetailsDailogbox;

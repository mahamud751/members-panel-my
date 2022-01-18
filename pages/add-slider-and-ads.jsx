import React from "react";
import useScript from "../commonFunction/ReloadJs";
const AddSliderAndAds = () => {
  useScript("/assets/js/app.js");
  return (
    <div className="row">
      <div className="col-md-2 m-b-30"></div>

      <div className="col-md-8 m-b-30">
        <div className="card card-statistics">
          <div className="card-header">
            <div className="card-heading">
              <h4 className="card-title">Add slider and offer</h4>
            </div>
          </div>
          <div className="card-body">
            <form id="signupForm" method="post" className="form-horizontal" enctype="multipart/form-data">
              <div className="form-group">
                <label htmlFor="inputState">Select type</label>
                <select id="inputState" className="form-control">
                  <option selected>Select type</option>
                  <option>Site Index </option>
                  <option>User side</option>
                  <option>Outlet side</option>
                  <option>Vendor side</option>
                  <option>Offer</option>
                </select>
              </div>

              <div className="form-group">
                <label className="control-label" htmlFor="fname">
                  Short discription
                </label>
                <div className="mb-2">
                  <input type="text" className="form-control" id="fname" name="shortDiscription" placeholder="Short discription" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label" htmlFor="lname">
                  Picture
                </label>
                <div className="mb-2">
                  <input type="file" className="form-control" id="lname" name="picture" />
                </div>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary" name="signup" value="Submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSliderAndAds;

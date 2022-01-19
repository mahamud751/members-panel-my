import React from "react";
import useScript from "../commonFunction/ReloadJs";
const AddProduct = () => {
  useScript("/assets/js/app.js");
  return (
    <div>
      <div className="row">
        <div className="col-md-1 m-b-30"></div>

        <div className="col-md-10 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Add product</h4>
              </div>
            </div>
            <div className="card-body">
              <form id="signupForm" method="post" className="form-horizontal" encType="multipart/form-data">
                <div className="form-row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputState">Select category</label>
                      <select id="inputState" className="form-control">
                        <option selected>Select category</option>
                        <option>Category 1 </option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                        <option>Category 4</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputState">Select sub category</label>
                      <select id="inputState" className="form-control">
                        <option selected>Select sub category</option>
                        <option>Sub category 1 </option>
                        <option>Sub category 2</option>
                        <option>Sub category 3</option>
                        <option>Sub category 4</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputState">Select brand</label>
                      <select id="inputState" className="form-control">
                        <option selected>Select brand</option>
                        <option>Brand 1 </option>
                        <option>Brand 2</option>
                        <option>Brand 3</option>
                        <option>Brand 4</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product name
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="productname" placeholder="Product name" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product code
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="productcode" placeholder="Product code" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="fname">
                    Product qty
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" id="fname" name="productqty" placeholder="Product qty" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product tp price
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="tpprice" placeholder="Product tp price" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product buy price
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="productbuyprice" placeholder="Product buy price" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product cash back
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="productcashback" placeholder="Product cash back" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product discount
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="productdiscount" placeholder="Product discount" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product delivery charge
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="productdeliverycharge" placeholder="Product delivery charge" />
                      </div>
                    </div>
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
                  <label htmlFor="inputState">Select product sales type</label>
                  <select id="inputState" className="form-control">
                    <option selected>Select product sales type</option>
                    <option>regular</option>
                    <option>offer</option>
                    <option>flash sales</option>
                  </select>
                </div>

                <div className="card card-statistics">
                  <div className="card-header">
                    <div className="card-heading">
                      <h4 className="card-title">Short Discription</h4>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="quill-editor">
                      <div id="editor"></div>
                    </div>
                  </div>
                </div>

                <div className="card card-statistics">
                  <div className="card-header">
                    <div className="card-heading">
                      <h4 className="card-title">Full Discription</h4>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="summernote" className="summernote"></div>
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
    </div>
  );
};

export default AddProduct;

import React from "react";
import useScript from "../commonFunction/ReloadJs";
const DailyPendingProductOrderReturn = () => {
  useScript("/assets/js/app.js");
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of daily pending product order return</h1>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <nav>
                <ol className="breadcrumb p-0 m-b-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="ti ti-home" />
                    </a>
                  </li>
                  <li className="breadcrumb-item">Tables</li>
                  <li className="breadcrumb-item active text-primary" aria-current="page">
                    List of daily pending product order return
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="datatable-wrapper table-responsive">
                <table id="datatable" className="display compact table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Serial</th>
                      <th>Outlet/Vendor id</th>
                      <th>Outlet/Vendor information</th>
                      <th>User name</th>
                      <th>Invoice</th>
                      <th>Number</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Delivery Type</th>
                      <th>Delivery Address</th>
                      <th>Total product</th>
                      <th>Total qty</th>
                      <th>Total price</th>
                      <th>Status</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Serial</td>
                      <td>Hamza</td>
                      <td>
                        <td>
                          <a href="javascript:void(0);" className="btn btn-block btn-outline-info">
                            Information
                          </a>
                        </td>
                      </td>
                      <td>Amir</td>
                      <td>
                        <a href="javascript:void(0);" className="btn btn-block btn-outline-info">
                          Invoice
                        </a>
                      </td>
                      <td>01720314673</td>
                      <td>amir@gmail.com</td>
                      <td>Dhaka</td>
                      <td>Cash on delivery</td>
                      <td>dhaka</td>
                      <td>10</td>
                      <td>15</td>
                      <td>150000</td>
                      <td>
                        <label className="badge mb-0 badge-warning-inverse">Pending</label>
                      </td>
                      <td>
                        <a href="javascript:void(0);" className="btn btn-block btn-square btn-outline-danger">
                          Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyPendingProductOrderReturn;

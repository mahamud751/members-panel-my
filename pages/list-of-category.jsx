import axios from "axios";
import React from "react";
import useScript from "../commonFunction/ReloadJs";
const ListOfCategory = (props) => {
  useScript("/assets/js/app.js");
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of category</h1>
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
                    List of category
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
                      <th>Category name</th>
                      <th>Sub category name</th>
                      <th>Brand name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.data.map((item, kk) => (
                      <tr key={kk}>
                        <td>{kk + 1}</td>
                        <td>
                          <div>
                            <input type="text" className="form-control" value={item.title} id="fname" name="tittle" />
                            <div className="form-check mb-0 py-2">
                              <input className="form-check-input" type="radio" name="toasts" id="success" defaultValue="success" defaultChecked />
                              <label className="form-check-label" htmlFor="success">
                                Active
                              </label>
                            </div>

                            <div className="form-check mb-0 py-2">
                              <input className="form-check-input" type="radio" name="toasts" id="info" defaultValue="info" />
                              <label className="form-check-label" htmlFor="info">
                                Inactive
                              </label>
                            </div>

                            <a href="javascript:void(0)" className="btn btn-block btn-square btn-outline-danger">
                              Delete
                            </a>
                          </div>
                        </td>

                        <td>
                          {item.CategorySubs.map((iem1) => (
                            <div>
                              <input type="text" className="form-control" id="fname" name="tittle" value={iem1.title} />
                              <div>
                                <div className="form-check mb-0 py-2">
                                  <input className="form-check-input" type="radio" name="toasts1" id="warning" defaultValue="warning" defaultChecked />
                                  <label className="form-check-label" htmlFor="warning">
                                    Active
                                  </label>
                                </div>
                                <div className="form-check mb-0 py-2">
                                  <input className="form-check-input" type="radio" name="toasts1" id="error" defaultValue="error" />
                                  <label className="form-check-label" htmlFor="error">
                                    Inactive
                                  </label>
                                </div>
                              </div>

                              <a href="javascript:void(0);" className="btn btn-block btn-square btn-outline-danger">
                                Delete
                              </a>
                            </div>
                          ))}
                        </td>
                        <td>
                          {item.CategorySubs.map((iem1) => (
                            iem1.CategoryBrands.map((item2) => (
                              <div>
                                <input type="text" className="form-control" id="fname" name="tittle" value={item2.title} />
                                <div className="form-check mb-0 py-2">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="toasts2"
                                    id="toast-top-right"
                                    defaultValue="toast-top-right"
                                    defaultChecked
                                  />
                                  <label className="form-check-label" htmlFor="toast-top-right">
                                    Active
                                  </label>
                                </div>

                                <div className="form-check mb-0 py-2">
                                  <input className="form-check-input" type="radio" name="toasts2" id="toast-bottom-right" defaultValue="toast-bottom-right" />
                                  <label className="form-check-label" htmlFor="toast-bottom-right">
                                    Inactive
                                  </label>
                                </div>

                                <a href="javascript:void(0);" className="btn btn-block btn-square btn-outline-danger">
                                  Delete
                                </a>
                              </div>
                            ))
                          ))}
                        </td>
                      </tr>
                    ))}
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
export async function getStaticProps(context) {
  const { data } = await axios.get("https://baybridgebd.com/GetCategoryData");
  return {
    props: { data },
  };
}

export default ListOfCategory;

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
              <h1>List of Subcategory</h1>
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
                    List of Subcategory
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
                <table id="subcategory" className="display compact table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Serial</th>
                      <th>Category name</th>
                      <th>Sub category name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      props.data.map((item, index) => (
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{item.categoryId}</td>
                          <td>{item.title}</td>
                          <td>
                          <a href="javascript:void(0)" className="btn btn-sm btn-block btn-square btn-outline-danger">
                              Delete
                            </a>
                          </td>
                        </tr>
                      ))

                    }
                   
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
	const { data } = await axios.get("https://baybridgebd.com/GetInformationSingle/CategorySub&chk=1");
  return {
    props: { data },
  };
}

export default ListOfCategory;

import axios from "axios";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { storeListOfOfferProduct } from "../atom/listOfMembersStore";
import useScript from "../commonFunction/ReloadJs";

const ListOfOffer = (props) => {
  useScript("/assets/js/app.js");

  const getListOfOffer = props.data;
  console.log(getListOfOffer);
  const [ProductStockQty, updateListOfOffer] = useRecoilState(storeListOfOfferProduct);

  useEffect(() => {
    updateListOfOffer(getListOfOffer);
  }, [updateListOfOffer]);
  // const deleteItem = async (id) => {
  //   const formData = { tableName: "product", idColumnName: "id", idValue: id };
  //   const response = await axios
  //     .post(process.env.API_URL + "/Delete", formData)
  //     .then((item) => {
  //       MySwal.fire("Good job!", "Delete information successfully", "success");
  //       deleteInformation(id, product, getPendingProductList, updateProductInfo);
  //     })
  //     .catch((error) => {
  //       MySwal.fire("Brand not saved!", "Something Error Found.", "warning");
  //     });
  // };
  const listOfOffers = useRecoilValue(storeListOfOfferProduct);
  console.log(listOfOffers);
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of offer</h1>
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
                    List of offer
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
                      <th>Picture</th>
                      <th>Short discription</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Picture</td>
                      <td>
                        <input type="text" className="form-control" id="fname" name="shortDiscription" value="Short discription" />
                      </td>
                      <td>Index offer</td>
                      <td>
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
                      </td>
                      <td>
                        <a href="javascript:void(0);" className="btn btn-block btn-outline-info">
                          Edit
                        </a>
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

export async function getServerSideProps(context) {
  const { data } = await axios.get(process.env.API_URL + "/vendorPanel/v1/GetListOfProductPackageStock");
  // console.log(data)
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
export default ListOfOffer;

import axios from "axios";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { storeListOfDailyOrder } from "../atom/listOfPendingOrder";
import useScript from "../commonFunction/ReloadJs";

const DailyOrder = (props) => {
  useScript("/assets/js/app.js");

  const getDailyOrder = props.data;
  console.log(getDailyOrder);
  const [ProductStockQty, updateDailyOrder] = useRecoilState(storeListOfDailyOrder);

  useEffect(() => {
    updateDailyOrder(getDailyOrder);
  }, [updateDailyOrder]);
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
  const dailyOrders = useRecoilValue(storeListOfDailyOrder);
  console.log(dailyOrders);

  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of daily product order</h1>
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
                    List of daily product order
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
                      <th>Invoice</th>

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
                    {dailyOrders.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.userId}</td>
                        <td>
                          <td>
                            <a href="javascript:void(0);" className="btn btn-block btn-outline-info" data-toggle="modal" data-target="#loginModal">
                              Information
                            </a>
                          </td>
                        </td>

                        <Link href={"/invoice"}>
                          <td>
                            <a href="javascript:void(0);" className="btn btn-block btn-outline-info">
                              {item.invoiceNumber}
                            </a>
                          </td>
                        </Link>

                        <td>Cash on delivery</td>
                        <td>
                          {/* {item.memberDetails[0].city} ,{item.memberDetails[0].districts}, {item.memberDetails[0].division} */}
                        </td>
                        <td>{item.totalProduct}</td>
                        <td>{item.totalProduct}</td>
                        <td>{item.totalPrice}</td>
                        <td>
                          <label className="badge mb-0 badge-success-inverse ">{item.status}</label>
                        </td>
                        <td>
                          <a href="javascript:void(0);" className="btn btn-block btn-square btn-outline-danger">
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="modal fade" id="loginModal" tabIndex="{-1}" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">User Details</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">??</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="datatable-wrapper table-responsive">
                        <table id="datatable" className="display compact table table-striped table-bordered">
                          <tbody>
                            <tr>
                              <th>User Name</th>
                              <td>Mahamud</td>
                            </tr>
                            <tr>
                              <th>User Phone Number</th>
                              <td>+889090298</td>
                            </tr>
                            <tr>
                              <th>User Email</th>
                              <td>pino@gmail.com</td>
                            </tr>
                            <tr>
                              <th>User Address</th>
                              <td>Dhaka</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const dhfjk = req.cookies.token;
  let decodedToken = jwtDecode(dhfjk);
  console.log(decodedToken.userId);
  const { data } = await axios.get(process.env.API_URL + "/userPanel/v1/GetDailyOrderList/" + decodedToken.userId);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default DailyOrder;

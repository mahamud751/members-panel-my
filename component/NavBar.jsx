import Link from "next/link";
import React from "react";
const NavBar = () => {
  return (
    <div>
      <aside className="app-navbar">
        <div className="sidebar-nav scrollbar scroll_light">
          <ul className="metismenu " id="sidebarNav">
            <li className="nav-static-title">E-commerce Admin</li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Dashboards</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Daily product order</span>
                <span className="nav-label label label-danger">5</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/daily-order">
                    <a>Daily order</a>
                  </Link>
                  <Link href="/daily-pending-product-order">
                    <a>Pending order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/daily-process-product-order">
                    <a>Process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/daily-success-product-order">
                    <a>Success order </a>
                  </Link>
                </li>

                <li>
                  <Link href="/daily-cancel-product-order">
                    <a>Cancel order </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Daily product return</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/daily-pending-product-order-return">
                    <a>Pending return order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/daily-process-product-order-return">
                    <a>Return process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/daily-success-product-order-return">
                    <a>Success return order</a>
                  </Link>
                </li>

                <li>
                  <Link href="/daily-cancel-product-order-return">
                    <a>Return cancel order </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Total product order </span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/all-product-pending-order">
                    <a>Pending order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all-product-process-order">
                    <a>Process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all-product-success-order">
                    <a>Success order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all-product-cancel-order">
                    <a>Cancel order </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Total product return </span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/all-product-pending-order-return">
                    <a>Pending return order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all-product-process-order-return">
                    <a>Return process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all-product-success-order-return">
                    <a>Success return order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all-product-cancel-order-return">
                    <a>Return cancel order </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">List of product</span>
                <span className="nav-label label label-danger">6</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/list-of-product">
                    <a>List of product</a>
                  </Link>
                </li>
                <li>
                  <Link href="/list-of-product-offer">
                    <a>List of offer</a>
                  </Link>
                </li>
                <li>
                  <Link href="/list-of-product-flash-sales">
                    <a>List of flash sales</a>
                  </Link>
                </li>
                <li>
                  <Link href="/list-of-product-cash-back">
                    <a>List of cash back</a>
                  </Link>
                </li>
                <li>
                  <Link href="/list-of-product-discount">
                    <a>List of discount</a>
                  </Link>
                </li>
                <li>
                  <Link href="/list-of-product-package">
                    <a>List of product package</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Notice</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/notice">
                    <a>Notice Board</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Inquiry</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/inquiry">
                    <a>Inquiry </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Order Track</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/order-track">
                    <a>Order Track</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">News Feed</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/news-feed">
                    <a>News Feed </a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* End agent admin */}

            {/* Start vendor admin */}
            <li className="nav-static-title">Vendor Admin</li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Dashboards</span>
                <span className="nav-label label label-danger">2</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/">
                    <a>Dashboards</a>
                  </Link>
                </li>
                <li>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Create vendor</span>
                <span className="nav-label label label-danger">2</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor-create">
                    <a>Create vendor</a>
                  </Link>
                </li>
                <li>
                  <Link href="/list-of-vendor">
                    <a>List of vendor</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Sign up request</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/list-of-vendor-request">
                    <a>List of vendor request</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Vendor sales</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor-sales-details">
                    <a>Vendor sales details</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Add Product</span>
                <span className="nav-label label label-danger">2</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/add-product">
                    <a>Add product</a>
                  </Link>
                </li>
                <li>
                  <Link href="/create-product-package">
                    <a>Create product package</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Vendor product stock</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor-product-stock-qty">
                    <a>Product stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-package-stock-qty">
                    <a>Package stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-remainder-stock-qty">
                    <a>Remainder stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-remainder-package-qty">
                    <a>Remainder package qty</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Order from user</span>
                <span className="nav-label label label-danger">6</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor-pending-order-from-user">
                    <a>Pending order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-confirmed-order-from-user">
                    <a>Confirmed order</a>
                  </Link>
                </li>

                <li>
                  <Link href="/vendor-process-order-from-user">
                    <a>Process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-picked-order-from-user">
                    <a>Picked order </a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-delivered-order-from-user">
                    <a>Delivery order </a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-cancel-order-from-user">
                    <a>Cancel order </a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-return-order-from-user">
                    <a>Return order</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Transaction History</span>
                <span className="nav-label label label-danger">3</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor-account-summary-from-user">
                    <a>Account Summary</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-balance-withdrawal-from-user">
                    <a>Balance Withdrawal</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-withdrawal-report-from-user">
                    <a>Withdrawal Report</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Announcement</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor-announcement">
                    <a>Announcement</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Faq</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor-faq">
                    <a>Faq</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Account Statement</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor-account-statement">
                    <a>Account Statement</a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* End Vender admin */}

            {/* Start agent admin */}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default NavBar;

import React from "react";
const notice = () => {
  return (
    <div>
      <div>
        <title>Mentor - Bootstrap 4 Admin Dashboard Template</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Admin template that can be used to build dashboards for CRM, CMS, etc." />
        <meta name="author" content="Potenza Global Solutions" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* app favicon */}
        <link rel="shortcut icon" href="assets/img/favicon.ico" />
        {/* google fonts */}
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
        {/* plugin stylesheets */}
        <link rel="stylesheet" type="text/css" href="assets/css/vendors.css" />
        {/* app style */}
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
        {/* begin app */}
        <div className="app container">
          <div className="row widget-social">
            <div className="col-xl-4 col-sm-4">
              <div className="card card-statistics widget-social-box15">
                <div className="card-body bg-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="text-white">Latest Tweet</h4>
                    <div className="img-icon bg-white">
                      <i className="fa fa-twitter" />
                    </div>
                  </div>
                  <p className="text-white my-3 ">
                    The majority of people carry with them, an entire series of self-limiting beliefs that will absolutely stop, and hold them back from,
                    success.{" "}
                  </p>

                  <div className="d-flex justify-content-between">
                    <ul className="list-inline float-right mb-0">
                      <li className="list-inline-item text-white">
                        <a href="javascript:void(0)">
                          <i className="fa fa-thumbs-o-up" /> 895
                        </a>
                      </li>
                      <li className="list-inline-item text-white">
                        <a href="javascript:void(0)">
                          <i className="fa fa-share" /> 1000
                        </a>
                      </li>
                    </ul>
                    <small className="text-white">18 April, 2018 via web</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end app-wrap */}
      </div>
    </div>
  );
};

export default notice;

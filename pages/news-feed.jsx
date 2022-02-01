import React from "react";

const NewsFeed = () => {
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
        <div className="app">
          {/* begin app-wrap */}

          {/* end pre-loader */}
          {/* begin app-header */}
          <header className="app-header top-bar">
            {/* begin navbar */}

            {/* end navbar */}
          </header>
          {/* end app-header */}
          {/* begin app-container */}
          <div className="app-container">
            {/* begin app-nabar */}

            {/* end app-navbar */}
            {/* begin app-main */}
            <div className="app-main" id="main">
              {/* begin container-fluid */}
              <div className="container-fluid">
                {/* begin row */}

                {/* end row */}
                {/* begin row */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="card card-statistics ">
                      <img className="card-img-top" src="assets/img/widget/01.jpg" alt="Card image cap" />
                      <div className="card-body">
                        <h4 className="card-title">Commitment</h4>
                        <p className="card-text">
                          Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price.
                          This is important because nobody wants to put significant effort into something, only to find out after the fact that the price was
                          too high.The price is something not necessarily defined as financial. It could be time, effort, sacrifice, money or perhaps, something
                          else.
                        </p>
                        <a href="javascript:void(0)" className="btn btn-primary mt-2">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card card-statistics mb-30">
                      <img className="card-img-top" src="assets/img/widget/02.jpg" alt="Card image cap" />
                      <div className="card-body">
                        <h4 className="card-title">Information</h4>
                        <p className="card-text">
                          Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the
                          plan as detailed as possible. Try to visualize and then plan for, every possible setback. Commit the plan to paper and then keep it
                          with you at all times. Review it regularly and ensure that every step takes you closer to your Vision and Goals. If the plan doesn’t
                          support the vision then change it!{" "}
                        </p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">FAQ pages is for consistency</li>
                        <li className="list-group-item">Information</li>
                        <li className="list-group-item">Related content</li>
                      </ul>
                      <div className="card-body">
                        <a href="javascript:void(0)" className="card-link">
                          Card link
                        </a>
                        <a href="javascript:void(0)" className="card-link">
                          Another link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* end row */}
              </div>
              {/* end container-fluid */}
            </div>
            {/* end app-main */}
          </div>
          {/* end app-container */}
          {/* begin footer */}

          {/* end footer */}
        </div>
        {/* end app-wrap */}
      </div>
      {/* end app */}
      {/* plugins */}
      {/* custom app */}
    </div>
  );
};

export default NewsFeed;

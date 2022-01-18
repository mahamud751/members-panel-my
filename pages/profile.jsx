import React from "react";

const profile = () => {
  return (
    <div>
      {/* profile.html  21 Nov 2019 03:49:30 GMT */}
      <meta charSet="UTF-8" />
      <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport" />
      <title>Otika - Admin Dashboard Template</title>
      {/* General CSS Files */}
      <link rel="stylesheet" href="assets/css/app.min.css" />
      <link rel="stylesheet" href="assets/bundles/bootstrap-social/bootstrap-social.css" />
      <link rel="stylesheet" href="assets/bundles/summernote/summernote-bs4.css" />
      {/* Template CSS */}
      <link rel="stylesheet" href="assets/css/style.css" />
      <link rel="stylesheet" href="assets/css/components.css" />
      {/* Custom style CSS */}
      <link rel="stylesheet" href="assets/css/custom.css" />
      <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico" />
      <div id="app">
        <div className="main-wrapper main-wrapper-1">
          <div className="navbar-bg" />
          <nav className="navbar navbar-expand-lg main-navbar sticky">
            <div className="form-inline mr-auto">
              <ul className="navbar-nav mr-3">
                <li>
                  <a
                    href="#"
                    data-toggle="sidebar"
                    className="nav-link nav-link-lg
									collapse-btn"
                  >
                    {" "}
                    <i data-feather="align-justify" />
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link nav-link-lg fullscreen-btn">
                    <i data-feather="maximize" />
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
            <ul className="navbar-nav navbar-right">
              <li className="dropdown dropdown-list-toggle">
                <a href="#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle">
                  <i data-feather="mail" />
                  <span className="badge headerBadge1">6 </span>{" "}
                </a>
                <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                  <div className="dropdown-header">
                    Messages
                    <div className="float-right">
                      <a href="#">Mark All As Read</a>
                    </div>
                  </div>
                  <div className="dropdown-list-content dropdown-list-message">
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span
                        className="dropdown-item-avatar
											text-white"
                      >
                        {" "}
                        <img alt="image" src="assets/img/users/user-1.png" className="rounded-circle" />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <span className="message-user">John Deo</span>
                        <span className="time messege-text">Please check your mail !!</span>
                        <span className="time">2 Min Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-avatar text-white">
                        <img alt="image" src="assets/img/users/user-2.png" className="rounded-circle" />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <span className="message-user">Sarah Smith</span> <span className="time messege-text">Request for leave application</span>
                        <span className="time">5 Min Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-avatar text-white">
                        <img alt="image" src="assets/img/users/user-5.png" className="rounded-circle" />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <span className="message-user">Jacob Ryan</span> <span className="time messege-text">Your payment invoice is generated.</span>{" "}
                        <span className="time">12 Min Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-avatar text-white">
                        <img alt="image" src="assets/img/users/user-4.png" className="rounded-circle" />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <span className="message-user">Lina Smith</span> <span className="time messege-text">hii John, I have upload doc related to task.</span>{" "}
                        <span className="time">30 Min Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-avatar text-white">
                        <img alt="image" src="assets/img/users/user-3.png" className="rounded-circle" />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <span className="message-user">Jalpa Joshi</span>{" "}
                        <span className="time messege-text">Please do as specify. Let me know if you have any query.</span>{" "}
                        <span className="time">1 Days Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-avatar text-white">
                        <img alt="image" src="assets/img/users/user-2.png" className="rounded-circle" />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <span className="message-user">Sarah Smith</span> <span className="time messege-text">Client Requirements</span>
                        <span className="time">2 Days Ago</span>
                      </span>
                    </a>
                  </div>
                  <div className="dropdown-footer text-center">
                    <a href="#">
                      View All <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="dropdown dropdown-list-toggle">
                <a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg">
                  <i data-feather="bell" className="bell" />
                </a>
                <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                  <div className="dropdown-header">
                    Notifications
                    <div className="float-right">
                      <a href="#">Mark All As Read</a>
                    </div>
                  </div>
                  <div className="dropdown-list-content dropdown-list-icons">
                    <a href="#" className="dropdown-item dropdown-item-unread">
                      {" "}
                      <span className="dropdown-item-icon bg-primary text-white">
                        {" "}
                        <i
                          className="fas
												fa-code"
                        />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        Template update is available now! <span className="time">2 Min Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-icon bg-info text-white">
                        {" "}
                        <i
                          className="far
												fa-user"
                        />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <b>You</b> and <b>Dedik Sugiharto</b> are now friends <span className="time">10 Hours Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-icon bg-success text-white">
                        {" "}
                        <i
                          className="fas
												fa-check"
                        />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b> <span className="time">12 Hours Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-icon bg-danger text-white">
                        {" "}
                        <i className="fas fa-exclamation-triangle" />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        Low disk space. Let's clean it! <span className="time">17 Hours Ago</span>
                      </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-icon bg-info text-white">
                        {" "}
                        <i
                          className="fas
												fa-bell"
                        />
                      </span>{" "}
                      <span className="dropdown-item-desc">
                        {" "}
                        Welcome to Otika template! <span className="time">Yesterday</span>
                      </span>
                    </a>
                  </div>
                  <div className="dropdown-footer text-center">
                    <a href="#">
                      View All <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="dropdown">
                <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                  {" "}
                  <img alt="image" src="assets/img/user.png" className="user-img-radious-style" /> <span className="d-sm-none d-lg-inline-block" />
                </a>
                <div className="dropdown-menu dropdown-menu-right pullDown">
                  <div className="dropdown-title">Hello Sarah Smith</div>
                  <a href="profile.html" className="dropdown-item has-icon">
                    {" "}
                    <i
                      className="far
										fa-user"
                    />{" "}
                    Profile
                  </a>{" "}
                  <a href="timeline.html" className="dropdown-item has-icon">
                    {" "}
                    <i className="fas fa-bolt" />
                    Activities
                  </a>{" "}
                  <a href="#" className="dropdown-item has-icon">
                    {" "}
                    <i className="fas fa-cog" />
                    Settings
                  </a>
                  <div className="dropdown-divider" />
                  <a href="auth-login.html" className="dropdown-item has-icon text-danger">
                    {" "}
                    <i className="fas fa-sign-out-alt" />
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          {/* <div className="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
              <div className="sidebar-brand">
                <a href="index.html">
                  {" "}
                  <img alt="image" src="assets/img/logo.png" className="header-logo" /> <span className="logo-name">Otika</span>
                </a>
              </div>
              <ul className="sidebar-menu">
                <li className="menu-header">Main</li>
                <li className="dropdown">
                  <a href="index.html" className="nav-link">
                    <i data-feather="monitor" />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="briefcase" />
                    <span>Widgets</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="widget-chart.html">
                        Chart Widgets
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="widget-data.html">
                        Data Widgets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="command" />
                    <span>Apps</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="chat.html">
                        Chat
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="portfolio.html">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="calendar.html">
                        Calendar
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="mail" />
                    <span>Email</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="email-inbox.html">
                        Inbox
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="email-compose.html">
                        Compose
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="email-read.html">
                        read
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-header">UI Elements</li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="copy" />
                    <span>Basic Components</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="alert.html">
                        Alert
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="badge.html">
                        Badge
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="breadcrumb.html">
                        Breadcrumb
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="buttons.html">
                        Buttons
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="collapse.html">
                        Collapse
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="dropdown.html">
                        Dropdown
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="checkbox-and-radio.html">
                        Checkbox &amp; Radios
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="list-group.html">
                        List Group
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="media-object.html">
                        Media Object
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="navbar.html">
                        Navbar
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="pagination.html">
                        Pagination
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="popover.html">
                        Popover
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="progress.html">
                        Progress
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="tooltip.html">
                        Tooltip
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="flags.html">
                        Flag
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="typography.html">
                        Typography
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="shopping-bag" />
                    <span>Advanced</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="avatar.html">
                        Avatar
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="card.html">
                        Card
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="modal.html">
                        Modal
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="sweet-alert.html">
                        Sweet Alert
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="toastr.html">
                        Toastr
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="empty-state.html">
                        Empty State
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="multiple-upload.html">
                        Multiple Upload
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="pricing.html">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="tabs.html">
                        Tab
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="nav-link" href="blank.html">
                    <i data-feather="file" />
                    <span>Blank Page</span>
                  </a>
                </li>
                <li className="menu-header">Otika</li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="layout" />
                    <span>Forms</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="basic-form.html">
                        Basic Form
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="forms-advanced-form.html">
                        Advanced Form
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="forms-editor.html">
                        Editor
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="forms-validation.html">
                        Validation
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="form-wizard.html">
                        Form Wizard
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="grid" />
                    <span>Tables</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="basic-table.html">
                        Basic Tables
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="advance-table.html">
                        Advanced Table
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="datatables.html">
                        Datatable
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="export-table.html">
                        Export Table
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="editable-table.html">
                        Editable Table
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="pie-chart" />
                    <span>Charts</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="chart-amchart.html">
                        amChart
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="chart-apexchart.html">
                        apexchart
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="chart-echart.html">
                        eChart
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="chart-chartjs.html">
                        Chartjs
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="chart-sparkline.html">
                        Sparkline
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="chart-morris.html">
                        Morris
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="feather" />
                    <span>Icons</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="icon-font-awesome.html">
                        Font Awesome
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="icon-material.html">
                        Material Design
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="icon-ionicons.html">
                        Ion Icons
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="icon-feather.html">
                        Feather Icons
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="icon-weather-icon.html">
                        Weather Icon
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-header">Media</li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="image" />
                    <span>Gallery</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="light-gallery.html">
                        Light Gallery
                      </a>
                    </li>
                    <li>
                      <a href="gallery1.html">Gallery 2</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="flag" />
                    <span>Sliders</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="carousel.html">Bootstrap Carousel.html</a>
                    </li>
                    <li>
                      <a className="nav-link" href="owl-carousel.html">
                        Owl Carousel
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="nav-link" href="timeline.html">
                    <i data-feather="sliders" />
                    <span>Timeline</span>
                  </a>
                </li>
                <li className="menu-header">Maps</li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="map" />
                    <span>Google Maps</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="gmaps-advanced-route.html">Advanced Route</a>
                    </li>
                    <li>
                      <a href="gmaps-draggable-marker.html">Draggable Marker</a>
                    </li>
                    <li>
                      <a href="gmaps-geocoding.html">Geocoding</a>
                    </li>
                    <li>
                      <a href="gmaps-geolocation.html">Geolocation</a>
                    </li>
                    <li>
                      <a href="gmaps-marker.html">Marker</a>
                    </li>
                    <li>
                      <a href="gmaps-multiple-marker.html">Multiple Marker</a>
                    </li>
                    <li>
                      <a href="gmaps-route.html">Route</a>
                    </li>
                    <li>
                      <a href="gmaps-simple.html">Simple</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="nav-link" href="vector-map.html">
                    <i data-feather="map-pin" />
                    <span>Vector Map</span>
                  </a>
                </li>
                <li className="menu-header">Pages</li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="user-check" />
                    <span>Auth</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="auth-login.html">Login</a>
                    </li>
                    <li>
                      <a href="auth-register.html">Register</a>
                    </li>
                    <li>
                      <a href="auth-forgot-password.html">Forgot Password</a>
                    </li>
                    <li>
                      <a href="auth-reset-password.html">Reset Password</a>
                    </li>
                    <li>
                      <a href="subscribe.html">Subscribe</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="alert-triangle" />
                    <span>Errors</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="errors-503.html">
                        503
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="errors-403.html">
                        403
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="errors-404.html">
                        404
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="errors-500.html">
                        500
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown active">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="anchor" />
                    <span>Other Pages</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="nav-link" href="create-post.html">
                        Create Post
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="posts.html">
                        Posts
                      </a>
                    </li>
                    <li className="active">
                      <a className="nav-link" href="profile.html">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="invoice.html">
                        Invoice
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <i data-feather="chevrons-down" />
                    <span>Multilevel</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Menu 1</a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="has-dropdown">
                        Menu 2
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">Child Menu 1</a>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="has-dropdown">
                            Child Menu 2
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Child Menu 1</a>
                            </li>
                            <li>
                              <a href="#">Child Menu 2</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#"> Child Menu 3</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </aside>
          </div> */}
          {/* Main Content */}
          <div className="main-content">
            <section className="section">
              <div className="section-body">
                <div className="row mt-sm-4">
                  <div className="col-12 col-md-12 col-lg-4">
                    <div className="card author-box">
                      <div className="card-body">
                        <div className="author-box-center">
                          <img alt="image" src="assets/img/avtar/02.jpg" className="rounded-circle author-box-picture" />
                          <div className="clearfix" />
                          <div className="author-box-name">
                            <a href="#">Sarah Smith</a>
                          </div>
                          <div className="author-box-job">Web Developer</div>
                        </div>
                        <div className="text-center">
                          <div className="author-box-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatum alias molestias minus quod dignissimos.</p>
                          </div>
                          <div className="mb-2 mt-3">
                            <div className="text-small font-weight-bold">Follow Hasan On</div>
                          </div>
                          <a href="#" className="btn btn-social-icon mr-1 btn-facebook">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#" className="btn btn-social-icon mr-1 btn-twitter">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#" className="btn btn-social-icon mr-1 btn-github">
                            <i className="fab fa-github" />
                          </a>
                          <a href="#" className="btn btn-social-icon mr-1 btn-instagram">
                            <i className="fab fa-instagram" />
                          </a>
                          <div className="w-100 d-sm-none" />
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h4>Personal Details</h4>
                      </div>
                      <div className="card-body">
                        <div className="py-4">
                          <p className="clearfix">
                            <span className="float-left">Birthday</span>
                            <span className="float-right text-muted">30-05-1998</span>
                          </p>
                          <p className="clearfix">
                            <span className="float-left">Phone</span>
                            <span className="float-right text-muted">(0123)123456789</span>
                          </p>
                          <p className="clearfix">
                            <span className="float-left">Mail</span>
                            <span className="float-right text-muted">test@example.com</span>
                          </p>
                          <p className="clearfix">
                            <span className="float-left">Facebook</span>
                            <span className="float-right text-muted">
                              <a href="#">John Deo</a>
                            </span>
                          </p>
                          <p className="clearfix">
                            <span className="float-left">Twitter</span>
                            <span className="float-right text-muted">
                              <a href="#">@johndeo</a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h4>Skills</h4>
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled user-progress list-unstyled-border list-unstyled-noborder">
                          <li className="media">
                            <div className="media-body">
                              <div className="media-title">Java</div>
                            </div>
                            <div className="media-progressbar p-t-10">
                              <div className="progress" data-height={6}>
                                <div className="progress-bar bg-primary" data-width="70%" />
                              </div>
                            </div>
                          </li>
                          <li className="media">
                            <div className="media-body">
                              <div className="media-title">Web Design</div>
                            </div>
                            <div className="media-progressbar p-t-10">
                              <div className="progress" data-height={6}>
                                <div className="progress-bar bg-warning" data-width="80%" />
                              </div>
                            </div>
                          </li>
                          <li className="media">
                            <div className="media-body">
                              <div className="media-title">Photoshop</div>
                            </div>
                            <div className="media-progressbar p-t-10">
                              <div className="progress" data-height={6}>
                                <div className="progress-bar bg-green" data-width="48%" />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-8">
                    <div className="card">
                      <div className="padding-20">
                        <ul className="nav nav-tabs" id="myTab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="home-tab2" data-toggle="tab" href="#about" role="tab" aria-selected="true">
                              About
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="profile-tab2" data-toggle="tab" href="#settings" role="tab" aria-selected="false">
                              Setting
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content tab-bordered" id="myTab3Content">
                          <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="home-tab2">
                            <div className="row">
                              <div className="col-md-3 col-6 b-r">
                                <strong>Full Name</strong>
                                <br />
                                <p className="text-muted">Emily Smith</p>
                              </div>
                              <div className="col-md-3 col-6 b-r">
                                <strong>Mobile</strong>
                                <br />
                                <p className="text-muted">(123) 456 7890</p>
                              </div>
                              <div className="col-md-3 col-6 b-r">
                                <strong>Email</strong>
                                <br />
                                <p className="text-muted">johndeo@example.com</p>
                              </div>
                              <div className="col-md-3 col-6">
                                <strong>Location</strong>
                                <br />
                                <p className="text-muted">India</p>
                              </div>
                            </div>
                            <p className="m-t-30">
                              Completed my graduation in Arts from the well known and renowned institution of India – SARDAR PATEL ARTS COLLEGE, BARODA in
                              2000-01, which was affiliated to M.S. University. I ranker in University exams from the same university from 1996-01.
                            </p>
                            <p>Worked as Professor and Head of the department at Sarda Collage, Rajkot, Gujarat from 2003-2015 </p>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                              not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <div className="section-title">Education</div>
                            <ul>
                              <li>B.A.,Gujarat University, Ahmedabad,India.</li>
                              <li>M.A.,Gujarat University, Ahmedabad, India.</li>
                              <li>P.H.D., Shaurashtra University, Rajkot</li>
                            </ul>
                            <div className="section-title">Experience</div>
                            <ul>
                              <li>One year experience as Jr. Professor from April-2009 to march-2010 at B. J. Arts College, Ahmedabad.</li>
                              <li>Three year experience as Jr. Professor at V.S. Arts &amp; Commerse Collage from April - 2008 to April - 2011.</li>
                              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="profile-tab2">
                            <form method="post" className="needs-validation">
                              <div className="card-header">
                                <h4>Edit Profile</h4>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="form-group col-md-6 col-12">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" defaultValue="John" />
                                    <div className="invalid-feedback">Please fill in the first name</div>
                                  </div>
                                  <div className="form-group col-md-6 col-12">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" defaultValue="Deo" />
                                    <div className="invalid-feedback">Please fill in the last name</div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="form-group col-md-7 col-12">
                                    <label>Email</label>
                                    <input type="email" className="form-control" defaultValue="test@example.com" />
                                    <div className="invalid-feedback">Please fill in the email</div>
                                  </div>
                                  <div className="form-group col-md-5 col-12">
                                    <label>Phone</label>
                                    <input type="tel" className="form-control" defaultValue />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="form-group col-12">
                                    <label>Bio</label>
                                    <textarea
                                      className="form-control summernote-simple"
                                      defaultValue={
                                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatum alias molestias minus quod dignissimos."
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="form-group mb-0 col-12">
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" name="remember" className="custom-control-input" id="newsletter" />
                                      <label className="custom-control-label" htmlFor="newsletter">
                                        Subscribe to newsletter
                                      </label>
                                      <div className="text-muted form-text">You will get new information about products, offers and promotions</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer text-right">
                                <button className="btn btn-primary">Save Changes</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;

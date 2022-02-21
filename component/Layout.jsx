import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";
const Layout = ({ children }) => {
  const ConditionalTopHeader = () => {
    const { asPath, pathname } = useRouter();

    if (asPath != "/welcome") {
      return (
        <>
          <TopHeader />
        </>
      );
    }
  };
  const ConditionalNavbar = () => {
    const { asPath, pathname } = useRouter();

    if (asPath != "/welcome") {
      return (
        <>
          <NavBar />
        </>
      );
    }
  };

  const ConditionalFooter = () => {
    const { asPath, pathname } = useRouter();

    if (asPath != "/welcome") {
      return (
        <>
          <Footer />
        </>
      );
    }
  };

  return (
    <div>
      <div className="app">
        <div className="app-wrap">
          {ConditionalTopHeader()}
          <div className="app-container">
            {ConditionalNavbar()}
            <div className="app-main" id="main">
              <div className="container-fluid">
                <main>{children}</main>
                {ConditionalFooter()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

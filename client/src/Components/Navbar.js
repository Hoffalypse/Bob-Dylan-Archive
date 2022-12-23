import { React, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/navbar.css";
import logo from "../assets/images/black-white.jpg";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const AppNavbar = () => {
  let [pageView, setPageView] = useState();
  if (!pageView) {
    setPageView("Building");
  }

  const eventHandle = (e) => {
    setPageView(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
    <div className="flx">
      <img
        className="ml-4 mr-4"
        src={logo}
        alt="logo"
        style={{ maxHeight: "125px"}}
        onClick={eventHandle}
      ></img>

      <button 
      value={"Homepage"} 
      onClick={eventHandle} 
      className="nav-btn"
      id = {pageView === 'Homepage' ? 'highlight': ""}>
        Homepage
      </button>

      <button value={"Archive"} 
      onClick={eventHandle} 
      className="nav-btn"
      id = {pageView === 'Archive' ? 'highlight': ""}>
        Archives
      </button>
      <img
        className="logo ml-4 mr-4 floatRight"
        src={logo}
        alt="logo"
        style={{
          maxHeight: "125px",
          transform: "scaleX(-1)",
        }}
        onClick={eventHandle}
      ></img>
    </div>
      <Navigation pageView={pageView} />
    </>
  );
};

export default AppNavbar;

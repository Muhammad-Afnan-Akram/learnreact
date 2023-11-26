// MainPage.js
import React from "react";
import { Link } from "react-router-dom";
import './MainPage.css';

function MainPage() {
  return (
    <>
      <div className="main-container">
        <h1>Welcome to the main page!</h1>
        <div className="button-container">
          <Link to="/ParentComponent" className="button1">
            Callback for Data Sharing
          </Link>
          <Link to="/Parent" className="button1">
            Props for Data Sharing
          </Link>
          {/* <Link to="/usecontext" className="button1">
            UseContext for Data Sharing
          </Link>
        </div>
        <div className="button-container">
          <Link to="/useeffect" className="button1">
            UseEffect Hook
          </Link>
          <Link to="/anothercallback" className="button1">
            Another Callback
          </Link>
          <Link to="/yetanothercallback" className="button1">
            Yet Another Callback
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default MainPage;

import React, { useEffect, useState } from "react";
import "./style.css";
import Viz from "./treeViz.js";
import ComponentStore from "./componentStore";
const App = () => {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="heading">
          <h1>React Fetch Tree</h1>
        </div>
        <div className="containers-wrapper">
          {/* // render out components  */}
          <Viz />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ComponentStore />
        </div>
      </div>
    </div>
  );
};

export default App;

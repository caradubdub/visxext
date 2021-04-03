// import React from "react";
// import ReactDOM, { render } from "react-dom";
// import App from "./App.js";

// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// );
import React from "react";
import { render } from "react-dom";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

import Viz from "./treeViz";
import "./sandbox-styles.css";
import { Zoom } from "@visx/zoom";

render(
  <ParentSize>
    {({ width, height }) =><Viz width={width} height={height} />}
  </ParentSize>,
  document.getElementById("root")
);

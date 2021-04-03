import React from "react";

const ComponentStore = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          border: "1px solid white",
          marginTop: "20px",
        }}
      >
        <h3>Components containing data fetches</h3>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          border: "1px solid white",
          padding: "10 0 10",
        }}
      >
        <p>This element</p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          border: "1px solid white",
          padding: "10 0 10",
        }}
      >
        <p>This element</p>
      </div>
    </div>
  );
};
export default ComponentStore;

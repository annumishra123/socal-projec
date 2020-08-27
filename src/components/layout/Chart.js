import React from "react";
import Plot from "react-plotly.js";

const Chart = ({ valueXaxis, valueYaxis }) => {
  console.log(valueXaxis, valueYaxis);

  return (
    <div>
      <Plot
        data={[
          {
            x: valueXaxis,
            y: valueYaxis,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
        ]}
        layout={{ width: 1200, height: 440, title: "A Fancy Plot" }}
      />
    </div>
  );
};

export default Chart;

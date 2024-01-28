import React, { useState, useEffect } from "react";
import axios from "axios";

function PieChart() {
  const [chart, setChart] = useState("");

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/pie-chart");
        setChart(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  
  return (
    <div className="piechart-main">
      pie chart
    </div>
  )
}

export default PieChart;

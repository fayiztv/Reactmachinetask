import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

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

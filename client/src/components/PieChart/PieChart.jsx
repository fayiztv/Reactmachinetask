import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

function PieChartPart() {
  const [chartData, setChart] = useState([]);

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

  const COLORS = ['#66C487', '#EBF5ED', '#C9EBD5', '#A8DEBA', '#88D0A0'];
  
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="piechart-main">
    <PieChart style={{marginRight:"25px",marginTop:"60px"}} width={370} height={300}>
      <Pie
        data={chartData}
        cx={200}
        cy={150}
        labelLine={false}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend className="legend" />
    </PieChart>
  </div>
  )
}

export default PieChartPart;

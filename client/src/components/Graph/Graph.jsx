import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Graph() {
  const [graphData, setGraph] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/graph");
        setGraph(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div style={{marginTop:"20px",marginRight:"50px"}} className="graph-main">
      <LineChart width={780} height={470} data={graphData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#A1D2E6" strokeWidth={4} />
      </LineChart>
    </div>
  );
}

export default Graph;

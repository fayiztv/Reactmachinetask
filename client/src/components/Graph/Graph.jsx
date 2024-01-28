import React, { useState, useEffect } from "react";
import axios from "axios";

function Graph() {
  const [graph, setGraph] = useState("");

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
    <div className="graph-main">
      graph
    </div>
  )
}

export default Graph;

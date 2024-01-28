import React, { useState, useEffect } from "react";
import axios from "axios";

function Table() {
  const [table, setTable] = useState("");

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/table");
        setTable(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return <div>Table</div>;
}

export default Table;

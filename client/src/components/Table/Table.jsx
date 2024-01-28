import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

function Table() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/table");
        setTableData(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  // Define columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 290 },
    { field: 'quantity', headerName: 'Quantity', width: 290 },
    { field: 'price', headerName: 'Price', width: 110 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }} className="table-main">
      <DataGrid
        rows={tableData}
        columns={columns}
        rowsPerPageOptions={[5, 10, 25, 20]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      />
    </div>
  )
}

export default Table;

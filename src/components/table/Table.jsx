import React, { useState } from "react";
import "./table.scss";
import Pagination from "./Pagination";
import {columns, tableData} from './TableData'


const Table = () => {
  // const data = [...Array(100)].map((_, i) => {
  //   return [
  //     `Row ${i + 1} - Column 1`,
  //     `Row ${i + 1} - Column 2`,
  //     `Row ${i + 1} - Column 3`,
  //     `Row ${i + 1} - Column 4`,
  //     `Row ${i + 1} - Column 5`,
  //     `Row ${i + 1} - Column 6`,
  //   ];
  // });

  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex  + itemsPerPage;
  const currentData = tableData.slice(startIndex, endIndex);

 

  const totalPages = Math.ceil(tableData.length / itemsPerPage);




 

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        {currentData.map((row) => (
          <tr key={row.id}>
            <td>{row.source}</td>
            <td>{row.customerName}</td>
            <td>{row.customerEmail}</td>
            <td>{row.amount}</td>
            <td>{row.requestDate}</td>
            <td>{row.status}</td>
          </tr>
        ))}
      </table>
      <Pagination
        handlePageChange={handlePageChange}
        setCurrentPage={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Table;

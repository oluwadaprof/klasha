import React, { useState } from "react";
import "./table.scss";
import Pagination from "./Pagination";
import {columns, tableData} from './TableData'


const Table = () => {

  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  //Updates page change 
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Checks for pages index and updates the start and end index making sure its six perpage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex  + itemsPerPage;
  const currentData = tableData.slice(startIndex, endIndex);

 
//Returns data according to itemsperpage using the tabledata
  const totalPages = Math.ceil(tableData.length / itemsPerPage);


  return (
    <div className="table-container">
      <table>
        <thead>
          {/* Maps the header into the table */}
          <tr>
            {columns.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        {/* Maps the data for each row into the table */}
        {currentData.map((row) => (
          <tr key={row.id}>
            <td>{row.transactionID}</td>
            <td>{row.source}</td>
            <td>{row.customerName}</td>
            <td>{row.customerEmail}</td>
            <td>{row.amount}</td>
            <td>{row.requestDate}</td>
            <td>{row.status}</td>
          </tr>
        ))}
      </table>
      {/* Pagination component to handle all its events to navigate table data */}
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

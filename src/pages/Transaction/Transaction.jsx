import Search from "../../components/search/Search";
import "./transaction.scss";
import { BiFilter } from "react-icons/bi";
import React, { useState } from "react";
import Table from "../../components/table/Table";
import { columns, tableData } from "../../components/table/TableData";


const Transaction = () => {

  const [data, setData] = useState([tableData]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div className="transaction">
      <h3>Transaction History</h3>

      <div className="search_content">
        <Search onSearch={handleSearch} />
        <div className="filter_content">
          <button type="">
            Filter <BiFilter />
          </button>
          <button type="">Export</button>
        </div>
      </div>

      <section>
        <Table />
      </section>
    </div>
  );
};

export default Transaction;

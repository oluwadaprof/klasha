import Search from "../../components/search/Search";
import "./transaction.scss";
import { BiFilter } from "react-icons/bi";
import React from "react";


const Transaction = () => {
  return (
    <div className="transaction">
      <h3>Transaction History</h3>

      <div className="search_content">
        <Search />
        <div className="filter_content">
          <button type="">
            Filter <BiFilter />
          </button>
          <button type="">Export</button>
        </div>
      </div>

      <section>
        
      </section>
    </div>
  );
};

export default Transaction;

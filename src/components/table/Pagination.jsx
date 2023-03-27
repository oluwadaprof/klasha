import React, { useState } from "react";
import "./pagination.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({
  totalPages,
  currentPage,
  handlePageChange,
  setCurrentPage,
}) => {
  const buttons = [];

  for (let i = 1; i <= totalPages; i++) {
    const isActive = i === currentPage;
    buttons.push(
      <button
        key={i}
        className={isActive ? "active" : ""}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }



  const handlePrevClick = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        <MdKeyboardArrowLeft className="icon_left"/>
      </button>
      <p>{buttons}</p>

      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        <MdKeyboardArrowRight className="icon_right"/>
      </button>
    </div>
  );
};

export default Pagination;

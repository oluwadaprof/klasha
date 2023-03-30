import React from "react";
import "./pagination.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({
  totalPages,
  currentPage,
  handlePageChange,
  setCurrentPage,
}) => {
  //Array of Buttons Store
  const buttons = [];

  //Array of button based on the data array of data passed in
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

  // Previous ButtonClick Handler
  const handlePrevClick = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  //Next ButtonClick Handler
  const handleNextClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <div className="pagination">
      {/* Prev Button */}
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        <MdKeyboardArrowLeft className="icon_left" />
      </button>

      <p>{buttons}</p>

      {/* Next Button  */}
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        <MdKeyboardArrowRight className="icon_right" />
      </button>
    </div>
  );
};

export default Pagination;

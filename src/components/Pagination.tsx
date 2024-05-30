// src/components/Pagination.js
import React from "react";

const Pagination = ({ page, setPage }: { page: any; setPage: any }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setPage((prevPage: any) => Math.max(prevPage - 1, 1))}
      >
        Previous
      </button>
      <span>{page}</span>
      <button onClick={() => setPage((prevPage: any) => prevPage + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

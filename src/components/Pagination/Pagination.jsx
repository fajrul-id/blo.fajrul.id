import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  totalPost,
  page,
  pages,
  onPageChange,
  msg,
  initialPage,
}) => {
  return (
    <>
      <p className="my-4">
        Total Post: {totalPost} Page: {totalPost ? page + 1 : 1} of {pages}
      </p>
      <p className="text-center text-red-500">{msg}</p>
      <nav
        className="m-2 sm:m-8"
        key={totalPost}
        role="navigation"
        aria-label="pagination"
      >
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          initialPage={initialPage}
          pageCount={Math.min(10, pages)}
          onPageChange={onPageChange}
          containerClassName={"flex flex-wrap gap-2 text-sm"}
          pageLinkClassName={"py-2 px-4 rounded-lg hover:text-blue-600"}
          previousLinkClassName={"py-2 px-4 rounded-lg hover:text-blue-600"}
          nextLinkClassName={"py-2 px-4 rounded-lg hover:text-blue-600"}
          activeLinkClassName={
            "py-2 px-4 bg-blue-500 shadow-lg shadow-blue-600/50 text-white rounded-lg"
          }
          disabledLinkClassName={"py-2 px-4 rounded-lg hover:text-blue-600"}
          renderOnZeroPageCount={null}
          hrefBuilder={(page, pages) =>
            page <= 3 && page <= pages ? `/page/${page}` : "#"
          }
          hrefAllControls
        />
      </nav>
    </>
  );
};

export default Pagination;

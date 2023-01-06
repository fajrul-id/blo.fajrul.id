import React from "react";

const CardDate = ({ category, date }) => {
  return (
    <div className="mb-2 text-gray-600 text-sm flex justify-between">
      <a
        className="text-sm uppercase text-blue-500 mr-2 font-semibold"
        href={`/category/${category}`}
      >
        {category}
      </a>
      <span className="text-sm">
        <h4>{date}</h4>
      </span>
    </div>
  );
};

export default CardDate;

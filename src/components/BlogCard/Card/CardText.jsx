import React from "react";
import { Link } from "react-router-dom";

const CardText = ({ className, title }) => {
  const names = title.replace(/ /g, "-").toLowerCase();
  return (
    <h2 className="font-bold group-hover:text-gray-800 text-lg relative">
      <Link className={className} to={`/blog/${names}`}>
        {title}
      </Link>
    </h2>
  );
};

export default CardText;

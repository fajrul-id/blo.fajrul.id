import React from "react";

const FeaturedText = ({ title, date }) => {
  return (
    <div>
      <h4 className="font-semibold leading-5">
        <a className="hover:text-gray-700" href="/blog/logo-linux">
          {title}
        </a>
      </h4>
      <time className="text-sm text-gray-600">{date}</time>
    </div>
  );
};

export default FeaturedText;

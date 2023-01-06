import React from "react";

const FeaturedMedia = ({ postImage }) => {
  return (
    <div className="w-20 relative bg-gray-100 rounded">
      <img src={postImage} alt="" />
    </div>
  );
};

export default FeaturedMedia;

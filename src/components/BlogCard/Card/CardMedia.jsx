import React from "react";

const CardMedia = ({ postImage, className }) => {
  return (
    <div className="w-full flex justify-center">
      <img src={postImage} alt="" className={className} />
    </div>
  );
};

export default CardMedia;

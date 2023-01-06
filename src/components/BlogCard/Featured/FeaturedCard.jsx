import axios from "axios";
import React, { useEffect, useState } from "react";
import FeaturedMedia from "./FeaturedMedia";
import FeaturedText from "./FeaturedText";

const FeaturedCard = ({ className, postImage, title, date }) => {
  // const [data, setData] = useState([]);

  // const getPostData = async () => {
  //   try {
  //     // let token = await axios.post("http://localhost:3000/login", {
  //     //   email: "fajrul1@fajrul.id",
  //     //   password: "123456",
  //     // });
  //     let result = await axios.get("http://localhost:3000/api/post", {
  //       headers: {
  //         ContentType: "application/json",
  //         // Authorization: token.data.token,
  //       },
  //     });
  //     return result.data.data.posts;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getPostData().then((e) => {
  //     setData(e);

  //     console.info(e);
  //   });
  // }, []);
  return (
    <div className={className}>
      <div className="gap-4 flex w-full items-center relative cursor-pointer">
        <div className="w-20">
          <FeaturedMedia postImage={postImage} />
        </div>
        <FeaturedText title={title} date={date} />
      </div>
    </div>
  );
};

export default FeaturedCard;

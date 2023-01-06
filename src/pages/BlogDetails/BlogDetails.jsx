import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import parse from "html-react-parser";
const BlogDetails = () => {
  const { title } = useParams();
  const titles = title.replace(/-/g, " ");
  const [data, setData] = useState();
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const getDataPost = async () => {
    //   let token = await axios.post("http://localhost:3000/login", {
    //     email: "fajrul1@fajrul.id",
    //     password: "123456",
    //   });
    setLoading(true);

    const result = await axios.get(
      `http://api.fajrul.id/api/post?title=${titles}`
    );
    setLoading(false);
    return result.data.post[0];
  };
  useEffect(() => {
    getDataPost().then((e) => {
      setData(e);
      setBody(e.body);
    });
  }, []);
  return (
    <main className="w-full lg:w-8/12 mt-32">
      {loading ? (
        <Loading />
      ) : (
        <div
          className="w-full flex flex-col rounded-lg shadow-lg py-6 md:py-10 px-4 md:px-6"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <h1 className="text-2xl md:text-3xl text-gray-800 mb-4 font-bold">
            {data?.title}
          </h1>
          <img className="max-w-[100%] my-4" src={data?.images} alt="" />
          <div id="content_wrapper" className="space-y-4 my-4">
            {parse(body)}
          </div>
        </div>
      )}
    </main>
  );
};

export default BlogDetails;

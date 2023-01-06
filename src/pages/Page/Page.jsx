import React, { useEffect, useState } from "react";
import Card from "../../components/BlogCard/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { useParams, generatePath } from "react-router-dom";

const Page = () => {
  const { Page } = useParams();
  const pageParams = parseInt(Page) - 1;
  console.info(pageParams);

  const [Post, setPost] = useState([]);
  const [page, setPage] = useState(pageParams);
  const [limit, setLimit] = useState(2);
  const [pages, setPages] = useState();
  const [rows, setRows] = useState(0);
  const [msg, setMsg] = useState("");

  const getPostData = async () => {
    try {
      // let token = await axios.post("http://localhost:3000/login", {
      //   email: "fajrul1@fajrul.id",
      //   password: "123456",
      // });
      let result = await axios.get(
        `https://api.fajrul.id/api/post?title=&size=${limit}&page=${page}`,
        {
          headers: {
            ContentType: "application/json",
            // Authorization: token.data.token,
          },
        }
      );
      return result.data;
    } catch (error) {
      console.error(error);
    }
  };

  const ChangePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg(
        "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
      );
    } else {
      setMsg("");
    }
    return;
  };

  useEffect(() => {
    getPostData().then((e) => {
      setPost(e.post);
      setPage(e.currentPage);
      setPages(e.totalPages);
      setRows(e.totalItems);
      console.info(e);
    });
  }, [page]);
  return (
    <div className="w-full lg:w-8/12 mx-auto lg:max-w-6xl container flex flex-wrap gap-8 lg:flex-nowrap my-4 lg:my-8 px-4 lg:px-8">
      <main id="container" className="w-full flex flex-col">
        <SearchBar className="hidden sm:block mb-3" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {Post?.map((e) => {
            return (
              <Card
                key={e.id}
                date={e.createdAt}
                className="bg-white rounded-lg min-h-[200px] hover:shadow-lg hover:scale-105 duration-500"
                postImage={e.images}
                alt={e.title}
                title={e.title}
                category={e.id}
              />
            );
          })}
        </div>
        <Pagination
          totalPost={rows}
          initialPage={parseInt(page)}
          page={page}
          pages={pages}
          onPageChange={ChangePage}
        />
      </main>
    </div>
  );
};

export default Page;

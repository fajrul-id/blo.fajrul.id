import React, { useEffect, useState } from "react";
import Card from "../../components/BlogCard/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [Post, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(2);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  const getPost = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.fajrul.id/api/post?title=${keyword}&size=${limit}&page=${page}`
    );
    setLoading(false);
    setPost(response.data.post);
    setPage(response.data.currentPage);
    setPages(response.data.totalPages);
    setRows(response.data.totalItems);
  };

  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg(
        "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
      );
    } else {
      setMsg("");
    }
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    setKeyword(query);
  };

  useEffect(() => {
    getPost();
  }, [page, keyword]);

  return (
    <div className="w-full lg:w-8/12 mx-auto lg:max-w-6xl container flex flex-wrap gap-8 lg:flex-nowrap my-4 lg:my-8 px-4 lg:px-8">
      <main id="container" className="w-full flex flex-col">
        {loading ? (
          <Loading />
        ) : (
          <>
            <SearchBar
              className="block"
              value={query}
              onSubmit={searchData}
              onChange={(e) => setQuery(e.target.value)}
            />
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
                    category={e.category}
                  />
                );
              })}
            </div>
            <Pagination
              totalPost={rows}
              msg={msg}
              page={page}
              initialPage={page}
              pages={pages}
              onPageChange={changePage}
            />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;

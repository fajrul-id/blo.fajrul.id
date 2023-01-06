import React from "react";
import { Link } from "react-router-dom";
import Image404 from "../../img/404.jpg";

const Page404 = () => {
  return (
    <main className="w-full lg:w-8/12 mt-32">
      <div
        className="w-full flex flex-col items-center rounded-lg shadow-lg py-6 md:py-10 px-4 md:px-6"
        style={{
          marginTop: "-100px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
        }}
      >
        <img className="max-w-[60%]" src={Image404} alt="" />
        <p className="text-center">
          Ups halaman yang kamu tuju tidak dapat ditemukan. Sepertinya telah
          dihapus atau dipindahkan.
        </p>
        <Link
          to="/"
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
        >
          Kembali ke Home
        </Link>
      </div>
    </main>
  );
};

export default Page404;

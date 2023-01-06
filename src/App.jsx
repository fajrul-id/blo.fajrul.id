import React from "react";
import Navbar from "./components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Author from "./pages/Author/Author";
import Contact from "./pages/Contact/Contact";
import Page404 from "./pages/Page404/Page404";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Page from "./pages/Page/Page";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16 lg:mt-20 mx-auto lg:max-w-6xl container flex flex-wrap gap-8 lg:flex-nowrap my-4 lg:my-8 px-4 lg:px-8">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/page/:Page" element={<Page />} />
          <Route path="/blog/:title" element={<BlogDetails />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/author" element={<Author />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Aside />
      </div>
      <Footer />
    </>
  );
};

export default App;

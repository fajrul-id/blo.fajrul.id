import React from "react";
import FeaturedCard from "../BlogCard/Featured/FeaturedCard";
import Promotion from "../Promotion/Promotion";

const Aside = () => {
  return (
    <aside className="w-full lg:w-4/12">
      <Promotion />
      <div className="w-full lg:sticky top-24 flex flex-wrap gap-4">
        <h3 className="w-full uppercase text-sm">Featured</h3>
        <FeaturedCard
          className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-1"
          title="Ada anak cewek metal ni guys coba deh ajak kenalan"
          date="07 December 2022"
          postImage="https://images.pexels.com/photos/14485294/pexels-photo-14485294.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        />
      </div>
    </aside>
  );
};

export default Aside;

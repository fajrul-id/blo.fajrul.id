import React from "react";

const Promotion = () => {
  return (
    <div className="max-h-[200px] bg-gray-800 rounded-lg p-7 mb-4 font-semibold">
      <h3 className="text-xl font-semibold text-white">Newsletter</h3>
      <p className="my-4 text-base text-white">
        Join the newsletter to receive the latest updates in your inbox.
      </p>
      <form>
        <input
          type="submit"
          className="text-slate-50 px-8 py-2 bg-blue-600 rounded-lg text-sm transition-colors duration-150 hover:bg-blue-700 cursor-pointer"
          value="Subcribe"
        />
      </form>
    </div>
  );
};

export default Promotion;

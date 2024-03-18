import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <>
      <div>
        <form action="">
          <div className="flex justify-between items-center text-gray-400 focus-within:text-textColor1">
            <input
              type="search"
              placeholder="Search Course"
              className="peer cursor-pointer relative ring-1 h-10 w-10  focus:bg-textColor ring-textColor focus:w-full pl-7 focus:cursor-text rounded-full px-4 py-2 outline-none focus:ring-2 focus:pl-12  focus:ring-babyPinkColor"
            />
            <IoSearch className="text-darkBlueColor w-5 h-5 absolute ml-3 pointer-events-none" />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;

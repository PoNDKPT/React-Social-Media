import React from 'react';
import { BiSearch, BiUpload } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed pl-20 left-0 top-0 z-10 h-14 bg-white w-full border-b flex justify-end items-center py-2 px-5 lg:px-10 select-none">
      <form className="flex items-center w-full md:w-96 py-2 px-4 border-2 rounded-lg">
        <BiSearch fontSize={20} />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 outline-none w-full text-sm font-medium"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          onFocus={() => navigate('/search')}
        />
      </form>
      <div className="border-2 py-2 px-4 ml-2 rounded-lg bg-gray-800 hover:bg-gray-700">
        <Link to="/create-pin">
          <BiUpload fontSize={20} className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

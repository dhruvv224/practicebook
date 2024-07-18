import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'; // Using react-icons for the search icon
const Navbar = () => {
  const handleSearchChange = (event) => {
    // Handle the search input change
    console.log(event.target.value);
  };

  return (
    <div className="mx-auto">
      <div className="navbar flex justify-around items-center px-6 py-4 bg-white shadow-xl">
        <Link to="/home" className="text-2xl font-bold text-gray-800">
          Practice Book
        </Link>
        <div className="input-container flex items-center relative">
          <FiSearch className="absolute left-3 text-gray-500" />
          <input
            type="text"
            name="searchQuery"
            placeholder="Search..."
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 duration-150"
          />
        </div>
        <div className='buttons-container flex justify-between'>
        <div className='bg-blue-500 rounded-[40px] p-1 mr-3 px-2 hover:bg-blue-600 duration-150'>
            <Link className='text-xl font-bold text-white'>
                Login</Link>
              

            </div>
            <div className='bg-blue-500 rounded-[40px] p-1  px-2 hover:bg-blue-600 duration-150'>
            <Link className='text-xl font-bold text-white'>
            SignUp</Link>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Navbar;

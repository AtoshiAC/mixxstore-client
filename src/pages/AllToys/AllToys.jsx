import React, { useEffect, useState } from 'react';
import {Link, useNavigate } from "react-router-dom";
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    useTitle("All Toys");

    const navigate = useNavigate();
    const [toys, setToys] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("https://mixxstore.onrender.com/alltoys", {
          params: { limit: 20 },
        })
          .then((res) => res.json())
          .then((data) => setToys(data));
    }, []);

    const handleSearch = () => {
        fetch(
          `https://mixxstore.onrender.com/toysearch/${searchQuery}`
        )
          .then((res) => res.json())
          .then((data) => setToys(data));
    };


    const handleViewDetails = (_id) => {
      // Check if the user is logged in
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn) {
        // Redirect to the Details Page
        navigate(
          `https://mixxstore.onrender.com/alltoys/${_id}`
        );
      } else {
        // Redirect to the Login Page
        navigate("/login");
      }
    };


    return (
      <div>
        <h1 className="text-5xl text-center font-bold mb-5">
          All Toys: {toys.length}
        </h1>

        <div className="mb-4 text-center">
          <input
            type="text"
            placeholder="Search by Toy Name"
            className="px-4 py-2 border border-gray-300 rounded-lg"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="ml-2 px-4 py-2 text-white bg-blue-500 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Seller</th>
              <th className="border border-gray-300 p-2">Toy Name</th>
              <th className="border border-gray-300 p-2">Sub-category</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Available Quantity</th>
              <th className="border border-gray-300 p-2"></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr key={toy._id}>
                <td className="border border-gray-300 p-2">{toy.sellerName}</td>
                <td className="border border-gray-300 p-2">{toy.name}</td>
                <td className="border border-gray-300 p-2">
                  {toy.subCategory}
                </td>
                <td className="border border-gray-300 p-2">{toy.price}</td>
                <td className="border border-gray-300 p-2">{toy.quantity}</td>
                <td className="border border-gray-300 p-2">
                  <Link to={`/alltoys/${toy._id}`}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllToys;
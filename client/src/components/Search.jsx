import React, { useState, useEffect } from "react";
import axios from "axios";
import AllDishes from "./AllDishes";

const Search = ({ setSelectedDish }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchCompleted, setFetchCompleted] = useState(false);

  //Fetching the Data from the server
  const fetchSearchResults = async () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/api/search/${encodeURIComponent(searchTerm)}`
      );
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
      setFetchCompleted(true);
    }
  };
  //Debouncing
  useEffect(() => {
    const debounceTimer = setTimeout(fetchSearchResults, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  //Handling the search
  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (searchTerm.trim() !== "") {
        fetchSearchResults();
      }
    }
  };

  const handleResultClick = (dish) => {
    setSelectedDish((prevDishes) => [...prevDishes, dish]);
    setSearchTerm("");
  };

  return (
    <div className="flex mx-auto mt-5 justify-center items-center relative">
      <input
        type="text"
        placeholder="Search for your Dish..."
        name="search"
        value={searchTerm}
        onChange={handleChange}
        onKeyUp={handleSearch}
        autoComplete="off"
        className="py-2 w-6/12 placeholder-gray-300 rounded-l-lg px-2 text-xl"
      />
      {loading ? (
        <div className="absolute p-2 top-full  bg-white rounded-md shadow-lg">
          Loading...
        </div>
      ) : (
        <ul
          className={`absolute mx-auto px-3 py-3 top-full w-6/12 bg-white rounded-md shadow-lg   ${
            searchTerm === "" ? "hidden" : ""
          }`}
        >
          {searchResults.length === 0 && fetchCompleted ? (
            <li className="py-2 px-4">No results found</li>
          ) : (
            searchResults.map((dish) => (
              <li
                key={dish.id}
                className="cursor-pointer hover:text-indigo-700 font-semibold"
                onClick={() => handleResultClick(dish)}
              >
                {dish.name}
              </li>
            ))
          )}
        </ul>
      )}
      <button
        className="text-white bg-red-600 py-2 px-6 rounded-r-lg text-xl font-bold"
        onClick={handleSearch}
      >
        Add dish
      </button>
    </div>
  );
};

export default Search;

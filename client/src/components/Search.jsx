import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SelectedDishesContext } from "../utils/SelectedDishesContext";
import { AllDishesContext } from "../utils/AllDishesContext";

const Search = ({ navigateToDetails, setPopUp }) => {
  const { selectedDish, setSelectedDish } = useContext(SelectedDishesContext);
  const { allDishes, setAllDishes } = useContext(AllDishesContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchCompleted, setFetchCompleted] = useState(false);

  const navigate = useNavigate();

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
    setSelectedDish(dish);
    setAllDishes((prev) => [...prev, dish]);
    setSearchTerm("");
    setPopUp(false);
    setTimeout(() => {
      navigate("/details");
    }, 10);
  };

  return (
    <div className="flex md:mx-0 md:px-0 mx-auto mt-5 justify-center items-center relative">
      <input
        type="text"
        placeholder="Search your Dish..."
        name="search"
        value={searchTerm}
        onChange={handleChange}
        onKeyUp={handleSearch}
        autoComplete="off"
        className="py-3 w-[70%] md:w-6/12  placeholder-bg-[#7E7E7E] font-mono px-1 lg:px-2 text-xs lg:text-sm bg-[#F9F7F7] text-[#1b1b1b] focus:outline-none focus:ring focus:ring-[#E56A55]"
      />
      {loading ? (
        <div className="absolute px-3 py-3 top-full w-6/12 -ml-[134px] flex flex-row gap-4 bg-[#F9F7F7] shadow-lg text-[#1b1b1b] font-mono text-xs">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
              class="animate-spin"
            />
          </svg>
          Loading...
        </div>
      ) : (
        <ul
          className={`absolute mx-auto px-3 py-3 top-full w-6/12 -ml-[134px] bg-[#F9F7F7] font-mono text-[#1b1b1b] shadow-lg   ${
            searchTerm === "" ? "hidden" : ""
          }`}
        >
          {searchResults.length === 0 && fetchCompleted ? (
            <li className="py-2 lg:px-4 lg:text-lg text-xs">
              No results found
            </li>
          ) : (
            searchResults.map((dish, index) => (
              <li
                key={dish.id || index}
                className="cursor-pointer hover:text-[#F29C2E] font-semibold"
                onClick={() => handleResultClick(dish)}
              >
                {dish.name}
              </li>
            ))
          )}
        </ul>
      )}
      <button
        className="text-[#F9F7F7] bg-[#E56A55] hover:bg-[#F29C2E] w-[30%] lg:w-[20%] py-3 px-1 lg:px-6 text-xs  lg:text-lg font-mono font-bold"
        onClick={handleSearch}
      >
        Add dish
      </button>
    </div>
  );
};

export default Search;

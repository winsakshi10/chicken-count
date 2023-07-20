import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const AllDishes = () => {
  const [quantity, setQuantity] = useState(1);
  const [portion, setPortion] = useState("");
  const [months, setMonths] = useState(1);
  const [years, setYears] = useState(1);
  const [frequency, setFrequency] = useState("");
  const [weight, setWeight] = useState("");
  const [savedDishes, setSavedDishes] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  const selectedDish = {
    name: "Tandoori Chicken",
    portions: [
      { size: "Full", measurement: "piece(s)", weight: 300 },
      { size: "Half", measurement: "piece(s)", weight: 150 },
    ],
  };

  useEffect(() => {
    // Reset the portion state when a new dish is selected
    setPortion("");
    setWeight("");
    setQuantity(1);
    setFrequency("daily");
    setMonths(1);
    setYears(1);
  }, [selectedDish]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
    console.log(e.target.value);
  };

  const handlePortionChange = (e) => {
    setPortion(e.target.value);
  };

  useEffect(() => {
    const wt = selectedDish.portions.find((p) => p.size === portion)?.weight;
    setWeight(wt);
    console.log(wt);
  }, [portion, selectedDish.portions]);

  const handleMonthsChange = (event, newValue) => {
    setMonths(newValue);
    console.log(newValue);
  };

  const handleYearsChange = (event, newValue) => {
    setYears(newValue);
    console.log(newValue);
  };

  const handlefrequencyChange = (event) => {
    setFrequency(event.target.value);
    console.log(event.target.value);
  };

  const handleDelete = () => {
    onDelete(selectedDish);
  };

  const handleUpdate = () => {};
  const handleSave = () => {
    let totalTime = 0;

    if (frequency === "daily") {
      totalTime = months * 30 + years * 365;
    } else if (frequency === "weekly") {
      totalTime = (months * 30 + years * 365) / 7;
    } else if (frequency === "monthly") {
      totalTime = months + years * 12;
    }

    const portionWeightPerUnit = weight * quantity;
    const totalWeight = portionWeightPerUnit * totalTime;

    const updatedDish = {
      name: selectedDish.name,
      portion: portion,
      months: months,
      years: years,
      frequency: frequency,
      weight: weight,
      totalWeight: totalWeight,
    };

    console.log(updatedDish);
    setSavedDishes((prevSavedDishes) => [...prevSavedDishes, updatedDish]);
    setCollapsed(true);
  };

  return (
    <div className="bg-white w-[70%] flex mx-auto mt-5 rounded-lg shadow-md p-5">
      <div
        className={`border-2 border-slate-200 w-full p-3 rounded-md ${
          collapsed ? "h-[60px]" : ""
        }`}
      >
        <div>
          <div className="flex justify-between">
            <p className="text-xs font-semibold text-gray-400">Dish 1 : </p>
            <div className="flex gap-2">
              <button
                className="text-gray-400 font-bold text-sm hover:text-red-500"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="text-gray-400 font-bold text-sm hover:text-red-500"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="text-gray-400 font-bold text-sm hover:text-red-500"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
          <h2 className="my-3 font-bold text-2xl">{selectedDish.name}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm mt-10 text-gray-500">
          <div className="">
            <label htmlFor="quantity">Select Quantity : </label>
            <select
              name="quantity"
              id="select_Quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-[50%] border border-slate-200 rounded-sm"
            >
              {[1, 2, 3, 4, 5].map((quant) => (
                <option key={quant} value={quant}>
                  {quant}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="portion">Select Portion : </label>
            <select
              name="portion"
              id="select_Portion"
              value={portion}
              onChange={handlePortionChange}
              className="w-[50%] border border-slate-200 rounded-sm"
            >
              {selectedDish.portions.map((val, index) => (
                <option key={index} value={val.size}>
                  {val.size}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="frequency">Select Frequency: </label>
            <select
              name="frequency"
              id="select_Frequency"
              value={frequency}
              onChange={handlefrequencyChange}
              className="w-[50%] border border-slate-200 rounded-sm"
            >
              {["daily", "weekly", "monthly"].map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5 flex-col items-center gap-4 ">
          <label className="text-gray-500 text-sm">Select Range</label>
          <div className="flex flex-col gap-4 my-5 justify-center items-center">
            <div className="flex items-center gap-6 text-gray-500">
              <p className=" text-sm">Months</p>
              <Slider
                value={months}
                onChange={handleMonthsChange}
                aria-labelledby="slider-label"
                min={0}
                max={12}
                valueLabelDisplay="auto"
                sx={{
                  width: 300,
                  color: "violet",
                }}
              />
            </div>
            <div className="flex items-center gap-6">
              <p className="text-sm text-gray-500">Years</p>
              <Slider
                value={years}
                onChange={handleYearsChange}
                aria-labelledby="slider-label"
                min={0}
                max={50}
                valueLabelDisplay="auto"
                sx={{
                  width: 300,
                  color: "blue",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDishes;

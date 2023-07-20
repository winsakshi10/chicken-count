import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Slider from "@mui/material/Slider";

const DishCard = ({ dish, onSaveAmount, onDelete, index }) => {
  const [quantity, setQuantity] = useState(1);
  const [frequency, setFrequency] = useState("daily");
  const [months, setMonths] = useState(1);
  const [years, setYears] = useState(1);
  const [portion, setPortion] = useState(dish.portions[0].size);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePortionChange = (e) => {
    setPortion(e.target.value);
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const handleMonthsChange = (e, value) => {
    setMonths(value);
  };

  const handleYearsChange = (e, value) => {
    setYears(value);
  };

  useEffect(() => {
    handleCalculate();
  }, [quantity, portion, frequency, months, years]);

  const handleCalculate = () => {
    const daysInMonth = 30; // Assuming 30 days in a month for simplicity
    const daysInYear = 365; // Assuming 365 days in a year for simplicity
    let weight;
    for (const p of dish.portions) {
      if (p.size === portion) {
        weight = p.weight;
        break;
      }
    }

    let totalDays = 0;
    if (frequency === "daily") {
      totalDays = months * daysInMonth + years * daysInYear;
    } else if (frequency === "weekly") {
      totalDays = (months * daysInMonth + years * daysInYear) / 7;
    } else if (frequency === "monthly") {
      totalDays = months + years * 12;
    }

    const totalAmount = (totalDays * weight) / 1500;
    setAmount(totalAmount);
    return totalAmount;
  };

  const handleSave = () => {
    if (!quantity || !portion || !frequency) {
      setError(true);
      return; // Prevent saving if any required field is missing
    }

    setError(false);
    const amt = handleCalculate();
    onSaveAmount(amount, index);
    setIsEditing(false);
    setIsCollapsed(true);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsCollapsed(false);
  };

  return (
    <div className="bg-[#AC2E24] my-4 text-[#F9F7F7] py-8 px-4 lg:px-8 ">
      <div className="flex justify-between">
        <p className="text-[10px] font-mono">Dish {index + 1}</p>
        <div className="flex gap-2">
          <button
            className="font-bold text-sm hover:text-[#D84F45]"
            onClick={handleEdit}
          >
            <EditIcon />
          </button>
          <button
            className="font-bold text-sm hover:text-[#D84F45]"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
      <h2 className="my-3 tracking-wide font-display text-md lg:text-3xl mb-8">
        {dish.name}
      </h2>
      <div className={`${isCollapsed ? "hidden" : ""}`}>
        <div className="font-mono text-lg ">
          <div className="flex flex-col my-2">
            <label htmlFor="quantity" className="">
              How many portions do you eat?
            </label>
            <select
              name="quantity"
              id="select_Quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full my-2 bg-transparent border-b border-slate-200 focus:outline-none "
            >
              {[1, 2, 3, 4, 5].map((quant) => (
                <option key={quant} value={quant}>
                  {quant}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col my-6">
            <label htmlFor="portion" className="">
              What Portion Size do you usually eat?
            </label>
            <select
              name="portion"
              id="select_Portion"
              value={portion}
              onChange={handlePortionChange}
              className="w-full bg-transparent my-2 border-b border-slate-200 "
            >
              {dish.portions.map((val, index) => (
                <option key={index} value={val.size}>
                  {val.size}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col my-2 ">
            <label htmlFor="frequency" className="">
              How often do you eat this Dish?
            </label>
            <select
              name="frequency"
              id="select_Frequency"
              value={frequency}
              onChange={handleFrequencyChange}
              className="w-full text-md my-2 border-b border-slate-200 bg-transparent"
            >
              {["daily", "weekly", "monthly"].map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5 flex-col items-center gap-4 font-mono text-xs">
          <label className="text-lg">
            Since how many years/months you have been eating this dish?
          </label>
          <div className="flex flex-col  gap-4 my-5  items-center">
            <div className="flex lg:flex-row flex-col text-left lg:items-center gap-3 lg:gap-6 lg:file:mx-2 text-[#F9F7F7]">
              <p className="text-xs">Months</p>
              <Slider
                onChange={handleMonthsChange}
                value={months}
                aria-labelledby="slider-label"
                min={0}
                max={12}
                valueLabelDisplay="auto"
                sx={{
                  width: 500,
                  color: "#F9F7F7",
                  "@media (max-width: 768px)": {
                    width: 300,
                  },
                }}
              />
            </div>
            <div className="flex lg:flex-row flex-col text-left lg:items-center gap-3 lg:gap-6">
              <p className="text-xs ">Years</p>
              <Slider
                value={years}
                onChange={handleYearsChange}
                aria-labelledby="slider-label"
                min={0}
                max={15}
                valueLabelDisplay="auto"
                sx={{
                  width: 500,
                  color: "#F9F7F7",
                  "@media (max-width: 768px)": {
                    width: 300,
                  },
                }}
              />
            </div>
          </div>
        </div>
        {error && (
          <p className="text-red-500 text-xs mt-2">
            Please fill in all required fields before saving.
          </p>
        )}
        <button
          className="px-5 py-2 font-mono text-xs text-center flex bg-[#D84F45] hover:bg-[#D84F45]"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DishCard;

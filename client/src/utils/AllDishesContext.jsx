import { createContext, useContext, useState } from "react";
export const AllDishesContext = createContext(null);

export const AllDishesProvider = ({ children }) => {
  const [allDishes, setAllDishes] = useState([]);

  return (
    <AllDishesContext.Provider value={{ allDishes, setAllDishes }}>
      {children}
    </AllDishesContext.Provider>
  );
};

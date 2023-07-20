import React, { useContext, useState } from "react";

export const SelectedDishesContext = React.createContext();

export const SelectedDishesProvider = ({ children }) => {
  const [selectedDish, setSelectedDish] = useState("");

  return (
    <SelectedDishesContext.Provider value={{ selectedDish, setSelectedDish }}>
      {children}
    </SelectedDishesContext.Provider>
  );
};

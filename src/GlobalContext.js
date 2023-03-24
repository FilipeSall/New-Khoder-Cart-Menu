import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {

  const [totalPrice, setTotalPrice] = useState(0);
  const [listProductCart, setListProductCart] = useState([]);
  const [shouldAnimatePrice, setShouldAnimatePrice] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <GlobalContext.Provider value={{ totalPrice, setTotalPrice, shouldAnimatePrice, setShouldAnimatePrice, listProductCart, setListProductCart, searchValue, setSearchValue}}>

      {children}
      
    </GlobalContext.Provider>

  );
};
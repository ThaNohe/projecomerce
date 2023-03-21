import React, { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

useEffect(()=>{
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const products = await response.json();
    setData(products.products);
    
  };
  fetchData();
}, []);

return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};




export { DataContext, DataProvider };

import React, { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      const fetchProductos = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProductos(data.productos); // Se establece directamente el valor devuelto por la API
        console.log(data.productos);
      };
  
      fetchProductos();
    }, []);
  
    return (
      <DataContext.Provider value={productos}>{children}</DataContext.Provider>
    );
  };
  

export { DataContext, DataProvider };

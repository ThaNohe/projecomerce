import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Product = () => {
  const products = useContext(DataContext);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.description}</p>
          <button onClick={() => abrirProducto(product.id)}>ABRIR PRODUCTO</button>
        </div>
      ))}
    </div>
  );
};

const abrirProducto = (id) => {
  console.log("Soy el producto", id);
};  

export default Product;




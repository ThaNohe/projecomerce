import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';

const Products = () => {
  const productos = useContext(DataContext);
  return (
    <div>
      {Array.isArray(productos) ? productos.map((producto) => (
        <div key={producto.id}>
          <h2>{producto.name}</h2>
          <p>{producto.description}</p>
          <img
            className="card-img-top"
            src={producto.thumbnail}
            alt={producto.title}
          />
        </div>
      )) : null}
    </div>
  );
};

export default Products;


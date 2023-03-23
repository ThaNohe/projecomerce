import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Product = () => {
  const products = useContext(DataContext);

  return (
    <div className="row justify-content-between">
      {products.map((product) => (
        <div className="col-md-2 col-lg-2 mb-4" key={product.id}>
          <div className="card h-100 align-items-stretch">

            <img
              className="card-img-top"
              src={product.thumbnail}
              alt={product.title}
              style={{ maxHeight: '200px' }}
            />

            <div className="card-body flex-grow-1">
              <h2 className="card-title">{product.title}</h2>
              <p className="card-text">{product.description}</p>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => abrirProducto(product.id)}
              >
                ABRIR PRODUCTO
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const abrirProducto = (id) => {
  console.log("Soy el producto", id);
};

export default Product;

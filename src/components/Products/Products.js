import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Product = () => {
  const products = useContext(DataContext);

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <div className="card mb-4 box-shadow">
            <img
              className="card-img-top"
              src={product.thumbnail}
              alt={product.title}
            />

            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="card-text">{product.description}</p>
              <button
                className="btn btn-lg btn-block btn-primary"
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

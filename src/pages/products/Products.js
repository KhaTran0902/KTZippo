import React from "react";
import { useContext } from "react";
import { ConText } from "../../context/AppConText";
import "./Products.scss";
import { Link } from "react-router-dom";

import CategoryFilter from "./CategoryFilter";
export default function Products() {
  const value = useContext(ConText);

  const handleAddToCart = value.handleAddToCart;
  const datafilter = value.datafilter;
  return (
    <>
      <div className="category-main-content">
        <div className="layout">
          <div className="category-title">Category title</div>

          <div className="products-container">
            <div className="sec-heading">Popular products</div>
            <CategoryFilter />
            <div className="products">
              {datafilter.map((product) => (
                <div className="products-card" key={product.id}>
                  <div className="thumbnail">
                    <Link to={`/products/${product.id}`}>
                      <img src={product.img} />
                    </Link>
                  </div>

                  <div className="prod-details">
                    <span className="name">{product.title}</span>
                    <span className="price"> $ {product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

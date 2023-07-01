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
       
      <div className="category-main-content" data-aos="zoom-in">
        <div className="layout">
       
          
          <div className="banner1__banners1">
        <img
          src="https://cdn.shopify.com/s/files/1/1295/7985/collections/WindproofCollectionBanner.jpg?v=1666620180"
          alt
        />
      </div>
          <div className="products-container">
            <div className="sec-heading">Our Store</div>
            <CategoryFilter />
            <div className="products">
              {datafilter.map((product) => (
                <div
                  className="products-card"
                  data-aos="fade-up-left"
                  key={product.id}
                >
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

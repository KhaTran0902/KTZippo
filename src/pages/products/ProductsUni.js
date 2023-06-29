import React from "react";
import { Uni } from "../../components/fetchdata/Data";
import { Link } from "react-router-dom";
export default function ProductsUni () {
    return (
        <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Our Store</div>
        <div className="products-container">
          <div className="sec-heading">Universal Zippo</div>
          <div className="products">
            {Uni.map((product) => (
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
    )
}
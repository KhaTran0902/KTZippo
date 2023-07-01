import React from "react";
import {  Unitity } from "../../components/fetchdata/Data";
import { Link } from "react-router-dom";
export default function ProductsUnitity () {
    return (
        <div className="category-main-content">
      <div className="layout">
      <div className="banner1__banners1">
        <img
          src="https://www.zippo.com/cdn/shop/collections/UtilityLightersCollection_2030x648.jpg?v=1666620331"
          alt
        />
      </div>
        {/* <div className="category-title">Our Store</div> */}
        <div className="products-container">
          <div className="sec-heading">Unitity Zippo</div>
          <div className="products">
            {Unitity.map((product) => (
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
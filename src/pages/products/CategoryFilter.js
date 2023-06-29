import React, { useContext } from "react";
import "./CategoryFilter.css";

import { ConText } from "../../context/AppConText";
export default function CategoryFilter() {
    const value = useContext(ConText)
    const filterItem=value.filterItem
    const gallery__filter=value.gallery__filter
    const setDataFilter= value.setDataFilter
    const [products] =value.products
    return (
        <div className="fillter-container">
        <div className="galleryWrapper">
          <div className="filterItems">
            <ul>
              <li>
                <button onClick={() => setDataFilter(products)}>All Products</button>
              </li>
              {filterItem.map((item) => (
                <li>
                  <button
                    onClick={() => {
                      gallery__filter(item);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
}

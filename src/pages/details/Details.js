import React, { useContext, useState } from "react";
import { Form, Link, useParams } from "react-router-dom";
import AppConText, { ConText } from "../../context/AppConText";
import "./Details.scss";
import { FaFacebookF, FaInstagram, FaCartPlus } from "react-icons/fa";
import Realated from "./related/Related";
import Related from "./related/Related";
export default function Details() {
  const { id } = useParams();
  const value = useContext (ConText)
  const [cart, setCart] =value.cart;
  const [products] =value.products
  const handleAddToCart= value.handleAddToCart;
  const ScrollToTop=value.ScrollToTop;
  const details = products.filter((product, index) => {
    return product.id === id;
  });
  
  console.log(details);
  const [quantity, setQuantity] = useState(1);
  
  const increment = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrement = () => {
    setQuantity ((prev) => {
      if (prev === 1 ) return 1;
      return prev-1;
    })
  }
  // const reduction = id =>{
  //   cart.forEach (item =>{
  //     if (item.id === id){
  //       item.count === 1 ? item.count=1 : item.count -=1;
  //     }
  //   })
  //   setCart([...cart])
  // }

  // const increase = id => {
  //   cart.forEach(item => {
  //     if (item.id === id) {
  //       item.count += 1 
  //     }
  //   })
  //   setCart([...cart])
  // }
  return (
    <>
      {details.map((product) => (
        <div className="single-product-main-content" key={product.id}>
          <div className="layout">
            <div className="single-product-page">
              <div className="left">
                <img src={product.img} alt="" />
              </div>
              <div className="right">
                <span className="name">{product.title}</span>
                <span className="price">$ {product.price}</span>
                <span className="desc">{product.content}</span>

                <div className="cart-buttons">
                  <div className="quantity-buttons">
                    <span onClick={decrement}>-</span>
                    <span>{quantity}</span>
                    <span onClick={increment}>+</span>
                  </div>
                  <div className="add-to-cart-button" onClick={() => handleAddToCart(product.id)}>
                    <FaCartPlus size={20} />
                    <p> ADD TO CART</p>
                </div>
                </div>
                <span className="divider" />
                <div className="info-item">
                  <span className="text-bold">
                    Category:
                    <span>{product.title1}</span>
                  </span>
                
                <span className="text-bold">
                  Share:
                  <span className="social-icons">
                    <FaFacebookF size={16} />
                    <FaInstagram size={16} />
                  </span>
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <Related/>
    </>
  );
}

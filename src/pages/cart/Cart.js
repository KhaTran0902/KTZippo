import React, { useContext, useEffect, useState } from "react";
import "./Cart.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ConText } from "../../context/AppConText";
import cartempty from "../../assets/empty-cart.jpg";
import { Link } from "react-router-dom";
export default function Cart() {
  const value = useContext(ConText);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);
  useEffect(() => {
    const getTotalCount = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.count;
      }, 0);
      setCount(res);
    };
    getTotalCount();
  }, [cart]);
  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  return (
    <div>
     
      {cart.length < 1 && (
        <div className="cart-empty">
          <img src={cartempty} alt="" className="cart-empty-img" />
          <br/>
          <span className="cart-empty-title">
            {" "}
            Your cart is empty
            <br />
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories.
            <br />
            <Link to="/products">
              <button className="cart-empty_btn">Countinue Shopping</button>
            </Link>
          </span>
        </div>
      )}
      {cart.length > 0 && (
        
        <section className="h-100 gradient-custom">
           <div className="cart__background"></div>
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Cart items: {cart.length}</h5>
                  </div>
                  <div className="card-body">
                    {cart?.map((data) => (
                      <div className="row" key={data.id}>
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div
                            className="cart__img_themes bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"

                          >
                            <img
                              src={data.img}
                              className=" img__cart"
                              alt="Blue Jeans Jacket"
                            />
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p className="title__cart">
                            <strong>{data.title}</strong>
                          </p>

                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                            onClick={() => removeProduct(data.id)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>

                        <div className="cart__count_quantity col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <button
                              className="btn btn-primary px-3 me-2 btn__cart__increas"
                              onClick={() => reduction(data.id)}
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <div className="count__cart form-outline text-start text-md-center">
                              <span className="cart__count__quantity">Quantity</span>
                              <span className="cart_count">{data.count}</span>
                            </div>

                            <button
                              className="btn btn-primary px-3 ms-2 btn__cart__increas"
                              onClick={() => increase(data.id)}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>$ {data.price}</strong>
                          </p>
                        </div>
                        <hr className="my-4" />
                      </div>
                    ))}
                  </div>
                </div>
                <div class="card mb-4">
          <div class="card-body">
            <p><strong>Expected shipping delivery</strong></p>
            <p class="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        <div class="card mb-4 mb-lg-0">
          <div class="card-body">
            <p><strong>We accept</strong></p>
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
              alt="PayPal acceptance mark" />
          </div>
        </div>
              </div>
              
      
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Total Quantity :{count}
                        <span></span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total : $ {total.toFixed(2)}</strong>
                        </div>
                        <span>
                          <strong></strong>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

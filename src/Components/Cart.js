import React, { useContext } from "react";
import { ContextProvider } from "../reducer/context";
import "../styles/Cart.css";
// import {useState} from "react";
function Cart(props) {
  const { add, order, remove, changeState } = useContext(ContextProvider);

  return (
    <>
      <div className="cart">
        <i
          onClick={() => changeState()}
          className="fa-solid fa-xmark close2"
        ></i>
        <div className="content_cart">
          <table class="table table-striped table-hover">
            {order.length ? (
              <thead>
                <tr>
                  <th scope="col">Nr</th>
                  <th scope="col">Img</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Full Price:{}</th>
                  <th>
                    <button className="btn btn-success bg">Buy</button>
                  </th>
                </tr>
              </thead>
            ) : null}
            <tbody>
              {order.length ? (
                order.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <th scope="row">{item.quantity}</th>
                      <td>
                        <img
                          src={item.granted[0].images.background}
                          alt="rasm"
                        />
                      </td>
                      <td>
                        <h3>{item.granted[0].name}</h3>
                      </td>
                      <td>{item.price.finalPrice / 100}$</td>
                      <td>{item.quantity * (item.price.finalPrice / 100)}$</td>
                      <td className="add_remove">
                        <button
                          onClick={() => {
                            add(item);
                          }}
                          className="btn btn-primary"
                        >
                          +
                        </button>
                        <button
                          onClick={() => {
                            remove(item);
                          }}
                          className="btn btn-danger"
                        >
                          -
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div className="bush">
                  <i className="fa-solid fa-box-open"></i>
                  <h2>No Item!</h2>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Cart;

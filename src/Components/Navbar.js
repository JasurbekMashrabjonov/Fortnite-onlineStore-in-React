import React, { useContext } from "react";
import "../styles/Navbar.css";
import "../styles/all.css";
import { useState } from "react";
import NavMobile from "../UI/NavMobile";
import { ContextProvider } from "../reducer/context";

const Navbar = () => {
  const { changeState,order} = useContext(ContextProvider);
  const [isBtn, setIsBtn] = useState(false);
  return (
    <>
      <section className="navbar">
        <div className="title-logo">
          <h1 className="logo_title">
            FortNite
            <i className="fa-solid fa-shop logo_icon"></i>
            <span className="logo_span">shop.uz</span>
          </h1>
        </div>
        <div onClick={() => setIsBtn(!isBtn)} className="bar">
          {isBtn ? (
            <i className="fa-solid fa-xmark close"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
        {isBtn ? <NavMobile /> : null}
        <div className="mobile_corzina">
          <a href="#!" onClick={() => changeState()} className="mobile_corzina_a">
            <span>{order.length}</span>
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#!" className="a a_left">
                <i className="fa-solid fa-house"></i>Home
              </a>
             
            </li>
            <li>
              <a href="https://jasurbekMashrabjonov.netlify.app" className="a">
                <i className="fa-solid fa-arrow-trend-up"></i>About{" "}
              </a>

            </li>
            <li>
              <a href="https://jasurbekMashrabjonov.netlify.app" className="a">
                contact<i className="fa-solid fa-headset"></i>
              </a>
            </li>
            <li>
              <a href="#!" className="a ">
                Sighn up <i className="fa-solid fa-user"></i>
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => changeState()} className="a a_right ">
                <span>{order.length}</span>
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};
export default Navbar;

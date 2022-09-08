import React, { useState } from "react";
import "../styles/NavMobile.css";
function NavMobile(props) {
  const [isBtn, setIsBtn] = useState(false);
  return (
    <>
      <nav className="nav_mobile">
        <ul>
          <li>
            <a href="#!" className="a_mobile">
              Home
            </a>
          </li>
          <li onClick={() => setIsBtn(!isBtn)}>
            <a  href="#!" className="a_mobile">
              About
            </a>
            {/* {isBtn ? (
              <ul>
                <li>
                  <a href="#!">Site</a>
                </li>
                <li>
                  <a href="#!">Developer</a>
                </li>
              </ul>
            ) : null} */}
          </li>
          <li>
            <a href="https://jasurbekMashrabjonov.netlify.app" className="a_mobile">
              contact
            </a>
          </li>
          <li>
            <a href="#!" className=" a_mobile">
              Sighn up
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavMobile;

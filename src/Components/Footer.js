import React, { useEffect, useState } from "react";
import "../styles/Footer.css";
function Footer(props) {
  const date = new Date();
  useEffect(() => {
    setTime(date.getFullYear());
  }, []);
  const [time, setTime] = useState(2022);
  return (
    <>
      <section className="footer">
        <p>
          &copy {time} &nbsp
          <a href="mailto:bahtiyorjonuglu31@gmail.com" target={`_blank`}>
            My email
          </a>
        </p>
        <h4>Jasurbek Bahtiyorjon o'gl'i</h4>
      </section>
    </>
  );
}

export default Footer;

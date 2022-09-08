import React, { useContext } from "react";
import { ContextProvider } from "../reducer/context";
import "../styles/Content.css";
import "../styles/all.css";
function Content(props) {
  const { getData, limitedData } = useContext(ContextProvider);
  function getData1(item) {
    getData(item);
  }
  return (
    <>
      <section className="content">
        {limitedData.map((item, idx) => {
          return (
            <div className="card" key={idx}>
              <div className="img">
                <img src={item.granted[0].images.background} alt="img" />
              </div>

              <div className="title">
                <h5>{item.granted[0].name}</h5>
              </div>
              <div className="post">
                <p>{item.granted[0].description}</p>
                <hr />
                <div className="buy_div">
                  <p className="price">
                    Price of this: {item.price.finalPrice / 100}$
                  </p>
                  <button
                    onClick={() => getData1(item)}
                    className="buy btn btn-success"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {/* <div className="row1">
        <button className="btn btn-danger">
          <i class="fa-solid fa-left-long"></i>
        </button>
        <button className="btn btn-success">
          <i class="fa-solid fa-right-long"></i>
        </button>
      </div> */}
    </>
  );
}

export default Content;

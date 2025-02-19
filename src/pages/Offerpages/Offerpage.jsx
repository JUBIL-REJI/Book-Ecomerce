import React from "react";
import "./offerpage.css";
const offerPrice = [
  {
    title: "First Purchase",
    perce: "50%",
    desc: "Get 50% off your first book purchase! hurry up..",
  },
  {
    title: "Regular",
    perce: "10%",
    desc: "Enjoy 10% off on selected titles after your first purchase!",
  },
  {
    title: "EveryDay",
    perce: "5%",
    desc: "Get 5% off on any book purchase, always!",
  },
];

function Offerpage() {
  return (
    <section id="offerpage">
      <div className="wrapper one">
        <div className="drop-main">
          <div className="d">P</div>
          <div className="r">R</div>
          <div className="o">I</div>
          <div className="p">C</div>
          <div className="s">E</div>
          <div className="g">!!!</div>
          <div className="d">D</div>
          <div className="r">R</div>
          <div className="o">O</div>
          <div className="p">P</div>
          <div className="s">!</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          padding: "20px",
        }}
      >
        <p className="p-edt">
          Dive into a world of stories with! <br />
          amazing discounts just waiting for you!{" "}
          <hr
            style={{
              backgroundColor: "rgba(0,0,0, 0.4)",
              height: "10px",
              borderRadius: "10px 100px / 120px",
              border: "none",
            }}
          />
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {offerPrice.map((item) => {
          return (
            <div className="title-edt">
              <div>
                <h3>{item.title}</h3>
                <h5>{item.desc}</h5>
              </div>
              <div>
                <button>Shop Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Offerpage;

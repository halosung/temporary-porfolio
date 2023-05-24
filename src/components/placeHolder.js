import React from "react";

const PlaceHolder = () => {
  // console.log(window.innerWidth, window.innerHeight);
  return (
    <section className="container contact-container">
      <article className="container contact">
        <div className="container contact-back">
          <div></div>
          <div className="left-slide">GET IN</div>
          <div className="right-slide">TOUCH</div>
          <div></div>
        </div>
        <div className="container contact-front">
          <div></div>
          <div className="mail">
            <div>hao052511@gmail.com</div>
          </div>
          <div className="phone">
            <div>{"(+886) 930 563 033"}</div>
          </div>
          <div>
            <div className="creator">Created by Hao.</div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PlaceHolder;

import React from "react";

import testPersonal from "../assets/image/test_personal.jpg";

const Story = () => {
  // console.log(window.innerWidth, window.innerHeight);
  return (
    <section className="container story-container">
      <article className="my-story">
        <div className="left-panel">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            perspiciatis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            doloremque doloribus odio omnis voluptates voluptatum quam unde
            nostrum ab dolor?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            ducimus a, aut ab sequi laborum quas dolores maiores. Error iste
            voluptatum repellendus illum nobis, beatae harum blanditiis
            dignissimos adipisci aperiam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nisi
            ut ex labore sunt nostrum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex commodi
            quo, fugiat repellendus et vitae suscipit. Repudiandae illo odit,
            repellendus ducimus atque aperiam fugiat ab ea quas architecto vero,
            ipsam doloremque asperiores ipsum ex saepe eius veritatis dolor
            nesciunt quam?
          </p>
        </div>
        <div className="right-panel">
          <div className="personal-img">
            image...
            {/* <img src={testPersonal} alt="testPersonal" /> */}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Story;

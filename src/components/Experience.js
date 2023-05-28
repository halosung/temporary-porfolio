import React, { useRef, useEffect } from "react";
import anime from "animejs";

import { throttle } from "../utils";

const Experience = ({ exp }) => {
  return (
    <section className="container-auto center-article">
      <article className="experience-container">
        <header className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          recusandae magni amet eum animi eius consequuntur magnam debitis
          ducimus dolore.
        </header>
        <main>
          {exp.map((item, index) => {
            return (
              <SingleExperience
                key={index}
                index={index}
                {...item}
              ></SingleExperience>
            );
          })}
        </main>
        <footer className="download">
          <a href="#">個人履歷下載 {"->"}</a>
        </footer>
      </article>
    </section>
  );
};

const SingleExperience = ({ position, company, desc, date, index }) => {
  const anima = useRef(null);
  const experienceRef = useRef(null);

  const scrollHandler = () => {
    throttle(() => {
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const targetTop = experienceRef.current.getBoundingClientRect().top;
      if (targetTop < windowHeight * 0.75) {
        anima.current.play();
        window.removeEventListener("scroll", scrollHandler);
      }
    }, 250);
  };
  useEffect(() => {
    anima.current = anime({
      targets: `#exp-id-${index} .date`,
      translateY: ["1vh", "-23.5vh"],
      easing: "easeOutQuint",
      autoplay: false,
      duration: 1500,
    });
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div id={`exp-id-${index}`} className="item" ref={experienceRef}>
      <div className="left-panel">
        <div className="pos">{`${company} ｜ ${position}`}</div>
        <div className="desc">{desc}</div>
      </div>
      <div className="right-panel">
        <div className="date">
          <br />
          {date}
        </div>
      </div>
    </div>
  );
};

export default Experience;

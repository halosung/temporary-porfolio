import React, { useRef, useEffect } from "react";
import Emoji from "react-emoji-render";
import anime from "animejs";

const Story = () => {
  const animaRef = useRef(null);
  const storyRef = useRef(null);

  const scrollHandler = () => {
    const containerBottom = storyRef.current.getBoundingClientRect().bottom;
    const containerHeight = storyRef.current.getBoundingClientRect().height;
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (containerBottom - windowHeight / 2 < containerHeight) {
      let scrollPercent = Math.min(
        (containerHeight - (containerBottom - 0.5 * windowHeight)) /
          containerHeight,
        1
      );
      let scrollEffect = animaRef.current;
      console.log(scrollPercent);
      scrollEffect.seek(scrollPercent * scrollEffect.duration);
    }
  };
  const opacityKeyframe = [
    {
      value: 0,
    },
    {
      value: 1,
      duration: 1500,
    },
    {
      value: 0,
      duration: 100,
    },
  ];
  useEffect(() => {
    animaRef.current = anime
      .timeline({
        easing: "easeOutExpo",
        autoplay: false,
      })
      .add({
        targets: ".intro div:nth-child(1)",
        opacity: opacityKeyframe,
      })
      .add({
        targets: ".intro div:nth-child(2)",
        opacity: opacityKeyframe,
      })
      .add({
        targets: ".intro div:nth-child(3)",
        opacity: opacityKeyframe.slice(0, 2),
      });

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <section className="container-auto center-article">
      <article className="story-container" ref={storyRef}>
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
          <div className="intro">
            <div>
              <p>出身於</p>
              <p>新竹縣</p>
            </div>
            <div>
              <p>畢業於</p>
              <p>
                國立成功大學 統計學系
                <Emoji text="🏫" />
              </p>
            </div>
            <div>
              <p>居住於</p>
              <p>新北市 新店區</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Story;

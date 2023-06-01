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
            你好，<br></br>我是社會新鮮人 宋豪。
            {/* 主修統計學的緣故，使我擁有厚實的數理基礎，以及對於數據的強烈敏感度。 */}
            熱衷於斜槓思維的我，對於「資料科學」、「計算機科學」與「財務金融」，
            皆抱持著濃厚的興趣與精進的熱忱🔥
            {/* <Emoji text="🔥" /> */}
          </p>
          <p>
            在學期間，我曾參與兩項大型的校務資料分析專案。<br></br>
            身為數據分析人員，我傾向以直觀的分析流程，解決上級提出的抽象問題，
            並搭配創意的呈現手法，協助上級獲取額外的洞見。
          </p>
          <p>
            “No matter when you start, it is important that you do not stop
            after starting.” 一直是我的人生信條；一旦參與其中，我必定全力以赴✊
            {/* <Emoji text="✊" /> */}
          </p>
          <p>
            閒暇時刻，
            <br></br>
            我喜歡蒔花弄草🌸
            {/* <Emoji text="🌸" /> */}
            ，培養植物由幼苗成長到成株，隨著季節更迭而開花結果；
            <br></br>
            又抑或是手沖一杯瓜地馬拉 安堤瓜☕
            {/* <Emoji text="☕" /> */}
            ，享受午後的餘裕!
          </p>
        </div>
        <div className="right-panel">
          <div className="intro">
            <div>
              <p>出身於</p>
              <p>
                中華民國 新竹市
                <Emoji text="🥮" />
              </p>
            </div>
            <div>
              <p>畢業於</p>
              <p>
                國立成功大學 統計學系
                <Emoji text="📈" />
              </p>
            </div>
            <div>
              <p>居住於</p>
              <p>
                新北市 新店區
                <Emoji text="🏡" />
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Story;

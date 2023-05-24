import React from "react";

const Project = ({ title, image, desc, keywords, position }) => {
  // console.log(window.innerWidth, window.innerHeight);
  return (
    <section className="container project-container">
      <article className="project">
        <div className="left-panel">
          <div className="title">
            <p>{title}</p>
          </div>
          <div className="image">
            {/* <img src={image.link} alt={image.desc} /> */}
          </div>
        </div>
        <div className="right-panel">
          <div className="desc">
            <p>{desc}</p>
          </div>
          <div className="keyword">
            <p>
              {keywords.map((key, index) => {
                return <span key={index}>{"#" + key}</span>;
              })}
            </p>
          </div>
          <div className="position">
            <p>
              {position.date}
              <br />
              {position.company}
            </p>
          </div>
          <div className="link">
            <a href="#">View source code on Github.</a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Project;

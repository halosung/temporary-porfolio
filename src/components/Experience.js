import React from "react";

const Experience = ({ exp }) => {
  return (
    <section className="container exp-container">
      {/* "center with grid" property... */}
      <article className="experience">
        <header className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          recusandae magni amet eum animi eius consequuntur magnam debitis
          ducimus dolore.
        </header>
        <main>
          {exp.map((item, index) => {
            return (
              <div className="item">
                <div className="left-panel">
                  <div className="pos">{item.pos.toUpperCase()}</div>
                  <div className="desc">{item.desc}</div>
                </div>
                <div className="right-panel">
                  <div className="date">{item.date}</div>
                </div>
              </div>
            );
          })}
        </main>
        <div className="download">
          <a href="#">Download my resume</a>
        </div>
      </article>
    </section>
  );
};

export default Experience;

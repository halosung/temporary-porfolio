import React from "react";

const SectionTitle = ({ number, title }) => {
  // console.log(window.innerWidth, window.innerHeight);
  return (
    <section className="sectionContainer">
      <div className="section-flex">
        <div>N° {number}</div>
        <div>{title.toUpperCase()}</div>
      </div>
    </section>
  );
};

export default SectionTitle;

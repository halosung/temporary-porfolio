import React from "react";

import projects from "../data/projects";
import experience from "../data/experience";

import Greeting from "../components/Greeting";
import SectionTitle from "../components/SectionTitle";
import Project from "../components/Project";
import Story from "../components/Story";
import Experience from "../components/Experience";

import PlaceHolder from "../components/placeHolder";

export default function Home() {
  return (
    <>
      <Greeting></Greeting>
      {/* <Greeting></Greeting> */}
      {/* <SectionTitle number={1} title={"personal projects"}></SectionTitle> */}

      {/* todo: add wrapper.. */}
      {/* {projects.map((project, index) => {
        return <Project key={index} {...project}></Project>;
      })} */}

      {/* <div id="test" className="container">
        <article>
          <div className="left">
            <div>test for sticky effect</div>
          </div>
          <div className="middle">test for sticky effect</div>
          <div className="right">test for sticky effect</div>
        </article>
      </div> */}
      {/* <SectionTitle number={2} title={"my story"}></SectionTitle> */}
      {/* <Story></Story> */}
      {/* <SectionTitle number={3} title={"experience"}></SectionTitle>
      <Experience exp={experience}></Experience>
      <PlaceHolder></PlaceHolder> */}
    </>
  );
}

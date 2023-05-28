import React from "react";

import projects from "../data/projects";
import experience from "../data/experience";

import Greeting from "../components/Greeting";
import SectionTitle from "../components/SectionTitle";
import Projects from "../components/Project";
import Story from "../components/Story";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
// import PlaceHolder from "../components/placeHolder";

export default function Home() {
  return (
    <>
      <Greeting></Greeting>
      <SectionTitle number={1} title={"個人專案"}></SectionTitle>
      <Projects projects={projects}></Projects>
      <SectionTitle number={2} title={"我的故事"}></SectionTitle>
      <Story></Story>
      <SectionTitle number={3} title={"工作經歷"}></SectionTitle>
      <Experience exp={experience}></Experience>
      <Contact></Contact>
    </>
  );
}

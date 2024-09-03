import AboutMe from "@/containers/about";
import React, { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <main>
      <AboutMe />
    </main>
  );
};

export default About;
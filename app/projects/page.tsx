import AboutMe from "@/containers/projects";
import React, { FC } from "react";
import ProjectsHero from "@/containers/projects";

interface ProjectProps {}

const Projects: FC<ProjectProps> = ({}) => {
  return (
    <main>
      <ProjectsHero />
    </main>
  );
};

export default Projects;

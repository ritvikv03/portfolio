import React, { FC } from "react";

interface ProjectsHeroProps {}

const ProjectsHero: FC<ProjectsHeroProps> = ({}) => {
  return (
    <section className="w-full flex flex-col items-center  ">
      <div className="flex flex-col  justify-between py-10 md:py-28 items-center gap-2 md:gap-5 w-full max-w-screen-xl mx-5 md:mx-20 text-center px-5 md:px-0">
        <h1 className="text-black text-2xl md:text-6xl font-bold">Projects</h1>
        <p className="text-textColor text-sm md:text-lg w-full md:w-[600px]">
          We display Projects based on the latest Projects we have, if you want
          to see our old Projects please enter the name of the item
        </p>
      </div>
    </section>
  );
};

export default ProjectsHero;

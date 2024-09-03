'use client'
import React, { FC } from "react";
import { motion } from 'framer-motion';
import { useTheme } from "@/app/themecontext";
import Link from "next/link";
import Image from "next/image";

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = ({}) => {
  const { theme } = useTheme();
  return (
    <section className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h2 aria-label={"about-me"}
            className={`mb-3 text-1xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            About my Journey in IT.
          </h2>
          <div className="flex flex-col justify-between">
            <p aria-label={'self-description'} className={`text-justify text-base sm:text-lg mb-6 lg:text-xl ${theme === 'dark' ? 'text-[#ADB7BE]' : 'text-black'}`}>
              I am Ritvik Vasikarla, I am an undergraduate Economics and Statistics major with a minor in Mathematics at Texas A&M University, aspiring to be a data scientist who drives innovation by developing cutting-edge algorithms and models. 
              My passion lies in exploring new methodologies in machine learning and artificial intelligence to unlock unprecedented insights from data.
              JavaScript.
            </p>
            <p className={`text-justify text-base sm:text-lg mb-6 lg:text-xl ${theme === 'dark' ? 'text-[#ADB7BE]' : 'text-black'}`}>
            Throughout my academic journey, I have engaged in various projects that reflect my commitment to pushing the boundaries of what's possible. 
            I've written a replication paper on Nathan Nunn's study, "The Long-Term Effects of Africa's Slave Trades," where we utilized double lasso regression and instrumental variables to enhance the analysis. 
            I have also developed a deep learning model to predict ratings from TripAdvisor reviews using NLP tools and created a stock price forecasting model using data from Yahoo Finance. 
            Additionally, I built a bot to compare professors using a RateMyProfessor API, assisting students in making informed decisions.




              JSON Web Tokens.
            </p>
            <p className={`text-justify text-base sm:text-lg mb-6 lg:text-xl ${theme === 'dark' ? 'text-[#ADB7BE]' : 'text-black'}`}>
            Currently, I'm an undergraduate research assistant, contributing to a study on the political affiliation's impact on electric vehicle implementation. 
            My technical proficiency spans across SQL, Stata, Excel, R, and Python, enabling me to tackle complex data challenges with confidence.


            </p>
            <p className={`text-justify text-base sm:text-lg mb-6 lg:text-xl ${theme === 'dark' ? 'text-[#ADB7BE]' : 'text-black'}`}>
            My career goal is to lead in the development of breakthrough technologies and transformative business strategies, particularly in fields like healthcare, finance, and sustainability. 
            I am committed to continuous learning and staying at the forefront of technological advancements, with the ultimate aspiration to foster a culture of innovation within a team.


            </p>
            <p className={`text-justify text-base sm:text-lg mb-6 lg:text-xl ${theme === 'dark' ? 'text-[#ADB7BE]' : 'text-black'}`}>
              Driven by a passion for continuous learning and mentoring, I bring a positive attitude and a commitment to
              overcoming challenges. My experience and enthusiasm will make me a valuable asset to any company.
            </p>
          </div>
        </div>
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div
            className={`rounded-full ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'} w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative`}>
            <Link href={"https://linkedin.com/in/ritvikvasikarla"} target={'_blank'}>
              <Image
                src="/images/rvlogo.jpg"
                alt="hero image"
                className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={400}
                height={400}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

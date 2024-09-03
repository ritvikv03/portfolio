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
              I am Naresh Vasikarla, and my journey in IT began with Oracle, where I specialized in the Oracle HCM suite
              and collaborated with diverse clients. My career has taken me from Switzerland, working with the ILO, to
              consulting in the USA, and now, to a role at Liberty Mutual. Over the past seven years, I have transitioned
              into a full-stack developer role with a focus on AWS technologies, honing my skills in React, TypeScript,
              and
              JavaScript.
            </p>
            <p className={`text-justify text-base sm:text-lg mb-6 lg:text-xl ${theme === 'dark' ? 'text-[#ADB7BE]' : 'text-black'}`}>
              With a strong foundation in JavaScript and React.js, I have successfully built dynamic web applications
              and
              developed user-facing features. My experience includes creating reusable components and front-end
              libraries,
              translating designs into high-quality code, and optimizing performance across various devices and
              browsers. My
              expertise extends to Redux, React hooks, integrating RESTful APIs, and modern authorization mechanisms
              like
              JSON Web Tokens.
            </p>
            <p className={`text-justify text-base sm:text-lg mb-6 lg:text-xl ${theme === 'dark' ? 'text-[#ADB7BE]' : 'text-black'}`}>
              My AWS experience includes working with DynamoDB, Aurora RDS, SQS, SNS, Lambda, and API Gateway. I have
              designed and implemented scalable serverless applications, managed data storage solutions, and integrated
              various AWS services to build robust and efficient systems.
            </p>
            <p className={`text-justify text-base sm:text-lg mb-6 lg:text-xl ${theme === 'dark' ? 'text-[#ADB7BE]' : 'text-black'}`}>
              I am well-versed in front-end development and adept at understanding business requirements to craft
              precise
              technical specifications. My proficiency & adaptability ensures smooth collaboration within development
              teams.
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
            <Link href={"https://linkedin.com/in/nareshvasikarla"} target={'_blank'}>
              <Image
                src="/images/NV1.jpg"
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

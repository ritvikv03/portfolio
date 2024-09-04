'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/app/themecontext';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaDatabase,
  FaJava,
  FaGithub,
  FaBitbucket,
  FaJenkins,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaToolbox,
  FaCloud,
  FaCode,
  FaPython,
  FaJs,
  FaRProject,
  FaCuttlefish
} from 'react-icons/fa';
import { SiTypescript, SiGraphql, SiApollographql, SiSpring, SiThymeleaf, SiRedux, SiJquery, SiPostgresql, SiSequelize, SiExpress, SiAuth0, SiJest, SiIntellijidea, SiOracle, SiAzuredevops, SiMicrosoftazure } from 'react-icons/si';

const Main = () => {
  const { theme } = useTheme();

  const categories = {
    'Front-end': [
      { icon: <FaJs size={24} className="text-yellow-500" />, name: 'Javascript' },
      { icon: <FaCss3Alt size={24} className="text-blue-400" />, name: 'CSS3' },
      { icon: <FaHtml5 size={24} className="text-orange-400" />, name: 'HTML5' },
    ],
    'Back-end': [
      { icon: <FaCuttlefish size={24} className="text-blue-400" />, name: 'C++' },
      { icon: <FaJava size={24} className="text-red-400" />, name: 'Java' },
      { icon: <FaPython size={24} className="text-yellow-400"/>, name: 'Python' },
      { icon: <FaRProject size={24} className="text-red-400" />, name: 'R' },
      { icon: <FaNodeJs size={24} className="text-green-400" />, name: 'Node.js' },
      { icon: <FaReact size={24} className="text-blue-400" />, name: 'React.js' },
    ],  
    'Databases': [
      { icon: <FaDatabase size={24} className="text-orange-400" />, name: 'SQL' },
    ],  
    'Testing': [
      { icon: <SiJest size={24} className="text-red-400" />, name: 'Jest' },
    ],
    
  };

  return (
    <section className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className={`mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <span className="bg-clip-text bg-gradient-to-r from-black-400 to-gray-50">
              Hello, I&apos;m Ritvik Vasikarla
            </span>
          </h1>
          <br></br>
          <h2 className={`mb-3 text-1xl sm:text-2xl lg:text-xl lg:leading-normal font-extrabold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Aspiring Data Scientist | Undergraduate Student
          </h2>
          <p className={`text-justify text-base sm:text-lg mb-6 lg:text-xl ${theme === 'dark' ? 'text-[#ADB7BE]' : 'text-black'}`}>
          As an Economics and Statistics major with a Mathematics minor at Texas A&M, I excel in quantitative analysis and data interpretation. 
          My leadership in the Texas A&M Economics Society showcases my adaptability and ability to drive engagement in complex concepts. 
          With expertise in econometrics and predictive modeling using R and Python, I'm eager to tackle real-world data challenges and contribute to data-driven decision-making.
</p>
        </div>
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div
            className={`rounded-full ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'} w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] relative`}>
            <Link href={"https://linkedin.com/in/ritvikvasikarla"} target={'_blank'}>
              <Image
                src="/images/rvlogo.jpg"
                alt="hero image"
                className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={250}
                height={250}
              />
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="mt-8">
        {Object.entries(categories).map(([category, icons], index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-bold mb-2">{category}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {icons.map((iconObj, iconIndex) => (
                <div key={iconIndex}
                     className="flex items-center justify-center bg-gray-950 dark:bg-gray-200 p-2 rounded-full relative group icon-category">
                  {iconObj.icon}
                  <span className={`${theme === 'dark' ? 'text-black' : 'text-white'} text-xs rounded py-1 px-2`}>
                    {iconObj.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;

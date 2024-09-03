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
  FaCode
} from 'react-icons/fa';
import { SiTypescript, SiGraphql, SiApollographql, SiSpring, SiThymeleaf, SiRedux, SiJquery, SiPostgresql, SiSequelize, SiExpress, SiAuth0, SiJest, SiIntellijidea, SiOracle, SiAzuredevops, SiMicrosoftazure } from 'react-icons/si';

const Main = () => {
  const { theme } = useTheme();

  const categories = {
    'Front-end': [
      { icon: <FaReact size={24} className="text-blue-400" />, name: 'React' },
      { icon: <SiTypescript size={24} className="text-blue-400" />, name: 'TypeScript' },
      { icon: <SiRedux size={24} className="text-purple-400" />, name: 'Redux' },
      { icon: <SiJquery size={24} className="text-blue-400" />, name: 'jQuery' },
      { icon: <FaCss3Alt size={24} className="text-blue-400" />, name: 'CSS3' },
      { icon: <FaHtml5 size={24} className="text-orange-400" />, name: 'HTML5' },
    ],
    'Back-end': [
      { icon: <FaNodeJs size={24} className="text-green-400" />, name: 'Node.js' },
      { icon: <FaJava size={24} className="text-red-400" />, name: 'Java' },
      { icon: <SiSpring size={24} className="text-green-400" />, name: 'Spring' },
      { icon: <SiExpress size={24} className="text-black" />, name: 'Express' },
      { icon: <SiGraphql size={24} className="text-pink-400" />, name: 'GraphQL' },
      { icon: <FaCode size={24} className="text-blue-400" />, name: 'REST API' },
    ],
    'Databases': [
      { icon: <FaDatabase size={24} className="text-gray-400" />, name: 'Database' },
      { icon: <SiPostgresql size={24} className="text-blue-400" />, name: 'PostgreSQL' },
      { icon: <SiOracle size={24} className="text-red-400" />, name: 'Oracle' },
    ],
    'AWS': [
      { icon: <FaCloud size={24} className="text-blue-400" />, name: 'EC2' },
      { icon: <FaCloud size={24} className="text-blue-400" />, name: 'S3' },
      { icon: <FaCloud size={24} className="text-blue-400" />, name: 'RDS' },
      { icon: <FaCloud size={24} className="text-blue-400" />, name: 'Lambda' },
      { icon: <FaCloud size={24} className="text-blue-400" />, name: 'API Gateway' },
    ],
    'Azure': [
      { icon: <SiMicrosoftazure size={24} className="text-blue-400" />, name: 'Azure Entra' },
    ],
    'Tools': [
      { icon: <FaDocker size={24} className="text-blue-400" />, name: 'Docker' },
      { icon: <FaGithub size={24} className="text-black" />, name: 'GitHub' },
      { icon: <FaBitbucket size={24} className="text-blue-400" />, name: 'Bitbucket' },
      { icon: <SiIntellijidea size={24} className="text-blue-400" />, name: 'IntelliJ IDEA' },
      { icon: <FaToolbox size={24} className="text-gray-400" />, name: 'GitHub Actions' },
    ],
    'Testing': [
      { icon: <SiJest size={24} className="text-red-400" />, name: 'Jest' },
    ],
    'ORM': [
      { icon: <SiSequelize size={24} className="text-blue-400" />, name: 'Sequelize' },
    ],
  };

  return (
    <section className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className={`mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <span className="bg-clip-text bg-gradient-to-r from-black-400 to-gray-50">
              Hello, I&apos;m Naresh Vasikarla
            </span>
          </h1>
          <br></br>
          <h2 className={`mb-3 text-1xl sm:text-2xl lg:text-xl lg:leading-normal font-extrabold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              AWS Cloud Architect | Full Stack Developer | Mentor
          </h2>
          <p className={`text-justify text-base sm:text-lg mb-6 lg:text-xl ${theme === 'dark' ? 'text-[#ADB7BE]' : 'text-black'}`}>
            Drive cloud infrastructure innovation with extensive expertise in AWS and full stack development,
            championing cloud-based solutions with agile methodologies and CI/CD principles, while mentoring teams to
            foster excellence and continuous learning, all with a readiness to tackle any challenge with positivity and
            advanced technical acumen.
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
            <Link href={"https://linkedin.com/in/nareshvasikarla"} target={'_blank'}>
              <Image
                src="/images/NV1.jpg"
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

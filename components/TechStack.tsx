'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/app/themecontext';
import {
  FaReact, FaNodeJs, FaAws, FaDocker, FaDatabase, FaJava, FaGithub, FaBitbucket, FaJenkins, FaCss3Alt, FaHtml5, FaGitAlt, FaToolbox, FaCloud, FaCode, FaRProject, FaJs, FaCuttlefish, FaPython
} from 'react-icons/fa';
import { SiTypescript, SiGraphql, SiApollographql, SiSpring, SiThymeleaf, SiRedux, SiJquery, SiPostgresql, SiSequelize, SiExpress, SiAuth0, SiJest, SiIntellijidea, SiOracle, SiAzuredevops, SiMicrosoftazure } from 'react-icons/si';

const TechStack = () => {
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
    <section id="tech-stack" className={`lg:py-16 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {Object.entries(categories).map(([category, icons], index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-bold mb-2">{category}</h3>
            <div className="flex flex-col gap-2">
              {icons.map((iconObj, iconIndex) => (
                <motion.div
                  key={iconIndex}
                  className="flex items-center justify-start bg-gray-200 dark:bg-gray-800 p-2 rounded-full relative group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ opacity: [0.5, 1, 0.5], transition: { duration: 4, repeat: Infinity, delay: iconIndex * 0.4 } }}
                >
                  {iconObj.icon}
                  <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-xs rounded py-1 px-2 ml-2`}>
                    {iconObj.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

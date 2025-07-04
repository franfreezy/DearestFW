import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Grid Card (for sm and up)
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)} className="hidden sm:block">
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// List Item (for xs only)
const ListProjectItem = ({ index, name, description, tags, source_code_link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="block sm:hidden bg-tertiary p-4 rounded-xl w-full"
  >
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-white text-lg font-semibold">{name}</h3>
      <button
        onClick={() => window.open(source_code_link, "_blank")}
        className="text-sm bg-black text-white px-2 py-1 rounded hover:bg-gray-800"
      >
        Code
      </button>
    </div>
    <p className="text-secondary text-sm mb-2">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag.name} className={`text-[13px] ${tag.color}`}>
          #{tag.name}
        </span>
      ))}
    </div>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience.
        </motion.p>
      </div>

      {/* Grid view for medium and up */}
      <div className="mt-16 flex flex-wrap gap-7 sm:flex-row">
        {projects.map((project, index) => (
          <ProjectCard key={`project-grid-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* List view for small screens */}
      <div className="mt-8 flex flex-col gap-4 sm:hidden">
        {projects.map((project, index) => (
          <ListProjectItem key={`project-list-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

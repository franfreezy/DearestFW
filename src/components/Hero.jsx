import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* TEXT AND INDICATOR SECTION */}
      <div
        className={`absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}
      >
        {/* Vertical Indicator */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-32 sm:h-80 violet-gradient" />
        </div>

        {/* Text Block */}
        <div>
          <h1 className="text-[36px] sm:text-[60px] font-black text-white leading-tight">
            Hi, I'm <span className="text-[#915EFF]">W. Frandel</span>
          </h1>
          <p className="text-[16px] sm:text-[24px] mt-2 text-white-100">
            I am passionate about:
            <br className="block sm:hidden" />
            <span className="block sm:inline">
              <Typewriter
                options={{
                  strings: [
                    "AI & ML",
                    "Data Science",
                    "Hardware Design",
                    "Climate advocacy",
                    "Space Science",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: "natural",
                  pauseFor: 1000,
                }}
              />
            </span>
          </p>
        </div>
      </div>

      {/* 3D Canvas - Hidden on small screens */}
      <div className="hidden sm:block">
        <ComputersCanvas />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[60px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

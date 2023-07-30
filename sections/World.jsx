'use client';

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText 
        title='| People on the World'
        textStyles='text-center'
      />
      <TitleText 
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles='text-center'
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img 
          src="/map.png" 
          alt="map"
          className="w-full h-full object-contain"
        />

        <div className="absolute 2xl:bottom-[20%] md:bottom-[30%] sm:bottom-[200px] bottom-[230px] 2xl:right-[12%] md:right-8 sm:right-10 right-[10px] md:w-[70px] w-[40px] md:h-[70px] h-[40px] p-[6px] rounded-full bg-[#5d6680]">
          <img 
            src="people-01.png" alt="people"
            className="w-full h-full"  
          />
        </div>
        <div className="absolute 2xl:top-[10%] md:top-[20%] sm:top-[30%] top-[200px] 2xl:left-[14%] md:left-20 sm:left-[10%] left-[20px] md:w-[70px] w-[40px] md:h-[70px] h-[40px] p-[6px] rounded-full bg-[#5d6680]">
          <img 
            src="people-02.png" alt="people"
            className="w-full h-full"  
          />
        </div>
        <div className="absolute 2xl:top-[65%] md:top-1/2 sm:top-[55%] top-[260px] 2xl:left-[45%] sm:left-[44%] left-[40%] md:w-[70px] w-[50px] md:h-[70px] h-[50px] p-[6px] rounded-full bg-[#5d6680]">
          <img 
            src="people-03.png" alt="people"
            className="w-full h-full"  
          />
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;

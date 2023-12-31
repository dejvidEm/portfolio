import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  description2,
  odkaz,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className={`group mb-3 sm:mb-8 last:mb-0 ${isClicked ? "clicked" : ""}`}
        onClick={handleClick}
      >
        <section
          className={`bg-gray-100 max-w-[42rem] prechod border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20`}
          style={{
            height: isClicked ? "auto" : "", // Set toggle for card size on click
          }}
        >
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: isClicked ? "auto" : 0, opacity: isClicked ? 1 : 0 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 mb-6 flex flex-col justify-between leading-relaxed text-blue-950 dark:text-white/70 prechod"
            >
              {description2}
              <a href={odkaz} target="_blank" className="mt-4 text-gray-950 font-medium underline">Click to see demo</a>
            </motion.p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className={`absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-xl shadow-2xl
              transition 
              ${isClicked ? "scale-[1.07] -translate-x-3 translate-y-3 rotate-1" : ""}
  
              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2
  
              group-even:right-[initial] group-even:-left-40`}
          />
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
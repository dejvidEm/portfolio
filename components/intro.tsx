"use client";
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion";
import Typed from "typed.js";
import Link from 'next/link';
import { BsArrowRightCircle} from "react-icons/bs";
import { BsBoxArrowDown} from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const el = useRef(null);
  
  useEffect(() => {
    if (el.current) {
      const options = {
        strings: ["Full-Stack developer", "Designer", "Caffeine addict"],
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 650,
        loop: true,
        startDelay: 600 
      };

      const typed = new Typed(el.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id='home'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        type: "tween",
                        duration: 0.2
                     }}>
                    <Image src="/profile-pic.png" alt='profile-pic'width="150" height="150" quality="95" priority={true} className='h-24 w-24 rounded-full border-[0.25rem] border-white object-cover shadow-xl'/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7
                     }}>
                    <Image src="/tick.png" width="100" height="100" alt='tickmark' quality="95" priority={true} className='absolute w-12 h-12 -bottom-2 -right-[8px]'/>
                </motion.div>
            </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-6 text-lg font-medium !leading-[1.5] sm:text-2xl text-gray-950'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}>
            <span className='font-bold'>Hello</span>, My name is <span className='font-bold'>David</span> and I am a tech geek based in Slovakia. I have a <span className='font-bold'>2 years</span> of experience in tech industry. My current point of interest is <span className='underline'><span className='font-bold'>React</span> {"(Next.js)"}</span><br/><br/><span className='font-bold text-gray-600'>I'm <span ref={el}></span></span>
        </motion.h1>
        <motion.div className='flex flex-col sm:flex-col items-center justify-center gap-5 px-4 text-md sm:text-lg font-medium'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.1,
        }}>
            <div className='flex flex-row gap-2 sm:gap-4'>
                <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition text-sm sm:text-base' onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now())
                }}>Contact me here <BsArrowRightCircle size={30} className='opacity-75 group-hover:origin-center group-hover:rotate-90 transition-all'/></Link>
                <a href="/CV.pdf" download={true} className='group bg-white text-gray-900 border border-black/15 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transitio text-sm sm:text-base transition'>Download CV <BsBoxArrowDown size={27} className='opacity-70 group-hover:translate-y-1 transition-all'/></a>
            </div>
            <div className='flex flex-row gap-4'>
                <a href="" className='bg-white border border-black/15 p-3 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition hover:text-gray-950'><AiOutlineLinkedin size={27}/></a>
                <a href="" className='bg-white border border-black/15 p-3 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition hover:text-gray-950'><AiOutlineGithub size={27}/></a>
                <a href="" className='bg-white border border-black/15 p-3 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition hover:text-gray-950'><AiOutlineInstagram size={27}/></a>
                <a href="" className='bg-white border border-black/15 p-3 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition hover:text-gray-950'><AiOutlineFacebook size={27}/></a>
            </div>
        </motion.div>
    </section>
  )
}

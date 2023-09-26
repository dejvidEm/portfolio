"use client";
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 relative'
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0}}
    transition={{
        delay: 0.175,
    }} id='about'>
      <h1 className='absolute w-full sm:text-8xl text-6xl -z-10  left-1/2 opacity-60 sm:top-[-50px] top-[-20px] font-extrabold -translate-x-1/2 farebny-2'>About Me</h1>
        <p className='mb-3'>
        Hi there,I'm <span className='font-bold'>Full-Stack</span> web developer based in <span className='farebny'>Bratislava, Slovakia</span>.

        By day, I craft elegant, user-friendly front-end interfaces, and by night I dive deep into the server-side code, ensuring your data is secure.

        My coding journey began when I mistook HTML for a foreign language in 2019, and I've been enchanted by the world of web development ever since. Over the years, I've mastered languages like JavaScript, Python, C and many more, you can check in the section <span className='underline font-bold'><a href="#about">About me</a></span>, but I'm always eager to learn more because, let's face it, I have a soft spot for clean web designs and beautiful user interfaces.
        </p>
        <p>
        When I'm not deciphering lines of code, you can find me chasing down the latest tech trends, wasting time and getting upset over teammates in games or lifting heavy things in the gym.

        So, if you're looking for a developer who can turn your web dreams into reality, drop me a message. Let's create some digital masterpiece together, one unresponsive div at a time!
        </p>
    </motion.section>
  )
}

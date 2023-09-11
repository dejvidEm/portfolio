"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { IoRocketOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section ref={ref} initial={{opacity: 0,}} whileInView={{opacity: 1}} transition={{duration: 1}} viewport={{
      once: true,
    }} id='contact' className='text-center mb-20 sm:mb-28 w-[min(100% ,38rem)]'>
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-3'>Please contact me directly at <a className='underline' href="mailto:mikulasdejvid@gmail.com">mikulasdejvid@gmail.com</a> or through this form</p>
      <form action="" className='mt-10 flex flex-col'>
        <input type="email" placeholder='example@gmail.com' className='px-4 h-14 rounded-lg borderBlack'/>
        <textarea placeholder='Your message' className='h-52 my-3 rounded-lg borderBlack p-4'></textarea>
        <button type='submit' className='group items-center gap-2 justify-center flex h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105'>Submit <IoRocketOutline size={25} className='transition-all opacity-75 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-[1.15]'/></button>
      </form>
    </motion.section>
  )
}

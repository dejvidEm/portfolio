"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from './submit-btn';
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section ref={ref} initial={{opacity: 0,}} whileInView={{opacity: 1}} transition={{duration: 1}} viewport={{
      once: true,
    }} id='contact' className='text-center mb-20 sm:mb-28 w-[min(100% ,38rem)]'>
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-3 dark:text-white/80'>Please contact me directly at <a className='underline' href="mailto:mikulasdejvid@gmail.com">mikulasdejvid@gmail.com</a> or through this form</p>
      <form action={async (FormData) => {
        const { data, error } = await sendEmail(FormData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email sent successfully!");
      }} className='mt-10 flex flex-col dark:text-black dark:text'>
        <input name='email' type="email" required maxLength={500} placeholder='example@gmail.com' className='px-4 h-14 rounded-lg borderBlack dark:bg-white/80 focus:dark:bg-white/100 transition-all dark:outline-none'/>
        <textarea name='message' placeholder='Your message' className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white/80 focus:dark:bg-white/100 transition-all dark:outline-none' required maxLength={5000}></textarea>
        <SubmitBtn></SubmitBtn>
      </form>
    </motion.section>
  )
}

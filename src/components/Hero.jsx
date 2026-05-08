import React from 'react'
import { FaEnvelope, FaFileAlt, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'


const Hero = () => {
  return (
    <div 
      id='home' 
      className='min-w-full min-h-screen flex flex-col-reverse md:flex-row justify-around items-center mt-5 p-6 md:p-8 lg:p-10'
    >

      {/* Intro */}
      <div className='flex flex-1 flex-col gap-2 items-center justify-center text-center'>
        <p className='font-semibold text-sm lg:text-xl'>Hello! I'm</p>
        <h1 className='font-bold text-4xl md:text-6xl lg:text-8xl p-2 lg:p-4 text-primary text-shadow-sm text-shadow-primary/40'>Jyothi Khati</h1>
        <p className='font-medium text-xl md:text-2xl lg:text-4xl pb-2 lg:pb-4'>Frontend Developer</p>
        <p className='font-normal text-sm lg:text-xl pb-4'>I build modern, responsive and user-friendly web applications using React and JavaScript.</p>
        <div className='w-40 h-1 bg-black dark:bg-white rounded-full'/>
        <div className='flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6 pt-4 lg:pt-8'>
          <a 
            href="https://drive.google.com/file/d/1i-NQoEGXB3qdmxqPVii9sK4CcJ099dfi/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className='px-4 py-2 md:px-6 md:py-3 lg:px-8 lg-py-4 bg-primary text-text rounded-2xl font-semibold text-sm md:text-md lg:text-lg flex items-center justify-center gap-2 hover:scale-105 transition ease-in-out duration-200'
          >
            <FaFileAlt />
            View Resume
          </a>
          <a 
            href="#contact"
            className='px-4 py-2 md:px-6 md:py-3 lg:px-8 lg-py-4 border-2 border-primary text-text rounded-2xl font-semibold text-sm md:text-md lg:text-lg flex items-center justify-center gap-2 hover:scale-105 transition ease-in-out duration-200'
          >
            <FaEnvelope />
            Get In Touch
          </a>
        </div>
        <div className='flex gap-6 md:gap-10 text-xl pt-4 md:pt-8 lg:pt-10 text-primary/90'>
          <a href='https://github.com/jyothi725'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/jyothi-khati-486827260/'><FaLinkedin /></a>
          <a href='mailto:jyothikhati725@gmail.com'><FaEnvelope /></a>
        </div>
      </div>
      {/* Image */}
      <div className='flex justify-center items-center p-4'>
        <img src="/image.png" alt="Image" />
      </div>
    </div>
  )
}

export default Hero

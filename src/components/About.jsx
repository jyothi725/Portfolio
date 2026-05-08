import React from 'react'

const About = () => {
  return (
    <div 
        id='about' 
        className='w-full flex flex-col items-center justify-center p-6 md:p-8 lg:p-10'
    >
        {/* Header */}
        <div 
            className='flex flex-col items-center justify-center gap-3 lg:gap-5 pt-5 lg:pt-10'
        >
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-primary font-bold'>About Me</h1>
            <div className='w-20 h-0.5 md:h-1 lg:h-1.5 rounded-full bg-text'/>
        </div>
        {/* Content */}
        <div className='px-0 md:px-4 pt-4 md:pt-8 max-w-5xl text-lg flex flex-col justify-center items-center gap-4 lg:gap-10'>
            <p className='text-sm md:text-2xl lg:text-center'>
                I am a Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React, 
                focused on building clean, responsive, and user-friendly web applications. I enjoy turning 
                ideas into real-world projects, such as e-commerce platforms and API-driven applications, 
                while continuously improving my skills in modern frontend development. 
            </p>
            <p className='text-sm md:text-2xl lg:text-center'>
                With a background in teaching mathematics, I have developed strong problem-solving abilities and a user-centric 
                mindset, which helps me create intuitive and accessible interfaces. 
            </p>
            <p className='text-sm md:text-2xl lg:text-center'>
                I am currently seeking opportunities where I can contribute, learn, and grow as a developer.
            </p>
        </div>
    </div>
  )
}

export default About

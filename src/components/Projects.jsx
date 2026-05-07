import React from 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Website',
            description: 'Built a responsive e-commerce application using React with product listing, search, and cart functionality.',
            tags: ['React', 'JavaScript', 'CSS'],
            link: 'https://style-fashion.netlify.app',
            github: 'https://github.com/jyothi725/Ecommerce',
        },
        {
            title: 'To-Do List',
            description: 'Developed a task management app with add, delete, and completion tracking features using local storage.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://todolistfed.netlify.app',
            github: 'https://github.com/jyothi725/todo-list',
        },
        {
            title: 'Weather Application',
            description: 'Created a weather app that fetches and displays real-time data with API integration and error handling.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://weatherappfep.netlify.app',
            github: 'https://github.com/jyothi725/Weather_App',
        },
        {
            title: 'Quiz Application',
            description: 'Designed an interactive quiz app with dynamic questions, instant feedback, and a timer feature.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://quiz-application-js1.netlify.app',
            github: 'https://github.com/jyothi725/Quiz_Application',
        },
    ];

  return (
    <div 
        id='projects' 
        className='bgimg w-full bg-background text-text flex flex-col items-center justify-center px-6 pt-4 md:p-8 lg:p-10'
    >
        {/* Header */}
        <div 
            className='flex flex-col items-center justify-center gap-3 lg:gap-5'
        >
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary/80'>Projects</h1>
            <div className='w-20 h-0.5 md:h-1 lg:h-1.5 rounded-full bg-text'/>
        </div>
        {/* Projects */}
        <div className='p-0 md:p-5 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-5'>
            {
                projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))
            }
        </div>
        {/* More Projects */}
        <a href='https://github.com/jyothi725' target='_blank' rel='noopener noreferrer' className='mt-5 text-center border-2 border-primary rounded-2xl px-3 py-1 md:py-2 lg:py-4 text-md md:text-xl lg:text-2xl font-semibold hover:scale-105 transition ease-in-out duration-200'>
            View More Projects &rarr;
        </a>
    </div>
  )
}

export default Projects

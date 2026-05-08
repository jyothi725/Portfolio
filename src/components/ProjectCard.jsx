import React from 'react'
import { FaGithub } from 'react-icons/fa'

const ProjectCard = ({ title, description, tags, link, github }) => {
  return (
    <div className='p-1 md:p-2 lg:p-4 border-2 border-primary rounded-2xl max-h-70 lg:max-h-80 shadow-md shadow-primary/20 hover:-translate-y-2 hover:bg-radial from-primary/0 to-primary/5 transition-all ease-in-out duration-300'>
      <h1 className='font-bold text-lg md:text-xl lg:text-2xl text-primary/80 text-shadow-sm shadow-primary/10 p-1 md:p-2 lg:p-4'>{title}</h1>
      <div className='p-2 flex gap-1 md:gap-1.5 lg:gap-2'>
        {tags.map((tag, index) => (
            <span key={tag+index} className='text-xs md:text-md lg:text-lg font-medium p-1 md:px-2 lg:px-3 border border-text rounded md:rounded-full hover:scale-105 transition ease-in-out duration-100'>{tag}</span>
        ))}
      </div>
      <p className='text-sm md:text-md lg:text-lg px-2 py-0 md:py-1 lg:py-2'>{description}</p>
      <div className='w-full h-0.5 md:h-1 rounded-full bg-text/10 mt-2 lg:my-2'/>
      <div className='flex justify-between items-center gap-5 px-2 py-1'>
        <div className='text-md lg:text-xl font-medium hover:scale-105 transition-all duration-150'>
          <a href={`${link}`} target='_blank' rel='noopener noreferrer' >Live Demo</a>
        </div>
        <div className='text-md lg:text-xl font-medium hover:scale-105 transition-all duration-150'>
          <a href={`${github}`} target='_blank' rel='noopener noreferrer'>View Github</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

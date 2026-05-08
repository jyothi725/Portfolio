import React from 'react'

const Skills = () => {
    const skills = [ 'HTML5', 'CSS3', 'JavaScript', 'React.js', 'TailwindCSS', 'Git', 'GitHub', 'Vite', 'Figma', 'Motion',  ];

  return (
    <div 
        id='skills' 
        className='w-full flex flex-col items-center justify-center p-3 md:p-8 lg:p-10'
    >

        {/* Header */}
        <div 
            className='flex flex-col items-center justify-center gap-3 lg:gap-5 py-5 lg:py-10'
        >
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-primary/80 font-bold'>Skills</h1>
            <div className='w-20 h-0.5 md:h-1 lg:h-1.5 rounded-full bg-text'/>
        </div>

        {/* Skills */}
        <div className='py-4 md:py-12 lg:py-15 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
            {
                skills.map((skill, index) => (
                    <div key={skill+index} className='border-2 border-primary/50 rounded-2xl text-center px-5 py-3 md:px-8 md:py-py-4 lg:px-10 lg:py-5 text-sm md:text-lg lg:text-xl font-medium hover:scale-105 hover:bg-radial from-primary/0 to-primary/40 transition ease-in-out duration-200'>
                        <span className='px-1 md:px-3 lg:px-6'>{skill}</span>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Skills

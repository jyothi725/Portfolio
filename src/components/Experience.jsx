import React from 'react'
import { FaRegCalendar } from 'react-icons/fa';
import { FiBriefcase, FiMapPin } from 'react-icons/fi';

const Experience = () => {
    const jobs = [
        {
            company: 'VIP High School',
            title: 'Mathematics Teacher',
            period: '2023 - 2025',
            location: 'Bengaluru, Karnataka', 
            type: 'On-site',
            description: [
                'Simplified complex concepts into clear, structured explanations—similar to writing clean and maintainable code',
                'Developed strong problem-solving and logical thinking skills through teaching mathematics',
                'Communicated ideas effectively, improving ability to explain technical concepts',
                'Managed time, lesson planning, and responsibilities efficiently',
                'Focused on understanding student learning needs and adapting teaching methods accordingly',
            ],
        },
    ];

  return (
    <div 
        id='experience' 
        className='bgimg bg-background text-text w-full flex flex-col items-center justify-center p-5 md:p-8 lg:p-10'
    >
        {/* Header */}
        <div 
            className='flex flex-col items-center justify-center gap-3 lg:gap-5 pt-5 lg:pt-10'
        >
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-primary font-bold'>Experience</h1>
            <div className='w-20 h-0.5 md:h-1 lg:h-1.5 rounded-full bg-text'/>
        </div>
        {/* Experience */}
        <div className='px-1 pt-2 md:px-2 md:pt-6 lg:px-4 lg:pt-8 relative'>
            <div className='absolute left-1 md:left-2 lg:left-4 top-3 w-0.5 h-full bg-text'/>
            <div className='flex flex-col justify-center items-center gap-5 md:gap-10'>
                {
                    jobs.map((job, index) => (
                        <div key={index} className='relative'>
                            <div className='w-4 h-4 lg:w-6 lg:h-6 absolute -left-2 top-2 lg:-left-3 rounded-full bg-text flex justify-center items-center'>
                                { 
                                    index === 0 && (
                                        <div className='w-2 h-2 lg:w-3 lg:h-3 animate-pulse rounded-full bg-primary'/>
                                    )
                                }
                            </div>
                            <div key={index} className='relative pl-5'>
                                <h1 className='text-2xl lg:text-4xl font-bold pb-1 lg:pb-3 text-primary/80'>{job.title}</h1>
                                <h3 className='text-lg lg:text-2xl font-semibold py-1 lg:py-3'>{job.company}</h3>
                                <div className='flex flex-col lg:flex-row gap-1 lg:gap-3 justify-start lg:justify-center'>
                                    <div className='flex gap-2 items-center justify-start lg:justify-center text-sm lg:text-lg text-text/80'>
                                        <FaRegCalendar />
                                        <span>{job.period}</span>
                                    </div>
                                    <div className='flex gap-2 items-center justify-start lg:justify-center text-sm lg:text-lg text-text/80'>
                                        <FiMapPin />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className='flex gap-2 items-center justify-start lg:justify-center text-sm lg:text-lg text-text/80'>
                                        <FiBriefcase />
                                        <span>{job.type}</span>
                                    </div>
                                </div>
                                <div className='pl-5 pt-2'>
                                    <ul className='list-disc text-text/90'>
                                        {
                                            job.description.map((point, index) => (
                                                <li key={index} className='text-sm lg:text-xl lg:py-1.5'>{point}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience

import React, { useContext, useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../App';
import { BiMenu } from 'react-icons/bi';
import { FaX } from 'react-icons/fa6';

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = ['Home', 'Projects', 'Skills', 'Experience', 'About', 'Contact', ];
    
    const handleNavClick = (e, item) => {
        e.preventDefault();
        const sectionId = item.toLowerCase();
        const section = document.getElementById(sectionId);

        if(section) {
            if(isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                setTimeout(() => {
                    section.scrollIntoView({ behaviour: 'smooth', block: 'start' });
                }, 300);
            } else {
                section.scrollIntoView({ behaviour: 'smooth', block: 'start' });
            }
        }
    };

    return (
    <nav 
        id='navbar' 
        className='w-full bg-background text-text px-1 md:px-4 py-3 shadow-xl shadow-text/10 fixed top-0 left-0 z-10'
    >
        <div className='max-w-full mx-auto px-4 md:px-6'>
            <div className='flex justify-between items-center'>
                {/* Logo */}
                <div className='font-bold bg-linear-to-r from-blue-500 via-purple-500 to-pink-600 bg-clip-text text-transparent text-xl md:text-3xl lg:text-5xl flex items-center justify-between'
                >
                    JYOTHI KHATI
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center space-x-8'>
                    {/* Navbar Items */}
                        {
                            navItems.map((item, index) => (
                                <a 
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className='relative text-xl text-nav p-2 hover:scale-110 hover:font-bold transition ease-in-out duration-200'
                                >{item}</a>
                            ))
                        }

                    {/* Theme toggle button */}
                    <button onClick={toggleTheme} className='text-nav'>
                        {
                            theme === 'dark' ? (
                                <FaSun size={24} />
                            ) : (
                                <FaMoon size={24} />
                            )
                        }
                    </button>

                </div>

                {/* Mobile Menu */}
                <div className='flex items-center gap-2 md:hidden'>
                        
                    {/* Theme toggle button */}
                    <button onClick={toggleTheme} className='text-nav'>
                        {
                            theme === 'dark' ? (
                                <FaSun size={18}/>
                            ) : (
                                <FaMoon size={18}/>
                            )
                        }
                    </button>

                    {/* Navbar Items */}
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='flex justify-between items-center'>
                        {
                            isMobileMenuOpen ? (
                                <div>
                                    <FaX size={16} />
                                </div>
                            ) : (
                                <div>
                                    <BiMenu size={24} />
                                </div>
                            )
                        }
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            <div>
                {
                    isMobileMenuOpen && (
                        <div className='md:hidden overflow-hidden'>
                            {/* Navbar Items */}
                            <div className='flex flex-col space-y-2 py-4'>
                                {
                                    navItems.map((item, index) => (
                                        <a 
                                            key={item}
                                            href={`#${item.toLowerCase()}`}
                                            onClick={(e) => handleNavClick(e, item)}
                                            className='text-md text-nav p-2 hover:scale-110 hover:translate-x-8 hover:font-bold transition ease-in-out duration-200'
                                        >{item}</a>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar

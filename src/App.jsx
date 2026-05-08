import React, { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import About from './components/About'
import Particles from './components/Particles'


export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    console.log("Theme:", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`relative min-h-screen w-full transition-colors duration-300 bg-background text-text`}>
        <div className={`fixed inset-0 z-0 pointer-events-none hidden md:block ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
          <Particles
            particleColors={["#ffffff"]}
            particleCount={400}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
        
        <div className='relative z-10 w-full flex flex-col items-center'>
          <div>
            
              <Navbar />
              <Hero />
              <Projects />
              <Skills />
              <Experience />
              <About />
              <Contact />
        
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App

import React, { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import About from './components/About'


export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </ThemeContext.Provider>
    </div>
  )
}

export default App

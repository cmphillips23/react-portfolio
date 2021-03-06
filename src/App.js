import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Landing from './components/Landing';

function App() {
  const [currentCategory, setCurrentCategory] = useState('About');
  
  const renderPage = () => {
    switch (currentCategory) {
      case 'Landing':
        return <Landing />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Projects':
        return <Projects />;
      case 'Resume':
        return <Resume />;
      default:
        return <Landing />;
    }
  };

  return (
    <div>
      <Nav
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Nav>
      <main>
        {renderPage(currentCategory)}
      </main>
    </div>
  );
}

export default App;

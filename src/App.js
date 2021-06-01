import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Home from './components/Home';
import './App.css';



function App() {
  const [categories] = useState([
    { name: 'about', description: 'Information about me' },
    { name: 'contact', description: 'My contact information' },
    { name: 'portfolio', description: 'Completed projects' },
    { name: 'resume', description: 'My resume' }
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {currentCategory === categories[0] ? (
          <About></About>
        ) : currentCategory === categories[1] ? (
          <Contact></Contact>
        ) : currentCategory === categories[2] ? (
          <Portfolio></Portfolio>
        ) : currentCategory === categories[3] ? (
          <Resume></Resume>
        ) : (
          <Home></Home>
        )}
      </main>
    </div>
  );
}

export default App;

import React from 'react';

function Portfolio() {
    return (
        <section className='portfolio-section'>
            <h2>My Work</h2>
            <div className='portfolio-container'>
                <div className="run-buddy">
                    <a href="http://cmphillips23.github.io/run-buddy/">Run Buddy</a>
                </div>
                <div className="password">
                    <a href="http://cmphillips23.github.io/password-generator/">Password Generator</a>
                </div>
                <div className="safe-flight">
                    <a href="https://n8dogg59.github.io/teamTravel/">Safe Flight</a>
                </div>
                <div className="recess">
                    <a href="https://pacific-inlet-95494.herokuapp.com/">Recess</a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
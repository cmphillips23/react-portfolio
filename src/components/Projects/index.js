import React from 'react';
import StockTalk from '../../images/stock-talk.PNG';
import Recess from '../../images/recess.PNG';
import SafeFlight from '../../images/safe-flight.PNG';
import RunBuddy from '../../images/run-buddy.PNG';
import Password from '../../images/password-generator.PNG';


function Portfolio() {
    return (
        <section className='portfolio-section'>
            <h2>My Work</h2>
            <div className='portfolio-container'>
                <div className="stock-talk">
                    <a href="https://limitless-refuge-10058.herokuapp.com/">
                        <img alt={"Stock Talk"} src={StockTalk} height="100%" width="100%" />
                    </a>
                </div>
                <div className="recess">
                    <a href="https://pacific-inlet-95494.herokuapp.com/">
                        <img alt={"Recess"} src={Recess} height="100%" width="100%" />
                    </a>
                </div>
                <div className="safe-flight">
                    <a href="https://n8dogg59.github.io/teamTravel/">
                        <img alt={"Safe Flight"} src={SafeFlight} height="100%" width="100%" />
                    </a>
                </div>
                <div className="run-buddy">
                    <a href="http://cmphillips23.github.io/run-buddy/">
                        <img alt={"Run Buddy"} src={RunBuddy} height="100%" width="100%" />
                    </a>
                </div>
                <div className="password">
                    <a href="http://cmphillips23.github.io/password-generator/">
                        <img alt={"Password Generator"} src={Password} height="100%" width="110%" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
import React from 'react';

function Nav(props) {
    const categories = ['About', 'Contact', 'Portfolio', 'Resume'];

    return (
        <header className="container">
            <h1>
                Connor Phillips
            </h1>
            <nav>
                {categories.map((category) => (
                    <li key={category}>
                        <a
                            href={"#" + category}
                            onClick={() => props.setCurrentCategory(category)}
                            className=".."
                        >
                            {category}
                        </a>
                    </li>
                ))}
            </nav>
        </header>
    );
}

export default Nav;
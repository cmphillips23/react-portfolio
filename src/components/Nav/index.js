import React from 'react';

function Nav(props) {
    const categories = ['About', 'Contact', 'Projects', 'Resume'];

    return (
        <header className="container">
            <p>
                Connor Phillips
            </p>
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
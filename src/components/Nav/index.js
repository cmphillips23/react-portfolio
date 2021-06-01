import React from 'react';
import capitalizeFirstLetter from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    return (
        <header className="container">
            <h1>
                <a href="/">Connor Phillips</a>
            </h1>
            <nav>
                {categories.map((category) => (
                    <h3 
                        className={`${ currentCategory.name === category.name && 'navActive' }`}
                        key={category.name}
                    >
                        <span onClick={() => {
                            setCurrentCategory(category)
                        }}>
                            {capitalizeFirstLetter(category.name)}
                        </span>
                    </h3>
                ))}
            </nav>
        </header>
    );
}

export default Nav;
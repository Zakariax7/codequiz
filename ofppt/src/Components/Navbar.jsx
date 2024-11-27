import React from 'react';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Logo" className="logo" />
            </div>
                <input type="text" placeholder="Dévloppement Digital" className="search-input" disabled/>
        </nav>
    );
};

export default Navbar;

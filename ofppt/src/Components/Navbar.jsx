import React from 'react';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Logo" className="logo" />
                <span className="navbar-title">decouvre course</span>
            </div>
            <div className="navbar-search">
                <input type="text" placeholder="Devloppement Digital" className="search-input" disabled/>
            </div>
        </nav>
    );
};

export default Navbar;

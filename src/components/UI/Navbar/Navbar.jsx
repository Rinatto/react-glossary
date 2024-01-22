import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/posts" className="link">Термины</Link>
            <Link to="/glossary" className="link">Диаграмма связей</Link>
            <Link to="https://github.com/Rinatto" className="link">Профиль GitHub</Link>
        </div>
    );
};

export default Navbar
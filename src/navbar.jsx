import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-green-700 p-4 text-white shadow-md">
            <ul className="flex space-x-4">
                <li><Link to="/" className="hover:underline">Startseite</Link></li>
                <li><Link to="/impressum" className="hover:underline">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:underline">Datenschutzhinweise</Link></li>
                <li><Link to="/tierinfo" className="hover:underline">Tierinfo</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

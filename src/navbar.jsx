import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-green-700 p-4 text-white shadow-md">
            <ul className="flex space-x-4">
                <li><Link to="/" style={{marginRight: '1rem', color: '#fff', textDecoration: 'none'}}>🏠 Home</Link></li>
                <li><Link to="/impressum" className="hover:underline">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:underline">Datenschutzhinweise</Link></li>
                <li><Link to="/tierinfo" className="hover:underline">Tierinfo</Link></li>
                <li><Link to="/map" style={{ color: '#fff', textDecoration: 'none' }}>🗺️ Karte</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

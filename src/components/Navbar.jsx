
import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/slices/themeSlice';

const Navbar = () => {
    const theme = useSelector((state) => state.theme.mode);
    const dispatch = useDispatch();

    return (
        <nav className={`navbar navbar-expand-lg sticky-top ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
            <div className="container">
                <a className="navbar-brand" href="#">My Portfolio</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="about" smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="skills" smooth={true} duration={500}>
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="portfolio" smooth={true} duration={500}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <RouterLink className="nav-link" to="/blog">
                                Blog
                            </RouterLink>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-secondary" onClick={() => dispatch(toggleTheme())}>
                                Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

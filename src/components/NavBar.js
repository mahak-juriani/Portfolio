import React from "react";
import './NavBar.css';
function NavBar(){
    return (
        <header className="header">
            <nav>
                <ul className="navbar">
                    <li class="nav-item"><a href="">Home</a></li>
                    <li class="nav-item"><a href="">About</a></li>
                    <li class="nav-item"><a href="">Skills</a></li>
                    <li class="nav-item"><a href="">Projects</a></li>
                    <li class="nav-item"><a href="">Resume</a></li>
                    <li class="nav-item"><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;

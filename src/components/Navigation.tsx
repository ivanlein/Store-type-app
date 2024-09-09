import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
            <span className="font-bold"><a href="https://github.com/ivanlein">My GitHub</a></span>

            <span>
                <Link className="mr-10" to='/'>Products</Link>
                <Link className="mr-10" to='/about'>About Me</Link>
            </span>
        </nav>
    )
}
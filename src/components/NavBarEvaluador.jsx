import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function NavBarEvaluador() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <nav className="bg-white border-gray-20 shadow-lg">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/home' className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/src/assets/img/challenge-logo.webp" className="h-8 w-8 rounded-full" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-500">UChallenge</span>
                    </Link>
                    <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded={isDropdownOpen}
                            onClick={toggleDropdown}>
                            <img className="w-8 h-8 rounded-full" src="/src/assets/img/user.png" alt="user photo" />
                        </button>
                        <div className={`absolute right-1 mt-64 z-50 ${isDropdownOpen ? 'block' : 'hidden'} my-4 text-base list-none border bg-white divide-y divide-gray-100 rounded-lg shadow-lg`} id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900">Javier Hau</span>
                                <span className="block text-sm text-gray-500 truncate">Javier@gmail.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Inicio</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Calificaciones</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cerrar sesión</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

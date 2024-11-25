'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import UsernameModal from './UserMenuModal';

const SearchBar = () => {
    return (
        <div className="flex items-center px-4 bg-white border-2 border-blue-700 rounded-full overflow-hidden w-full max-w-md shadow-sm">
            <button className="pr-2 focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 4a7 7 0 015.208 11.933l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387A7 7 0 1111 4zm0 2a5 5 0 100 10 5 5 0 000-10z"
                    />
                </svg>
            </button>
            <input
                type="text"
                className="flex-grow px-4 py-2 focus:outline-none text-gray-800"
                placeholder="Search..."
            />
        </div>
    );
};

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <header className="flex items-center p-4 bg-white w-full shadow-md">
            {/* Logo on the Left */}
            <div className="flex-1 flex items-center">
                <Link href="/">
                    <h1 className="text-xl font-bold text-blue-700 ml-4">TOKOLIKU</h1>
                </Link>
            </div>

            {/* Search Bar in the Center */}
            <div className="flex-1 flex justify-center">
                <SearchBar />
            </div>

            {/* Username Button on the Right */}
            <div className="flex-1 flex justify-end">
                <button onClick={() => setShowModal(true)} className="flex items-center justify-center bg-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 text-blue-700 font-bold mr-4">
                    <div className="flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V7h2v3z" />
                        </svg>
                        <span>Username</span>
                    </div>
                </button>
            </div>
            {/* Username Modal */}
      <UsernameModal show={showModal} onClose={() => setShowModal(false)} />
        </header>
    );
};

export default Header;
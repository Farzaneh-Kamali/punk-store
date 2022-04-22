import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export const Navbar = () => {
  return (
    <nav className="flex justify-end w-full px-6 py-2 bg-orange-500 shadow-lg ">
      <a
        className="mr-4 text-white hover:text-gray-700 focus:text-gray-700"
        href="/"
      >
        <FontAwesomeIcon icon={solid('home')} />
      </a>
      <a
        className="mr-4 text-white hover:text-gray-700 focus:text-gray-700"
        href="/cart"
      >
        <FontAwesomeIcon icon={solid('cart-shopping')} />
      </a>
      <a
        className="mr-4 text-white hover:text-gray-700 focus:text-gray-700"
        href="/favorite"
      >
        <FontAwesomeIcon icon={solid('heart')} />
      </a>
    </nav>
  );
};

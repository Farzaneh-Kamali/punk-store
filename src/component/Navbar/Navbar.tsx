import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { NavbarItems } from './NavbarItems';

export const Navbar = () => {
  return (
    <nav className="flex justify-end w-full px-6 py-2 bg-orange-500 shadow-lg ">
      <NavbarItems href="/" icon={solid('home')} title="Home" />
      <NavbarItems href="/cart" icon={solid('cart-shopping')} title="Cart" />
      <NavbarItems href="/favorite" icon={solid('heart')} title="Favorite" />
    </nav>
  );
};

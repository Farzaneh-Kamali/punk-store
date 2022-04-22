import { IconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const NavbarItems = ({
  href,
  icon,
  title,
}: {
  href: string;
  icon: IconDefinition;
  title: string;
}) => {
  return (
    <a
      className="mr-4 text-white hover:text-gray-700 focus:text-gray-700"
      href={href}
    >
      <FontAwesomeIcon icon={icon} title={title} />
    </a>
  );
};

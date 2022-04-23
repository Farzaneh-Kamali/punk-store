import React from 'react';

export const MenuItems = ({
  item,
  active,
}: {
  item: string;
  active?: boolean;
}) => {
  return (
    <>
      <li
        className="flex-grow m-2 text-center nav-item md:mr-2"
        role="presentation"
      >
        <a
          href={`#pills-${item}Justify`}
          className={`block w-full px-6 py-3 text-xs font-medium leading-tight uppercase rounded nav-link focus:outline-none focus:ring-0 ${
            active ? 'active' : ''
          }`}
          id={`pills-${item}-tabJustify`}
          data-bs-toggle="pill"
          data-bs-target={`#pills-${item}Justify`}
          role="tab"
          aria-controls={`#pills-${item}Justify`}
          aria-selected="true"
        >
          {item}
        </a>
      </li>
    </>
  );
};
